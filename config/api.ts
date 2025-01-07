export const API_BASE_URLS: Record<string, string> = {
  "animals-service": process.env.ANIMALS_SERVICE ?? "",
  "food-service": process.env.FOOD_SERVICE ?? "",
  "staff-service": process.env.STAFF_SERVICE ?? "",
  "breeding-service": process.env.BREEDING_SERVICE ?? "",
  "enclosures-service": process.env.ENCLOSURES_SERVICE ?? "",
  "reports-service": process.env.REPORTS_SERVICE ?? ""
}

export const API_ENDPOINTS = {
  animalsService: {
    animals: {
      index: `${process.env.ANIMALS_SERVICE ?? ""}/api/v1/animals`,
      ids: `${process.env.ANIMALS_SERVICE ?? ""}/api/v1/animals/ids`,
    },
    species: {
      index: `${process.env.ANIMALS_SERVICE ?? ""}/api/v1/species`,
      base: `${process.env.ANIMALS_SERVICE ?? ""}/api/v1/species/base`
    }
  }
}