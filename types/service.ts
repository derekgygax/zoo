
export enum SERVICE {
  ANIMALS = "animals-service",
  FOOD = "food-service",
  STAFF = "staff-service",
  BREEDING = "breeding-service",
  ENCLOSURES = "enclosures-service",
  REPORTS = "reports-service"
}

export enum FRAMEWORK {
  FAST_API = "fastApi",
  SPRING_BOOT = "springBoot",
  NEST_JS = "nestJS"
}

export interface Service {
  name: SERVICE;
  framework: FRAMEWORK;
}