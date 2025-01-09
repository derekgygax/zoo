import { FORM_NAME, FORM_SCHEMA_NAME, FormConfigs } from "@/types/form";

import { fieldsRequiringFetchedData as animalFieldsRequiringFetching } from "@/api-contracts/animals-service/fieldsRequiringFetchedData";

// TODO ... somehow in here you could put the selectors it needs
// to get and the API points it should use
export const FORM_CONFIGS: FormConfigs = {
  [FORM_NAME.ADD_ANIMAL]: {
    name: FORM_NAME.ADD_ANIMAL,
    label: "Add Animal",
    zodSchemaName: FORM_SCHEMA_NAME.ANIMAL_BASE,
    fieldsRequiringFetcheData: animalFieldsRequiringFetching[FORM_SCHEMA_NAME.ANIMAL_BASE]
  },
  [FORM_NAME.UPDATE_ANIMAL]: {
    name: FORM_NAME.UPDATE_ANIMAL,
    label: "UPDATE Animal",
    zodSchemaName: FORM_SCHEMA_NAME.ANIMAL_BASE,
    fieldsRequiringFetcheData: animalFieldsRequiringFetching[FORM_SCHEMA_NAME.ANIMAL_BASE]
  },
  [FORM_NAME.ADD_SPECIE]: {
    name: FORM_NAME.ADD_SPECIE,
    label: "Add Specie",
    zodSchemaName: FORM_SCHEMA_NAME.SPECIE_BASE,
    fieldsRequiringFetcheData: []
  },
  [FORM_NAME.UPDATE_SPECIE]: {
    name: FORM_NAME.UPDATE_SPECIE,
    label: "UPDATE Specie",
    zodSchemaName: FORM_SCHEMA_NAME.SPECIE_BASE,
    fieldsRequiringFetcheData: []
  }
}