
// master config
import { FIELD_REQUIRING_FETCHED_DATA, SERVICE } from "@/config/master";

// service models config
import {
  ANIMALS_SERVICE_MODEL,
  ENCLOSURES_SERVICE_MODEL,
  FOOD_SERVICE_MODEL,
  SERVICE_MODELS,
  STAFF_SERVICE_MODEL,
} from "./serviceModels";

// Site URLS config
import { SITE_URLS } from "./siteUrls";

// types
import {
  FormConfigs,
  FetchDataKey,
  ServiceModelSelectorMapper
} from "@/types/form";
// TODO NO USE ModelIdentifier
// retard retard retard
import { SpecieBase } from "@/types/animals-service";
import { EnclosureTypeBase } from "@/types/enclosures-service";
import { FoodTypeBase, StorageUnitTypeBase } from "@/types/food-service";
import { ZodSchema } from "@/types/zodSchema";
// TODO this is dangerous with all the imports
// TODO get rid of them as you build the API gateway
// and start combining things
import { ModelIdentifier } from "@/types/serviceModels";

// fields requiring fetched data
import { fieldsRequiringFetchedData as animalServiceFieldsRequiringFetching } from "@/api-contracts/animals-service/fieldsRequiringFetchedData";
import { fieldsRequiringFetchedData as enclosureServiceFieldsRequiringFetching } from "@/api-contracts/enclosures-service/fieldsRequiringFetchedData";
import { fieldsRequiringFetchedData as foodServiceFieldsRequiringFetching } from "@/api-contracts/food-service/fieldsRequiringFetchedData";
import { fieldsRequiringFetchedData as staffServiceFieldsRequiringFetching } from "@/api-contracts/staff-service/fieldsRequiringFetchedData"

// zod schemas
import { schemas as animalZodSchemas } from "@/api-contracts/animals-service/zodSchemas";
import { schemas as enclosureZodSchemas } from "@/api-contracts/enclosures-service/zodSchemas";
import { schemas as foodZodSchemas } from "@/api-contracts/food-service/zodSchemas";
import { schemas as staffZodSchemas } from "@/api-contracts/staff-service/zodSchemas";

export enum FORM_SCHEMA_NAME {
  ANIMAL_BASE = "AnimalBase",
  SPECIE_BASE = "SpecieBase",
  ENCLOSURE_TYPE_BASE = "EnclosureTypeBase",
  ENCLOSURE_BASE = "EnclosureBase",
  FOOD_TYPE_BASE = "FoodTypeBase",
  FOOD_STOCK_BASE = "FoodStockBase",
  STORAGE_UNIT_TYPE_BASE = "StorageUnitTypeBase",
  STORAGE_UNIT_BASE = "StorageUnit",
  STAFF_BASE = "StaffBase",
  DEPARTMENT_BASE = "DepartmentBase",
  STAFF_DEPARTMENT_BASE = "StaffDepartmentBase"
}

// THESE NEED TO BE SEPARATED BY MODEL!!!
// STORAGE UNIT IS LIKE HUH!!
export enum FORM_NAME {
  ADD_ANIMAL = "add-animal",
  UPDATE_ANIMAL = "update-animal",
  ADD_SPECIE = "add-specie",
  UPDATE_SPECIE = "update-specie",
  ADD_ENCLOSURE_TYPE = "add-enclosure-type",
  UPDATE_ENCLOSURE_TYPE = "update-enclosure-type",
  ADD_ENCLOSURE = "add-enclosure",
  UPDATE_ENCLOSURE = "update-enclosure",
  ADD_STORAGE_UNIT_TYPE = "add-storage-unit-type",
  UPDATE_STORAGE_UNIT_TYPE = "update-storage-unit-type",
  ADD_STORAGE_UNIT = "add-storage-unit",
  UPDATE_STORAGE_UNIT = "update-storage-unit",
  ADD_FOOD_TYPE = "add-food-type",
  UPDATE_FOOD_TYPE = "update-food-type",
  ADD_FOOD_STOCK = "add-food-stock",
  UPDATE_FOOD_STOCK = "update-food-stock",
  ADD_STAFF = "add-staff",
  UPDATE_STAFF = "update-staff",
  ADD_DEPARTMENT = "add-department",
  UPDATE_DEPARTMENT = "update-department",
  ADD_STAFF_DEPARTMENT = "add-staff-department",
  UPDATE_STAFF_DEPARTMENT = "update-staff-department"
}

