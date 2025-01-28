// master config
import { SERVICE, API_BASE_URLS } from "@/config/master";

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
      ids: `${API_INDEX.foodService.storageUnitTypes}/ids`
    },
    storageUnits: {
      index: API_INDEX.foodService.storageUnits,
      ids: `${API_INDEX.foodService.storageUnits}/ids`,
      bases: `${API_INDEX.foodService.storageUnits}/bases`,
      identifiers: `${API_INDEX.foodService.storageUnits}/identifiers`,
    },
    foodTypes: {
      index: API_INDEX.foodService.foodTypes,
      ids: `${API_INDEX.foodService.foodTypes}/ids`
    },
    foodStocks: {
      index: API_INDEX.foodService.foodStocks,
      ids: `${API_INDEX.foodService.foodStocks}/ids`,
      bases: `${API_INDEX.foodService.foodStocks}/bases`
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
