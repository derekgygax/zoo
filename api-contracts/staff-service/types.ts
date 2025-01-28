/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
    "/api/v1/departments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get All Departmentes */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Department"][];
                    };
                };
            };
        };
        put?: never;
        /** Add Department */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["DepartmentBase"];
                };
            };
            responses: {
                /** @description Created */
                201: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/departments/identifiers": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get All Department Identifiers */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
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
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/departments/{departmentId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Update Department */
        put: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    departmentId: components["schemas"]["UUID"];
                };
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["DepartmentBase"];
                };
            };
            responses: {
                /** @description No Content */
                204: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/departments/{departmentId}/base": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Department Base By Id */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    departmentId: components["schemas"]["UUID"];
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["DepartmentBase"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/staff": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get All Staff */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Staff"][];
                    };
                };
            };
        };
        put?: never;
        /** Add Staff */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["StaffBase"];
                };
            };
            responses: {
                /** @description Created */
                201: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/staff-departments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get All Staff Departments */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["StaffDepartment"][];
                    };
                };
            };
        };
        put?: never;
        /** Add Department */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["StaffDepartmentBase"];
                };
            };
            responses: {
                /** @description Created */
                201: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/staff-departments/identifiers": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get All Staff Department Identifiers */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
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
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/staff-departments/{staffDepartmentId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Update Department */
        put: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    staffDepartmentId: components["schemas"]["UUID"];
                };
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["StaffDepartmentBase"];
                };
            };
            responses: {
                /** @description No Content */
                204: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/staff-departments/{staffDepartmentId}/base": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Staff Department Base By Id */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    staffDepartmentId: components["schemas"]["UUID"];
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["StaffDepartmentBase"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/staff/identifiers": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get All Staff Identifiers */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
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
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/staff/{staffId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Update Enclosure */
        put: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    staffId: components["schemas"]["UUID"];
                };
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["StaffBase"];
                };
            };
            responses: {
                /** @description No Content */
                204: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/staff/{staffId}/base": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Staff Base By Id */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    staffId: components["schemas"]["UUID"];
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["StaffBase"];
                    };
                };
            };
        };
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
        Department: {
            id?: components["schemas"]["UUID"];
            name?: string;
            description?: string;
            createdAt?: components["schemas"]["Instant"];
            updatedAt?: components["schemas"]["Instant"];
            modelIdentifier?: components["schemas"]["ModelIdentifier"];
        };
        DepartmentBase: {
            /**
             * Name
             * @description Name of the Department. Cannot be longer than 100 characters.
             */
            name: string;
            /**
             * Description
             * @description Description of the Department. Cannot be longer than 500 characters.
             */
            description: string;
        };
        /** Format: date-time */
        Instant: string;
        /** Format: date */
        LocalDate: string;
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
        Staff: {
            id?: components["schemas"]["UUID"];
            firstName?: string;
            lastName?: string;
            title?: components["schemas"]["Title"];
            email?: string;
            phoneNumber?: string;
            hireDate?: components["schemas"]["LocalDate"];
            startDate?: components["schemas"]["LocalDate"];
            createdAt?: components["schemas"]["Instant"];
            updatedAt?: components["schemas"]["Instant"];
            modelIdentifier?: components["schemas"]["ModelIdentifier"];
        };
        StaffBase: {
            /**
             * First Name
             * @description Staff first name
             */
            firstName: string;
            /**
             * Last Name
             * @description Staff last name
             */
            lastName: string;
            /**
             * Title
             * @description The job title of the staff member, selected from the enum of Title
             */
            title: components["schemas"]["Title"];
            /**
             * Email
             * Format: email
             * @description Email of the staff member
             */
            email: string;
            /**
             * Phone Number
             * @description Phone number of the staff member
             */
            phoneNumber: string;
            /**
             * Hire Date
             * Format: date
             * @description The date the staff member was hired
             */
            hireDate: string;
            /**
             * Start Date
             * Format: date
             * @description The date the staff member started working
             */
            startDate: string;
        };
        StaffDepartment: {
            id?: components["schemas"]["UUID"];
            department?: components["schemas"]["Department"];
            staff?: components["schemas"]["Staff"];
            role?: string;
            createdAt?: components["schemas"]["Instant"];
            updatedAt?: components["schemas"]["Instant"];
            modelIdentifier?: components["schemas"]["ModelIdentifier"];
        };
        StaffDepartmentBase: {
            /**
             * Staff
             * Format: selector
             * @description Unique identifier of the staff member being assigned to the department
             */
            staffId: string;
            /**
             * Department
             * Format: selector
             * @description Unique identifier of the department staff members are being assigned to
             */
            departmentId: string;
            /**
             * Role
             * @description Role of the staff member in the department
             */
            role: string;
        };
        /** @enum {string} */
        Title: "VETERINARIAN" | "ZOOKEEPER" | "ADMINISTRATOR" | "GUIDE" | "MAINTENANCE" | "CURATOR" | "RESEARCHER" | "SECURITY" | "ATTENDANT";
        /** Format: uuid */
        UUID: string;
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
