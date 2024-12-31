import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

const EXAMPLE = z.literal("EXAMPLE");
const Example = z
  .object({
    name: z.string().trim(),
    type: EXAMPLE,
    id: z.string().trim().uuid(),
    created_at: z.string().trim().datetime({ offset: true }),
    updated_at: z.string().trim().datetime({ offset: true }),
  })
  .passthrough();

export const schemas = {
  EXAMPLE,
  Example,
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
    path: "/api/v1/examples/",
    alias: "get_animals_api_v1_examples__get",
    requestFormat: "json",
    response: z.array(Example),
  },
]);

export const api = new Zodios(endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
