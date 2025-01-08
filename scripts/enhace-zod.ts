import fs from 'fs';
import * as babelParser from '@babel/parser';
import traverse from '@babel/traverse';
import * as t from '@babel/types';
import generate from '@babel/generator';
import { OpenAPIV3 } from 'openapi-types';
import { FieldSchemaMeta } from '@/types/script';
import { DEFAULT_MAX_LEGNTH } from '@/config/scripts';

const extractSchemaFieldMetadata = (openApiSpec: OpenAPIV3.Document): Record<string, Record<string, FieldSchemaMeta>> => {
  const fields: Record<string, Record<string, FieldSchemaMeta>> = {};

  for (const [schemaName, schema] of Object.entries(
    openApiSpec.components?.schemas || {}
  )) {
    const schemaObject = schema as OpenAPIV3.SchemaObject;
    if (schemaObject.type === "object" && schemaObject.properties) {
      const schema: Record<string, FieldSchemaMeta> = {};
      const fieldNames: string[] = Object.keys(schemaObject.properties);
      for (let i = 0; i < fieldNames.length; i++) {
        const fieldName = fieldNames[i];
        const properties = schemaObject.properties[fieldName] as OpenAPIV3.SchemaObject;
        schema[fieldName] = {
          stringMeta: properties.type === "string"
            ? {
              isDate: properties.format === "date",
              isSelector: properties.format === "selector",
              maxLength: properties.maxLength ?? DEFAULT_MAX_LEGNTH
            }
            : undefined,
          title: properties.title ?? fieldName,
        }
      }
      fields[schemaName] = schema;
    }
  }

  return fields;
}

// Add .trim() to .string()
// TODO This was written by chatGPT ... sadly not me :/
// But it goes down in the property to get to the bottom
// then rebuilds again as it comes out. It needs to do it
// this way. The in and out ... someday you should write
// it on your own ... don't rely on chatGPT to write code.
// It will have computer errors
const addTrimToCallChain = (property: t.ObjectProperty) => {
  if (t.isCallExpression(property.value)) {
    const callChain: t.CallExpression[] = [];
    let currentCall = property.value;

    // Traverse and collect the call chain
    while (t.isCallExpression(currentCall)) {
      callChain.push(currentCall);
      if (t.isMemberExpression(currentCall.callee) && t.isCallExpression(currentCall.callee.object)) {
        currentCall = currentCall.callee.object;
      } else {
        break;
      }
    }

    // Ensure the chain starts with `z.string()`
    const rootCall = callChain.pop();
    if (
      rootCall &&
      t.isMemberExpression(rootCall.callee) &&
      t.isIdentifier(rootCall.callee.object) &&
      rootCall.callee.object.name === "z" &&
      t.isIdentifier(rootCall.callee.property) &&
      rootCall.callee.property.name === "string"
    ) {
      // Add `.trim()` to the root call
      // Ensure parentheses for `z.string()`
      const wrappedCall = t.callExpression(rootCall.callee, []);
      const trimmedCall = t.callExpression(
        t.memberExpression(wrappedCall, t.identifier("trim")),
        []
      );

      // Rebuild the call chain outward
      let rebuiltCall = trimmedCall;
      while (callChain.length > 0) {
        const nextCall = callChain.pop();
        if (nextCall && t.isMemberExpression(nextCall.callee)) {
          rebuiltCall = t.callExpression(
            t.memberExpression(rebuiltCall, nextCall.callee.property),
            nextCall.arguments
          );
        }
      }

      // Replace the property value with the rebuilt chain
      property.value = rebuiltCall;
    }
  }
};


