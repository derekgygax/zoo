import { OpenAPIV3 } from "openapi-types";

// types
import { FormConfig } from "@/types/form";
import { FORM_NAME } from "@/types/form";



// config files
import animalFormsConfig from '@/api-contracts/animals-service/form-config.json';


export const FORM_CONFIGS: FormConfig = {
  [FORM_NAME.ANIMAL_BASE]: {
    name: FORM_NAME.ANIMAL_BASE,
    label: "Animal",
    config: animalFormsConfig[FORM_NAME.ANIMAL_BASE] as OpenAPIV3.SchemaObject
  }
}