export enum FORM_TYPE {
  ADD = "add",
  UPDATE = "update"
}

// TODO ... somehow in here you could put the selectors it needs
// to get and the API points it should use
export const FORM_CONFIGS: FormConfigs = {
  [FORM_NAME.ADD_ANIMAL]: {
    service: SERVICE.ANIMALS,
    name: FORM_NAME.ADD_ANIMAL,
    type: FORM_TYPE.ADD,
    label: "Add Animal",
    zodSchemaName: FORM_SCHEMA_NAME.ANIMAL_BASE,
    fieldsRequiringFetchedData: animalServiceFieldsRequiringFetching[FORM_SCHEMA_NAME.ANIMAL_BASE],
    selectionScreenUrl: SITE_URLS.staff[SERVICE.ANIMALS].index
  },
  [FORM_NAME.UPDATE_ANIMAL]: {
    service: SERVICE.ANIMALS,
    name: FORM_NAME.UPDATE_ANIMAL,
    type: FORM_TYPE.UPDATE,
    label: "UPDATE Animal",
    zodSchemaName: FORM_SCHEMA_NAME.ANIMAL_BASE,
    fieldsRequiringFetchedData: animalServiceFieldsRequiringFetching[FORM_SCHEMA_NAME.ANIMAL_BASE],
    model: ANIMALS_SERVICE_MODEL.ANIMAL,
    selectionScreenUrl: SITE_URLS.staff[SERVICE.ANIMALS].index
  },
  [FORM_NAME.ADD_SPECIE]: {
    service: SERVICE.ANIMALS,
    name: FORM_NAME.ADD_SPECIE,
    type: FORM_TYPE.ADD,
    label: "Add Specie",
    zodSchemaName: FORM_SCHEMA_NAME.SPECIE_BASE,
    fieldsRequiringFetchedData: [],
    selectionScreenUrl: SITE_URLS.staff[SERVICE.ANIMALS].index
  },
  [FORM_NAME.UPDATE_SPECIE]: {
    service: SERVICE.ANIMALS,
    name: FORM_NAME.UPDATE_SPECIE,
    type: FORM_TYPE.UPDATE,
    label: "UPDATE Specie",
    zodSchemaName: FORM_SCHEMA_NAME.SPECIE_BASE,
    model: ANIMALS_SERVICE_MODEL.SPECIE,
    fieldsRequiringFetchedData: [],
    selectionScreenUrl: SITE_URLS.staff[SERVICE.ANIMALS].index
  },
  [FORM_NAME.ADD_ENCLOSURE_TYPE]: {
    service: SERVICE.ENCLOSURES,
    name: FORM_NAME.ADD_ENCLOSURE_TYPE,
    type: FORM_TYPE.ADD,
    label: "Add Enclosure Type",
    zodSchemaName: FORM_SCHEMA_NAME.ENCLOSURE_TYPE_BASE,
    fieldsRequiringFetchedData: [],
    selectionScreenUrl: SITE_URLS.staff[SERVICE.ENCLOSURES].index
  },
  [FORM_NAME.UPDATE_ENCLOSURE_TYPE]: {
    service: SERVICE.ENCLOSURES,
    name: FORM_NAME.UPDATE_ENCLOSURE_TYPE,
    type: FORM_TYPE.UPDATE,
    label: "UPDATE Enclosure Type",
    zodSchemaName: FORM_SCHEMA_NAME.ENCLOSURE_TYPE_BASE,
    fieldsRequiringFetchedData: [],
    model: ENCLOSURES_SERVICE_MODEL.ENCLOSURE_TYPE,
    selectionScreenUrl: SITE_URLS.staff[SERVICE.ENCLOSURES].index
  },
  [FORM_NAME.ADD_ENCLOSURE]: {
    service: SERVICE.ENCLOSURES,
    name: FORM_NAME.ADD_ENCLOSURE,
    type: FORM_TYPE.ADD,
    label: "Add Enclosure",
    zodSchemaName: FORM_SCHEMA_NAME.ENCLOSURE_BASE,
    fieldsRequiringFetchedData: enclosureServiceFieldsRequiringFetching[FORM_SCHEMA_NAME.ENCLOSURE_BASE],
    selectionScreenUrl: SITE_URLS.staff[SERVICE.ENCLOSURES].index
  },
  [FORM_NAME.UPDATE_ENCLOSURE]: {
    service: SERVICE.ENCLOSURES,
    name: FORM_NAME.UPDATE_ENCLOSURE,
    type: FORM_TYPE.UPDATE,
    label: "Update Enclosure",
    zodSchemaName: FORM_SCHEMA_NAME.ENCLOSURE_BASE,
    fieldsRequiringFetchedData: enclosureServiceFieldsRequiringFetching[FORM_SCHEMA_NAME.ENCLOSURE_BASE],
    model: ENCLOSURES_SERVICE_MODEL.ENCLOSURE,
    selectionScreenUrl: SITE_URLS.staff[SERVICE.ENCLOSURES].index
  },
  [FORM_NAME.ADD_STORAGE_UNIT_TYPE]: {
    service: SERVICE.FOOD,
    name: FORM_NAME.ADD_STORAGE_UNIT_TYPE,
    type: FORM_TYPE.ADD,
    label: "Add Storage Unit Type",
    zodSchemaName: FORM_SCHEMA_NAME.STORAGE_UNIT_TYPE_BASE,
    fieldsRequiringFetchedData: [],
    selectionScreenUrl: SITE_URLS.staff[SERVICE.FOOD].index
  },
  [FORM_NAME.UPDATE_STORAGE_UNIT_TYPE]: {
    service: SERVICE.FOOD,
    name: FORM_NAME.UPDATE_STORAGE_UNIT_TYPE,
    type: FORM_TYPE.UPDATE,
    label: "Update Storage Unit Type",
    zodSchemaName: FORM_SCHEMA_NAME.STORAGE_UNIT_TYPE_BASE,
    fieldsRequiringFetchedData: [],
    model: FOOD_SERVICE_MODEL.STORAGE_UNIT_TYPE,
    selectionScreenUrl: SITE_URLS.staff[SERVICE.FOOD].index
  },
  [FORM_NAME.ADD_STORAGE_UNIT]: {
    service: SERVICE.FOOD,
    name: FORM_NAME.ADD_STORAGE_UNIT,
    type: FORM_TYPE.ADD,
    label: "Add Storage Unit",
    zodSchemaName: FORM_SCHEMA_NAME.STORAGE_UNIT_BASE,
    fieldsRequiringFetchedData: foodServiceFieldsRequiringFetching[FORM_SCHEMA_NAME.STORAGE_UNIT_BASE],
    selectionScreenUrl: SITE_URLS.staff[SERVICE.FOOD].index
  },
  [FORM_NAME.UPDATE_STORAGE_UNIT]: {
    service: SERVICE.FOOD,
    name: FORM_NAME.UPDATE_STORAGE_UNIT,
    type: FORM_TYPE.UPDATE,
    label: "Update Storage Unit",
    zodSchemaName: FORM_SCHEMA_NAME.STORAGE_UNIT_BASE,
    fieldsRequiringFetchedData: foodServiceFieldsRequiringFetching[FORM_SCHEMA_NAME.STORAGE_UNIT_BASE],
    model: FOOD_SERVICE_MODEL.STORAGE_UNIT,
    selectionScreenUrl: SITE_URLS.staff[SERVICE.FOOD].index
  },
  [FORM_NAME.ADD_FOOD_TYPE]: {
    service: SERVICE.FOOD,
    name: FORM_NAME.ADD_FOOD_TYPE,
    type: FORM_TYPE.ADD,
    label: "Add Food Type",
    zodSchemaName: FORM_SCHEMA_NAME.FOOD_TYPE_BASE,
    fieldsRequiringFetchedData: [],
    selectionScreenUrl: SITE_URLS.staff[SERVICE.FOOD].index
  },
  [FORM_NAME.UPDATE_FOOD_TYPE]: {
    service: SERVICE.FOOD,
    name: FORM_NAME.UPDATE_FOOD_TYPE,
    type: FORM_TYPE.UPDATE,
    label: "Update Food Type",
    zodSchemaName: FORM_SCHEMA_NAME.FOOD_TYPE_BASE,
    fieldsRequiringFetchedData: [],
    model: FOOD_SERVICE_MODEL.FOOD_TYPE,
    selectionScreenUrl: SITE_URLS.staff[SERVICE.FOOD].index
  },
  [FORM_NAME.ADD_FOOD_STOCK]: {
    service: SERVICE.FOOD,
    name: FORM_NAME.ADD_FOOD_STOCK,
    type: FORM_TYPE.ADD,
    label: "Add Food Stock",
    zodSchemaName: FORM_SCHEMA_NAME.FOOD_STOCK_BASE,
    fieldsRequiringFetchedData: foodServiceFieldsRequiringFetching[FORM_SCHEMA_NAME.FOOD_STOCK_BASE],
    selectionScreenUrl: SITE_URLS.staff[SERVICE.FOOD].index
  },
  [FORM_NAME.UPDATE_FOOD_STOCK]: {
    service: SERVICE.FOOD,
    name: FORM_NAME.UPDATE_FOOD_STOCK,
    type: FORM_TYPE.UPDATE,
    label: "Update Food Stock",
    zodSchemaName: FORM_SCHEMA_NAME.FOOD_STOCK_BASE,
    fieldsRequiringFetchedData: foodServiceFieldsRequiringFetching[FORM_SCHEMA_NAME.FOOD_STOCK_BASE],
    model: FOOD_SERVICE_MODEL.FOOD_STOCK,
    selectionScreenUrl: SITE_URLS.staff[SERVICE.FOOD].index
  },
  [FORM_NAME.ADD_STAFF]: {
    service: SERVICE.STAFF,
    name: FORM_NAME.ADD_STAFF,
    type: FORM_TYPE.ADD,
    label: "Add Staff Member",
    zodSchemaName: FORM_SCHEMA_NAME.STAFF_BASE,
    fieldsRequiringFetchedData: [],
    selectionScreenUrl: SITE_URLS.staff[SERVICE.STAFF].index
  },
  [FORM_NAME.UPDATE_STAFF]: {
    service: SERVICE.STAFF,
    name: FORM_NAME.UPDATE_STAFF,
    type: FORM_TYPE.UPDATE,
    label: "Update Staff Member",
    zodSchemaName: FORM_SCHEMA_NAME.STAFF_BASE,
    fieldsRequiringFetchedData: [],
    model: STAFF_SERVICE_MODEL.STAFF,
    selectionScreenUrl: SITE_URLS.staff[SERVICE.STAFF].index
  },
  [FORM_NAME.ADD_DEPARTMENT]: {
    service: SERVICE.STAFF,
    name: FORM_NAME.ADD_DEPARTMENT,
    type: FORM_TYPE.ADD,
    label: "Add Department",
    zodSchemaName: FORM_SCHEMA_NAME.DEPARTMENT_BASE,
    fieldsRequiringFetchedData: [],
    selectionScreenUrl: SITE_URLS.staff[SERVICE.STAFF].index
  },
  [FORM_NAME.UPDATE_DEPARTMENT]: {
    service: SERVICE.STAFF,
    name: FORM_NAME.UPDATE_DEPARTMENT,
    type: FORM_TYPE.UPDATE,
    label: "Update Department",
    zodSchemaName: FORM_SCHEMA_NAME.DEPARTMENT_BASE,
    fieldsRequiringFetchedData: [],
    model: STAFF_SERVICE_MODEL.DEPARTMENT,
    selectionScreenUrl: SITE_URLS.staff[SERVICE.STAFF].index
  },
  [FORM_NAME.ADD_STAFF_DEPARTMENT]: {
    service: SERVICE.STAFF,
    name: FORM_NAME.ADD_STAFF_DEPARTMENT,
    type: FORM_TYPE.ADD,
    label: "Add Staff to a Department",
    zodSchemaName: FORM_SCHEMA_NAME.STAFF_DEPARTMENT_BASE,
    fieldsRequiringFetchedData: staffServiceFieldsRequiringFetching[FORM_SCHEMA_NAME.STAFF_DEPARTMENT_BASE],
    selectionScreenUrl: SITE_URLS.staff[SERVICE.STAFF].index
  },
  [FORM_NAME.UPDATE_STAFF_DEPARTMENT]: {
    service: SERVICE.STAFF,
    name: FORM_NAME.UPDATE_STAFF_DEPARTMENT,
    type: FORM_TYPE.UPDATE,
    label: "Update Staff in a Department",
    zodSchemaName: FORM_SCHEMA_NAME.STAFF_DEPARTMENT_BASE,
    fieldsRequiringFetchedData: staffServiceFieldsRequiringFetching[FORM_SCHEMA_NAME.STAFF_DEPARTMENT_BASE],
    model: STAFF_SERVICE_MODEL.STAFF_DEPARTMENT,
    selectionScreenUrl: SITE_URLS.staff[SERVICE.STAFF].index
  },

}


