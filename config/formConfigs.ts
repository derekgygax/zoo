import {
  FORM_NAME,
  FORM_SCHEMA_NAME,
  FIELD_REQUIRING_FETCHED_DATA,
  FormConfigs,
  FetchDataKey
} from "@/types/form";

import { fieldsRequiringFetchedData as animalFieldsRequiringFetching } from "@/api-contracts/animals-service/fieldsRequiringFetchedData";

// TODO ... somehow in here you could put the selectors it needs
// to get and the API points it should use
export const FORM_CONFIGS: FormConfigs = {
  [FORM_NAME.ADD_ANIMAL]: {
    name: FORM_NAME.ADD_ANIMAL,
    label: "Add Animal",
    zodSchemaName: FORM_SCHEMA_NAME.ANIMAL_BASE,
    fieldsRequiringFetchedData: animalFieldsRequiringFetching[FORM_SCHEMA_NAME.ANIMAL_BASE]
  },
  [FORM_NAME.UPDATE_ANIMAL]: {
    name: FORM_NAME.UPDATE_ANIMAL,
    label: "UPDATE Animal",
    zodSchemaName: FORM_SCHEMA_NAME.ANIMAL_BASE,
    fieldsRequiringFetchedData: animalFieldsRequiringFetching[FORM_SCHEMA_NAME.ANIMAL_BASE]
  },
  [FORM_NAME.ADD_SPECIE]: {
    name: FORM_NAME.ADD_SPECIE,
    label: "Add Specie",
    zodSchemaName: FORM_SCHEMA_NAME.SPECIE_BASE,
    fieldsRequiringFetchedData: []
  },
  [FORM_NAME.UPDATE_SPECIE]: {
    name: FORM_NAME.UPDATE_SPECIE,
    label: "UPDATE Specie",
    zodSchemaName: FORM_SCHEMA_NAME.SPECIE_BASE,
    fieldsRequiringFetchedData: []
  }
}

import { SpecieBase } from "@/types/animals-service";

export const FIELD_REQUIRING_FETCHED_DATA_KEYS: Record<FIELD_REQUIRING_FETCHED_DATA, FetchDataKey<SpecieBase>> = {
  // for this one it is for naught because you are just getting a string
  // but hey, put it here so you remember to follow how its structured
  // you are going to hardcode stuff in here ... the names of
  [FIELD_REQUIRING_FETCHED_DATA.SPECIE]: {
    label: "specie",
    value: "specie"
  }
}