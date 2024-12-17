import { FORM_NAME } from "./types/form";
import { Service } from "./types/service";

export const SERVICES: Service[] = [
  {
    name: "animals-service",
    forms: [{
      name: "AnimalBase",
      label: "Animal"
    }]
  }
];

// All the site urls (doing below allows them to be nested)
export const SITE_URLS = {
  staff: {
    base: "/staff",
    animals: {
      base: "/staff/animals",
      add: "/staff/animals/add"
    },
    food: {
      base: "/staff/food"
    }
  }
};

// roles
export const enum ROLE {
  STAFF,
  ADMIN
}