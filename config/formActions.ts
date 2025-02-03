
// types
import { FormState } from "@/types/form";

// configs
import { FORM_NAME } from "@/config/forms";

// server actions
import { addAnimal, updateAnimal } from "@/app/_actions/animals-service/animals";
import { addSpecie, updateSpecie } from "@/app/_actions/animals-service/specie";
import { addEnclosureType, updateEnclosureType } from "@/app/_actions/enclosures-service/enclosure-types";
import { addFoodType, updateFoodType } from "@/app/_actions/food-service/food-type";
import { addStorageUnitType, updateStorageUnitType } from "@/app/_actions/food-service/storage-unit-type";
import { addStorageUnit, updateStorageUnit } from "@/app/_actions/food-service/storage-unit";
import { addEnclosure, updateEnclosure } from "@/app/_actions/enclosures-service/enclosures";
import { addFoodStock, updateFoodStock } from "@/app/_actions/food-service/food-stock";
import { addStaff, updateStaff } from "@/app/_actions/staff-service/staff";
import { addDepartment, updateDepartment } from "@/app/_actions/staff-service/departments";
import { addStaffDepartment, updateStaffDepartment } from "@/app/_actions/staff-service/staff-departments";

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