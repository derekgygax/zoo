import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

const FoodType = z
  .object({
    id: z.string().max(100),
    description: z.string().max(500),
    created_at: z.string().datetime({ offset: true }),
    updated_at: z.string().datetime({ offset: true }),
  })
  .passthrough();
const FoodTypeBase = z
  .object({ id: z.string().max(100), description: z.string().max(500) })
  .passthrough();
const ValidationError = z
  .object({
    loc: z.array(z.union([z.string(), z.number()])),
    msg: z.string(),
    type: z.string(),
  })
  .passthrough();
const HTTPValidationError = z
  .object({ detail: z.array(ValidationError) })
  .partial()
  .passthrough();
const ModelIdentifier = z
  .object({ id: z.string(), label: z.string() })
  .passthrough();
const StorageUnitType = z
  .object({
    id: z.string().max(100),
    description: z.string().max(500),
    created_at: z.string().datetime({ offset: true }),
    updated_at: z.string().datetime({ offset: true }),
  })
  .passthrough();
const StorageUnitTypeBase = z
  .object({ id: z.string().max(100), description: z.string().max(500) })
  .passthrough();
const StorageUnit = z
  .object({
    name: z.string().max(100),
    storage_unit_type_id: z.string().max(100),
    capacity: z.number().int(),
    id: z.string().uuid(),
    created_at: z.string().datetime({ offset: true }),
    updated_at: z.string().datetime({ offset: true }),
  })
  .passthrough();
const StorageUnitBase = z
  .object({
    name: z.string().max(100),
    storage_unit_type_id: z.string().max(100),
    capacity: z.number().int(),
  })
  .passthrough();
const FoodStock = z
  .object({
    food_type_id: z.string().max(100),
    storage_unit_id: z.string(),
    quantity: z.number().int().gte(0),
    expiration_date: z.string(),
    id: z.string().uuid(),
    created_at: z.string().datetime({ offset: true }),
    updated_at: z.string().datetime({ offset: true }),
  })
  .passthrough();
const FoodStockBase = z
  .object({
    food_type_id: z.string().max(100),
    storage_unit_id: z.string(),
    quantity: z.number().int().gte(0),
    expiration_date: z.string(),
  })
  .passthrough();

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
  FoodStockBase,
};

