import { FORM_SCHEMA } from "./form";

export interface Service {
  name: string;
  schemas: FORM_SCHEMA[]
}