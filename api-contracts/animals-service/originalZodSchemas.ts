import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

const GENDER = z.enum(["MALE", "FEMALE", "HERMAPHRODITE", "ASEXUAL"]);
const HEALTH_TYPE = z.enum([
  "HEALTHY",
  "SICK",
  "UNDER_OBSERVATION",
  "INJURED",
  "RECOVERING",
  "DECEASED",
]);
const Animal = z
  .object({
    name: z.string().max(100),
    specie_id: z.string().max(100),
    gender: GENDER,
    health: HEALTH_TYPE,
    dob: z.string(),
    acquisition_date: z.string(),
    id: z.string().uuid(),
    created_at: z.string().datetime({ offset: true }),
    updated_at: z.string().datetime({ offset: true }),
  })
  .passthrough();
const AnimalBase = z
  .object({
    name: z.string().max(100),
    specie_id: z.string().max(100),
    gender: GENDER,
    health: HEALTH_TYPE,
    dob: z.string(),
    acquisition_date: z.string(),
  })
  .passthrough();
const ValidationError = z
  .object({
    loc: z.array(z.union([z.string(), z.number()])),
    msg: z.string(),
    type: z.string(),
  })
  .passthrough();
const HTTPValidationError = z
  .object({ detail: z.array(ValidationError) })
  .partial()
  .passthrough();
const ModelIdentifier = z
  .object({ id: z.string(), label: z.string() })
  .passthrough();
const DIET_TYPE = z.enum([
  "HERBIVORE",
  "CARNIVORE",
  "OMNIVORE",
  "INSECTIVORE",
  "PISCIVORE",
]);
const CONSERVATION_STATUS = z.enum([
  "EXTINCT",
  "EXTINCT_IN_WILD",
  "CRITICALLY_ENDANGERED",
  "ENDANGERED",
  "VULNERABLE",
  "NEAR_THREATENED",
  "LEAST_CONCERN",
  "DATA_DEFICIENT",
  "NOT_EVALUATED",
]);
const SpecieBase = z
  .object({
    scientific_name: z.string().max(100),
    common_name: z.string().max(100),
    lifespan: z.number().int().gte(0),
    diet: DIET_TYPE,
    conservation_status: CONSERVATION_STATUS,
    description: z.string().max(500),
  })
  .passthrough();
const AnimalImageInBio = z
  .object({
    is_primary: z.boolean(),
    url: z.string(),
    width: z.number().int(),
    height: z.number().int(),
  })
  .passthrough();
const InfoItem = z
  .object({ title: z.string(), description: z.string() })
  .passthrough();
const AnimalBio = z
  .object({
    name: z.string().max(100),
    specie_id: z.string().max(100),
    gender: GENDER,
    health: HEALTH_TYPE,
    dob: z.string(),
    acquisition_date: z.string(),
    specie: SpecieBase,
    images: z.array(AnimalImageInBio),
    info: z.array(InfoItem),
  })
  .passthrough();
const Specie = z
  .object({
    scientific_name: z.string().max(100),
    common_name: z.string().max(100),
    lifespan: z.number().int().gte(0),
    diet: DIET_TYPE,
    conservation_status: CONSERVATION_STATUS,
    description: z.string().max(500),
    created_at: z.string().datetime({ offset: true }),
    updated_at: z.string().datetime({ offset: true }),
  })
  .passthrough();
const AnimalCategory = z
  .object({
    name: z.string().max(100),
    description: z.string().max(1000),
    id: z.string().uuid(),
    created_at: z.string().datetime({ offset: true }),
    updated_at: z.string().datetime({ offset: true }),
  })
  .passthrough();
const AnimalCategoryBase = z
  .object({ name: z.string().max(100), description: z.string().max(1000) })
  .passthrough();
const AnimalsInCategory = z
  .object({
    category_name: z.string().max(100),
    animals: z.array(ModelIdentifier),
  })
  .passthrough();

export const schemas = {
  GENDER,
  HEALTH_TYPE,
  Animal,
  AnimalBase,
  ValidationError,
  HTTPValidationError,
  ModelIdentifier,
  DIET_TYPE,
  CONSERVATION_STATUS,
  SpecieBase,
  AnimalImageInBio,
  InfoItem,
  AnimalBio,
  Specie,
  AnimalCategory,
  AnimalCategoryBase,
  AnimalsInCategory,
};

