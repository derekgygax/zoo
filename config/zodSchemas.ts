
import { FORM_SCHEMA } from "@/types/form";
import { ZodSchema } from "@/types/zodSchema";

import { schemas as animalZodSchemas } from "@/api-contracts/animals-service/zodSchemas";

export const ZOD_SCHEMAS: ZodSchema = {
  [FORM_SCHEMA.ANIMAL_BASE]: animalZodSchemas.AnimalBase,
  [FORM_SCHEMA.SPECIE_BASE]: animalZodSchemas.SpecieBase
}