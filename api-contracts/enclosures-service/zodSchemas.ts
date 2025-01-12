import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";
const Instant = z.string();
const EnclosureType = z.object({
  id: z.string().trim().max(100).describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"Enclosure Type\"}"),
  description: z.string().trim().max(500).describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"maxLength\":500},\"needsCoercion\":false,\"title\":\"Enclosure Type Description\"}"),
  createdAt: Instant.datetime({
    offset: true
  }).optional().describe("{\"needsCoercion\":false,\"title\":\"createdAt\"}"),
  updatedAt: Instant.datetime({
    offset: true
  }).optional().describe("{\"needsCoercion\":false,\"title\":\"updatedAt\"}")
}).passthrough();
const EnclosureTypeBase = z.object({
  id: z.string().trim().max(100).describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"Enclosure Type\"}"),
  description: z.string().trim().max(500).describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"maxLength\":500},\"needsCoercion\":false,\"title\":\"Enclosure Type Description\"}")
}).passthrough();
const UUID = z.string();
const EnclosureStatus = z.enum(["OPEN", "UNDER_MAINTENANCE", "CLOSED", "TEMPORARILY_CLOSED", "AWAITING_CLEANING", "BEING_RENOVATED", "EMERGENCY_LOCKDOWN"]);
const Enclosure = z.object({
  id: UUID.regex(/[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}/).uuid().describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"Enclosure ID\"}"),
  name: z.string().trim().max(100).describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"Name\"}"),
  enclosureType: EnclosureType.describe("{\"needsCoercion\":false,\"title\":\"Enclosure Type\"}"),
  capacity: z.coerce.number().int().gte(0).describe("{\"needsCoercion\":true,\"title\":\"Capacity\"}"),
  status: EnclosureStatus.describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"Status\"}"),
  createdAt: Instant.datetime({
    offset: true
  }).optional().describe("{\"needsCoercion\":false,\"title\":\"createdAt\"}"),
  updatedAt: Instant.datetime({
    offset: true
  }).optional().describe("{\"needsCoercion\":false,\"title\":\"updatedAt\"}")
}).passthrough();
const EnclosureBase = z.object({
  name: z.string().trim().max(100).describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"Name\"}"),
  enclosureTypeId: z.string().trim().max(100).describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":true,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"Enclosure Type\"}"),
  capacity: z.coerce.number().int().gte(0).describe("{\"needsCoercion\":true,\"title\":\"Capacity\"}"),
  status: EnclosureStatus.describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"Status\"}")
}).passthrough();
const EnclosureIdentifier = z.object({
  id: UUID.regex(/[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}/).uuid().describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"ID\"}"),
  name: z.string().trim().describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"Name\"}")
}).partial().passthrough();
export const schemas = {
  Instant,
  EnclosureType,
  EnclosureTypeBase,
  UUID,
  EnclosureStatus,
  Enclosure,
  EnclosureBase,
  EnclosureIdentifier
};
const endpoints = makeApi([{
  method: "get",
  path: "/api/v1/enclosure-types",
  alias: "getApiv1enclosureTypes",
  requestFormat: "json",
  response: z.array(EnclosureType)
}, {
  method: "post",
  path: "/api/v1/enclosure-types",
  alias: "postApiv1enclosureTypes",
  requestFormat: "json",
  parameters: [{
    name: "body",
    type: "Body",
    schema: EnclosureTypeBase
  }],
  response: z.void()
}, {
  method: "get",
  path: "/api/v1/enclosure-types/ids",
  alias: "getApiv1enclosureTypesids",
  requestFormat: "json",
  response: z.array(z.string())
}, {
  method: "get",
  path: "/api/v1/enclosures",
  alias: "getApiv1enclosures",
  requestFormat: "json",
  response: z.array(Enclosure)
}, {
  method: "post",
  path: "/api/v1/enclosures",
  alias: "postApiv1enclosures",
  requestFormat: "json",
  parameters: [{
    name: "body",
    type: "Body",
    schema: EnclosureBase
  }],
  response: z.void()
}, {
  method: "put",
  path: "/api/v1/enclosures/:enclosureId",
  alias: "putApiv1enclosuresEnclosureId",
  requestFormat: "json",
  parameters: [{
    name: "body",
    type: "Body",
    schema: EnclosureBase
  }, {
    name: "enclosureId",
    type: "Path",
    schema: z.string().regex(/[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}/).uuid()
  }],
  response: z.void()
}, {
  method: "get",
  path: "/api/v1/enclosures/bases/:enclosureId",
  alias: "getApiv1enclosuresbasesEnclosureId",
  requestFormat: "json",
  parameters: [{
    name: "enclosureId",
    type: "Path",
    schema: z.string().regex(/[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}/).uuid()
  }],
  response: EnclosureBase
}, {
  method: "get",
  path: "/api/v1/enclosures/identifiers",
  alias: "getApiv1enclosuresidentifiers",
  requestFormat: "json",
  response: z.array(EnclosureIdentifier)
}]);
export const api = new Zodios(endpoints);
export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}