// This just becomes the string for FIELD_REQUIRING_FETCHED_DATA.SPECIE
// NOT referenced to FIELD_REQUIRING_FETCHED_DATA.SPECIE
// TODO NO USE ModelIdentifier
// retard retard retard
type DependencyFieldKeys = {
  [FIELD_REQUIRING_FETCHED_DATA.SPECIE]: FetchDataKey<SpecieBase>;
  [FIELD_REQUIRING_FETCHED_DATA.ENCLOSURE_TYPE]: FetchDataKey<EnclosureTypeBase>;
  [FIELD_REQUIRING_FETCHED_DATA.STORAGE_UNIT_TYPE]: FetchDataKey<StorageUnitTypeBase>;
  [FIELD_REQUIRING_FETCHED_DATA.STORAGE_UNIT]: FetchDataKey<ModelIdentifier>;
  [FIELD_REQUIRING_FETCHED_DATA.FOOD_TYPE]: FetchDataKey<FoodTypeBase>;
  [FIELD_REQUIRING_FETCHED_DATA.STAFF]: FetchDataKey<ModelIdentifier>
  [FIELD_REQUIRING_FETCHED_DATA.DEPARTMENT]: FetchDataKey<ModelIdentifier>
};

export const FORM_FIELD_REQUIRING_FETCHED_DATA_KEYS: DependencyFieldKeys = {
  // for this one it is for naught because you are just getting a string
  // but hey, put it here so you remember to follow how its structured
  // you are going to hardcode stuff in here ... the names of
  [FIELD_REQUIRING_FETCHED_DATA.SPECIE]: {
    label: "id",
    value: "id"
  },
  // for this one it is for naught because you are just getting a string
  // but hey, put it here so you remember to follow how its structured
  // you are going to hardcode stuff in here ... the names of
  [FIELD_REQUIRING_FETCHED_DATA.ENCLOSURE_TYPE]: {
    label: "id",
    value: "id"
  },
  [FIELD_REQUIRING_FETCHED_DATA.STORAGE_UNIT_TYPE]: {
    label: "id",
    value: "id"
  },
  [FIELD_REQUIRING_FETCHED_DATA.STORAGE_UNIT]: {
    label: "label",
    value: "id"
  },
  [FIELD_REQUIRING_FETCHED_DATA.FOOD_TYPE]: {
    label: "id",
    value: "id"
  },
  // TODO Fix this the fuck up!!
  // TODO Fix this the fuck up!!
  // TODO Fix this the fuck up!!
  // TODO Fix this the fuck up!!
  [FIELD_REQUIRING_FETCHED_DATA.STAFF]: {
    label: "label",
    value: "id"
  },
  // TODO Fix this the fuck up!!
  // TODO Fix this the fuck up!!
  // TODO Fix this the fuck up!!
  // TODO Fix this the fuck up!!
  [FIELD_REQUIRING_FETCHED_DATA.DEPARTMENT]: {
    label: "label",
    value: "id"
  }
}

