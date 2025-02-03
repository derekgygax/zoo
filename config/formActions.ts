
// types
import { FormState } from "@/types/form";
import { ModelIdentifier, ServiceModel } from "@/types/serviceModels";

// master config
import { FORM_DEPENDENCY_FIELD, SERVICE } from "@/config/master";

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
import { addAnimal, getAnimalBase, getAnimalIdentifiers, updateAnimal } from "@/app/_actions/animals-service/animals";
import { addSpecie, getSpecieBaseById, getSpecieIdentifiers, updateSpecie } from "@/app/_actions/animals-service/specie";
import { addEnclosureType, getEnclosureTypeBaseById, getEnclosureTypeIdentifiers, updateEnclosureType } from "@/app/_actions/enclosures-service/enclosure-types";
import { addFoodType, getFoodTypeBaseById, getFoodTypeIdentifiers, updateFoodType } from "@/app/_actions/food-service/food-type";
import { addStorageUnitType, getStorageUnitTypeBaseById, getStorageUnitTypeIdentifiers, updateStorageUnitType } from "@/app/_actions/food-service/storage-unit-type";
import { addStorageUnit, getStorageUnitBaseById, getStorageUnitIdentifiers, updateStorageUnit } from "@/app/_actions/food-service/storage-unit";
import { addEnclosure, getEnclosureBase, getEnclosureIdentifiers, updateEnclosure } from "@/app/_actions/enclosures-service/enclosures";
import { addFoodStock, getFoodStockBaseById, getFoodStockIdentifiers, updateFoodStock } from "@/app/_actions/food-service/food-stock";
import { addStaff, getStaffBaseById, getStaffIdentifiers, updateStaff } from "@/app/_actions/staff-service/staff";
import { addDepartment, getDepartmentBaseById, getDepartmentIdentifiers, updateDepartment } from "@/app/_actions/staff-service/departments";
import { addStaffDepartment, getStaffDepartmentBaseById, getStaffDepartmentIdentifiers, updateStaffDepartment } from "@/app/_actions/staff-service/staff-departments";

export const FORM_ACTIONS: Record<FORM_NAME, (prevState: FormState, formData: FormData) => Promise<string[]>> = {
  [FORM_NAME.ADD_ANIMAL]: addAnimal,
  [FORM_NAME.UPDATE_ANIMAL]: updateAnimal,
  [FORM_NAME.ADD_SPECIE]: addSpecie,
  [FORM_NAME.UPDATE_SPECIE]: updateSpecie,
  [FORM_NAME.ADD_ENCLOSURE_TYPE]: addEnclosureType,
  [FORM_NAME.UPDATE_ENCLOSURE_TYPE]: updateEnclosureType,
  [FORM_NAME.ADD_ENCLOSURE]: addEnclosure,
  [FORM_NAME.UPDATE_ENCLOSURE]: updateEnclosure,
  [FORM_NAME.ADD_STORAGE_UNIT_TYPE]: addStorageUnitType,
  [FORM_NAME.UPDATE_STORAGE_UNIT_TYPE]: updateStorageUnitType,
  [FORM_NAME.ADD_STORAGE_UNIT]: addStorageUnit,
  [FORM_NAME.UPDATE_STORAGE_UNIT]: updateStorageUnit,
  [FORM_NAME.ADD_FOOD_TYPE]: addFoodType,
  [FORM_NAME.UPDATE_FOOD_TYPE]: updateFoodType,
  [FORM_NAME.ADD_FOOD_STOCK]: addFoodStock,
  [FORM_NAME.UPDATE_FOOD_STOCK]: updateFoodStock,
  [FORM_NAME.ADD_STAFF]: addStaff,
  [FORM_NAME.UPDATE_STAFF]: updateStaff,
  [FORM_NAME.ADD_DEPARTMENT]: addDepartment,
  [FORM_NAME.UPDATE_DEPARTMENT]: updateDepartment,
  [FORM_NAME.ADD_STAFF_DEPARTMENT]: addStaffDepartment,
  [FORM_NAME.UPDATE_STAFF_DEPARTMENT]: updateStaffDepartment,
}

// This is a reference object
// How to retrieve the values of the model you are updating
export const MODEL_OPTIONS_FETCHERS: {
  [S in SERVICE]: Record<ServiceModel<S>, () => Promise<ModelIdentifier[]>>
} = {
  [SERVICE.ANIMALS]: {
    [ANIMALS_SERVICE_MODEL.ANIMAL]: getAnimalIdentifiers,
    [ANIMALS_SERVICE_MODEL.EVENT]: getAnimalIdentifiers,
    [ANIMALS_SERVICE_MODEL.MEDICAL_RECORD]: getAnimalIdentifiers,
    [ANIMALS_SERVICE_MODEL.SPECIE]: getSpecieIdentifiers
  },
  [SERVICE.FOOD]: {
    [FOOD_SERVICE_MODEL.STORAGE_UNIT]: getStorageUnitIdentifiers,
    [FOOD_SERVICE_MODEL.FOOD_STOCK]: getFoodStockIdentifiers,
    [FOOD_SERVICE_MODEL.FOOD_TYPE]: getFoodTypeIdentifiers,
    [FOOD_SERVICE_MODEL.STORAGE_UNIT_TYPE]: getStorageUnitTypeIdentifiers,
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
