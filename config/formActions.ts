
// types
import {
  FormState,
  SelectorOption,
} from "@/types/form";

// master config
import { FIELD_REQUIRING_FETCHED_DATA, SERVICE } from "@/config/master";

// configs
import { FORM_NAME } from "@/config/forms";

import { ServiceModel } from "@/types/serviceModels";
import { ModelIdentifierFetchers } from "@/types/form";

// server actions
import { addAnimalAction, getAnimalIdentifierOptions, updateAnimalAction } from "@/app/_actions/animals-service/animals";
import { addSpecieAction, getSpecieIds, updateSpecieAction } from "@/app/_actions/animals-service/specie";
import { addEnclosureTypeAction, getEnclosureTypeKeys, updateEnclosureTypeAction } from "@/app/_actions/enclosures-service/enclosure-types";
import { addFoodTypeAction, getFoodTypeIds, updateFoodTypeAction } from "@/app/_actions/food-service/food-type";
import { addStorageUnitTypeAction, getStorageUnitTypeIds, updateStorageUnitTypeAction } from "@/app/_actions/food-service/storage-unit-type";
import { addStorageUnitAction, getStorageUnitIdentifiers, updateStorageUnitAction } from "@/app/_actions/food-service/storage-unit";
import { addEnclosureAction, getEnclosureIdentifierOptions, updateEnclosureAction } from "@/app/_actions/enclosures-service/enclosures";
import { addFoodStockAction, updateFoodStockAction } from "@/app/_actions/food-service/food-stock";
import { ANIMALS_SERVICE_MODEL, ENCLOSURES_SERVICE_MODEL, SERVICE_MODELS } from "./serviceModels";


export const FORM_ACTIONS: Record<FORM_NAME, (prevState: FormState, formData: FormData) => Promise<FormState>> = {
  [FORM_NAME.ADD_ANIMAL]: addAnimalAction,
  [FORM_NAME.UPDATE_ANIMAL]: updateAnimalAction,
  [FORM_NAME.ADD_SPECIE]: addSpecieAction,
  [FORM_NAME.UPDATE_SPECIE]: updateSpecieAction,
  [FORM_NAME.ADD_ENCLOSURE_TYPE]: addEnclosureTypeAction,
  [FORM_NAME.UPDATE_ENCLOSURE_TYPE]: updateEnclosureTypeAction,
  [FORM_NAME.ADD_ENCLOSURE]: addEnclosureAction,
  [FORM_NAME.UPDATE_ENCLOSURE]: updateEnclosureAction,
  [FORM_NAME.ADD_STORAGE_UNIT_TYPE]: addStorageUnitTypeAction,
  [FORM_NAME.UPDATE_STORAGE_UNIT_TYPE]: updateStorageUnitTypeAction,
  [FORM_NAME.ADD_STORAGE_UNIT]: addStorageUnitAction,
  [FORM_NAME.UPDATE_STORAGE_UNIT]: updateStorageUnitAction,
  [FORM_NAME.ADD_FOOD_TYPE]: addFoodTypeAction,
  [FORM_NAME.UPDATE_FOOD_TYPE]: updateFoodTypeAction,
  [FORM_NAME.ADD_FOOD_STOCK]: addFoodStockAction,
  [FORM_NAME.UPDATE_FOOD_STOCK]: updateFoodStockAction,
}

export const FORM_DEPENDENCY_FETCHERS: Record<FIELD_REQUIRING_FETCHED_DATA, () => Promise<unknown[]>> = {
  [FIELD_REQUIRING_FETCHED_DATA.SPECIE]: getSpecieIds,
  [FIELD_REQUIRING_FETCHED_DATA.ENCLOSURE_TYPE]: getEnclosureTypeKeys,
  [FIELD_REQUIRING_FETCHED_DATA.FOOD_TYPE]: getFoodTypeIds,
  [FIELD_REQUIRING_FETCHED_DATA.STORAGE_UNIT]: getStorageUnitIdentifiers,
  [FIELD_REQUIRING_FETCHED_DATA.STORAGE_UNIT_TYPE]: getStorageUnitTypeIds,
}

type ddd = Record<SERVICE, Record<ANIMALS_SERVICE_MODEL | ENCLOSURES_SERVICE_MODEL, () => Promise<unknown[]>>>;

export const MODEL_IDENTIFIER_FETCHERS: ddd = {
  [SERVICE.ANIMALS]: {
    [ANIMALS_SERVICE_MODEL.ANIMAL]: getAnimalIdentifierOptions,
  },
  [SERVICE.ENCLOSURES]: {
    [ENCLOSURES_SERVICE_MODEL.ENCLOSURE]: getEnclosureIdentifierOptions,
  }
}
