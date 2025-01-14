export enum SCRIPT_TASK {
  OPEN_API = "openapi",
  TYPES = "types",
  ZOD = "zod",
  CONFIGURE_SCHEMAS = "configure-schemas"
}
// TODO you may need to fix the variable names going all over
// fieldsRequiringDependencies vs fieldsRequiringFetchedData
// make it consistent ... BUT not for now, do that when it becomes a problem
export enum SCRIPT_VARIABLE {
  FIELDS_REQUIRING_FETCHED_DATA = "fieldsRequiringFetchedData"
}

export enum SCRIPT_TYPE_NAME {
  SCHEMAS_SELECTORS = "SchemasSelectors",
  SCHEMA_META = "SchemaMeta",
  SCHEMAS_META = "SchemasMeta",
}

export const SCRIPT_TASKS: SCRIPT_TASK[] = [
  SCRIPT_TASK.OPEN_API,
  SCRIPT_TASK.TYPES,
  SCRIPT_TASK.ZOD,
  SCRIPT_TASK.CONFIGURE_SCHEMAS
];

export const SCRIPTS_CONFIG = {
  fileLocations: {
    apiContracts: {
      base: "api-contracts",
      fileNames: {
        openAPI: "openapi.json",
        originalZod: "originalZodSchemas.ts",
        cleanZod: "zodSchemas.ts",
        types: "types.ts",
        selectorFields: "fieldsRequiringFetchedData.ts"
      }
    },
    types: {
      base: "types"
    }
  },
};


export const SCRIPT_FIELDS_NEEDING_ZOD_COERCION = ["integer", "number", "boolean"];
