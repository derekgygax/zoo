export interface Metadata {
  name: string;
  type: string;
  label: string;
  values?: string[];
  maxLength?: number;
  required: boolean;
}

export enum FORM_FIELD_TYPE {
  TEXT = "TEXT",
  SELECTOR = "SELECTOR",
  DATE = "DATE",
}
