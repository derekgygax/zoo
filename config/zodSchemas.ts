
import { FORM_SCHEMA_NAME } from "@/types/form";
import { ZodSchema } from "@/types/zodSchema";

import { schemas as animalZodSchemas } from "@/api-contracts/animals-service/zodSchemas";

export const ZOD_SCHEMAS: ZodSchema = {
  [FORM_SCHEMA_NAME.ANIMAL_BASE]: animalZodSchemas.AnimalBase,
  [FORM_SCHEMA_NAME.SPECIE_BASE]: animalZodSchemas.SpecieBase
}