import { OpenAPIV3 } from "openapi-types";
import { ZodObject } from "zod";

export enum FORM_SCHEMA {
  ANIMAL_BASE = "AnimalBase"
}

export enum FORM_NAME {
  ADD_ANIMAL = "AddAnimal",
  EDIT_ANIMAL = "EditAnimal"
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

export type FormConfig<K extends FORM_NAME> = {
  name: K;
  label: string;
  schema: FORM_SCHEMA;
  zodSchemaName: FORM_SCHEMA;
};

export type FormConfigs = {
  [K in FORM_NAME]: FormConfig<K>;
};