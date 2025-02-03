// master config
import { SERVICE, API_BASE_URLS } from "@/config/master";
import {
  ANIMALS_SERVICE_MODEL,
  FOOD_SERVICE_MODEL,
  ENCLOSURES_SERVICE_MODEL,
  BREEDING_SERVICE_MODEL,
  REPORTS_SERVICE_MODEL,
  STAFF_SERVICE_MODEL
} from "./serviceModels";
import { ServiceModel } from "@/types/serviceModels";


export const API_MODEL_ENDPOINTS: {
  [S in SERVICE]: Record<ServiceModel<S>, string>
} = {
  [SERVICE.ANIMALS]: {
    [ANIMALS_SERVICE_MODEL.ANIMAL]: "api/v1/animals",
    [ANIMALS_SERVICE_MODEL.EVENT]: "api/v1/events",
    [ANIMALS_SERVICE_MODEL.MEDICAL_RECORD]: "api/v1/medical-records",
    [ANIMALS_SERVICE_MODEL.SPECIE]: "api/v1/species"
  },
  [SERVICE.FOOD]: {
    [FOOD_SERVICE_MODEL.STORAGE_UNIT]: "api/v1/storage-units",
    [FOOD_SERVICE_MODEL.FOOD_STOCK]: "api/v1/food-stocks",
    [FOOD_SERVICE_MODEL.FOOD_TYPE]: "api/v1/food-types",
    [FOOD_SERVICE_MODEL.STORAGE_UNIT_TYPE]: "/api/v1/storage-unit-types",
  },
  [SERVICE.ENCLOSURES]: {
    [ENCLOSURES_SERVICE_MODEL.ENCLOSURE]: "api/v1/enclosures",
    [ENCLOSURES_SERVICE_MODEL.ENCLOSURE_TYPE]: "api/v1/enclosure-types"
  },
  [SERVICE.BREEDING]: {
    [BREEDING_SERVICE_MODEL.LITTER]: "api/v1/litters"
  },
  [SERVICE.REPORTS]: {
    [REPORTS_SERVICE_MODEL.REPORT]: "api/v1/reports"
  },
  [SERVICE.STAFF]: {
    [STAFF_SERVICE_MODEL.STAFF]: "api/v1/staff",
    [STAFF_SERVICE_MODEL.DEPARTMENT]: "api/v1/departments",
    [STAFF_SERVICE_MODEL.STAFF_DEPARTMENT]: "api/v1/staff-departments"
  }
}

const API_INDEX = {
  animalsService: {
    animals: `${API_BASE_URLS[SERVICE.ANIMALS]}/api/v1/animals`,
    species: `${API_BASE_URLS[SERVICE.ANIMALS]}/api/v1/species`,
  },
  enclosuresService: {
    enclosureTypes: `${API_BASE_URLS[SERVICE.ENCLOSURES]}/api/v1/enclosure-types`,
    enclosures: `${API_BASE_URLS[SERVICE.ENCLOSURES]}/api/v1/enclosures`,
  },
  foodService: {
    storageUnitTypes: `${API_BASE_URLS[SERVICE.FOOD]}/api/v1/storage-unit-types`,
    storageUnits: `${API_BASE_URLS[SERVICE.FOOD]}/api/v1/storage-units`,
    foodTypes: `${API_BASE_URLS[SERVICE.FOOD]}/api/v1/food-types`,
    foodStocks: `${API_BASE_URLS[SERVICE.FOOD]}/api/v1/food-stocks`,
  },
  staffService: {
    staff: `${API_BASE_URLS[SERVICE.STAFF]}/api/v1/staff`,
    departments: `${API_BASE_URLS[SERVICE.STAFF]}/api/v1/departments`,
    staffDepartments: `${API_BASE_URLS[SERVICE.STAFF]}/api/v1/staff-departments`,
  }
}

export const API_ENDPOINTS = {
  animalsService: {
    animals: {
      index: API_INDEX.animalsService.animals,
      identifiers: `${API_INDEX.animalsService.animals}/identifiers`,
    },
    species: {
      index: API_INDEX.animalsService.species,
      ids: `${API_INDEX.animalsService.species}/ids`,
      bases: `${API_INDEX.animalsService.species}/bases`,
      identifiers: `${API_INDEX.animalsService.species}/identifiers`
    }
  },
  enclosuresService: {
    enclosureTypes: {
      index: API_INDEX.enclosuresService.enclosureTypes,
      ids: `${API_INDEX.enclosuresService.enclosureTypes}/ids`,
      identifiers: `${API_INDEX.enclosuresService.enclosureTypes}/identifiers`
    },
    enclosures: {
      index: API_INDEX.enclosuresService.enclosures,
      identifiers: `${API_INDEX.enclosuresService.enclosures}/identifiers`,
      bases: `${API_INDEX.enclosuresService.enclosures}/bases`
    }
  },
  foodService: {
    storageUnitTypes: {
      index: API_INDEX.foodService.storageUnitTypes,
      ids: `${API_INDEX.foodService.storageUnitTypes}/ids`,
      identifiers: `${API_INDEX.foodService.storageUnitTypes}/identifiers`,
    },
    storageUnits: {
      index: API_INDEX.foodService.storageUnits,
      ids: `${API_INDEX.foodService.storageUnits}/ids`,
      bases: `${API_INDEX.foodService.storageUnits}/bases`,
      identifiers: `${API_INDEX.foodService.storageUnits}/identifiers`,
    },
    foodTypes: {
      index: API_INDEX.foodService.foodTypes,
      ids: `${API_INDEX.foodService.foodTypes}/ids`,
      identifiers: `${API_INDEX.foodService.foodTypes}/identifiers`,
    },
    foodStocks: {
      index: API_INDEX.foodService.foodStocks,
      ids: `${API_INDEX.foodService.foodStocks}/ids`,
      bases: `${API_INDEX.foodService.foodStocks}/bases`,
      identifiers: `${API_INDEX.foodService.foodStocks}/identifiers`,
    },
  },
  staffService: {
    staff: {
      index: API_INDEX.staffService.staff,
      identifiers: `${API_INDEX.staffService.staff}/identifiers`
    },
    departments: {
      index: API_INDEX.staffService.departments,
      identifiers: `${API_INDEX.staffService.departments}/identifiers`
    },
    staffDepartments: {
      index: API_INDEX.staffService.staffDepartments,
      identifiers: `${API_INDEX.staffService.staffDepartments}/identifiers`
    }
  }
};
