
// master config
import { FORM_DEPENDENCY_FIELD } from "@/config/master";

export interface FieldSchemaMeta {
  title: string;
  needsCoercion: boolean;
  stringMeta: {
    isDate: boolean;
    isSelector: boolean;
    isEmail: boolean;
    maxLength: number;
  } | undefined
}

export type SchemaMeta = Record<string, FieldSchemaMeta>;
export type SchemasMeta = Record<string, SchemaMeta>;
export type SchemasSelectors = Record<string, FORM_DEPENDENCY_FIELD[]>;
