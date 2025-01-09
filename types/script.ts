
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