import { Service } from "@/types/service";
// import { FORM_SCHEMA } from "@/types/form";

// TODO schemas is OLD
// to build the form config from a schema
// and then the form from that
// NOW you are using the zod to do that
// in the future delete this but keep for now just in case
// its faster than having to search through git history for now
// export const SERVICES: Service[] = [
//   {
//     name: "animals-service",
//     schemas: [FORM_SCHEMA.ANIMAL_BASE]
//   }
// ];


export const SERVICES: Record<string, { framework: string }> = {
  ["animals-service"]: {
    framework: "fastApi"
  },
  ["food-service"]: {
    framework: "fastApi"
  },
  // ["staff-service"]: {
  //   framework: "nestJS"
  // },
  ["breeding-service"]: {
    framework: "fastApi"
  },
  ["enclosures-service"]: {
    framework: "springBoot"
  },
  ["reports-service"]: {
    framework: "fastApi"
  }
};
