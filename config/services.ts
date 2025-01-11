
// master config
import { SERVICE, FRAMEWORK } from "./master";

// types
import { Service } from "@/types/service";

export const SERVICES: Record<SERVICE, Service> = {
  [SERVICE.ANIMALS]: {
    name: SERVICE.ANIMALS,
    framework: FRAMEWORK.FAST_API
  },
  [SERVICE.FOOD]: {
    name: SERVICE.FOOD,
    framework: FRAMEWORK.FAST_API
  },
  [SERVICE.STAFF]: {
    name: SERVICE.STAFF,
    framework: FRAMEWORK.NEST_JS
  },
  [SERVICE.BREEDING]: {
    name: SERVICE.BREEDING,
    framework: FRAMEWORK.FAST_API
  },
  [SERVICE.ENCLOSURES]: {
    name: SERVICE.ENCLOSURES,
    framework: FRAMEWORK.QUARKUS
  },
  [SERVICE.REPORTS]: {
    name: SERVICE.REPORTS,
    framework: FRAMEWORK.FAST_API
  }
};
