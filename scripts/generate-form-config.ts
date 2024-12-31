
// TODO this script is OLD
// TODO this script is OLD
// TODO this script is OLD
// TODO this script is OLD
// to build the form config from a schema
// and then the form from that
// NOW you are using the zod to do that
// in the future delete this but keep for now just in case
// its faster than having to search through git history for now


// import fs from "fs";
// import SwaggerClient from "swagger-client";
// import { OpenAPIV3 } from "openapi-types";

// // cofig
// import { SERVICES } from "@/config/services";

// // types
// import { Service } from "@/types/service";
// import { FORM_SCHEMA } from "@/types/form";

// const getPaths = (serviceName: string): { in: string; out: string } => {
//   return {
//     in: `api-contracts/${serviceName}/openapi.json`,
//     out: `api-contracts/${serviceName}/form-config.json`
//   };
// }

// const generateFormConfig = async () => {
//   for (let i = 0; i < SERVICES.length; i++) {
//     try {
//       const service: Service = SERVICES[i];
//       const paths: { in: string, out: string } = getPaths(service.name);

//       const openApiSchema = JSON.parse(fs.readFileSync(paths.in, "utf-8"));
//       const client = await SwaggerClient.resolve({ spec: openApiSchema });

//       const formConfigs: Record<string, OpenAPIV3.SchemaObject> = {};

//       for (let j = 0; j < service.schemas.length; j++) {
//         const schema: FORM_SCHEMA = service.schemas[j];
//         formConfigs[schema] = client.spec.components.schemas[schema];
//       }

//       fs.writeFileSync(paths.out, JSON.stringify(formConfigs, null, 2));

//     } catch (error) {
//       console.error("Error generating form config:", error);
//     }
//   }
// }

// generateFormConfig();
