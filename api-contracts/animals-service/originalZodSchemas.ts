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
const Specie = z
  .object({
    id: z.string().max(100),
    description: z.string().max(500),
    created_at: z.string().datetime({ offset: true }),
    updated_at: z.string().datetime({ offset: true }),
  })
  .passthrough();
const SpecieBase = z
  .object({ id: z.string().max(100), description: z.string().max(500) })
  .passthrough();

export const schemas = {
  GENDER,
  HEALTH_TYPE,
  Animal,
  AnimalBase,
  ValidationError,
  HTTPValidationError,
  ModelIdentifier,
  Specie,
  SpecieBase,
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
    path: "/api/v1/animals/",
    alias: "get_animals_api_v1_animals__get",
    requestFormat: "json",
    response: z.array(Animal),
  },
  {
    method: "post",
    path: "/api/v1/animals/",
    alias: "add_animal_api_v1_animals__post",
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
    method: "get",
    path: "/api/v1/animals/:animal_id",
    alias: "get_animal_base_by_id_api_v1_animals__animal_id__get",
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
    path: "/api/v1/animals/identifiers",
    alias: "get_animal_ids_api_v1_animals_identifiers_get",
    requestFormat: "json",
    response: z.array(ModelIdentifier),
  },
  {
    method: "get",
    path: "/api/v1/species/",
    alias: "get_species_api_v1_species__get",
    requestFormat: "json",
    response: z.array(Specie),
  },
  {
    method: "post",
    path: "/api/v1/species/",
    alias: "add_specie_api_v1_species__post",
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
