
// master config
import { FIELD_REQUIRING_FETCHED_DATA } from "@/config/master";

export enum TASK {
  OPEN_API = "openapi",
  TYPES = "types",
  ZOD = "zod",
  CONFIGURE_SCHEMAS = "configure-schemas"
}

export interface FieldSchemaMeta {
  title: string;
  needsCoercion: boolean;
  stringMeta: {
    isDate: boolean;
    isSelector: boolean;
    maxLength: number;
  } | undefined
}

export type SchemaMeta = Record<string, FieldSchemaMeta>;
export type SchemasMeta = Record<string, SchemaMeta>;
export type SchemasSelectors = Record<string, FIELD_REQUIRING_FETCHED_DATA[]>;

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