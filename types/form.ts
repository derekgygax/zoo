
// master config
import {
  FIELD_REQUIRING_FETCHED_DATA,
  SERVICE
} from "@/config/master";

// config
import { FORM_NAME, FORM_SCHEMA_NAME } from "@/config/forms";

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
  label: string;
  zodSchemaName: FORM_SCHEMA_NAME;
  fieldsRequiringFetchedData: FIELD_REQUIRING_FETCHED_DATA[]
};

export type FormConfigs = {
  [K in FORM_NAME]: FormConfig<K>;
};

export interface HiddenField {
  name: string;
  value: string;
}