export const enhanceZodSchemas = (
  service: string,
  openApiPath: string,
  originalZodPath: string,
  cleanedZodPath: string
) => {

  console.log(`Enhancing the zod file for the service: ${service}`)

  // Read and parse the OpenAPI spec
  const openApiSpec: OpenAPIV3.Document = JSON.parse(fs.readFileSync(openApiPath, "utf8"));

  // Extract date fields from OpenAPI spec
  const schemasMeta = extractSchemaFieldMetadata(openApiSpec);

  // Read your Zod schema file
  const schemaCode = fs.readFileSync(originalZodPath, 'utf-8');

  // Parse the Zod file into an AST
  const ast = babelParser.parse(schemaCode, {
    sourceType: 'module',
    plugins: ['typescript'],
  });


  // Traverse the AST to modify it
  traverse(ast, {
    ObjectExpression(path) {
      // Get the parent variable name (schema name)
      const schemaDeclarator = path.findParent((p) => p.isVariableDeclarator());
      if (!schemaDeclarator || !t.isVariableDeclarator(schemaDeclarator.node)) return;

      const schemaName = (schemaDeclarator.node.id as t.Identifier).name;
      if (!schemasMeta[schemaName]) return;
      // for testing
      // if (schemaName !== "AnimalBase") return;

      // Iterate through object properties
      path.node.properties.forEach((property) => {
        if (t.isObjectProperty(property) && t.isIdentifier(property.key)) {
          const fieldName = property.key.name;

          // Add `.meta` with title and `.trim` if applicable
          if (schemasMeta[schemaName][fieldName]) {
            const fieldMeta: FieldSchemaMeta = schemasMeta[schemaName][fieldName];
            // For testing
            // if (fieldName !== "name") return;
            // Check if property.value is a CallExpression
            if (t.isCallExpression(property.value)) {
              const callee = property.value.callee;
              if (
                fieldMeta.stringMeta?.isDate &&
                t.isMemberExpression(callee) &&
                t.isIdentifier(callee.object) &&
                callee.object.name === 'z' &&
                t.isIdentifier(callee.property) &&
                callee.property.name === 'string'
              ) {
                property.value = t.callExpression(
                  t.memberExpression(property.value, t.identifier('refine')),
                  [
                    t.arrowFunctionExpression(
                      [t.identifier('value')],
                      t.blockStatement([
                        t.variableDeclaration('const', [
                          t.variableDeclarator(
                            t.identifier('parsedDate'),
                            t.callExpression(t.memberExpression(t.identifier('Date'), t.identifier('parse')), [
                              t.identifier('value'),
                            ])
                          ),
                        ]),
                        t.variableDeclaration('const', [
                          t.variableDeclarator(
                            t.identifier('isValidDate'),
                            t.unaryExpression(
                              '!',
                              t.callExpression(t.identifier('isNaN'), [t.identifier('parsedDate')])
                            )
                          ),
                        ]),
                        t.ifStatement(
                          t.identifier('isValidDate'),
                          t.blockStatement([
                            t.variableDeclaration('const', [
                              t.variableDeclarator(
                                t.identifier('dateObject'),
                                t.newExpression(t.identifier('Date'), [t.identifier('parsedDate')])
                              ),
                            ]),
                            t.variableDeclaration('const', [
                              t.variableDeclarator(
                                t.identifier('minDate'),
                                t.newExpression(t.identifier('Date'), [t.stringLiteral('1900-01-01')])
                              ),
                            ]),
                            t.variableDeclaration('const', [
                              t.variableDeclarator(
                                t.identifier('maxDate'),
                                t.newExpression(t.identifier('Date'), [t.stringLiteral('2100-12-31')])
                              ),
                            ]),
                            t.returnStatement(
                              t.logicalExpression(
                                '&&',
                                t.binaryExpression('>=', t.identifier('dateObject'), t.identifier('minDate')),
                                t.binaryExpression('<=', t.identifier('dateObject'), t.identifier('maxDate'))
                              )
                            ),
                          ]),
                          t.blockStatement([t.returnStatement(t.booleanLiteral(false))])
                        ),
                      ])
                    ),
                    t.objectExpression([
                      t.objectProperty(t.identifier('message'), t.stringLiteral('Invalid date or out of range (1900-2100)')),
                    ]),
                  ]
                );
              }

              // add trim to string()
              addTrimToCallChain(property);

              // Add `.meta({ title: ... })` to string fields
              property.value = t.callExpression(
                t.memberExpression(property.value, t.identifier('describe')),
                [t.stringLiteral(JSON.stringify(fieldMeta))]
              );

            } else if (t.isIdentifier(property.value)) {
              // Add `.meta({ title: ... })` to enums
              property.value = t.callExpression(
                t.memberExpression(property.value, t.identifier('describe')),
                [t.stringLiteral(JSON.stringify(fieldMeta))]
              );
            }
          }
        }
      });
    },
  });

  // Generate the updated code
  const { code } = generate(ast, {}, schemaCode);

  // Write the updated code back to the file
  fs.writeFileSync(cleanedZodPath, code, 'utf-8');

}