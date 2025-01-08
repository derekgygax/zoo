
export enum TASK {
  OPEN_API = "openapi",
  TYPES = "types",
  ZOD = "zod",
  ENHANCE_ZOD = "enhance-zod"
}

export interface FieldSchemaMeta {
  title: string;
  stringMeta: {
    isDate: boolean;
    isSelector: boolean;
    maxLength: number;
  } | undefined
}