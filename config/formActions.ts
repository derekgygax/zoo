
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
import { addAnimalAction, getAnimalBase, getAnimalIdentifiers, updateAnimalAction } from "@/app/_actions/animals-service/animals";
import { addSpecieAction, getSpecie, getSpecieBaseById, getSpecieIdentifiers, getSpecieIds, updateSpecieAction } from "@/app/_actions/animals-service/specie";
import { addEnclosureTypeAction, getEnclosureTypeBaseById, getEnclosureTypeIdentifiers, getEnclosureTypeKeys, updateEnclosureTypeAction } from "@/app/_actions/enclosures-service/enclosure-types";
import { addFoodTypeAction, getFoodTypeIds, updateFoodTypeAction } from "@/app/_actions/food-service/food-type";
import { addStorageUnitTypeAction, getStorageUnitTypeIds, updateStorageUnitTypeAction } from "@/app/_actions/food-service/storage-unit-type";
import { addStorageUnitAction, getStorageUnitBase, getStorageUnitIdentifiers, updateStorageUnitAction } from "@/app/_actions/food-service/storage-unit";
import { addEnclosureAction, getEnclosureBase, getEnclosureIdentifiers, updateEnclosureAction } from "@/app/_actions/enclosures-service/enclosures";
import { addFoodStockAction, updateFoodStockAction } from "@/app/_actions/food-service/food-stock";
import { addStaffAction, getStaffBaseById, getStaffIdentifiers, udpateStaffAction } from "@/app/_actions/staff-service/staff";
import { addDepartmentAction, getDepartmentBaseById, getDepartmentIdentifiers, updateDepartmentAction } from "@/app/_actions/staff-service/departments";
import { addStaffDepartmentAction, getStaffDepartmentBaseById, getStaffDepartmentIdentifiers, updateStaffDepartmentAction } from "@/app/_actions/staff-service/staff-departments";


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
  [FORM_NAME.ADD_STAFF]: addStaffAction,
  [FORM_NAME.UPDATE_STAFF]: udpateStaffAction,
  [FORM_NAME.ADD_DEPARTMENT]: addDepartmentAction,
  [FORM_NAME.UPDATE_DEPARTMENT]: updateDepartmentAction,
  [FORM_NAME.ADD_STAFF_DEPARTMENT]: addStaffDepartmentAction,
  [FORM_NAME.UPDATE_STAFF_DEPARTMENT]: updateStaffDepartmentAction,
}

// TODO Do you want to separate by SERVICE HERE ... ?
// TODO this name has to be better!!!
// TODO or figure some shit out
// Write the fucking doc string shit
// So you can remember what this is for
// This is a reference object about filling the drop downs
// that show up in the form
// NOT! the udpate selector where you chose what you want to 
// update but actually in the form
// Like, what specie is this animal
export const FORM_DEPENDENCY_FETCHERS: Record<FIELD_REQUIRING_FETCHED_DATA, () => Promise<unknown[]>> = {
  [FIELD_REQUIRING_FETCHED_DATA.SPECIE]: getSpecieIds,
  [FIELD_REQUIRING_FETCHED_DATA.ENCLOSURE_TYPE]: getEnclosureTypeKeys,
  [FIELD_REQUIRING_FETCHED_DATA.FOOD_TYPE]: getFoodTypeIds,
  [FIELD_REQUIRING_FETCHED_DATA.STORAGE_UNIT]: getStorageUnitIdentifiers,
  [FIELD_REQUIRING_FETCHED_DATA.STORAGE_UNIT_TYPE]: getStorageUnitTypeIds,
  [FIELD_REQUIRING_FETCHED_DATA.DEPARTMENT]: getDepartmentIdentifiers,
  [FIELD_REQUIRING_FETCHED_DATA.STAFF]: getStaffIdentifiers
}

