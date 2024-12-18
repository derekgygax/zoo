import { OpenAPIV3 } from "openapi-types";

export enum FORM_SCHEMA {
  ANIMAL_BASE = "AnimalBase"
}

export enum FORM_NAME {
  ADD_ANIMAL = "AddAnimal",
  EDIT_ANIMAL = "EditAnimal"
}

export enum OPEN_API_FIELD_TYPE {
  STRING = "string",
  NUMBER = "number",
  INTEGER = "integer",
  BOOLEAN = "boolean",
  OBJECT = "object",
  ARRAY = "array",
}

export enum OPEN_API_STRING_FORMAT {
  DATE = "date",
  DATE_TIME = "date-time",
  PASSWORD = "password",
  BYTE = "byte",
  BINARY = "binary",
  EMAIL = "email",
  UUID = "uuid",
  URI = "uri",
}

export enum FORM_FIELD_TYPE {
  TEXT = "TEXT",
  SELECTOR = "SELECTOR",
  DATE = "DATE",
  NUMBER = "NUMBER"
}

export interface FormState {
  success: boolean;
  message: string[]
}

export interface FormFieldConfig {
  name: string;
  type: FORM_FIELD_TYPE;
  label: string;
  values?: string[];
  maxLength?: number;
  required: boolean;
}

export type FormConfig = {
  [K in FORM_NAME]: {
    name: K,
    label: string;
    schema: FORM_SCHEMA;
    config: OpenAPIV3.SchemaObject
  }
}