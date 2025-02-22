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
    "/api/v1/animals/identifiers": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Animal Ids */
        get: operations["get_animal_ids_api_v1_animals_identifiers_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/animals/{animal_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Animal Base By Id */
        get: operations["get_animal_base_by_id_api_v1_animals__animal_id__get"];
        /** Update Animal */
        put: operations["update_animal_api_v1_animals__animal_id__put"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/species/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Species */
        get: operations["get_species_api_v1_species__get"];
        put?: never;
        /** Add Specie */
        post: operations["add_specie_api_v1_species__post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/species/ids": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Specie Keys */
        get: operations["get_specie_keys_api_v1_species_ids_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/species/identifiers": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Specie Identifiers */
        get: operations["get_specie_identifiers_api_v1_species_identifiers_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/species/bases": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Species Bases */
        get: operations["get_species_bases_api_v1_species_bases_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/species/{specie_id}/base": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Species Base */
        get: operations["get_species_base_api_v1_species__specie_id__base_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/species/{specie_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Update Specie */
        put: operations["update_specie_api_v1_species__specie_id__put"];
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
            /**
             * Specie
             * Format: selector
             * @description The type of species, such as 'dog' or 'cat'
             */
            specie_id: string;
            /** Gender */
            gender: components["schemas"]["GENDER"];
            /** Health */
            health: components["schemas"]["HEALTH_TYPE"];
            /**
             * DOB
             * Format: date
             */
            dob: string;
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
            /**
             * Specie
             * Format: selector
             * @description The type of species, such as 'dog' or 'cat'
             */
            specie_id: string;
            /** Gender */
            gender: components["schemas"]["GENDER"];
            /** Health */
            health: components["schemas"]["HEALTH_TYPE"];
            /**
             * DOB
             * Format: date
             */
            dob: string;
            /**
             * Aquisition Date
             * Format: date
             */
            acquisition_date: string;
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
        /** Specie */
        Specie: {
            /**
             * Specie
             * @description Unique identifier for the specie, such as 'dog' or 'cat'
             */
            id: string;
            /**
             * Specie Description
             * @description A short description about the specie
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
        /** SpecieBase */
        SpecieBase: {
            /**
             * Specie
             * @description Unique identifier for the specie, such as 'dog' or 'cat'
             */
            id: string;
            /**
             * Specie Description
             * @description A short description about the specie
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
    get_animal_ids_api_v1_animals_identifiers_get: {
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
    get_animal_base_by_id_api_v1_animals__animal_id__get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                animal_id: string;
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
                    "application/json": components["schemas"]["AnimalBase"];
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
    update_animal_api_v1_animals__animal_id__put: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                animal_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AnimalBase"];
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
    get_species_api_v1_species__get: {
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
                    "application/json": components["schemas"]["Specie"][];
                };
            };
        };
    };
    add_specie_api_v1_species__post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SpecieBase"];
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
    get_specie_keys_api_v1_species_ids_get: {
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
    get_specie_identifiers_api_v1_species_identifiers_get: {
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
    get_species_bases_api_v1_species_bases_get: {
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
                    "application/json": components["schemas"]["SpecieBase"][];
                };
            };
        };
    };
    get_species_base_api_v1_species__specie_id__base_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                specie_id: string;
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
                    "application/json": components["schemas"]["SpecieBase"];
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
    update_specie_api_v1_species__specie_id__put: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                specie_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SpecieBase"];
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
