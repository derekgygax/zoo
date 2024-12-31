import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

const SPECIE = z.enum(["TIGER", "SHARK", "PARROT", "ELEPHANT"]);
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
    name: z.string().trim().max(100),
    specie: SPECIE,
    gender: GENDER,
    health: HEALTH_TYPE,
    dob: z.string().trim().refine((value) => !isNaN(Date.parse(value)), { message: "Invalid date" }).describe("date"),
    acquisition_date: z.string().trim().refine((value) => !isNaN(Date.parse(value)), { message: "Invalid date" }).describe("date"),
    id: z.string().trim().uuid(),
    created_at: z.string().trim().datetime({ offset: true }),
    updated_at: z.string().trim().datetime({ offset: true }),
  })
  .passthrough();
const AnimalBase = z
  .object({
    name: z.string().trim().max(100),
    specie: SPECIE,
    gender: GENDER,
    health: HEALTH_TYPE,
    dob: z.string().trim().refine((value) => !isNaN(Date.parse(value)), { message: "Invalid date" }).describe("date"),
    acquisition_date: z.string().trim().refine((value) => !isNaN(Date.parse(value)), { message: "Invalid date" }).describe("date"),
  })
  .passthrough();
const ValidationError = z
  .object({
    loc: z.array(z.union([z.string().trim(), z.number()])),
    msg: z.string().trim(),
    type: z.string().trim(),
  })
  .passthrough();
const HTTPValidationError = z
  .object({ detail: z.array(ValidationError) })
  .partial()
  .passthrough();
const AnimalIdentifier = z
  .object({ id: z.string().trim().uuid(), name: z.string().max(100), specie: SPECIE })
  .passthrough();

export const schemas = {
  SPECIE,
  GENDER,
  HEALTH_TYPE,
  Animal,
  AnimalBase,
  ValidationError,
  HTTPValidationError,
  AnimalIdentifier,
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
        schema: z.string().trim().uuid(),
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
        schema: z.string().trim().uuid(),
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
]);

export const api = new Zodios(endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