const endpoints = makeApi([
  {
    method: "get",
    path: "/",
    alias: "root__get",
    requestFormat: "json",
    response: z.unknown(),
  },
  {
    method: "get",
    path: "/api/v1/animal-categories",
    alias: "get_animal_categories_api_v1_animal_categories_get",
    requestFormat: "json",
    response: z.array(AnimalCategory),
  },
  {
    method: "get",
    path: "/api/v1/animal-categories/:animal_category_id/base",
    alias:
      "get_animal_base_by_id_api_v1_animal_categories__animal_category_id__base_get",
    requestFormat: "json",
    parameters: [
      {
        name: "animal_category_id",
        type: "Path",
        schema: z.string().uuid(),
      },
    ],
    response: AnimalCategoryBase,
    errors: [
      {
        status: 422,
        description: `Validation Error`,
        schema: HTTPValidationError,
      },
    ],
  },
  {
    method: "get",
    path: "/api/v1/animal-categories/animals-by-category",
    alias:
      "get_animal_base_by_id_api_v1_animal_categories_animals_by_category_get",
    requestFormat: "json",
    response: z.array(AnimalsInCategory),
  },
  {
    method: "get",
    path: "/api/v1/animals",
    alias: "get_animals_api_v1_animals_get",
    requestFormat: "json",
    response: z.array(Animal),
  },
  {
    method: "post",
    path: "/api/v1/animals",
    alias: "add_animal_api_v1_animals_post",
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: AnimalBase,
      },
    ],
    response: z.unknown(),
    errors: [
      {
        status: 422,
        description: `Validation Error`,
        schema: HTTPValidationError,
      },
    ],
  },
  {
    method: "put",
    path: "/api/v1/animals/:animal_id",
    alias: "update_animal_api_v1_animals__animal_id__put",
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: AnimalBase,
      },
      {
        name: "animal_id",
        type: "Path",
        schema: z.string().uuid(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 422,
        description: `Validation Error`,
        schema: HTTPValidationError,
      },
    ],
  },
  {
    method: "get",
    path: "/api/v1/animals/:animal_id/base",
    alias: "get_animal_base_by_id_api_v1_animals__animal_id__base_get",
    requestFormat: "json",
    parameters: [
      {
        name: "animal_id",
        type: "Path",
        schema: z.string().uuid(),
      },
    ],
    response: AnimalBase,
    errors: [
      {
        status: 422,
        description: `Validation Error`,
        schema: HTTPValidationError,
      },
    ],
  },
  {
    method: "get",
    path: "/api/v1/animals/:animal_id/bio",
    alias: "get_animal_base_by_id_api_v1_animals__animal_id__bio_get",
    requestFormat: "json",
    parameters: [
      {
        name: "animal_id",
        type: "Path",
        schema: z.string().uuid(),
      },
    ],
    response: AnimalBio,
    errors: [
      {
        status: 422,
        description: `Validation Error`,
        schema: HTTPValidationError,
      },
    ],
  },
  {
    method: "get",
    path: "/api/v1/animals/identifiers",
    alias: "get_animal_ids_api_v1_animals_identifiers_get",
    requestFormat: "json",
    response: z.array(ModelIdentifier),
  },
  {
    method: "get",
    path: "/api/v1/species",
    alias: "get_species_api_v1_species_get",
    requestFormat: "json",
    response: z.array(Specie),
  },
  {
    method: "post",
    path: "/api/v1/species",
    alias: "add_specie_api_v1_species_post",
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: SpecieBase,
      },
    ],
    response: z.unknown(),
    errors: [
      {
        status: 422,
        description: `Validation Error`,
        schema: HTTPValidationError,
      },
    ],
  },
  {
    method: "put",
    path: "/api/v1/species/:specie_id",
    alias: "update_specie_api_v1_species__specie_id__put",
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: SpecieBase,
      },
      {
        name: "specie_id",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 422,
        description: `Validation Error`,
        schema: HTTPValidationError,
      },
    ],
  },
  {
    method: "get",
    path: "/api/v1/species/:specie_id/base",
    alias: "get_species_base_api_v1_species__specie_id__base_get",
    requestFormat: "json",
    parameters: [
      {
        name: "specie_id",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: SpecieBase,
    errors: [
      {
        status: 422,
        description: `Validation Error`,
        schema: HTTPValidationError,
      },
    ],
  },
  {
    method: "get",
    path: "/api/v1/species/bases",
    alias: "get_species_bases_api_v1_species_bases_get",
    requestFormat: "json",
    response: z.array(SpecieBase),
  },
  {
    method: "get",
    path: "/api/v1/species/identifiers",
    alias: "get_specie_identifiers_api_v1_species_identifiers_get",
    requestFormat: "json",
    response: z.array(ModelIdentifier),
  },
  {
    method: "get",
    path: "/api/v1/species/ids",
    alias: "get_specie_keys_api_v1_species_ids_get",
    requestFormat: "json",
    response: z.array(z.string()),
  },
]);

export const api = new Zodios(endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
