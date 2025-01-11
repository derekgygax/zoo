import fs from 'fs';
import * as babelParser from '@babel/parser';
import traverse from '@babel/traverse';
import * as t from '@babel/types';
import generate from '@babel/generator';
import { OpenAPIV3 } from 'openapi-types';

// master config
import {
  FIELD_REQUIRING_FETCHED_DATA,
} from '@/config/master';

// config
import {
  SCRIPT_FIELDS_NEEDING_ZOD_COERCION,
  SCRIPT_TYPE_NAME,
  SCRIPT_VARIABLE
} from '@/config/scripts';
import { FIELD_DEFAULTS } from '@/config/forms';

// types
import {
  FieldSchemaMeta,
  SchemaMeta,
  SchemasMeta,
  SchemasSelectors
} from '@/types/script';


const getSchemasMeta = (openApiSpec: OpenAPIV3.Document): {
  schemasMeta: SchemasMeta
  schemasSelectors: SchemasSelectors
} => {
  const schemasMeta: SchemasMeta = {};
  const schemasSelectors: SchemasSelectors = {};

  for (const [schemaName, schema] of Object.entries(
    openApiSpec.components?.schemas || {}
  )) {
    const schemaObject = schema as OpenAPIV3.SchemaObject;
    schemasSelectors[schemaName] = [];
    if (schemaObject.type === "object" && schemaObject.properties) {
      const schema: SchemaMeta = {};
      const fieldNames: string[] = Object.keys(schemaObject.properties);
      for (let i = 0; i < fieldNames.length; i++) {
        const fieldName = fieldNames[i];
        const properties = schemaObject.properties[fieldName] as OpenAPIV3.SchemaObject;
        schema[fieldName] = {
          stringMeta: properties.type === "string"
            ? {
              isDate: properties.format === "date",
              isSelector: properties.format === "selector",
              maxLength: properties.maxLength ?? FIELD_DEFAULTS.string.maxLength
            }
            : undefined,
          needsCoercion: properties.type !== undefined && SCRIPT_FIELDS_NEEDING_ZOD_COERCION.includes(properties.type) ? true : false,
          title: properties.title ?? fieldName,
        };
        if (
          properties.type === "string"
          && properties.format === "selector"
        ) {
          if (Object.values(FIELD_REQUIRING_FETCHED_DATA).includes(fieldName as FIELD_REQUIRING_FETCHED_DATA)) {
            schemasSelectors[schemaName].push(fieldName as FIELD_REQUIRING_FETCHED_DATA);
          } else {
            console.error(`The field '${fieldName}' in the schema '${schemaName}' is NOT in FIELD_REQUIRING_FETCHED_DATA in @types/form and MUST be there for ZOO automation to work.`)
          }
        }
      }
      schemasMeta[schemaName] = schema;
    }
  }

  return {
    schemasMeta: schemasMeta,
    schemasSelectors: schemasSelectors
  };
}


// Add .trim() to .string()
// Add .coercion to zod converting types to what they should be
//    like string in submitted form to number
// TODO This was written by chatGPT ... sadly not me :/
// But it goes down in the property to get to the bottom
// then rebuilds again as it comes out. It needs to do it
// this way. The in and out ... someday you should write
// it on your own ... don't rely on chatGPT to write code.
// It will have computer errors
const addCoercionAndTrim = (property: t.ObjectProperty, needsCoercion: boolean) => {
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
      rootCall.callee.object.name === "z"
    ) {


      // Add `.coerce` if needed
      if (needsCoercion) {
        rootCall.callee.object = t.memberExpression(
          t.identifier("z"),
          t.identifier("coerce")
        );
      }

      let wrappedCall = rootCall;
      // Add `.trim()` if the call is `z.string()`
      if (
        t.isIdentifier(rootCall.callee.property) &&
        rootCall.callee.property.name === "string"
      ) {
        wrappedCall = t.callExpression(
          t.memberExpression(rootCall, t.identifier("trim")),
          []
        );
      }


      // Rebuild the call chain outward
      let rebuiltCall = wrappedCall;
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
}


const writeSchemasSelector = (schemasSelectors: SchemasSelectors, selectorFieldsPath: string) => {

  const variableName = SCRIPT_VARIABLE.FIELDS_REQUIRING_FETCHED_DATA;
  const typeName = SCRIPT_TYPE_NAME.SCHEMAS_SELECTORS;

  // Convert schemaSelectors to a TypeScript file content with typing
  const fileContent = `import { ${typeName}} from "@/types/script";

  export const ${variableName}: ${typeName} = ${JSON.stringify(schemasSelectors, null, 2)} as ${typeName};`;

  // Write the content to a .ts file
  fs.writeFileSync(selectorFieldsPath, fileContent, 'utf-8');

}


export const configureSchemas = (
  service: string,
  openApiPath: string,
  originalZodPath: string,
  cleanedZodPath: string,
  selectorFieldsPath: string
) => {

  console.log(`Configuring the schemas for the service: ${service}`)

  // Read and parse the OpenAPI spec
  const openApiSpec: OpenAPIV3.Document = JSON.parse(fs.readFileSync(openApiPath, "utf8"));

  // Extract date fields from OpenAPI spec
  const { schemasMeta, schemasSelectors } = getSchemasMeta(openApiSpec);

  // Write the schemas selector file
  console.log(`Write the selectorFields file for the service ${service}`);
  writeSchemasSelector(schemasSelectors, selectorFieldsPath);

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

      // This is how you can stop at a specific schemaName for testing purposes
      // if (schemaName !== "AnimalBase") return;

      // Iterate through object properties
      path.node.properties.forEach((property) => {
        if (t.isObjectProperty(property) && t.isIdentifier(property.key)) {
          const fieldName = property.key.name;

          // Add `.meta` with title and `.trim` if applicable
          if (schemasMeta[schemaName][fieldName]) {
            const fieldMeta: FieldSchemaMeta = schemasMeta[schemaName][fieldName];

            // This is how you can stop at a specific fieldName for testing purposes
            // if (fieldName !== "name") return;

            // Check if property.value is a CallExpression
            if (t.isCallExpression(property.value)) {

              // fix up the date stuff
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

            }

            // add trim to string()
            // Add coerce to the fields that need it
            addCoercionAndTrim(property, fieldMeta.needsCoercion);

            // Add `.meta({ title: ... })` to enums
            if (t.isIdentifier(property.value) || t.isCallExpression(property.value)) {
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
  console.log(`Write the cleanedZod file for the service ${service}`);
  fs.writeFileSync(cleanedZodPath, code, 'utf-8');

}