import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";
const UUID = z.string();
const Instant = z.string();
const Department = z.object({
  id: UUID.regex(/[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}/).uuid().describe("{\"needsCoercion\":false,\"title\":\"id\"}"),
  name: z.string().trim().describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"isEmail\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"name\"}"),
  description: z.string().trim().describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"isEmail\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"description\"}"),
  createdAt: Instant.datetime({
    offset: true
  }).describe("{\"needsCoercion\":false,\"title\":\"createdAt\"}"),
  updatedAt: Instant.datetime({
    offset: true
  }).describe("{\"needsCoercion\":false,\"title\":\"updatedAt\"}")
}).partial().passthrough();
const DepartmentBase = z.object({
  name: z.string().trim().max(100).describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"isEmail\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"Name\"}"),
  description: z.string().trim().max(500).describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"isEmail\":false,\"maxLength\":500},\"needsCoercion\":false,\"title\":\"Description\"}")
}).passthrough();
const DepartmentIdentifier = z.object({
  id: UUID.regex(/[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}/).uuid().describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"isEmail\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"ID\"}"),
  name: z.string().trim().max(100).describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"isEmail\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"Name\"}")
}).passthrough();
const Title = z.enum(["VETERINARIAN", "ZOOKEEPER", "ADMINISTRATOR", "GUIDE", "MAINTENANCE", "CURATOR", "RESEARCHER", "SECURITY", "ATTENDANT"]);
const LocalDate = z.string();
const Staff = z.object({
  id: UUID.regex(/[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}/).uuid().describe("{\"needsCoercion\":false,\"title\":\"id\"}"),
  firstName: z.string().trim().describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"isEmail\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"firstName\"}"),
  lastName: z.string().trim().describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"isEmail\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"lastName\"}"),
  title: Title.describe("{\"needsCoercion\":false,\"title\":\"title\"}"),
  email: z.string().trim().describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"isEmail\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"email\"}"),
  phoneNumber: z.string().trim().regex(/^\+?[1-9]\d{1,14}$/).describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"isEmail\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"phoneNumber\"}"),
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
  firstName: z.string().trim().max(100).describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"isEmail\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"First Name\"}"),
  lastName: z.string().trim().max(100).describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"isEmail\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"Last Name\"}"),
  title: Title.describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"isEmail\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"Title\"}"),
  email: z.string().trim().max(255).email().describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"isEmail\":true,\"maxLength\":255},\"needsCoercion\":false,\"title\":\"Email\"}"),
  phoneNumber: z.string().trim().max(15).regex(/^\+?[1-9]\d{1,14}$/).describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"isEmail\":false,\"maxLength\":15},\"needsCoercion\":false,\"title\":\"Phone Number\"}"),
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
  }).describe("{\"stringMeta\":{\"isDate\":true,\"isSelector\":false,\"isEmail\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"Hire Date\"}"),
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
  }).describe("{\"stringMeta\":{\"isDate\":true,\"isSelector\":false,\"isEmail\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"Start Date\"}")
}).passthrough();
const StaffIdentifier = z.object({
  id: UUID.regex(/[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}/).uuid().describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"isEmail\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"ID\"}"),
  firstName: z.string().trim().max(100).describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"isEmail\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"First Name\"}"),
  lastName: z.string().trim().max(100).describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"isEmail\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"Last Name\"}")
}).passthrough();
const StaffDepartment = z.object({
  id: UUID.regex(/[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}/).uuid().describe("{\"needsCoercion\":false,\"title\":\"id\"}"),
  department: Department.describe("{\"needsCoercion\":false,\"title\":\"department\"}"),
  staff: Staff.describe("{\"needsCoercion\":false,\"title\":\"staff\"}"),
  role: z.string().trim().describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"isEmail\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"role\"}"),
  createdAt: Instant.datetime({
    offset: true
  }).describe("{\"needsCoercion\":false,\"title\":\"createdAt\"}"),
  updatedAt: Instant.datetime({
    offset: true
  }).describe("{\"needsCoercion\":false,\"title\":\"updatedAt\"}")
}).partial().passthrough();
const StaffDepartmentBase = z.object({
  staffId: z.string().trim().regex(/[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}/).describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":true,\"isEmail\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"Staff\"}"),
  departmentId: z.string().trim().regex(/[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}/).describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":true,\"isEmail\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"Department\"}"),
  role: z.string().trim().describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"isEmail\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"Role\"}")
}).passthrough();
const StaffDepartmentIdentifierResponse = z.object({
  id: UUID.regex(/[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}/).uuid().describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"isEmail\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"ID\"}"),
  label: z.string().trim().describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"isEmail\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"Label\"}")
}).passthrough();
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
  StaffDepartment,
  StaffDepartmentBase,
  StaffDepartmentIdentifierResponse
};
const endpoints = makeApi([{
  method: "get",
  path: "/api/v1/departments",
  alias: "getApiv1departments",
  requestFormat: "json",
  response: z.array(Department)
}, {
  method: "post",
  path: "/api/v1/departments",
  alias: "postApiv1departments",
  requestFormat: "json",
  parameters: [{
    name: "body",
    type: "Body",
    schema: DepartmentBase
  }],
  response: z.void()
}, {
  method: "put",
  path: "/api/v1/departments/:departmentId",
  alias: "putApiv1departmentsDepartmentId",
  requestFormat: "json",
  parameters: [{
    name: "body",
    type: "Body",
    schema: DepartmentBase
  }, {
    name: "departmentId",
    type: "Path",
    schema: z.string().regex(/[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}/).uuid()
  }],
  response: z.void()
}, {
  method: "get",
  path: "/api/v1/departments/:departmentId/base",
  alias: "getApiv1departmentsDepartmentIdbase",
  requestFormat: "json",
  parameters: [{
    name: "departmentId",
    type: "Path",
    schema: z.string().regex(/[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}/).uuid()
  }],
  response: DepartmentBase
}, {
  method: "get",
  path: "/api/v1/departments/identifiers",
  alias: "getApiv1departmentsidentifiers",
  requestFormat: "json",
  response: z.array(DepartmentIdentifier)
}, {
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
  method: "put",
  path: "/api/v1/staff/:staffId",
  alias: "putApiv1staffStaffId",
  requestFormat: "json",
  parameters: [{
    name: "body",
    type: "Body",
    schema: StaffBase
  }, {
    name: "staffId",
    type: "Path",
    schema: z.string().regex(/[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}/).uuid()
  }],
  response: z.void()
}, {
  method: "get",
  path: "/api/v1/staff/:staffId/base",
  alias: "getApiv1staffStaffIdbase",
  requestFormat: "json",
  parameters: [{
    name: "staffId",
    type: "Path",
    schema: z.string().regex(/[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}/).uuid()
  }],
  response: StaffBase
}, {
  method: "get",
  path: "/api/v1/staff/identifiers",
  alias: "getApiv1staffidentifiers",
  requestFormat: "json",
  response: z.array(StaffIdentifier)
}, {
  method: "get",
  path: "/api/vi/staff-departments",
  alias: "getApivistaffDepartments",
  requestFormat: "json",
  response: z.array(StaffDepartment)
}, {
  method: "post",
  path: "/api/vi/staff-departments",
  alias: "postApivistaffDepartments",
  requestFormat: "json",
  parameters: [{
    name: "body",
    type: "Body",
    schema: StaffDepartmentBase
  }],
  response: z.void()
}, {
  method: "put",
  path: "/api/vi/staff-departments/:staffDepartmentId",
  alias: "putApivistaffDepartmentsStaffDepartmentId",
  requestFormat: "json",
  parameters: [{
    name: "body",
    type: "Body",
    schema: StaffDepartmentBase
  }, {
    name: "staffDepartmentId",
    type: "Path",
    schema: z.string().regex(/[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}/).uuid()
  }],
  response: z.void()
}, {
  method: "get",
  path: "/api/vi/staff-departments/:staffDepartmentId/base",
  alias: "getApivistaffDepartmentsStaffDepartmentIdbase",
  requestFormat: "json",
  parameters: [{
    name: "staffDepartmentId",
    type: "Path",
    schema: z.string().regex(/[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}/).uuid()
  }],
  response: StaffDepartmentBase
}, {
  method: "get",
  path: "/api/vi/staff-departments/identifiers",
  alias: "getApivistaffDepartmentsidentifiers",
  requestFormat: "json",
  response: z.array(StaffDepartmentIdentifierResponse)
}]);
export const api = new Zodios(endpoints);
export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}