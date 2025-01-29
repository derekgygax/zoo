
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
export enum FORM_DEPENDENCY_FIELD {
  SPECIE_ID = "specie_id",
  ENCLOSURE_TYPE_ID = "enclosureTypeId",
  STORAGE_UNIT_TYPE_ID = "storage_unit_type_id",
  STORAGE_UNIT_ID = "storage_unit_id",
  FOOD_TYPE_ID = "food_type_id",
  STAFF_ID = "staffId",
  DEPARTMENT_ID = "departmentId"
}

// The variable name above so if people run the generate-api-contracts
// and it doesn't work it gives them reasons and how to fix the problems
export const MASTER_VARIABLES_NAMES = {
  formDependencyField: "FORM_DEPENDENCY_FIELD"
}