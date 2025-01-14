
// master config
import { FIELD_REQUIRING_FETCHED_DATA } from "@/config/master";

// types
import {
  FormConfigs,
  FetchDataKey,
} from "@/types/form";
import { SpecieBase } from "@/types/animals-service";
import { EnclosureTypeBase } from "@/types/enclosures-service";
import { FoodTypeBase, StorageUnitIdentifier, StorageUnitTypeBase } from "@/types/food-service";

// fields requiring fetched data
import { fieldsRequiringFetchedData as animalFieldsRequiringFetching } from "@/api-contracts/animals-service/fieldsRequiringFetchedData";
import { fieldsRequiringFetchedData as enclosureFieldsRequiringFetching } from "@/api-contracts/enclosures-service/fieldsRequiringFetchedData";
import { fieldsRequiringFetchedData as foodFieldsRequiringFetching } from "@/api-contracts/food-service/fieldsRequiringFetchedData";

export const FIELD_DEFAULTS = {
  string: {
    maxLength: 100
  }
}

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
  ADD_ANIMAL = "AddAnimal",
  UPDATE_ANIMAL = "UpdateAnimal",
  ADD_SPECIE = "AddSpecie",
  UPDATE_SPECIE = "UpdateSpecie",
  ADD_ENCLOSURE_TYPE = "AddEnclosureType",
  UPDATE_ENCLOSURE_TYPE = "UpdateEnclosureType",
  ADD_ENCLOSURE = "AddEnclosure",
  UPDATE_ENCLOSURE = "UpdateEnclosure",
  ADD_STORAGE_UNIT_TYPE = "AddStorageUnitType",
  UPDATE_STORAGE_UNIT_TYPE = "UpdateStorageUnitType",
  ADD_STORAGE_UNIT = "AddStorageUnit",
  UPDATE_STORAGE_UNIT = "UpdateStorageUnit",
  ADD_FOOD_TYPE = "AddFoodType",
  UPDATE_FOOD_TYPE = "UpdateFoodType",
  ADD_FOOD_STOCK = "AddFoodStock",
  UPDATE_FOOD_STOCK = "UpdateFoodStock"
}

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
  },
  [FORM_NAME.ADD_ENCLOSURE_TYPE]: {
    name: FORM_NAME.ADD_ENCLOSURE_TYPE,
    label: "Add Enclosure Type",
    zodSchemaName: FORM_SCHEMA_NAME.ENCLOSURE_TYPE_BASE,
    fieldsRequiringFetchedData: []
  },
  [FORM_NAME.UPDATE_ENCLOSURE_TYPE]: {
    name: FORM_NAME.UPDATE_ENCLOSURE_TYPE,
    label: "UPDATE Enclosure Type",
    zodSchemaName: FORM_SCHEMA_NAME.ENCLOSURE_TYPE_BASE,
    fieldsRequiringFetchedData: []
  },
  [FORM_NAME.ADD_ENCLOSURE]: {
    name: FORM_NAME.ADD_ENCLOSURE,
    label: "Add Enclosure",
    zodSchemaName: FORM_SCHEMA_NAME.ENCLOSURE_BASE,
    fieldsRequiringFetchedData: enclosureFieldsRequiringFetching[FORM_SCHEMA_NAME.ENCLOSURE_BASE]
  },
  [FORM_NAME.UPDATE_ENCLOSURE]: {
    name: FORM_NAME.UPDATE_ENCLOSURE,
    label: "Update Enclosure",
    zodSchemaName: FORM_SCHEMA_NAME.ENCLOSURE_BASE,
    fieldsRequiringFetchedData: enclosureFieldsRequiringFetching[FORM_SCHEMA_NAME.ENCLOSURE_BASE]
  },
  [FORM_NAME.ADD_STORAGE_UNIT_TYPE]: {
    name: FORM_NAME.ADD_STORAGE_UNIT_TYPE,
    label: "Add Storage Unit Type",
    zodSchemaName: FORM_SCHEMA_NAME.STORAGE_UNIT_TYPE_BASE,
    fieldsRequiringFetchedData: [],
  },
  [FORM_NAME.UPDATE_STORAGE_UNIT_TYPE]: {
    name: FORM_NAME.UPDATE_STORAGE_UNIT_TYPE,
    label: "Update Storage Unit Type",
    zodSchemaName: FORM_SCHEMA_NAME.STORAGE_UNIT_TYPE_BASE,
    fieldsRequiringFetchedData: [],
  },
  [FORM_NAME.ADD_STORAGE_UNIT]: {
    name: FORM_NAME.ADD_STORAGE_UNIT,
    label: "Add Storage Unit",
    zodSchemaName: FORM_SCHEMA_NAME.STORAGE_UNIT_BASE,
    fieldsRequiringFetchedData: foodFieldsRequiringFetching[FORM_SCHEMA_NAME.STORAGE_UNIT_BASE],
  },
  [FORM_NAME.UPDATE_STORAGE_UNIT]: {
    name: FORM_NAME.UPDATE_STORAGE_UNIT,
    label: "Update Storage Unit",
    zodSchemaName: FORM_SCHEMA_NAME.STORAGE_UNIT_BASE,
    fieldsRequiringFetchedData: foodFieldsRequiringFetching[FORM_SCHEMA_NAME.STORAGE_UNIT_BASE],
  },
  [FORM_NAME.ADD_FOOD_TYPE]: {
    name: FORM_NAME.ADD_FOOD_TYPE,
    label: "Add Food Type",
    zodSchemaName: FORM_SCHEMA_NAME.FOOD_TYPE_BASE,
    fieldsRequiringFetchedData: [],
  },
  [FORM_NAME.UPDATE_FOOD_TYPE]: {
    name: FORM_NAME.UPDATE_FOOD_TYPE,
    label: "Update Food Type",
    zodSchemaName: FORM_SCHEMA_NAME.FOOD_TYPE_BASE,
    fieldsRequiringFetchedData: [],
  },
  [FORM_NAME.ADD_FOOD_STOCK]: {
    name: FORM_NAME.ADD_FOOD_STOCK,
    label: "Add Food Stock",
    zodSchemaName: FORM_SCHEMA_NAME.FOOD_STOCK_BASE,
    fieldsRequiringFetchedData: foodFieldsRequiringFetching[FORM_SCHEMA_NAME.FOOD_STOCK_BASE],
  },
  [FORM_NAME.UPDATE_FOOD_STOCK]: {
    name: FORM_NAME.UPDATE_FOOD_STOCK,
    label: "Update Food Stock",
    zodSchemaName: FORM_SCHEMA_NAME.FOOD_STOCK_BASE,
    fieldsRequiringFetchedData: foodFieldsRequiringFetching[FORM_SCHEMA_NAME.FOOD_STOCK_BASE],
  },

}

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