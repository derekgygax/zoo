
import { z, ZodObject, ZodTypeAny } from "zod";

// types
import {
  FormConfig,
  FormFieldConfig,
  FORM_FIELD_TYPE
} from "@/types/form";

// Creating a zod schema based on the metadata for the form
export const createZodSchema = (metadata: FormConfig): ZodObject<Record<string, ZodTypeAny>> => {
  const fieldSchemas: Record<string, ZodTypeAny> = {};

  metadata.fields.forEach((field: FormFieldConfig) => {
    let fieldSchema;
    switch (field.type) {
      case FORM_FIELD_TYPE.TEXT:
        fieldSchema = z.string();
        if (field.maxLength) {
          fieldSchema = fieldSchema.max(field.maxLength);
        }
        if (field.required) {
          fieldSchema = fieldSchema.min(1, `${field.name} is required`);
        }
        break;
      case FORM_FIELD_TYPE.NUMBER:
        fieldSchema = z.number();
        if (field.required) {
          fieldSchema = fieldSchema.min(1, `${field.name} is required`);
        }
        break;
      case FORM_FIELD_TYPE.SELECTOR:
        if (!field.values || field.values.length === 0) {
          throw new Error(`Selector field "${field.name}" must have a non-empty array of values.`);
        }
        const values = field.values as string[];
        fieldSchema = z.enum([values[0], ...values.slice(1)] as [string, ...string[]]);
        break;
      case FORM_FIELD_TYPE.DATE:
        // YYYY-MM-DD
        fieldSchema = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format");
        if (field.required) {
          fieldSchema = fieldSchema.min(1, `${field.name} is required`);
        }
        break;
      default:
        throw new Error(`Unsupported field type: ${field.type}`);
    }

    fieldSchemas[field.name] = fieldSchema;
  });

  return z.object(fieldSchemas);
}