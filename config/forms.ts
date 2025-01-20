
// master config
import { FIELD_REQUIRING_FETCHED_DATA, SERVICE } from "@/config/master";
// service models config
import {
  ANIMALS_SERVICE_MODEL,
  ENCLOSURES_SERVICE_MODEL,
  FOOD_SERVICE_MODEL,
} from "./serviceModels";

// types
import {
  FormConfigs,
  FetchDataKey,
} from "@/types/form";
import { SpecieBase } from "@/types/animals-service";
import { EnclosureTypeBase } from "@/types/enclosures-service";
import { FoodTypeBase, StorageUnitIdentifier, StorageUnitTypeBase } from "@/types/food-service";
import { ZodSchema } from "@/types/zodSchema";

// fields requiring fetched data
import { fieldsRequiringFetchedData as animalFieldsRequiringFetching } from "@/api-contracts/animals-service/fieldsRequiringFetchedData";
import { fieldsRequiringFetchedData as enclosureFieldsRequiringFetching } from "@/api-contracts/enclosures-service/fieldsRequiringFetchedData";
import { fieldsRequiringFetchedData as foodFieldsRequiringFetching } from "@/api-contracts/food-service/fieldsRequiringFetchedData";

// zod schemas
import { schemas as animalZodSchemas } from "@/api-contracts/animals-service/zodSchemas";
import { schemas as enclosureZodSchemas } from "@/api-contracts/enclosures-service/zodSchemas";
import { schemas as foodZodSchemas } from "@/api-contracts/food-service/zodSchemas";

