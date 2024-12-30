
import { ZodObject, ZodRawShape } from "zod";

// types
import { FORM_SCHEMA } from "@/types/form";

export type ZodSchema = {
  [K in FORM_SCHEMA]: ZodObject<ZodRawShape>
}