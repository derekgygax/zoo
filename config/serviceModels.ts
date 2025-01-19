import { SERVICE } from "./master"

import { ServiceModels } from "@/types/serviceModels";

export enum ANIMALS_SERVICE_MODEL {
  ANIMAL = "animal",
  SPECIE = "specie",
  EVENT = "event",
  MEDICAL_RECORD = "medical_record"
}

export enum FOOD_SERVICE_MODEL {
  STORAGE_UNIT_TYPE = "storage_unit_type",
  STORAGE_UNIT = "storage_unit",
  FOOD_TYPE = "food_type",
  FOOD_STOCK = "food_stock"
}

export enum ENCLOSURES_SERVICE_MODEL {
  ENCLOSURE = "enclosure",
  ENCLOSURE_TYPE = "enclosureType"
}

export enum STAFF_SERVICE_MODEL {
  STAFF = "staff"
}

export enum REPORTS_SERVICE_MODEL {
  REPORT = "report"
}

export enum BREEDING_SERVICE_MODEL {
  LITTER = "litter"
}

export const SERVICE_MODELS: ServiceModels = {
  [SERVICE.ANIMALS]: ANIMALS_SERVICE_MODEL,
  [SERVICE.ENCLOSURES]: ENCLOSURES_SERVICE_MODEL,
  [SERVICE.FOOD]: FOOD_SERVICE_MODEL,
  [SERVICE.STAFF]: STAFF_SERVICE_MODEL,
  [SERVICE.BREEDING]: BREEDING_SERVICE_MODEL,
  [SERVICE.REPORTS]: REPORTS_SERVICE_MODEL,
};