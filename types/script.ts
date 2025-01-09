
import { FIELD_REQUIRING_FETCHED_DATA } from "./form";

export enum TASK {
  OPEN_API = "openapi",
  TYPES = "types",
  ZOD = "zod",
  CONFIGURE_SCHEMAS = "configure-schemas"
}

export interface FieldSchemaMeta {
  title: string;
  stringMeta: {
    isDate: boolean;
    isSelector: boolean;
    maxLength: number;
  } | undefined
}

export type SchemaMeta = Record<string, FieldSchemaMeta>;
export type SchemasMeta = Record<string, SchemaMeta>;
export type SchemasSelectors = Record<string, FIELD_REQUIRING_FETCHED_DATA[]>;

export enum SCRIPT_VARIABLE {
  FIELDS_REQUIRING_FETCHED_DATA = "fieldsRequiringFetchedData"
}

export enum SCRIPT_TYPE_NAME {
  SCHEMAS_SELECTORS = "SchemasSelectors",
  SCHEMA_META = "SchemaMeta",
  SCHEMAS_META = "SchemasMeta",
}