export enum FORM_SCHEMA_NAME {
  ANIMAL_BASE = "AnimalBase",
  SPECIE_BASE = "SpecieBase",
  ENCLOSURE_TYPE_BASE = "EnclosureTypeBase",
  ENCLOSURE_BASE = "EnclosureBase",
  FOOD_TYPE_BASE = "FoodTypeBase",
  FOOD_STOCK_BASE = "FoodStockBase",
  STORAGE_UNIT_TYPE_BASE = "StorageUnitTypeBase",
  STORAGE_UNIT_BASE = "StorageUnit"
}

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
  UPDATE_FOOD_STOCK = "update-food-stock"
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
    fieldsRequiringFetchedData: animalFieldsRequiringFetching[FORM_SCHEMA_NAME.ANIMAL_BASE]
  },
  [FORM_NAME.UPDATE_ANIMAL]: {
    service: SERVICE.ANIMALS,
    name: FORM_NAME.UPDATE_ANIMAL,
    type: FORM_TYPE.UPDATE,
    label: "UPDATE Animal",
    zodSchemaName: FORM_SCHEMA_NAME.ANIMAL_BASE,
    fieldsRequiringFetchedData: animalFieldsRequiringFetching[FORM_SCHEMA_NAME.ANIMAL_BASE],
    model: ANIMALS_SERVICE_MODEL.ANIMAL
  },
  [FORM_NAME.ADD_SPECIE]: {
    service: SERVICE.ANIMALS,
    name: FORM_NAME.ADD_SPECIE,
    type: FORM_TYPE.ADD,
    label: "Add Specie",
    zodSchemaName: FORM_SCHEMA_NAME.SPECIE_BASE,
    fieldsRequiringFetchedData: []
  },
  [FORM_NAME.UPDATE_SPECIE]: {
    service: SERVICE.ANIMALS,
    name: FORM_NAME.UPDATE_SPECIE,
    type: FORM_TYPE.UPDATE,
    label: "UPDATE Specie",
    zodSchemaName: FORM_SCHEMA_NAME.SPECIE_BASE,
    fieldsRequiringFetchedData: []
  },
  [FORM_NAME.ADD_ENCLOSURE_TYPE]: {
    service: SERVICE.ENCLOSURES,
    name: FORM_NAME.ADD_ENCLOSURE_TYPE,
    type: FORM_TYPE.ADD,
    label: "Add Enclosure Type",
    zodSchemaName: FORM_SCHEMA_NAME.ENCLOSURE_TYPE_BASE,
    fieldsRequiringFetchedData: []
  },
  [FORM_NAME.UPDATE_ENCLOSURE_TYPE]: {
    service: SERVICE.ENCLOSURES,
    name: FORM_NAME.UPDATE_ENCLOSURE_TYPE,
    type: FORM_TYPE.UPDATE,
    label: "UPDATE Enclosure Type",
    zodSchemaName: FORM_SCHEMA_NAME.ENCLOSURE_TYPE_BASE,
    fieldsRequiringFetchedData: [],
  },
  [FORM_NAME.ADD_ENCLOSURE]: {
    service: SERVICE.ENCLOSURES,
    name: FORM_NAME.ADD_ENCLOSURE,
    type: FORM_TYPE.ADD,
    label: "Add Enclosure",
    zodSchemaName: FORM_SCHEMA_NAME.ENCLOSURE_BASE,
    fieldsRequiringFetchedData: enclosureFieldsRequiringFetching[FORM_SCHEMA_NAME.ENCLOSURE_BASE],
  },
  [FORM_NAME.UPDATE_ENCLOSURE]: {
    service: SERVICE.ENCLOSURES,
    name: FORM_NAME.UPDATE_ENCLOSURE,
    type: FORM_TYPE.UPDATE,
    label: "Update Enclosure",
    zodSchemaName: FORM_SCHEMA_NAME.ENCLOSURE_BASE,
    fieldsRequiringFetchedData: enclosureFieldsRequiringFetching[FORM_SCHEMA_NAME.ENCLOSURE_BASE],
    model: ENCLOSURES_SERVICE_MODEL.ENCLOSURE
  },
  [FORM_NAME.ADD_STORAGE_UNIT_TYPE]: {
    service: SERVICE.FOOD,
    name: FORM_NAME.ADD_STORAGE_UNIT_TYPE,
    type: FORM_TYPE.ADD,
    label: "Add Storage Unit Type",
    zodSchemaName: FORM_SCHEMA_NAME.STORAGE_UNIT_TYPE_BASE,
    fieldsRequiringFetchedData: [],
  },
  [FORM_NAME.UPDATE_STORAGE_UNIT_TYPE]: {
    service: SERVICE.FOOD,
    name: FORM_NAME.UPDATE_STORAGE_UNIT_TYPE,
    type: FORM_TYPE.UPDATE,
    label: "Update Storage Unit Type",
    zodSchemaName: FORM_SCHEMA_NAME.STORAGE_UNIT_TYPE_BASE,
    fieldsRequiringFetchedData: [],
  },
  [FORM_NAME.ADD_STORAGE_UNIT]: {
    service: SERVICE.FOOD,
    name: FORM_NAME.ADD_STORAGE_UNIT,
    type: FORM_TYPE.ADD,
    label: "Add Storage Unit",
    zodSchemaName: FORM_SCHEMA_NAME.STORAGE_UNIT_BASE,
    fieldsRequiringFetchedData: foodFieldsRequiringFetching[FORM_SCHEMA_NAME.STORAGE_UNIT_BASE],
  },
  [FORM_NAME.UPDATE_STORAGE_UNIT]: {
    service: SERVICE.FOOD,
    name: FORM_NAME.UPDATE_STORAGE_UNIT,
    type: FORM_TYPE.UPDATE,
    label: "Update Storage Unit",
    zodSchemaName: FORM_SCHEMA_NAME.STORAGE_UNIT_BASE,
    fieldsRequiringFetchedData: foodFieldsRequiringFetching[FORM_SCHEMA_NAME.STORAGE_UNIT_BASE],
    model: FOOD_SERVICE_MODEL.STORAGE_UNIT
  },
  [FORM_NAME.ADD_FOOD_TYPE]: {
    service: SERVICE.FOOD,
    name: FORM_NAME.ADD_FOOD_TYPE,
    type: FORM_TYPE.ADD,
    label: "Add Food Type",
    zodSchemaName: FORM_SCHEMA_NAME.FOOD_TYPE_BASE,
    fieldsRequiringFetchedData: [],
  },
  [FORM_NAME.UPDATE_FOOD_TYPE]: {
    service: SERVICE.FOOD,
    name: FORM_NAME.UPDATE_FOOD_TYPE,
    type: FORM_TYPE.UPDATE,
    label: "Update Food Type",
    zodSchemaName: FORM_SCHEMA_NAME.FOOD_TYPE_BASE,
    fieldsRequiringFetchedData: [],
  },
  [FORM_NAME.ADD_FOOD_STOCK]: {
    service: SERVICE.FOOD,
    name: FORM_NAME.ADD_FOOD_STOCK,
    type: FORM_TYPE.ADD,
    label: "Add Food Stock",
    zodSchemaName: FORM_SCHEMA_NAME.FOOD_STOCK_BASE,
    fieldsRequiringFetchedData: foodFieldsRequiringFetching[FORM_SCHEMA_NAME.FOOD_STOCK_BASE],
  },
  [FORM_NAME.UPDATE_FOOD_STOCK]: {
    service: SERVICE.FOOD,
    name: FORM_NAME.UPDATE_FOOD_STOCK,
    type: FORM_TYPE.UPDATE,
    label: "Update Food Stock",
    zodSchemaName: FORM_SCHEMA_NAME.FOOD_STOCK_BASE,
    fieldsRequiringFetchedData: foodFieldsRequiringFetching[FORM_SCHEMA_NAME.FOOD_STOCK_BASE],
  },

}


// This just becomes the string for FIELD_REQUIRING_FETCHED_DATA.SPECIE
// NOT referenced to FIELD_REQUIRING_FETCHED_DATA.SPECIE
type DependencyFieldKeys = {
  [FIELD_REQUIRING_FETCHED_DATA.SPECIE]: FetchDataKey<SpecieBase>;
  [FIELD_REQUIRING_FETCHED_DATA.ENCLOSURE_TYPE]: FetchDataKey<EnclosureTypeBase>;
  [FIELD_REQUIRING_FETCHED_DATA.STORAGE_UNIT_TYPE]: FetchDataKey<StorageUnitTypeBase>;
  [FIELD_REQUIRING_FETCHED_DATA.STORAGE_UNIT]: FetchDataKey<StorageUnitIdentifier>;
  [FIELD_REQUIRING_FETCHED_DATA.FOOD_TYPE]: FetchDataKey<FoodTypeBase>;
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
    label: "name",
    value: "id"
  },
  [FIELD_REQUIRING_FETCHED_DATA.FOOD_TYPE]: {
    label: "id",
    value: "id"
  },
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
}  