export const ZOD_SCHEMAS: ZodSchema = {
  [FORM_SCHEMA_NAME.ANIMAL_BASE]: animalZodSchemas.AnimalBase,
  [FORM_SCHEMA_NAME.SPECIE_BASE]: animalZodSchemas.SpecieBase,
  [FORM_SCHEMA_NAME.ENCLOSURE_TYPE_BASE]: enclosureZodSchemas.EnclosureTypeBase,
  [FORM_SCHEMA_NAME.ENCLOSURE_BASE]: enclosureZodSchemas.EnclosureBase,
  [FORM_SCHEMA_NAME.FOOD_STOCK_BASE]: foodZodSchemas.FoodStockBase,
  [FORM_SCHEMA_NAME.FOOD_TYPE_BASE]: foodZodSchemas.FoodTypeBase,
  [FORM_SCHEMA_NAME.STORAGE_UNIT_BASE]: foodZodSchemas.StorageUnitBase,
  [FORM_SCHEMA_NAME.STORAGE_UNIT_TYPE_BASE]: foodZodSchemas.StorageUnitTypeBase,
  [FORM_SCHEMA_NAME.STAFF_BASE]: staffZodSchemas.StaffBase,
  [FORM_SCHEMA_NAME.DEPARTMENT_BASE]: staffZodSchemas.DepartmentBase,
  [FORM_SCHEMA_NAME.STAFF_DEPARTMENT_BASE]: staffZodSchemas.StaffDepartmentBase,
}  