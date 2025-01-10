import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";
const Instant = z.string();
const EnclosureType = z.object({
  type: z.string().trim().max(100).describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"maxLength\":100},\"title\":\"type\"}"),
  description: z.string().trim().max(500).describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"maxLength\":500},\"title\":\"description\"}"),
  createdAt: Instant.datetime({
    offset: true
  }).optional().describe("{\"title\":\"createdAt\"}"),
  updatedAt: Instant.datetime({
    offset: true
  }).optional().describe("{\"title\":\"updatedAt\"}")
}).passthrough();
const EnclosureTypeBase = z.object({
  type: z.string().trim().max(100).describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"maxLength\":100},\"title\":\"Enclosure Type\"}"),
  description: z.string().trim().max(500).describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"maxLength\":500},\"title\":\"Enclosure Type Description\"}")
}).passthrough();
export const schemas = {
  Instant,
  EnclosureType,
  EnclosureTypeBase
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
  path: "/api/v1/enclosure-types/keys",
  alias: "getApiv1enclosureTypeskeys",
  requestFormat: "json",
  response: z.array(z.string())
}]);
export const api = new Zodios(endpoints);
export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}