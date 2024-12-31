
import { ZodObject, ZodRawShape } from "zod";

export const deserializeFormData = (formData: FormData, zodSchema: ZodObject<ZodRawShape>) => {

  // make a new schema that stips away the extra fields in the formData
  const zodSchemaStrip = zodSchema.strip();

  return zodSchemaStrip.parse(Object.fromEntries(formData.entries()));
}