const endpoints = makeApi([
  {
    method: "get",
    path: "/",
    alias: "root__get",
    requestFormat: "json",
    response: z.unknown(),
  },
  {
    method: "get",
    path: "/api/v1/food-stocks/",
    alias: "get_food_stocks_api_v1_food_stocks__get",
    requestFormat: "json",
    response: z.array(FoodStock),
  },
  {
    method: "post",
    path: "/api/v1/food-stocks/",
    alias: "add_food_stock_api_v1_food_stocks__post",
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: FoodStockBase,
      },
    ],
    response: z.unknown(),
    errors: [
      {
        status: 422,
        description: `Validation Error`,
        schema: HTTPValidationError,
      },
    ],
  },
  {
    method: "put",
    path: "/api/v1/food-stocks/:food_stock_id",
    alias: "add_food_stock_api_v1_food_stocks__food_stock_id__put",
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: FoodStockBase,
      },
      {
        name: "food_stock_id",
        type: "Path",
        schema: z.string().uuid(),
      },
    ],
    response: z.unknown(),
    errors: [
      {
        status: 422,
        description: `Validation Error`,
        schema: HTTPValidationError,
      },
    ],
  },
  {
    method: "get",
    path: "/api/v1/food-stocks/:food_stock_id/base",
    alias:
      "get_food_stock_base_by_id_api_v1_food_stocks__food_stock_id__base_get",
    requestFormat: "json",
    parameters: [
      {
        name: "food_stock_id",
        type: "Path",
        schema: z.string().uuid(),
      },
    ],
    response: FoodStockBase,
    errors: [
      {
        status: 422,
        description: `Validation Error`,
        schema: HTTPValidationError,
      },
    ],
  },
  {
    method: "get",
    path: "/api/v1/food-stocks/identifiers",
    alias: "get_food_type_ids_api_v1_food_stocks_identifiers_get",
    requestFormat: "json",
    response: z.array(ModelIdentifier),
  },
  {
    method: "get",
    path: "/api/v1/food-types/",
    alias: "get_food_types_api_v1_food_types__get",
    requestFormat: "json",
    response: z.array(FoodType),
  },
  {
    method: "post",
    path: "/api/v1/food-types/",
    alias: "add_food_type_api_v1_food_types__post",
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: FoodTypeBase,
      },
    ],
    response: z.unknown(),
    errors: [
      {
        status: 422,
        description: `Validation Error`,
        schema: HTTPValidationError,
      },
    ],
  },
  {
    method: "put",
    path: "/api/v1/food-types/:food_type_id",
    alias: "update_food_type_api_v1_food_types__food_type_id__put",
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: FoodTypeBase,
      },
      {
        name: "food_type_id",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 422,
        description: `Validation Error`,
        schema: HTTPValidationError,
      },
    ],
  },
  {
    method: "get",
    path: "/api/v1/food-types/:food_type_id/base",
    alias: "get_food_type_base_by_id_api_v1_food_types__food_type_id__base_get",
    requestFormat: "json",
    parameters: [
      {
        name: "food_type_id",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: FoodTypeBase,
    errors: [
      {
        status: 422,
        description: `Validation Error`,
        schema: HTTPValidationError,
      },
    ],
  },
  {
    method: "get",
    path: "/api/v1/food-types/identifiers",
    alias: "get_food_type_identifiers_api_v1_food_types_identifiers_get",
    requestFormat: "json",
    response: z.array(ModelIdentifier),
  },
  {
    method: "get",
    path: "/api/v1/food-types/ids",
    alias: "get_food_type_ids_api_v1_food_types_ids_get",
    requestFormat: "json",
    response: z.array(z.string()),
  },
  {
    method: "get",
    path: "/api/v1/storage-unit-types/",
    alias: "get_storage_unit_types_api_v1_storage_unit_types__get",
    requestFormat: "json",
    response: z.array(StorageUnitType),
  },
  {
    method: "post",
    path: "/api/v1/storage-unit-types/",
    alias: "add_storage_unit_type_api_v1_storage_unit_types__post",
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: StorageUnitTypeBase,
      },
    ],
    response: z.unknown(),
    errors: [
      {
        status: 422,
        description: `Validation Error`,
        schema: HTTPValidationError,
      },
    ],
  },
  {
    method: "put",
    path: "/api/v1/storage-unit-types/:storage_unit_type_id",
    alias:
      "update_storage_unit_type_api_v1_storage_unit_types__storage_unit_type_id__put",
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: StorageUnitTypeBase,
      },
      {
        name: "storage_unit_type_id",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 422,
        description: `Validation Error`,
        schema: HTTPValidationError,
      },
    ],
  },
  {
    method: "get",
    path: "/api/v1/storage-unit-types/:storage_unit_type_id/base",
    alias:
      "get_food_type_base_by_id_api_v1_storage_unit_types__storage_unit_type_id__base_get",
    requestFormat: "json",
    parameters: [
      {
        name: "storage_unit_type_id",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: StorageUnitTypeBase,
    errors: [
      {
        status: 422,
        description: `Validation Error`,
        schema: HTTPValidationError,
      },
    ],
  },
  {
    method: "get",
    path: "/api/v1/storage-unit-types/base",
    alias: "get_storage_unit_type_bases_api_v1_storage_unit_types_base_get",
    requestFormat: "json",
    response: z.array(StorageUnitTypeBase),
  },
  {
    method: "get",
    path: "/api/v1/storage-unit-types/identifiers",
    alias:
      "get_storage_unit_type_identifiers_api_v1_storage_unit_types_identifiers_get",
    requestFormat: "json",
    response: z.array(ModelIdentifier),
  },
  {
    method: "get",
    path: "/api/v1/storage-unit-types/ids",
    alias: "get_storage_unit_types_ids_api_v1_storage_unit_types_ids_get",
    requestFormat: "json",
    response: z.array(z.string()),
  },
  {
    method: "get",
    path: "/api/v1/storage-units/",
    alias: "get_storage_units_api_v1_storage_units__get",
    requestFormat: "json",
    response: z.array(StorageUnit),
  },
  {
    method: "post",
    path: "/api/v1/storage-units/",
    alias: "add_storage_unit_api_v1_storage_units__post",
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: StorageUnitBase,
      },
    ],
    response: z.unknown(),
    errors: [
      {
        status: 422,
        description: `Validation Error`,
        schema: HTTPValidationError,
      },
    ],
  },
  {
    method: "put",
    path: "/api/v1/storage-units/:storage_unit_id",
    alias: "update_storage_unit_api_v1_storage_units__storage_unit_id__put",
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: StorageUnitBase,
      },
      {
        name: "storage_unit_id",
        type: "Path",
        schema: z.string().uuid(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 422,
        description: `Validation Error`,
        schema: HTTPValidationError,
      },
    ],
  },
  {
    method: "get",
    path: "/api/v1/storage-units/:storage_unit_id/base",
    alias:
      "get_storage_unit_base_by_id_api_v1_storage_units__storage_unit_id__base_get",
    requestFormat: "json",
    parameters: [
      {
        name: "storage_unit_id",
        type: "Path",
        schema: z.string().uuid(),
      },
    ],
    response: StorageUnitBase,
    errors: [
      {
        status: 422,
        description: `Validation Error`,
        schema: HTTPValidationError,
      },
    ],
  },
  {
    method: "get",
    path: "/api/v1/storage-units/identifiers",
    alias: "get_storage_unit_identifiers_api_v1_storage_units_identifiers_get",
    requestFormat: "json",
    response: z.array(ModelIdentifier),
  },
]);

export const api = new Zodios(endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