// TODO this most likely does NOT go here
// TODO A lot of these functions are just place holders
// you need to change them to the correct functions!!!
// This is a reference object
// How to retrieve the values of the model you are updating
export const MODEL_OPTIONS_FETCHERS: {
  [S in SERVICE]: Record<ServiceModel<S>, () => Promise<unknown[]>>
} = {
  [SERVICE.ANIMALS]: {
    [ANIMALS_SERVICE_MODEL.ANIMAL]: getAnimalIdentifiers,
    [ANIMALS_SERVICE_MODEL.EVENT]: getAnimalIdentifiers,
    [ANIMALS_SERVICE_MODEL.MEDICAL_RECORD]: getAnimalIdentifiers,
    [ANIMALS_SERVICE_MODEL.SPECIE]: getSpecieIdentifiers
  },
  [SERVICE.FOOD]: {
    [FOOD_SERVICE_MODEL.STORAGE_UNIT]: getStorageUnitIdentifiers,
    [FOOD_SERVICE_MODEL.FOOD_STOCK]: getStorageUnitIdentifiers,
    [FOOD_SERVICE_MODEL.FOOD_TYPE]: getStorageUnitIdentifiers,
    [FOOD_SERVICE_MODEL.STORAGE_UNIT_TYPE]: getStorageUnitIdentifiers,
  },
  [SERVICE.ENCLOSURES]: {
    [ENCLOSURES_SERVICE_MODEL.ENCLOSURE]: getEnclosureIdentifiers,
    [ENCLOSURES_SERVICE_MODEL.ENCLOSURE_TYPE]: getEnclosureTypeIdentifiers
  },
  [SERVICE.BREEDING]: {
    [BREEDING_SERVICE_MODEL.LITTER]: getAnimalIdentifiers
  },
  [SERVICE.REPORTS]: {
    [REPORTS_SERVICE_MODEL.REPORT]: getAnimalIdentifiers
  },
  [SERVICE.STAFF]: {
    [STAFF_SERVICE_MODEL.STAFF]: getStaffIdentifiers,
    [STAFF_SERVICE_MODEL.DEPARTMENT]: getDepartmentIdentifiers,
    [STAFF_SERVICE_MODEL.STAFF_DEPARTMENT]: getStaffDepartmentIdentifiers
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
// This is a reference object of how to retrieve the value of the 
// model you are updated to preFill the form
export const MODEL_FETCHERS: {
  [S in SERVICE]: Record<ServiceModel<S>, (id: string) => Promise<unknown>>
} = {
  [SERVICE.ANIMALS]: {
    [ANIMALS_SERVICE_MODEL.ANIMAL]: getAnimalBase,
    [ANIMALS_SERVICE_MODEL.EVENT]: getAnimalBase,
    [ANIMALS_SERVICE_MODEL.MEDICAL_RECORD]: getAnimalBase,
    [ANIMALS_SERVICE_MODEL.SPECIE]: getSpecieBaseById
  },
  [SERVICE.FOOD]: {
    [FOOD_SERVICE_MODEL.STORAGE_UNIT]: getStorageUnitBase,
    [FOOD_SERVICE_MODEL.FOOD_STOCK]: getStorageUnitBase,
    [FOOD_SERVICE_MODEL.FOOD_TYPE]: getStorageUnitBase,
    [FOOD_SERVICE_MODEL.STORAGE_UNIT_TYPE]: getStorageUnitBase,
  },
  [SERVICE.ENCLOSURES]: {
    [ENCLOSURES_SERVICE_MODEL.ENCLOSURE]: getEnclosureBase,
    [ENCLOSURES_SERVICE_MODEL.ENCLOSURE_TYPE]: getEnclosureTypeBaseById
  },
  [SERVICE.BREEDING]: {
    [BREEDING_SERVICE_MODEL.LITTER]: getAnimalBase
  },
  [SERVICE.REPORTS]: {
    [REPORTS_SERVICE_MODEL.REPORT]: getAnimalBase
  },
  [SERVICE.STAFF]: {
    [STAFF_SERVICE_MODEL.STAFF]: getStaffBaseById,
    [STAFF_SERVICE_MODEL.DEPARTMENT]: getDepartmentBaseById,
    [STAFF_SERVICE_MODEL.STAFF_DEPARTMENT]: getStaffDepartmentBaseById
  }
}
