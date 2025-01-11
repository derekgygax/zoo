
export enum FORM_SCHEMA_NAME {
  ANIMAL_BASE = "AnimalBase",
  SPECIE_BASE = "SpecieBase",
  ENCLOSURE_TYPE_BASE = "EnclosureTypeBase",
  ENCLOSURE_BASE = "EnclosureBase"
}

export enum FORM_NAME {
  ADD_ANIMAL = "AddAnimal",
  UPDATE_ANIMAL = "UpdateAnimal",
  ADD_SPECIE = "AddSpecie",
  UPDATE_SPECIE = "UpdateSpecie",
  ADD_ENCLOSURE_TYPE = "AddEnclosureType",
  UPDATE_ENCLOSURE_TYPE = "UpdateEnclosureType",
  ADD_ENCLOSURE = "AddEnclosure"
}

// TODO do you want to change this name!
// TODO do you want to change this name!
// TODO do you want to change this name!
// TODO you may need to fix the variable names going all over
// fieldsRequiringDependencies vs fieldsRequiringFetchedData
// make it consistent ... BUT not for now, do that when it becomes a problem
export enum FIELD_REQUIRING_FETCHED_DATA {
  SPECIE = "specie",
  ENCLOSURE_TYPE = "enclosureType"
}

export interface FetchDataKey<T> {
  value: keyof T;
  label: keyof T;
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
  zodSchemaName: FORM_SCHEMA_NAME;
  fieldsRequiringFetchedData: FIELD_REQUIRING_FETCHED_DATA[]
};

export type FormConfigs = {
  [K in FORM_NAME]: FormConfig<K>;
};