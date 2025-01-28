/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
    "/api/v1/food-types/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Food Types */
        get: operations["get_food_types_api_v1_food_types__get"];
        put?: never;
        /** Add Food Type */
        post: operations["add_food_type_api_v1_food_types__post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/food-types/ids": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Food Type Ids */
        get: operations["get_food_type_ids_api_v1_food_types_ids_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/food-types/identifiers": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Food Type Identifiers */
        get: operations["get_food_type_identifiers_api_v1_food_types_identifiers_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/food-types/{food_type_id}/base": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Food Type Base By Id */
        get: operations["get_food_type_base_by_id_api_v1_food_types__food_type_id__base_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/food-types/{food_type_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Update Food Type */
        put: operations["update_food_type_api_v1_food_types__food_type_id__put"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/storage-unit-types/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Storage Unit Types */
        get: operations["get_storage_unit_types_api_v1_storage_unit_types__get"];
        put?: never;
        /** Add Storage Unit Type */
        post: operations["add_storage_unit_type_api_v1_storage_unit_types__post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/storage-unit-types/ids": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Storage Unit Types Ids */
        get: operations["get_storage_unit_types_ids_api_v1_storage_unit_types_ids_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/storage-unit-types/base": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Storage Unit Type Bases */
        get: operations["get_storage_unit_type_bases_api_v1_storage_unit_types_base_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/storage-unit-types/identifiers": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Storage Unit Type Identifiers */
        get: operations["get_storage_unit_type_identifiers_api_v1_storage_unit_types_identifiers_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/storage-unit-types/{storage_unit_type_id}/base": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Food Type Base By Id */
        get: operations["get_food_type_base_by_id_api_v1_storage_unit_types__storage_unit_type_id__base_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/storage-unit-types/{storage_unit_type_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Update Storage Unit Type */
        put: operations["update_storage_unit_type_api_v1_storage_unit_types__storage_unit_type_id__put"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/storage-units/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Storage Units */
        get: operations["get_storage_units_api_v1_storage_units__get"];
        put?: never;
        /** Add Storage Unit */
        post: operations["add_storage_unit_api_v1_storage_units__post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/storage-units/identifiers": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Storage Unit Identifiers */
        get: operations["get_storage_unit_identifiers_api_v1_storage_units_identifiers_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/storage-units/{storage_unit_id}/base": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Storage Unit Base By Id */
        get: operations["get_storage_unit_base_by_id_api_v1_storage_units__storage_unit_id__base_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/storage-units/{storage_unit_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Update Storage Unit */
        put: operations["update_storage_unit_api_v1_storage_units__storage_unit_id__put"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/food-stocks/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Food Stocks */
        get: operations["get_food_stocks_api_v1_food_stocks__get"];
        put?: never;
        /** Add Food Stock */
        post: operations["add_food_stock_api_v1_food_stocks__post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/food-stocks/identifiers": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Food Type Ids */
        get: operations["get_food_type_ids_api_v1_food_stocks_identifiers_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/food-stocks/{food_stock_id}/base": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Food Stock Base By Id */
        get: operations["get_food_stock_base_by_id_api_v1_food_stocks__food_stock_id__base_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/food-stocks/{food_stock_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Add Food Stock */
        put: operations["add_food_stock_api_v1_food_stocks__food_stock_id__put"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Root */
        get: operations["root__get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** FoodStock */
        FoodStock: {
            /**
             * Food Type
             * Format: selector
             * @description The unique identifier for the type of food, such as 'meat' or 'seed'
             */
            food_type_id: string;
            /**
             * Storage Unit
             * Format: selector
             * @description The unique identifier for the storage unit, this is a UUID
             */
            storage_unit_id: string;
            /**
             * Quanitity of Food
             * @description The quantity of the food of that type
             */
            quantity: number;
            /**
             * Expiration Date
             * Format: date
             * @description The date of the expiration of the food
             */
            expiration_date: string;
            /**
             * Id
             * Format: uuid
             */
            id: string;
            /**
             * Created At
             * Format: date-time
             */
            created_at: string;
            /**
             * Updated At
             * Format: date-time
             */
            updated_at: string;
        };
        /** FoodStockBase */
        FoodStockBase: {
            /**
             * Food Type
             * Format: selector
             * @description The unique identifier for the type of food, such as 'meat' or 'seed'
             */
            food_type_id: string;
            /**
             * Storage Unit
             * Format: selector
             * @description The unique identifier for the storage unit, this is a UUID
             */
            storage_unit_id: string;
            /**
             * Quanitity of Food
             * @description The quantity of the food of that type
             */
            quantity: number;
            /**
             * Expiration Date
             * Format: date
             * @description The date of the expiration of the food
             */
            expiration_date: string;
        };
        /** FoodType */
        FoodType: {
            /**
             * Food Type
             * @description Unique identifier for the food type, such as 'meat' or 'seed'
             */
            id: string;
            /**
             * Food Type Description
             * @description A short description about the type of food
             */
            description: string;
            /**
             * Created At
             * Format: date-time
             */
            created_at: string;
            /**
             * Updated At
             * Format: date-time
             */
            updated_at: string;
        };
        /** FoodTypeBase */
        FoodTypeBase: {
            /**
             * Food Type
             * @description Unique identifier for the food type, such as 'meat' or 'seed'
             */
            id: string;
            /**
             * Food Type Description
             * @description A short description about the type of food
             */
            description: string;
        };
        /** HTTPValidationError */
        HTTPValidationError: {
            /** Detail */
            detail?: components["schemas"]["ValidationError"][];
        };
        /** ModelIdentifier */
        ModelIdentifier: {
            /**
             * ID
             * @description Unique identifier of that instance of the Model as a string
             */
            id: string;
            /**
             * Label
             * @description A human readable label to identify that instance of the Model
             */
            label: string;
        };
        /** StorageUnit */
        StorageUnit: {
            /**
             * Name
             * @description The name of the storage unit
             */
            name: string;
            /**
             * Storage Unit Type
             * Format: selector
             * @description The type of storage unit, such as 'freezer' or 'dry storage'
             */
            storage_unit_type_id: string;
            /** Capacity */
            capacity: number;
            /**
             * Id
             * Format: uuid
             */
            id: string;
            /**
             * Created At
             * Format: date-time
             */
            created_at: string;
            /**
             * Updated At
             * Format: date-time
             */
            updated_at: string;
        };
        /** StorageUnitBase */
        StorageUnitBase: {
            /**
             * Name
             * @description The name of the storage unit
             */
            name: string;
            /**
             * Storage Unit Type
             * Format: selector
             * @description The type of storage unit, such as 'freezer' or 'dry storage'
             */
            storage_unit_type_id: string;
            /** Capacity */
            capacity: number;
        };
        /** StorageUnitType */
        StorageUnitType: {
            /**
             * Storage Unit Type
             * @description Unique identifier for the storage unit type, such as 'freezer' or 'dry storage'. white space is converted to _ before insertion to the DB
             */
            id: string;
            /**
             * Storage Unit Type Description
             * @description A short description about the storage unit type
             */
            description: string;
            /**
             * Created At
             * Format: date-time
             */
            created_at: string;
            /**
             * Updated At
             * Format: date-time
             */
            updated_at: string;
        };
        /** StorageUnitTypeBase */
        StorageUnitTypeBase: {
            /**
             * Storage Unit Type
             * @description Unique identifier for the storage unit type, such as 'freezer' or 'dry storage'. white space is converted to _ before insertion to the DB
             */
            id: string;
            /**
             * Storage Unit Type Description
             * @description A short description about the storage unit type
             */
            description: string;
        };
        /** ValidationError */
        ValidationError: {
            /** Location */
            loc: (string | number)[];
            /** Message */
            msg: string;
            /** Error Type */
            type: string;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    get_food_types_api_v1_food_types__get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["FoodType"][];
                };
            };
        };
    };
    add_food_type_api_v1_food_types__post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["FoodTypeBase"];
            };
        };
        responses: {
            /** @description Successful Response */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_food_type_ids_api_v1_food_types_ids_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string[];
                };
            };
        };
    };
    get_food_type_identifiers_api_v1_food_types_identifiers_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ModelIdentifier"][];
                };
            };
        };
    };
    get_food_type_base_by_id_api_v1_food_types__food_type_id__base_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                food_type_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["FoodTypeBase"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_food_type_api_v1_food_types__food_type_id__put: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                food_type_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["FoodTypeBase"];
            };
        };
        responses: {
            /** @description Successful Response */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_storage_unit_types_api_v1_storage_unit_types__get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["StorageUnitType"][];
                };
            };
        };
    };
    add_storage_unit_type_api_v1_storage_unit_types__post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["StorageUnitTypeBase"];
            };
        };
        responses: {
            /** @description Successful Response */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_storage_unit_types_ids_api_v1_storage_unit_types_ids_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string[];
                };
            };
        };
    };
    get_storage_unit_type_bases_api_v1_storage_unit_types_base_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["StorageUnitTypeBase"][];
                };
            };
        };
    };
    get_storage_unit_type_identifiers_api_v1_storage_unit_types_identifiers_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ModelIdentifier"][];
                };
            };
        };
    };
    get_food_type_base_by_id_api_v1_storage_unit_types__storage_unit_type_id__base_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                storage_unit_type_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["StorageUnitTypeBase"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_storage_unit_type_api_v1_storage_unit_types__storage_unit_type_id__put: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                storage_unit_type_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["StorageUnitTypeBase"];
            };
        };
        responses: {
            /** @description Successful Response */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_storage_units_api_v1_storage_units__get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["StorageUnit"][];
                };
            };
        };
    };
    add_storage_unit_api_v1_storage_units__post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["StorageUnitBase"];
            };
        };
        responses: {
            /** @description Successful Response */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_storage_unit_identifiers_api_v1_storage_units_identifiers_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ModelIdentifier"][];
                };
            };
        };
    };
    get_storage_unit_base_by_id_api_v1_storage_units__storage_unit_id__base_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                storage_unit_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["StorageUnitBase"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_storage_unit_api_v1_storage_units__storage_unit_id__put: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                storage_unit_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["StorageUnitBase"];
            };
        };
        responses: {
            /** @description Successful Response */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_food_stocks_api_v1_food_stocks__get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["FoodStock"][];
                };
            };
        };
    };
    add_food_stock_api_v1_food_stocks__post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["FoodStockBase"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_food_type_ids_api_v1_food_stocks_identifiers_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ModelIdentifier"][];
                };
            };
        };
    };
    get_food_stock_base_by_id_api_v1_food_stocks__food_stock_id__base_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                food_stock_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["FoodStockBase"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    add_food_stock_api_v1_food_stocks__food_stock_id__put: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                food_stock_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["FoodStockBase"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    root__get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
        };
    };
}
