import { Service } from "@/types/service";
import { FORM_NAME } from "@/types/form";

// TODO Probably do NOT need label here!!
// REMOVE LATER IF NO NEED
export const SERVICES: Service[] = [
  {
    name: "animals-service",
    forms: [FORM_NAME.ANIMAL_BASE]
  }
];
