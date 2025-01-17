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
      base: `${API_INDEX.animalsService.species}/base`
    }
  },
  enclosuresService: {
    enclosureTypes: {
      index: API_INDEX.enclosuresService.enclosureTypes,
      ids: `${API_INDEX.enclosuresService.enclosureTypes}/ids`
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

  }
};
