import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";
const FoodType = z.object({
  id: z.string().trim().max(100).describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"isEmail\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"Food Type\"}"),
  description: z.string().trim().max(500).describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"isEmail\":false,\"maxLength\":500},\"needsCoercion\":false,\"title\":\"Food Type Description\"}"),
  created_at: z.string().trim().datetime({
    offset: true
  }).describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"isEmail\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"Created At\"}"),
  updated_at: z.string().trim().datetime({
    offset: true
  }).describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"isEmail\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"Updated At\"}")
}).passthrough();
const FoodTypeBase = z.object({
  id: z.string().trim().max(100).describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"isEmail\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"Food Type\"}"),
  description: z.string().trim().max(500).describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"isEmail\":false,\"maxLength\":500},\"needsCoercion\":false,\"title\":\"Food Type Description\"}")
}).passthrough();
const ValidationError = z.object({
  loc: z.array(z.union([z.string(), z.number()])).describe("{\"needsCoercion\":false,\"title\":\"Location\"}"),
  msg: z.string().trim().describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"isEmail\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"Message\"}"),
  type: z.string().trim().describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"isEmail\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"Error Type\"}")
}).passthrough();
const HTTPValidationError = z.object({
  detail: z.array(ValidationError).describe("{\"needsCoercion\":false,\"title\":\"Detail\"}")
}).partial().passthrough();
const ModelIdentifier = z.object({
  id: z.string().trim().describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"isEmail\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"ID\"}"),
  label: z.string().trim().describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"isEmail\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"Label\"}")
}).passthrough();
const StorageUnitType = z.object({
  id: z.string().trim().max(100).describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"isEmail\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"Storage Unit Type\"}"),
  description: z.string().trim().max(500).describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"isEmail\":false,\"maxLength\":500},\"needsCoercion\":false,\"title\":\"Storage Unit Type Description\"}"),
  created_at: z.string().trim().datetime({
    offset: true
  }).describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"isEmail\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"Created At\"}"),
  updated_at: z.string().trim().datetime({
    offset: true
  }).describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"isEmail\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"Updated At\"}")
}).passthrough();
const StorageUnitTypeBase = z.object({
  id: z.string().trim().max(100).describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"isEmail\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"Storage Unit Type\"}"),
  description: z.string().trim().max(500).describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"isEmail\":false,\"maxLength\":500},\"needsCoercion\":false,\"title\":\"Storage Unit Type Description\"}")
}).passthrough();
const StorageUnit = z.object({
  name: z.string().trim().max(100).describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"isEmail\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"Name\"}"),
  storage_unit_type_id: z.string().trim().max(100).describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":true,\"isEmail\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"Storage Unit Type\"}"),
  capacity: z.coerce.number().int().describe("{\"needsCoercion\":true,\"title\":\"Capacity\"}"),
  id: z.string().trim().uuid().describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"isEmail\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"Id\"}"),
  created_at: z.string().trim().datetime({
    offset: true
  }).describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"isEmail\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"Created At\"}"),
  updated_at: z.string().trim().datetime({
    offset: true
  }).describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"isEmail\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"Updated At\"}")
}).passthrough();
const StorageUnitBase = z.object({
  name: z.string().trim().max(100).describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"isEmail\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"Name\"}"),
  storage_unit_type_id: z.string().trim().max(100).describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":true,\"isEmail\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"Storage Unit Type\"}"),
  capacity: z.coerce.number().int().describe("{\"needsCoercion\":true,\"title\":\"Capacity\"}")
}).passthrough();
const FoodStock = z.object({
  food_type_id: z.string().trim().max(100).describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":true,\"isEmail\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"Food Type\"}"),
  storage_unit_id: z.string().trim().describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":true,\"isEmail\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"Storage Unit\"}"),
  quantity: z.coerce.number().int().gte(0).describe("{\"needsCoercion\":true,\"title\":\"Quanitity of Food\"}"),
  expiration_date: z.string().trim().refine(value => {
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
  }).describe("{\"stringMeta\":{\"isDate\":true,\"isSelector\":false,\"isEmail\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"Expiration Date\"}"),
  id: z.string().trim().uuid().describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"isEmail\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"Id\"}"),
  created_at: z.string().trim().datetime({
    offset: true
  }).describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"isEmail\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"Created At\"}"),
  updated_at: z.string().trim().datetime({
    offset: true
  }).describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":false,\"isEmail\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"Updated At\"}")
}).passthrough();
const FoodStockBase = z.object({
  food_type_id: z.string().trim().max(100).describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":true,\"isEmail\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"Food Type\"}"),
  storage_unit_id: z.string().trim().describe("{\"stringMeta\":{\"isDate\":false,\"isSelector\":true,\"isEmail\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"Storage Unit\"}"),
  quantity: z.coerce.number().int().gte(0).describe("{\"needsCoercion\":true,\"title\":\"Quanitity of Food\"}"),
  expiration_date: z.string().trim().refine(value => {
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
  }).describe("{\"stringMeta\":{\"isDate\":true,\"isSelector\":false,\"isEmail\":false,\"maxLength\":100},\"needsCoercion\":false,\"title\":\"Expiration Date\"}")
}).passthrough();
export const schemas = {
  FoodType,
  FoodTypeBase,
  ValidationError,
  HTTPValidationError,
  ModelIdentifier,
  StorageUnitType,
  StorageUnitTypeBase,
  StorageUnit,
  StorageUnitBase,
  FoodStock,
  FoodStockBase
};
const endpoints = makeApi([{
  method: "get",
  path: "/",
  alias: "root__get",
  requestFormat: "json",
  response: z.unknown()
}, {
  method: "get",
  path: "/api/v1/food-stocks/",
  alias: "get_food_stocks_api_v1_food_stocks__get",
  requestFormat: "json",
  response: z.array(FoodStock)
}, {
  method: "post",
  path: "/api/v1/food-stocks/",
  alias: "add_food_stock_api_v1_food_stocks__post",
  requestFormat: "json",
  parameters: [{
    name: "body",
    type: "Body",
    schema: FoodStockBase
  }],
  response: z.unknown(),
  errors: [{
    status: 422,
    description: `Validation Error`,
    schema: HTTPValidationError
  }]
}, {
  method: "put",
  path: "/api/v1/food-stocks/:food_stock_id",
  alias: "add_food_stock_api_v1_food_stocks__food_stock_id__put",
  requestFormat: "json",
  parameters: [{
    name: "body",
    type: "Body",
    schema: FoodStockBase
  }, {
    name: "food_stock_id",
    type: "Path",
    schema: z.string().uuid()
  }],
  response: z.unknown(),
  errors: [{
    status: 422,
    description: `Validation Error`,
    schema: HTTPValidationError
  }]
}, {
  method: "get",
  path: "/api/v1/food-stocks/:food_stock_id/base",
  alias: "get_food_stock_base_by_id_api_v1_food_stocks__food_stock_id__base_get",
  requestFormat: "json",
  parameters: [{
    name: "food_stock_id",
    type: "Path",
    schema: z.string().uuid()
  }],
  response: FoodStockBase,
  errors: [{
    status: 422,
    description: `Validation Error`,
    schema: HTTPValidationError
  }]
}, {
  method: "get",
  path: "/api/v1/food-stocks/identifiers",
  alias: "get_food_type_ids_api_v1_food_stocks_identifiers_get",
  requestFormat: "json",
  response: z.array(ModelIdentifier)
}, {
  method: "get",
  path: "/api/v1/food-types/",
  alias: "get_food_types_api_v1_food_types__get",
  requestFormat: "json",
  response: z.array(FoodType)
}, {
  method: "post",
  path: "/api/v1/food-types/",
  alias: "add_food_type_api_v1_food_types__post",
  requestFormat: "json",
  parameters: [{
    name: "body",
    type: "Body",
    schema: FoodTypeBase
  }],
  response: z.unknown(),
  errors: [{
    status: 422,
    description: `Validation Error`,
    schema: HTTPValidationError
  }]
}, {
  method: "put",
  path: "/api/v1/food-types/:food_type_id",
  alias: "update_food_type_api_v1_food_types__food_type_id__put",
  requestFormat: "json",
  parameters: [{
    name: "body",
    type: "Body",
    schema: FoodTypeBase
  }, {
    name: "food_type_id",
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
  path: "/api/v1/food-types/:food_type_id/base",
  alias: "get_food_type_base_by_id_api_v1_food_types__food_type_id__base_get",
  requestFormat: "json",
  parameters: [{
    name: "food_type_id",
    type: "Path",
    schema: z.string()
  }],
  response: FoodTypeBase,
  errors: [{
    status: 422,
    description: `Validation Error`,
    schema: HTTPValidationError
  }]
}, {
  method: "get",
  path: "/api/v1/food-types/identifiers",
  alias: "get_food_type_identifiers_api_v1_food_types_identifiers_get",
  requestFormat: "json",
  response: z.array(ModelIdentifier)
}, {
  method: "get",
  path: "/api/v1/food-types/ids",
  alias: "get_food_type_ids_api_v1_food_types_ids_get",
  requestFormat: "json",
  response: z.array(z.string())
}, {
  method: "get",
  path: "/api/v1/storage-unit-types/",
  alias: "get_storage_unit_types_api_v1_storage_unit_types__get",
  requestFormat: "json",
  response: z.array(StorageUnitType)
}, {
  method: "post",
  path: "/api/v1/storage-unit-types/",
  alias: "add_storage_unit_type_api_v1_storage_unit_types__post",
  requestFormat: "json",
  parameters: [{
    name: "body",
    type: "Body",
    schema: StorageUnitTypeBase
  }],
  response: z.unknown(),
  errors: [{
    status: 422,
    description: `Validation Error`,
    schema: HTTPValidationError
  }]
}, {
  method: "put",
  path: "/api/v1/storage-unit-types/:storage_unit_type_id",
  alias: "update_storage_unit_type_api_v1_storage_unit_types__storage_unit_type_id__put",
  requestFormat: "json",
  parameters: [{
    name: "body",
    type: "Body",
    schema: StorageUnitTypeBase
  }, {
    name: "storage_unit_type_id",
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
  path: "/api/v1/storage-unit-types/:storage_unit_type_id/base",
  alias: "get_food_type_base_by_id_api_v1_storage_unit_types__storage_unit_type_id__base_get",
  requestFormat: "json",
  parameters: [{
    name: "storage_unit_type_id",
    type: "Path",
    schema: z.string()
  }],
  response: StorageUnitTypeBase,
  errors: [{
    status: 422,
    description: `Validation Error`,
    schema: HTTPValidationError
  }]
}, {
  method: "get",
  path: "/api/v1/storage-unit-types/base",
  alias: "get_storage_unit_type_bases_api_v1_storage_unit_types_base_get",
  requestFormat: "json",
  response: z.array(StorageUnitTypeBase)
}, {
  method: "get",
  path: "/api/v1/storage-unit-types/identifiers",
  alias: "get_storage_unit_type_identifiers_api_v1_storage_unit_types_identifiers_get",
  requestFormat: "json",
  response: z.array(ModelIdentifier)
}, {
  method: "get",
  path: "/api/v1/storage-unit-types/ids",
  alias: "get_storage_unit_types_ids_api_v1_storage_unit_types_ids_get",
  requestFormat: "json",
  response: z.array(z.string())
}, {
  method: "get",
  path: "/api/v1/storage-units/",
  alias: "get_storage_units_api_v1_storage_units__get",
  requestFormat: "json",
  response: z.array(StorageUnit)
}, {
  method: "post",
  path: "/api/v1/storage-units/",
  alias: "add_storage_unit_api_v1_storage_units__post",
  requestFormat: "json",
  parameters: [{
    name: "body",
    type: "Body",
    schema: StorageUnitBase
  }],
  response: z.unknown(),
  errors: [{
    status: 422,
    description: `Validation Error`,
    schema: HTTPValidationError
  }]
}, {
  method: "put",
  path: "/api/v1/storage-units/:storage_unit_id",
  alias: "update_storage_unit_api_v1_storage_units__storage_unit_id__put",
  requestFormat: "json",
  parameters: [{
    name: "body",
    type: "Body",
    schema: StorageUnitBase
  }, {
    name: "storage_unit_id",
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
  path: "/api/v1/storage-units/:storage_unit_id/base",
  alias: "get_storage_unit_base_by_id_api_v1_storage_units__storage_unit_id__base_get",
  requestFormat: "json",
  parameters: [{
    name: "storage_unit_id",
    type: "Path",
    schema: z.string().uuid()
  }],
  response: StorageUnitBase,
  errors: [{
    status: 422,
    description: `Validation Error`,
    schema: HTTPValidationError
  }]
}, {
  method: "get",
  path: "/api/v1/storage-units/identifiers",
  alias: "get_storage_unit_identifiers_api_v1_storage_units_identifiers_get",
  requestFormat: "json",
  response: z.array(ModelIdentifier)
}]);
export const api = new Zodios(endpoints);
export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}