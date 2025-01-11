

// script
export enum TASK {
  OPEN_API = "openapi",
  TYPES = "types",
  ZOD = "zod",
  CONFIGURE_SCHEMAS = "configure-schemas"
}
// TODO you may need to fix the variable names going all over
// fieldsRequiringDependencies vs fieldsRequiringFetchedData
// make it consistent ... BUT not for now, do that when it becomes a problem
export enum SCRIPT_VARIABLE {
  FIELDS_REQUIRING_FETCHED_DATA = "fieldsRequiringFetchedData"
}

export enum SCRIPT_TYPE_NAME {
  SCHEMAS_SELECTORS = "SchemasSelectors",
  SCHEMA_META = "SchemaMeta",
  SCHEMAS_META = "SchemasMeta",
}

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

// Forms
export enum FORM_SCHEMA_NAME {
  ANIMAL_BASE = "AnimalBase",
  SPECIE_BASE = "SpecieBase",
  ENCLOSURE_TYPE_BASE = "EnclosureTypeBase",
  ENCLOSURE_BASE = "EnclosureBase"
}

export enum FORM_NAME {
  ADD_ANIMAL = "AddAnimal",
  UPDATE_ANIMAL = "UpdateAnimal",
  ADD_SPECIE = "AddSpecie",
  UPDATE_SPECIE = "UpdateSpecie",
  ADD_ENCLOSURE_TYPE = "AddEnclosureType",
  UPDATE_ENCLOSURE_TYPE = "UpdateEnclosureType",
  ADD_ENCLOSURE = "AddEnclosure"
}

// TODO do you want to change this name!
// TODO you may need to fix the variable names going all over
// fieldsRequiringDependencies vs fieldsRequiringFetchedData
// make it consistent ... BUT not for now, do that when it becomes a problem
export enum FIELD_REQUIRING_FETCHED_DATA {
  SPECIE = "specie",
  ENCLOSURE_TYPE = "enclosureType"
}