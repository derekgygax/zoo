import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

const EXAMPLE = z.literal("EXAMPLE");
const Example = z
  .object({
    name: z.string(),
    type: EXAMPLE,
    id: z.string().uuid(),
    created_at: z.string().datetime({ offset: true }),
    updated_at: z.string().datetime({ offset: true }),
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
