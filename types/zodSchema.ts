import { ZodObject, ZodRawShape } from "zod";

// master config
import { FORM_SCHEMA_NAME } from "@/config/master";

export type ZodSchema = {
  [K in FORM_SCHEMA_NAME]: ZodObject<ZodRawShape>
}