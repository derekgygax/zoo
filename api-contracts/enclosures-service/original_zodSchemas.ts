import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

const Instant = z.string();
const EnclosureType = z
  .object({
    id: z.string().max(100),
    description: z.string().max(500),
    createdAt: Instant.datetime({ offset: true }).optional(),
    updatedAt: Instant.datetime({ offset: true }).optional(),
  })
  .passthrough();
const EnclosureTypeBase = z
  .object({ id: z.string().max(100), description: z.string().max(500) })
  .passthrough();
const UUID = z.string();
const EnclosureStatus = z.enum([
  "OPEN",
  "UNDER_MAINTENANCE",
  "CLOSED",
  "TEMPORARILY_CLOSED",
  "AWAITING_CLEANING",
  "BEING_RENOVATED",
  "EMERGENCY_LOCKDOWN",
]);
const Enclosure = z
  .object({
    id: UUID.regex(
      /[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}/
    ).uuid(),
    name: z.string().max(100),
    enclosureType: EnclosureType,
    capacity: z.number().int().gte(0),
    status: EnclosureStatus,
    createdAt: Instant.datetime({ offset: true }).optional(),
    updatedAt: Instant.datetime({ offset: true }).optional(),
  })
  .passthrough();
const EnclosureBase = z
  .object({
    name: z.string().max(100),
    enclosureTypeId: z.string(),
    capacity: z.number().int().gte(0),
    status: EnclosureStatus,
  })
  .passthrough();

export const schemas = {
  Instant,
  EnclosureType,
  EnclosureTypeBase,
  UUID,
  EnclosureStatus,
  Enclosure,
  EnclosureBase,
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
    path: "/api/v1/enclosure-types/ids",
    alias: "getApiv1enclosureTypesids",
    requestFormat: "json",
    response: z.array(z.string()),
  },
  {
    method: "get",
    path: "/api/v1/enclosures",
    alias: "getApiv1enclosures",
    requestFormat: "json",
    response: z.array(Enclosure),
  },
  {
    method: "post",
    path: "/api/v1/enclosures",
    alias: "postApiv1enclosures",
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: EnclosureBase,
      },
    ],
    response: z.void(),
  },
  {
    method: "put",
    path: "/api/v1/enclosures/:enclosureId",
    alias: "putApiv1enclosuresEnclosureId",
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: EnclosureBase,
      },
      {
        name: "enclosureId",
        type: "Path",
        schema: z
          .string()
          .regex(
            /[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}/
          )
          .uuid(),
      },
    ],
    response: z.void(),
  },
]);

export const api = new Zodios(endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
