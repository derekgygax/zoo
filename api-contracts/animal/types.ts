/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
    "/api/v1/animals/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Animals */
        get: operations["get_animals_api_v1_animals__get"];
        put?: never;
        /** Add Animal */
        post: operations["add_animal_api_v1_animals__post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/animals/form-config": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Form Config */
        get: operations["get_form_config_api_v1_animals_form_config_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/open-api/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Metadata Service */
        get: operations["get_metadata_service_api_v1_open_api__get"];
        put?: never;
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
        /** Animal */
        Animal: {
            /**
             * Name
             * @description The name of the animal
             */
            name: string;
            /** Specie */
            specie: components["schemas"]["SPECIE"];
            /**
             * DOB
             * Format: date
             */
            dob: string;
            /** Gender */
            gender: components["schemas"]["GENDER"];
            /** Health */
            health: components["schemas"]["HEALTH_TYPE"];
            /**
             * Aquisition Date
             * Format: date
             */
            acquisition_date: string;
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
        /** AnimalBase */
        AnimalBase: {
            /**
             * Name
             * @description The name of the animal
             */
            name: string;
            /** Specie */
            specie: components["schemas"]["SPECIE"];
            /**
             * DOB
             * Format: date
             */
            dob: string;
            /** Gender */
            gender: components["schemas"]["GENDER"];
            /** Health */
            health: components["schemas"]["HEALTH_TYPE"];
            /**
             * Aquisition Date
             * Format: date
             */
            acquisition_date: string;
        };
        /** FormConfig */
        FormConfig: {
            /** Fields */
            fields: components["schemas"]["FormFieldConfig"][];
        };
        /** FormFieldConfig */
        FormFieldConfig: {
            /** Name */
            name: string;
            /** Type */
            type: string;
            /** Label */
            label: string;
            /** Values */
            values?: string[] | null;
            /** Maxlength */
            maxLength?: number | null;
            /** Required */
            required: boolean;
        };
        /**
         * GENDER
         * @enum {string}
         */
        GENDER: "MALE" | "FEMALE" | "HERMAPHRODITE" | "ASEXUAL";
        /**
         * HEALTH_TYPE
         * @enum {string}
         */
        HEALTH_TYPE: "HEALTHY" | "SICK" | "UNDER_OBSERVATION" | "INJURED" | "RECOVERING" | "DECEASED";
        /** HTTPValidationError */
        HTTPValidationError: {
            /** Detail */
            detail?: components["schemas"]["ValidationError"][];
        };
        /**
         * SPECIE
         * @enum {string}
         */
        SPECIE: "TIGER" | "SHARK" | "PARROT" | "ELEPHANT";
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
    get_animals_api_v1_animals__get: {
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
                    "application/json": components["schemas"]["Animal"][];
                };
            };
        };
    };
    add_animal_api_v1_animals__post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AnimalBase"];
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
    get_form_config_api_v1_animals_form_config_get: {
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
                    "application/json": components["schemas"]["FormConfig"];
                };
            };
        };
    };
    get_metadata_service_api_v1_open_api__get: {
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
                    "application/json": Record<string, never>;
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
