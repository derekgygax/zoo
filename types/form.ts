
// master config
import {
  FIELD_REQUIRING_FETCHED_DATA,
  SERVICE
} from "@/config/master";

import {
  ServiceModelMapping,
  ServiceModel,
  ServiceModelMapper
} from "./serviceModels";


// config
import {
  FORM_NAME,
  FORM_SCHEMA_NAME,
  FORM_TYPE
} from "@/config/forms";

export interface FetchDataKey<T> {
  value: keyof T;
  label: keyof T;
}

export interface SelectorOption {
  value: string;
  label: string;
};

export interface FormState {
  success: boolean;
  message: string[]
}

export type FormConfig<K extends FORM_NAME> = {
  service: SERVICE;
  name: K;
  type: FORM_TYPE;
  label: string;
  zodSchemaName: FORM_SCHEMA_NAME;
  fieldsRequiringFetchedData: FIELD_REQUIRING_FETCHED_DATA[];
  modelsRequiringIdentifiers?: ServiceModelMapping;
};

export type FormConfigs = {
  [K in FORM_NAME]: FormConfig<K>;
};

export interface HiddenField {
  name: string;
  value: string;
}


export type ModelIdentifierOptions = ServiceModelMapper<SelectorOption[]>;
export type ModelIdentifierFetchers = ServiceModelMapper<() => Promise<SelectorOption[]>>;
