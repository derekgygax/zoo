
import { ZodObject, ZodRawShape } from "zod";

export const deserializeFormData = (formData: FormData, zodSchema: ZodObject<ZodRawShape>) => {
  // Remove the "$ACTION_" that next.js puts in
  const filteredEntries = Array.from(formData.entries()).reduce(
    (acc, [key, value]) => {
      if (!key.startsWith("$ACTION_")) {
        acc[key] = value;
      }
      return acc;
    },
    {} as Record<string, unknown>
  );

  return zodSchema.parse(filteredEntries);
}