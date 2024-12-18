import fs from "fs";
import SwaggerClient from "swagger-client";
import { OpenAPIV3 } from "openapi-types";

// cofig
import { SERVICES } from "@/config/services";

const getPaths = (serviceName: string): { in: string; out: string } => {
  return {
    in: `api-contracts/${serviceName}/openapi.json`,
    out: `api-contracts/${serviceName}/form-config.json`
  };
}

const generateFormConfig = async () => {
  for (let i = 0; i < SERVICES.length; i++) {
    try {
      const service = SERVICES[i];
      const paths: { in: string, out: string } = getPaths(service.name);

      const openApiSchema = JSON.parse(fs.readFileSync(paths.in, "utf-8"));
      const client = await SwaggerClient.resolve({ spec: openApiSchema });

      const formConfigs: Record<string, OpenAPIV3.SchemaObject> = {};

      for (let j = 0; j < service.forms.length; j++) {
        const form = service.forms[j];
        formConfigs[form] = client.spec.components.schemas[form];
      }

      fs.writeFileSync(paths.out, JSON.stringify(formConfigs, null, 2));

    } catch (error) {
      console.error("Error generating form config:", error);
    }
  }
}

generateFormConfig();
