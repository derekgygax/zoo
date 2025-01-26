import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

const UUID = z.string();
const Title = z.enum([
  "VETERINARIAN",
  "ZOOKEEPER",
  "ADMINISTRATOR",
  "GUIDE",
  "MAINTENANCE",
  "CURATOR",
  "RESEARCHER",
  "SECURITY",
  "ATTENDANT",
]);
const LocalDate = z.string();
const Instant = z.string();
const Staff = z
  .object({
    id: UUID.regex(
      /[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}/
    ).uuid(),
    firstName: z.string(),
    lastName: z.string(),
    title: Title,
    email: z.string(),
    phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/),
    hireDate: LocalDate,
    startDate: LocalDate,
    createdAt: Instant.datetime({ offset: true }),
    updatedAt: Instant.datetime({ offset: true }),
  })
  .partial()
  .passthrough();
const StaffBase = z
  .object({
    firstName: z.string().max(100),
    lastName: z.string().max(100),
    title: Title,
    email: z.string().max(255).email(),
    phoneNumber: z
      .string()
      .max(15)
      .regex(/^\+?[1-9]\d{1,14}$/),
    hireDate: z.string(),
    startDate: z.string(),
  })
  .passthrough();
const StaffIdentifier = z
  .object({
    id: UUID.regex(
      /[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}/
    ).uuid(),
    firstName: z.string().max(100),
    lastName: z.string().max(100),
  })
  .passthrough();

export const schemas = {
  UUID,
  Title,
  LocalDate,
  Instant,
  Staff,
  StaffBase,
  StaffIdentifier,
};

const endpoints = makeApi([
  {
    method: "get",
    path: "/api/v1/staff",
    alias: "getApiv1staff",
    requestFormat: "json",
    response: z.array(Staff),
  },
  {
    method: "post",
    path: "/api/v1/staff",
    alias: "postApiv1staff",
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: StaffBase,
      },
    ],
    response: z.void(),
  },
  {
    method: "get",
    path: "/api/v1/staff/identifiers",
    alias: "getApiv1staffidentifiers",
    requestFormat: "json",
    response: z.array(StaffIdentifier),
  },
]);

export const api = new Zodios(endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
