import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";
const UUID = z.string();
const Title = z.enum(["VETERINARIAN", "ZOOKEEPER", "ADMINISTRATOR", "GUIDE", "MAINTENANCE", "CURATOR", "RESEARCHER", "SECURITY", "ATTENDANT"]);
const LocalDate = z.string();
const Instant = z.string();
const Staff = z.object({
  id: UUID.regex(/[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}/).uuid().describe("{\"needsCoercion\":false,\"title\":\"id\"}"),
  firstName: z.string().trim().describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"firstName\"}"),
  lastName: z.string().trim().describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"lastName\"}"),
  title: Title.describe("{\"needsCoercion\":false,\"title\":\"title\"}"),
  email: z.string().trim().describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"email\"}"),
  phoneNumber: z.string().trim().regex(/^\+?[1-9]\d{1,14}$/).describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"phoneNumber\"}"),
  hireDate: LocalDate.describe("{\"needsCoercion\":false,\"title\":\"hireDate\"}"),
  startDate: LocalDate.describe("{\"needsCoercion\":false,\"title\":\"startDate\"}"),
  createdAt: Instant.datetime({
    offset: true
  }).describe("{\"needsCoercion\":false,\"title\":\"createdAt\"}"),
  updatedAt: Instant.datetime({
    offset: true
  }).describe("{\"needsCoercion\":false,\"title\":\"updatedAt\"}")
}).partial().passthrough();
const StaffBase = z.object({
  firstName: z.string().trim().max(100).describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"First Name\"}"),
  lastName: z.string().trim().max(100).describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"Last Name\"}"),
  title: Title.describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"Title\"}"),
  email: z.string().trim().max(255).email().describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"maxLength\":255},\"needsCoercion\":false,\"title\":\"Email\"}"),
  phoneNumber: z.string().trim().max(15).regex(/^\+?[1-9]\d{1,14}$/).describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"maxLength\":15},\"needsCoercion\":false,\"title\":\"Phone Number\"}"),
  hireDate: z.string().trim().refine(value => {
    const parsedDate = Date.parse(value);
    const isValidDate = !isNaN(parsedDate);
    if (isValidDate) {
      const dateObject = new Date(parsedDate);
      const minDate = new Date("1900-01-01");
      const maxDate = new Date("2100-12-31");
      return dateObject >= minDate && dateObject <= maxDate;
    } else {
      return false;
    }
  }, {
    message: "Invalid date or out of range (1900-2100)"
  }).describe("{\"stringMeta\":{\"isDate\":true,\"isSelector\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"Hire Date\"}"),
  startDate: z.string().trim().refine(value => {
    const parsedDate = Date.parse(value);
    const isValidDate = !isNaN(parsedDate);
    if (isValidDate) {
      const dateObject = new Date(parsedDate);
      const minDate = new Date("1900-01-01");
      const maxDate = new Date("2100-12-31");
      return dateObject >= minDate && dateObject <= maxDate;
    } else {
      return false;
    }
  }, {
    message: "Invalid date or out of range (1900-2100)"
  }).describe("{\"stringMeta\":{\"isDate\":true,\"isSelector\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"Start Date\"}")
}).passthrough();
const StaffIdentifier = z.object({
  id: UUID.regex(/[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}/).uuid().describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"ID\"}"),
  firstName: z.string().trim().max(100).describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"First Name\"}"),
  lastName: z.string().trim().max(100).describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"Last Name\"}")
}).passthrough();
export const schemas = {
  UUID,
  Title,
  LocalDate,
  Instant,
  Staff,
  StaffBase,
  StaffIdentifier
};
const endpoints = makeApi([{
  method: "get",
  path: "/api/v1/staff",
  alias: "getApiv1staff",
  requestFormat: "json",
  response: z.array(Staff)
}, {
  method: "post",
  path: "/api/v1/staff",
  alias: "postApiv1staff",
  requestFormat: "json",
  parameters: [{
    name: "body",
    type: "Body",
    schema: StaffBase
  }],
  response: z.void()
}, {
  method: "get",
  path: "/api/v1/staff/identifiers",
  alias: "getApiv1staffidentifiers",
  requestFormat: "json",
  response: z.array(StaffIdentifier)
}]);
export const api = new Zodios(endpoints);
export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}