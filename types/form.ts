import { OpenAPIV3 } from "openapi-types";

export enum FORM_NAME {
  ANIMAL_BASE = "AnimalBase"
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
    config: OpenAPIV3.SchemaObject
  }
}