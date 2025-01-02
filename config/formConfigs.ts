import { FORM_NAME, FormConfigs } from "@/types/form";
import { FORM_SCHEMA } from "@/types/form";

export const FORM_CONFIGS: FormConfigs = {
  [FORM_NAME.ADD_ANIMAL]: {
    name: FORM_NAME.ADD_ANIMAL,
    label: "Add Animal",
    zodSchemaName: FORM_SCHEMA.ANIMAL_BASE
  },
  [FORM_NAME.EDIT_ANIMAL]: {
    name: FORM_NAME.EDIT_ANIMAL,
    label: "Edit Animal",
    zodSchemaName: FORM_SCHEMA.ANIMAL_BASE
  }
}