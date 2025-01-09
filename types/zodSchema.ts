
import { ZodObject, ZodRawShape } from "zod";

// types
import { FORM_SCHEMA_NAME } from "@/types/form";

export type ZodSchema = {
  [K in FORM_SCHEMA_NAME]: ZodObject<ZodRawShape>
}