import { FRAMEWORK } from "@/types/service"
import { TASK } from "@/types/script";

export const TASKS: TASK[] = [
  TASK.OPEN_API,
  TASK.TYPES,
  TASK.ZOD,
  TASK.CLEAN_ZOD
];

export const SCRIPTS_CONFIG = {
  fileLocation: {
    base: "api-contracts",
    names: {
      openAPI: "openapi.json",
      originalZod: "original_zodSchemas.ts",
      cleanZod: "zodSchemas.ts",
      types: "types.ts"
    }
  }
};

export const OPENAPI_ENDPOINTS: Record<FRAMEWORK, string> = {
  [FRAMEWORK.FAST_API]: "openapi.json",
  [FRAMEWORK.SPRING_BOOT]: "v3/api-docs",
  [FRAMEWORK.NEST_JS]: "api-json",
  [FRAMEWORK.QUARKUS]: "q/openapi"
};