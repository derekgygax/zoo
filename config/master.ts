
// service - API 
// model - table in the API database
// schema - a way to present the model


// Microservices
export enum SERVICE {
  ANIMALS = "animals-service",
  FOOD = "food-service",
  STAFF = "staff-service",
  BREEDING = "breeding-service",
  ENCLOSURES = "enclosures-service",
  REPORTS = "reports-service"
}

// Micorservice Frameworks
export enum FRAMEWORK {
  FAST_API = "fastApi",
  SPRING_BOOT = "springBoot",
  NEST_JS = "nestJS",
  QUARKUS = "quarkus"
}

// API
export const OPENAPI_ENDPOINTS: Record<FRAMEWORK, string> = {
  [FRAMEWORK.FAST_API]: "openapi.json",
  [FRAMEWORK.SPRING_BOOT]: "v3/api-docs",
  [FRAMEWORK.NEST_JS]: "api-json",
  [FRAMEWORK.QUARKUS]: "q/openapi.json"
};

export const API_BASE_URLS: Record<SERVICE, string> = {
  [SERVICE.ANIMALS]: process.env.ANIMALS_SERVICE ?? "",
  [SERVICE.FOOD]: process.env.FOOD_SERVICE ?? "",
  [SERVICE.STAFF]: process.env.STAFF_SERVICE ?? "",
  [SERVICE.BREEDING]: process.env.BREEDING_SERVICE ?? "",
  [SERVICE.ENCLOSURES]: process.env.ENCLOSURES_SERVICE ?? "",
  [SERVICE.REPORTS]: process.env.REPORTS_SERVICE ?? ""
};

// Fields Requiring a Fetch
// TODO do you want to change this name!
// TODO you may need to fix the variable names going all over
// fieldsRequiringDependencies vs fieldsRequiringFetchedData
// make it consistent ... BUT not for now, do that when it becomes a problem
export enum FIELD_REQUIRING_FETCHED_DATA {
  SPECIE = "specie_id",
  ENCLOSURE_TYPE = "enclosureTypeId",
  STORAGE_UNIT_TYPE = "storage_unit_type_id",
  STORAGE_UNIT = "storage_unit_id",
  FOOD_TYPE = "food_type_id",
  STAFF = "staffId",
  DEPARTMENT = "departmentId"
}

// The variable name above so if people run the generate-api-contracts
// and it doesn't work it gives them reasons and how to fix the problems
export const MASTER_VARIABLES_NAMES = {
  fieldRequiringFetchedData: "FIELD_REQUIRING_FETCHED_DATA"
}