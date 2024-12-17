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
    name: z.string().max(100),
    specie: SPECIE,
    dob: z.string(),
    gender: GENDER,
    health: HEALTH_TYPE,
    acquisition_date: z.string(),
    id: z.string().uuid(),
    created_at: z.string().datetime({ offset: true }),
    updated_at: z.string().datetime({ offset: true }),
  })
  .passthrough();
const AnimalBase = z
  .object({
    name: z.string().max(100),
    specie: SPECIE,
    dob: z.string(),
    gender: GENDER,
    health: HEALTH_TYPE,
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

export const schemas = {
  SPECIE,
  GENDER,
  HEALTH_TYPE,
  Animal,
  AnimalBase,
  ValidationError,
  HTTPValidationError,
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
]);

export const api = new Zodios(endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
