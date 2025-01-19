
import { SERVICE } from "@/config/master";
import { SERVICE_MODELS } from "@/config/serviceModels";
import {
  STAFF_SERVICE_MODEL,
  BREEDING_SERVICE_MODEL,
  REPORTS_SERVICE_MODEL,
  ANIMALS_SERVICE_MODEL,
  FOOD_SERVICE_MODEL,
  ENCLOSURES_SERVICE_MODEL
} from "@/config/serviceModels";


export type ServiceModels = {
  [SERVICE.ANIMALS]: typeof ANIMALS_SERVICE_MODEL;
  [SERVICE.ENCLOSURES]: typeof ENCLOSURES_SERVICE_MODEL;
  [SERVICE.FOOD]: typeof FOOD_SERVICE_MODEL;
  [SERVICE.STAFF]: typeof STAFF_SERVICE_MODEL;
  [SERVICE.BREEDING]: typeof BREEDING_SERVICE_MODEL;
  [SERVICE.REPORTS]: typeof REPORTS_SERVICE_MODEL;
};

// This makes somethign like 
// {
//   animals-service: [animal, specie]
// }
// forcing ONLY the models in the animals service to be put in the list
// respective to each service
// AND SHOULD THE PARTIAL BE HERE!!!??
// keyof typeof SERVICE_MODELS[Key] constructs a union of the stuff in a SERVICE of SERVICE_MODELS
// so like "animal" | "specie" ... for animals-service
// (typeof SERVICE_MODELS[Key]) forces that extraction to be that type
// the Key makes it be animals-service or enclosures-service or whatever


// export type ServiceModel<S extends SERVICE> = (typeof SERVICE_MODELS[S])[keyof typeof SERVICE_MODELS[S]];

// TODO I hate this!
// it is forcing the extraction to be a string
// it will always be this but it makes you feel dumb to have it
// TODO fix in the future!
export type ServiceModel<S extends SERVICE> = Extract<
  (typeof SERVICE_MODELS[S])[keyof typeof SERVICE_MODELS[S]],
  string
>;

export type ServiceModelMapping = Partial<{
  [Key in SERVICE]: ServiceModel<Key>[];
}>;

export type ServiceModelMapper<T> = Partial<{
  [Key in SERVICE]: Partial<Record<ServiceModel<Key>, T>>;
}>;