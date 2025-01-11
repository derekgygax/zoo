
// master config
import {
  FORM_NAME,
  FORM_SCHEMA_NAME,
  FIELD_REQUIRING_FETCHED_DATA
} from "@/config/master";

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
  name: K;
  label: string;
  zodSchemaName: FORM_SCHEMA_NAME;
  fieldsRequiringFetchedData: FIELD_REQUIRING_FETCHED_DATA[]
};

export type FormConfigs = {
  [K in FORM_NAME]: FormConfig<K>;
};