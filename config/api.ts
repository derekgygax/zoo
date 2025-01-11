import { SERVICE } from "@/config/master";

export const API_BASE_URLS: Record<SERVICE, string> = {
  [SERVICE.ANIMALS]: process.env.ANIMALS_SERVICE ?? "",
  [SERVICE.FOOD]: process.env.FOOD_SERVICE ?? "",
  [SERVICE.STAFF]: process.env.STAFF_SERVICE ?? "",
  [SERVICE.BREEDING]: process.env.BREEDING_SERVICE ?? "",
  [SERVICE.ENCLOSURES]: process.env.ENCLOSURES_SERVICE ?? "",
  [SERVICE.REPORTS]: process.env.REPORTS_SERVICE ?? ""
};

const API_INDEX_POINTS = {
  animalsService: {
    animals: `${process.env.ANIMALS_SERVICE ?? ""}/api/v1/animals`,
    species: `${process.env.ANIMALS_SERVICE ?? ""}/api/v1/species`,
  },
  enclosuresService: {
    enclosureTypes: `${process.env.ENCLOSURES_SERVICE ?? ""}/api/v1/enclosure-types`,
    enclosures: `${process.env.ENCLOSURES_SERVICE ?? ""}/api/v1/enclosures`,
  }
}

export const API_ENDPOINTS = {
  animalsService: {
    animals: {
      index: API_INDEX_POINTS.animalsService.animals,
      ids: `${API_INDEX_POINTS.animalsService.animals}/ids`,
    },
    species: {
      index: API_INDEX_POINTS.animalsService.species,
      keys: `${API_INDEX_POINTS.animalsService.species}/keys`,
      base: `${API_INDEX_POINTS.animalsService.species}/base`
    }
  },
  enclosuresService: {
    enclosureTypes: {
      index: API_INDEX_POINTS.enclosuresService.enclosureTypes,
      keys: `${API_INDEX_POINTS.enclosuresService.enclosureTypes}/keys`
    },
    enclosures: {
      index: API_INDEX_POINTS.enclosuresService.enclosures,
    }
  }
};
