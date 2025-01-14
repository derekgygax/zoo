import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";
const GENDER = z.enum(["MALE", "FEMALE", "HERMAPHRODITE", "ASEXUAL"]);
const HEALTH_TYPE = z.enum(["HEALTHY", "SICK", "UNDER_OBSERVATION", "INJURED", "RECOVERING", "DECEASED"]);
const Animal = z.object({
  name: z.string().trim().max(100).describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"Name\"}"),
  specie_id: z.string().trim().max(100).describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":true,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"Specie\"}"),
  gender: GENDER.describe("{\"needsCoercion\":false,\"title\":\"Gender\"}"),
  health: HEALTH_TYPE.describe("{\"needsCoercion\":false,\"title\":\"Health\"}"),
  dob: z.string().trim().refine(value => {
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
  }).describe("{\"stringMeta\":{\"isDate\":true,\"isSelector\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"DOB\"}"),
  acquisition_date: z.string().trim().refine(value => {
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
  }).describe("{\"stringMeta\":{\"isDate\":true,\"isSelector\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"Aquisition Date\"}"),
  id: z.string().trim().uuid().describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"Id\"}"),
  created_at: z.string().trim().datetime({
    offset: true
  }).describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"Created At\"}"),
  updated_at: z.string().trim().datetime({
    offset: true
  }).describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"Updated At\"}")
}).passthrough();
const AnimalBase = z.object({
  name: z.string().trim().max(100).describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"Name\"}"),
  specie_id: z.string().trim().max(100).describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":true,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"Specie\"}"),
  gender: GENDER.describe("{\"needsCoercion\":false,\"title\":\"Gender\"}"),
  health: HEALTH_TYPE.describe("{\"needsCoercion\":false,\"title\":\"Health\"}"),
  dob: z.string().trim().refine(value => {
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
  }).describe("{\"stringMeta\":{\"isDate\":true,\"isSelector\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"DOB\"}"),
  acquisition_date: z.string().trim().refine(value => {
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
  }).describe("{\"stringMeta\":{\"isDate\":true,\"isSelector\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"Aquisition Date\"}")
}).passthrough();
const ValidationError = z.object({
  loc: z.array(z.union([z.string(), z.number()])).describe("{\"needsCoercion\":false,\"title\":\"Location\"}"),
  msg: z.string().trim().describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"Message\"}"),
  type: z.string().trim().describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"Error Type\"}")
}).passthrough();
const HTTPValidationError = z.object({
  detail: z.array(ValidationError).describe("{\"needsCoercion\":false,\"title\":\"Detail\"}")
}).partial().passthrough();
const AnimalIdentifier = z.object({
  id: z.string().trim().uuid().describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"ID\"}"),
  name: z.string().trim().max(100).describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"Name\"}"),
  specie_id: z.string().trim().max(100).describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":true,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"Specie\"}")
}).passthrough();
const Specie = z.object({
  id: z.string().trim().max(100).describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"Specie\"}"),
  description: z.string().trim().max(500).describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"maxLength\":500},\"needsCoercion\":false,\"title\":\"Specie Description\"}"),
  created_at: z.string().trim().datetime({
    offset: true
  }).describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"Created At\"}"),
  updated_at: z.string().trim().datetime({
    offset: true
  }).describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"Updated At\"}")
}).passthrough();
const SpecieBase = z.object({
  id: z.string().trim().max(100).describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"Specie\"}"),
  description: z.string().trim().max(500).describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"maxLength\":500},\"needsCoercion\":false,\"title\":\"Specie Description\"}")
}).passthrough();
export const schemas = {
  GENDER,
  HEALTH_TYPE,
  Animal,
  AnimalBase,
  ValidationError,
  HTTPValidationError,
  AnimalIdentifier,
  Specie,
  SpecieBase
};
const endpoints = makeApi([{
  method: "get",
  path: "/",
  alias: "root__get",
  requestFormat: "json",
  response: z.unknown()
}, {
  method: "get",
  path: "/api/v1/animals/",
  alias: "get_animals_api_v1_animals__get",
  requestFormat: "json",
  response: z.array(Animal)
}, {
  method: "post",
  path: "/api/v1/animals/",
  alias: "add_animal_api_v1_animals__post",
  requestFormat: "json",
  parameters: [{
    name: "body",
    type: "Body",
    schema: AnimalBase
  }],
  response: z.unknown(),
  errors: [{
    status: 422,
    description: `Validation Error`,
    schema: HTTPValidationError
  }]
}, {
  method: "get",
  path: "/api/v1/animals/:animal_id",
  alias: "get_animal_base_by_id_api_v1_animals__animal_id__get",
  requestFormat: "json",
  parameters: [{
    name: "animal_id",
    type: "Path",
    schema: z.string().uuid()
  }],
  response: AnimalBase,
  errors: [{
    status: 422,
    description: `Validation Error`,
    schema: HTTPValidationError
  }]
}, {
  method: "put",
  path: "/api/v1/animals/:animal_id",
  alias: "update_animal_api_v1_animals__animal_id__put",
  requestFormat: "json",
  parameters: [{
    name: "body",
    type: "Body",
    schema: AnimalBase
  }, {
    name: "animal_id",
    type: "Path",
    schema: z.string().uuid()
  }],
  response: z.void(),
  errors: [{
    status: 422,
    description: `Validation Error`,
    schema: HTTPValidationError
  }]
}, {
  method: "get",
  path: "/api/v1/animals/identifiers",
  alias: "get_animal_ids_api_v1_animals_identifiers_get",
  requestFormat: "json",
  response: z.array(AnimalIdentifier)
}, {
  method: "get",
  path: "/api/v1/species/",
  alias: "get_species_api_v1_species__get",
  requestFormat: "json",
  response: z.array(Specie)
}, {
  method: "post",
  path: "/api/v1/species/",
  alias: "add_specie_api_v1_species__post",
  requestFormat: "json",
  parameters: [{
    name: "body",
    type: "Body",
    schema: SpecieBase
  }],
  response: z.unknown(),
  errors: [{
    status: 422,
    description: `Validation Error`,
    schema: HTTPValidationError
  }]
}, {
  method: "put",
  path: "/api/v1/species/:specie_id",
  alias: "update_specie_api_v1_species__specie_id__put",
  requestFormat: "json",
  parameters: [{
    name: "body",
    type: "Body",
    schema: SpecieBase
  }, {
    name: "specie_id",
    type: "Path",
    schema: z.string()
  }],
  response: z.void(),
  errors: [{
    status: 422,
    description: `Validation Error`,
    schema: HTTPValidationError
  }]
}, {
  method: "get",
  path: "/api/v1/species/base",
  alias: "get_species_base_api_v1_species_base_get",
  requestFormat: "json",
  response: z.array(SpecieBase)
}, {
  method: "get",
  path: "/api/v1/species/ids",
  alias: "get_specie_keys_api_v1_species_ids_get",
  requestFormat: "json",
  response: z.array(z.string())
}]);
export const api = new Zodios(endpoints);
export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}