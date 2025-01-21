
// types
import {
  FormState,
  SelectorOption,
} from "@/types/form";
import { ServiceModel } from "@/types/serviceModels";

// master config
import { FIELD_REQUIRING_FETCHED_DATA, SERVICE } from "@/config/master";

// configs
import { FORM_NAME } from "@/config/forms";
import {
  ANIMALS_SERVICE_MODEL,
  FOOD_SERVICE_MODEL,
  ENCLOSURES_SERVICE_MODEL,
  BREEDING_SERVICE_MODEL,
  REPORTS_SERVICE_MODEL,
  STAFF_SERVICE_MODEL
} from "./serviceModels";

// server actions
import { addAnimalAction, getAnimalBase, getAnimalIdentifierOptions, updateAnimalAction } from "@/app/_actions/animals-service/animals";
import { addSpecieAction, getSpecie, getSpecieIds, updateSpecieAction } from "@/app/_actions/animals-service/specie";
import { addEnclosureTypeAction, getEnclosureTypeKeys, updateEnclosureTypeAction } from "@/app/_actions/enclosures-service/enclosure-types";
import { addFoodTypeAction, getFoodTypeIds, updateFoodTypeAction } from "@/app/_actions/food-service/food-type";
import { addStorageUnitTypeAction, getStorageUnitTypeIds, updateStorageUnitTypeAction } from "@/app/_actions/food-service/storage-unit-type";
import { addStorageUnitAction, getStorageUnitBase, getStorageUnitIdentifiers, getStorageUnitIdentifiersOptions, updateStorageUnitAction } from "@/app/_actions/food-service/storage-unit";
import { addEnclosureAction, getEnclosureBase, getEnclosureIdentifierOptions, updateEnclosureAction } from "@/app/_actions/enclosures-service/enclosures";
import { addFoodStockAction, updateFoodStockAction } from "@/app/_actions/food-service/food-stock";


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

// TODO this most likely does NOT go here
// TODO A lot of these functions are just place holders
// you need to change them to the correct functions!!!
export const MODEL_OPTIONS_FETCHERS: {
  [S in SERVICE]: Record<ServiceModel<S>, () => Promise<SelectorOption[]>>
} = {
  [SERVICE.ANIMALS]: {
    [ANIMALS_SERVICE_MODEL.ANIMAL]: getAnimalIdentifierOptions,
    [ANIMALS_SERVICE_MODEL.EVENT]: getAnimalIdentifierOptions,
    [ANIMALS_SERVICE_MODEL.MEDICAL_RECORD]: getAnimalIdentifierOptions,
    [ANIMALS_SERVICE_MODEL.SPECIE]: getAnimalIdentifierOptions
  },
  [SERVICE.FOOD]: {
    [FOOD_SERVICE_MODEL.STORAGE_UNIT]: getStorageUnitIdentifiersOptions,
    [FOOD_SERVICE_MODEL.FOOD_STOCK]: getStorageUnitIdentifiersOptions,
    [FOOD_SERVICE_MODEL.FOOD_TYPE]: getStorageUnitIdentifiersOptions,
    [FOOD_SERVICE_MODEL.STORAGE_UNIT_TYPE]: getStorageUnitIdentifiersOptions,
  },
  [SERVICE.ENCLOSURES]: {
    [ENCLOSURES_SERVICE_MODEL.ENCLOSURE]: getEnclosureIdentifierOptions,
    [ENCLOSURES_SERVICE_MODEL.ENCLOSURE_TYPE]: getEnclosureIdentifierOptions
  },
  [SERVICE.BREEDING]: {
    [BREEDING_SERVICE_MODEL.LITTER]: getAnimalIdentifierOptions
  },
  [SERVICE.REPORTS]: {
    [REPORTS_SERVICE_MODEL.REPORT]: getAnimalIdentifierOptions
  },
  [SERVICE.STAFF]: {
    [STAFF_SERVICE_MODEL.STAFF]: getAnimalIdentifierOptions
  }
};

// TODO this most likely does NOT go here
// TODO A lot of these functions are just place holders
// you need to change them to the correct functions!!!
// ALSO: These should all be BASE!!!!
// ALSO: These should all be BASE!!!!
// ALSO: These should all be BASE!!!!
// ALSO: These should all be BASE!!!!
// ALSO: These should all be BASE!!!!
export const MODEL_FETCHERS: {
  [S in SERVICE]: Record<ServiceModel<S>, (id: string) => Promise<unknown>>
} = {
  [SERVICE.ANIMALS]: {
    [ANIMALS_SERVICE_MODEL.ANIMAL]: getAnimalBase,
    [ANIMALS_SERVICE_MODEL.EVENT]: getAnimalBase,
    [ANIMALS_SERVICE_MODEL.MEDICAL_RECORD]: getAnimalBase,
    [ANIMALS_SERVICE_MODEL.SPECIE]: getSpecie
  },
  [SERVICE.FOOD]: {
    [FOOD_SERVICE_MODEL.STORAGE_UNIT]: getStorageUnitBase,
    [FOOD_SERVICE_MODEL.FOOD_STOCK]: getStorageUnitBase,
    [FOOD_SERVICE_MODEL.FOOD_TYPE]: getStorageUnitBase,
    [FOOD_SERVICE_MODEL.STORAGE_UNIT_TYPE]: getStorageUnitBase,
  },
  [SERVICE.ENCLOSURES]: {
    [ENCLOSURES_SERVICE_MODEL.ENCLOSURE]: getEnclosureBase,
    [ENCLOSURES_SERVICE_MODEL.ENCLOSURE_TYPE]: getEnclosureBase
  },
  [SERVICE.BREEDING]: {
    [BREEDING_SERVICE_MODEL.LITTER]: getAnimalBase
  },
  [SERVICE.REPORTS]: {
    [REPORTS_SERVICE_MODEL.REPORT]: getAnimalBase
  },
  [SERVICE.STAFF]: {
    [STAFF_SERVICE_MODEL.STAFF]: getAnimalBase
  }
}
