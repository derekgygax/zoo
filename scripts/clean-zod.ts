import fs from "fs";
import path from "path";
import { OpenAPIV3 } from "openapi-types";

// cofig
import { SERVICES } from "@/config/services";

// types
import { Service } from "@/types/service";

interface Paths {
  openApi: string;
  in: string;
  out: string
}

// This file is because openapi-zod-client puts z.string()
// when it should be z.date()

// To match the schemas in the zod file
const SCHEMA_REG_EX = /const\s([A-Za-z0-9_]+)\s*=\s*z/;
const PASSTHROUGH_REG_EX = /\s+.passthrough/;
const Z_STRING_REG_EX = /(z\.string\(\))/;

const getPaths = (serviceName: string): Paths => {
  return {
    openApi: `api-contracts/${serviceName}/openapi.json`,
    in: `api-contracts/${serviceName}/original_zodSchemas.ts`,
    out: `api-contracts/${serviceName}/zodSchemas.ts`
  };
}

// Utility to identify date fields in OpenAPI schemas
function getDateFields(openApiSpec: OpenAPIV3.Document): Record<string, string[]> {
  const dateFieldsMap: Record<string, string[]> = {};

  for (const [schemaName, schema] of Object.entries(
    openApiSpec.components?.schemas || {}
  )) {
    const schemaObject = schema as OpenAPIV3.SchemaObject;
    if (schemaObject.type === "object" && schemaObject.properties) {
      const dateFields = Object.entries(schemaObject.properties)
        .filter(
          ([_, property]) =>
            (property as OpenAPIV3.SchemaObject).type === "string" &&
            (property as OpenAPIV3.SchemaObject).format === "date"
        )
        .map(([fieldName]) => fieldName);

      if (dateFields.length > 0) {
        dateFieldsMap[schemaName] = dateFields;
      }
    }
  }

  return dateFieldsMap;
}


// THIS IS ONLY WRITTEN TO WORK FOR data RIGHT NOW!!!
// THIS IS ONLY WRITTEN TO WORK FOR data RIGHT NOW!!!
// THIS IS ONLY WRITTEN TO WORK FOR data RIGHT NOW!!!
// THIS IS ONLY WRITTEN TO WORK FOR data RIGHT NOW!!!
// THIS IS ONLY WRITTEN TO WORK FOR data RIGHT NOW!!!
// AND
// Puts a trim() if its a string
async function updateZodSchemas(): Promise<void> {

  // Go through every service to clean up the zod schema
  for (let i = 0; i < SERVICES.length; i++) {
    const service: Service = SERVICES[i];
    const paths: Paths = getPaths(service.name);

    // Read and parse the OpenAPI spec
    const openApiSpec: OpenAPIV3.Document = JSON.parse(fs.readFileSync(paths.openApi, "utf8"));

    // Extract date fields from OpenAPI spec
    const dateFieldsMap = getDateFields(openApiSpec);
    const schemas = Object.keys(dateFieldsMap);

    // Read input file line by line and make an array
    const lines = fs.readFileSync(paths.in, "utf-8").split("\n");

    // update the correct lines
    let fields: string[] = [];
    const updatedLines = lines.map((line) => {
      let modifiedLine = line;
      const schemaMatch = line.match(SCHEMA_REG_EX);
      const schemaName = schemaMatch ? schemaMatch[1] : null;
      const passMatch = line.match(PASSTHROUGH_REG_EX);
      // if you hit .passthrough() then clear the fields
      if (passMatch) {
        fields = [];
      }
      // If you hit a schema name and its one you want
      // then fill the fields
      if (schemaName && schemas.includes(schemaName)) {
        fields = dateFieldsMap[schemaName];
      }
      // If fields has anything in it then check 
      // to change the line from z.string to z.date
      if (fields.length > 0) {
        // Check if the line contains a date field and `z.string()` declaration
        for (const field of fields) {
          const regex = new RegExp(`(${field}\\s*:\\s*).*?(?=,)`);
          if (regex.test(line)) {
            // put z.date() at the end
            modifiedLine = modifiedLine.replace(regex, `$1z.string().refine((value) => !isNaN(Date.parse(value)), { message: "Invalid date" }).describe("date")`);
            break;
          }
        }
      }

      // make z.string() z.string().trim()
      if (Z_STRING_REG_EX.test(line)) {
        modifiedLine = modifiedLine.replace(Z_STRING_REG_EX, "z.string().trim()");
      }

      return modifiedLine;
    });

    // Write updated content to the output file
    const updatedContent = updatedLines.join("\n");
    fs.writeFileSync(paths.out, updatedContent, "utf-8");
  }

}

// Execute the update process
updateZodSchemas().catch((error) => console.error("Error updating schemas:", error));
