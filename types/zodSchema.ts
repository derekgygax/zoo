import { ZodObject, ZodRawShape } from "zod";

// config
import { FORM_SCHEMA_NAME } from "@/config/forms";

export type ZodSchema = {
  [K in FORM_SCHEMA_NAME]: ZodObject<ZodRawShape>
}