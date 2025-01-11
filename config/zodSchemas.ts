
// master config
import { FORM_SCHEMA_NAME } from "./forms";

// types
import { ZodSchema } from "@/types/zodSchema";

// zod schemas
import { schemas as animalZodSchemas } from "@/api-contracts/animals-service/zodSchemas";
import { schemas as enclosureZodSchemas } from "@/api-contracts/enclosures-service/zodSchemas";

export const ZOD_SCHEMAS: ZodSchema = {
  [FORM_SCHEMA_NAME.ANIMAL_BASE]: animalZodSchemas.AnimalBase,
  [FORM_SCHEMA_NAME.SPECIE_BASE]: animalZodSchemas.SpecieBase,
  [FORM_SCHEMA_NAME.ENCLOSURE_TYPE_BASE]: enclosureZodSchemas.EnclosureTypeBase,
  [FORM_SCHEMA_NAME.ENCLOSURE_BASE]: enclosureZodSchemas.EnclosureBase
}