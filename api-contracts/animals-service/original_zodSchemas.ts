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
    specie_name: z.string().max(100),
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
    specie_name: z.string().max(100),
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
const AnimalIdentifier = z
  .object({
    id: z.string().uuid(),
    name: z.string().max(100),
    specie_name: z.string().max(100),
  })
  .passthrough();
const Specie = z
  .object({
    name: z.string().max(100),
    description: z.string().max(500),
    created_at: z.string().datetime({ offset: true }),
    updated_at: z.string().datetime({ offset: true }),
  })
  .passthrough();
const SpecieBase = z
  .object({ name: z.string().max(100), description: z.string().max(500) })
  .passthrough();

export const schemas = {
  GENDER,
  HEALTH_TYPE,
  Animal,
  AnimalBase,
  ValidationError,
  HTTPValidationError,
  AnimalIdentifier,
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
    path: "/api/v1/animals/:animalId",
    alias: "get_animal_base_by_id_api_v1_animals__animalId__get",
    requestFormat: "json",
    parameters: [
      {
        name: "animalId",
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
    method: "post",
    path: "/api/v1/animals/:animalId",
    alias: "update_animal_api_v1_animals__animalId__post",
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: AnimalBase,
      },
      {
        name: "animalId",
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
    path: "/api/v1/animals/ids",
    alias: "get_animals_api_v1_animals_ids_get",
    requestFormat: "json",
    response: z.array(AnimalIdentifier),
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
    method: "post",
    path: "/api/v1/species/:specie_name",
    alias: "update_animal_api_v1_species__specie_name__post",
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: Specie,
      },
      {
        name: "specie_name",
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
    path: "/api/v1/species/base",
    alias: "get_species_base_api_v1_species_base_get",
    requestFormat: "json",
    response: z.array(SpecieBase),
  },
]);

export const api = new Zodios(endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
