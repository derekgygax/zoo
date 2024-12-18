import { Service } from "@/types/service";
import { FORM_SCHEMA } from "@/types/form";

// TODO Probably do NOT need label here!!
// REMOVE LATER IF NO NEED
export const SERVICES: Service[] = [
  {
    name: "animals-service",
    schemas: [FORM_SCHEMA.ANIMAL_BASE]
  }
];
