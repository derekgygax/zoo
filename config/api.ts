export const APIS = {
  animalsService: {
    animals: {
      index: `${process.env.ANIMALS_SERVICE ?? ""}/api/v1/animals`,
      ids: `${process.env.ANIMALS_SERVICE ?? ""}/api/v1/animals/ids`,
    }
  }
}