
// master config
import { FIELD_REQUIRING_FETCHED_DATA } from "@/config/master";

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
