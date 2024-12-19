import { FORM_NAME, FormConfig } from "@/types/form";
import { FORM_SCHEMA } from "@/types/form";
import { OpenAPIV3 } from "openapi-types";


import { schemas as zodSchemas } from "@/api-contracts/animals-service/zodSchemas";

// config files
import animalFormsConfig from '@/api-contracts/animals-service/form-config.json';


export const FORM_CONFIGS: FormConfig = {
  [FORM_NAME.ADD_ANIMAL]: {
    name: FORM_NAME.ADD_ANIMAL,
    schema: FORM_SCHEMA.ANIMAL_BASE,
    label: "Add Animal",
    config: animalFormsConfig[FORM_SCHEMA.ANIMAL_BASE] as OpenAPIV3.SchemaObject,
    zodSchema: zodSchemas[FORM_SCHEMA.ANIMAL_BASE]
  },
  [FORM_NAME.EDIT_ANIMAL]: {
    name: FORM_NAME.EDIT_ANIMAL,
    schema: FORM_SCHEMA.ANIMAL_BASE,
    label: "Edit Animal",
    config: animalFormsConfig[FORM_SCHEMA.ANIMAL_BASE] as OpenAPIV3.SchemaObject,
    zodSchema: zodSchemas[FORM_SCHEMA.ANIMAL_BASE]
  }
}