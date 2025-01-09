import { FIELD_REQUIRING_FETCHED_DATA } from "@/types/form";
import { SERVICE } from "@/types/service";

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
    species: `${process.env.ANIMALS_SERVICE ?? ""}/api/v1/species`
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
  }
};

// TODO you do NOT like that specie is hardcoded here!!!
export const API_FIELD_REQUIRING_FETCH_ENDPOINTS: Record<FIELD_REQUIRING_FETCHED_DATA, string> = {
  [FIELD_REQUIRING_FETCHED_DATA.SPECIE]: API_ENDPOINTS.animalsService.species.keys
}