import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

const UUID = z.string();
const Instant = z.string();
const Department = z
  .object({
    id: UUID.regex(
      /[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}/
    ).uuid(),
    name: z.string(),
    description: z.string(),
    createdAt: Instant.datetime({ offset: true }),
    updatedAt: Instant.datetime({ offset: true }),
  })
  .partial()
  .passthrough();
const DepartmentBase = z
  .object({ name: z.string().max(100), description: z.string().max(500) })
  .passthrough();
const DepartmentIdentifier = z
  .object({
    id: UUID.regex(
      /[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}/
    ).uuid(),
    name: z.string().max(100),
  })
  .passthrough();
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
  Instant,
  Department,
  DepartmentBase,
  DepartmentIdentifier,
  Title,
  LocalDate,
  Staff,
  StaffBase,
  StaffIdentifier,
};

const endpoints = makeApi([
  {
    method: "get",
    path: "/api/v1/departments",
    alias: "getApiv1departments",
    requestFormat: "json",
    response: z.array(Department),
  },
  {
    method: "post",
    path: "/api/v1/departments",
    alias: "postApiv1departments",
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: DepartmentBase,
      },
    ],
    response: z.void(),
  },
  {
    method: "put",
    path: "/api/v1/departments/:departmentId",
    alias: "putApiv1departmentsDepartmentId",
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: DepartmentBase,
      },
      {
        name: "departmentId",
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
  {
    method: "get",
    path: "/api/v1/departments/:departmentId/base",
    alias: "getApiv1departmentsDepartmentIdbase",
    requestFormat: "json",
    parameters: [
      {
        name: "departmentId",
        type: "Path",
        schema: z
          .string()
          .regex(
            /[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}/
          )
          .uuid(),
      },
    ],
    response: DepartmentBase,
  },
  {
    method: "get",
    path: "/api/v1/departments/identifiers",
    alias: "getApiv1departmentsidentifiers",
    requestFormat: "json",
    response: z.array(DepartmentIdentifier),
  },
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
    method: "put",
    path: "/api/v1/staff/:staffId",
    alias: "putApiv1staffStaffId",
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: StaffBase,
      },
      {
        name: "staffId",
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
  {
    method: "get",
    path: "/api/v1/staff/:staffId/base",
    alias: "getApiv1staffStaffIdbase",
    requestFormat: "json",
    parameters: [
      {
        name: "staffId",
        type: "Path",
        schema: z
          .string()
          .regex(
            /[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}/
          )
          .uuid(),
      },
    ],
    response: StaffBase,
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
