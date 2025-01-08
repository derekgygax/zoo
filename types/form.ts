
export enum FORM_SCHEMA {
  ANIMAL_BASE = "AnimalBase",
  SPECIE_BASE = "SpecieBase"
}

export enum FORM_NAME {
  ADD_ANIMAL = "AddAnimal",
  UPDATE_ANIMAL = "UpdateAnimal",
  ADD_SPECIE = "AddSpecie",
  UPDATE_SPECIE = "UpdateSpecie"
}

export enum FORM_FIELD_TYPE {
  TEXT = "TEXT",
  SELECTOR = "SELECTOR",
  DATE = "DATE",
  NUMBER = "NUMBER"
}

export interface SelectorOption {
  value: string;
  label: string;
};


export interface FormFieldDescription {
  title: string;
  isDate?: boolean;
  isSelector?: boolean;
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
  zodSchemaName: FORM_SCHEMA;
};

export type FormConfigs = {
  [K in FORM_NAME]: FormConfig<K>;
};