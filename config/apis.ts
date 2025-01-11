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
  }
}

export const API_ENDPOINTS = {
  animalsService: {
    animals: {
      index: API_INDEX.animalsService.animals,
      ids: `${API_INDEX.animalsService.animals}/ids`,
    },
    species: {
      index: API_INDEX.animalsService.species,
      keys: `${API_INDEX.animalsService.species}/keys`,
      base: `${API_INDEX.animalsService.species}/base`
    }
  },
  enclosuresService: {
    enclosureTypes: {
      index: API_INDEX.enclosuresService.enclosureTypes,
      keys: `${API_INDEX.enclosuresService.enclosureTypes}/keys`
    },
    enclosures: {
      index: API_INDEX.enclosuresService.enclosures,
    }
  }
};
