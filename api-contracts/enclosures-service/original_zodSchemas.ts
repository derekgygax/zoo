import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

const Instant = z.string();
const EnclosureType = z
  .object({
    type: z.string().max(100),
    description: z.string().max(500),
    createdAt: Instant.datetime({ offset: true }).optional(),
    updatedAt: Instant.datetime({ offset: true }).optional(),
  })
  .passthrough();
const EnclosureTypeBase = z
  .object({ type: z.string().max(100), description: z.string().max(500) })
  .passthrough();

export const schemas = {
  Instant,
  EnclosureType,
  EnclosureTypeBase,
};

const endpoints = makeApi([
  {
    method: "get",
    path: "/api/v1/enclosure-types",
    alias: "getApiv1enclosureTypes",
    requestFormat: "json",
    response: z.array(EnclosureType),
  },
  {
    method: "post",
    path: "/api/v1/enclosure-types",
    alias: "postApiv1enclosureTypes",
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: EnclosureTypeBase,
      },
    ],
    response: z.void(),
  },
  {
    method: "get",
    path: "/api/v1/enclosure-types/keys",
    alias: "getApiv1enclosureTypeskeys",
    requestFormat: "json",
    response: z.array(z.string()),
  },
]);

export const api = new Zodios(endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
