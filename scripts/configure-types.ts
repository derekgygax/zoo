import * as fs from "fs";
import * as path from "path";
import ts from "typescript";

export const configureTypes = (
  service: string,
  originalTypesPath: string,
  typesPath: string
) => {

  console.log(`Cleaning the types file for the service ${service}`)

  // Read the file content
  const fileContent = fs.readFileSync(originalTypesPath, "utf8");

  // Parse the file using TypeScript Compiler API
  const sourceFile = ts.createSourceFile(
    path.basename(originalTypesPath),
    fileContent,
    ts.ScriptTarget.ESNext,
    true
  );

  const schemas: string[] = [];

  // Walk through the AST to find `components.schemas`
  ts.forEachChild(sourceFile, (node) => {
    if (
      ts.isInterfaceDeclaration(node) &&
      node.name.text === "components" // Match the `components` interface
    ) {
      node.members.forEach((member) => {
        if (
          ts.isPropertySignature(member) &&
          member.name &&
          ts.isIdentifier(member.name) &&
          member.name.text === "schemas"
        ) {
          // Extract keys from `schemas`
          const typeNode = member.type;
          if (typeNode && ts.isTypeLiteralNode(typeNode)) {
            typeNode.members.forEach((schema) => {
              if (
                ts.isPropertySignature(schema) &&
                schema.name &&
                ts.isIdentifier(schema.name)
              ) {
                schemas.push(schema.name.text);
              }
            });
          }
        }
      });
    }
  });

  // Generate the output file
  const relativeImportPath = `@/${originalTypesPath.replace(/\.ts$/, "")}`;
  const outputContent = `
import { components } from "${relativeImportPath}";

${schemas.map((key) => `export type ${key} = components["schemas"]["${key}"];`).join("\n")}
`;

  // Write to the output file
  fs.writeFileSync(typesPath, outputContent.trim(), "utf8");

  console.log(`Generated types for ${service} written to ${typesPath}`);
};
