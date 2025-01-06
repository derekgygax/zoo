"use client"

import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";
import {
  ZodObject,
  ZodTypeAny,
  ZodString,
  ZodEnum,
  ZodNumber,
  ZodDate,
  ZodBoolean,
} from "zod";

// types
import { FormFieldDescription } from "@/types/form";

// styles
import styles from './ZodField.module.scss';

interface ZodFieldProps {
  fieldName: string;
  fieldSchema: ZodTypeAny;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

export const ZodField = ({ fieldName, fieldSchema, errors, register }: ZodFieldProps) => {

  const isRequired = !fieldSchema.isOptional();

  const sharedProps = {
    ...register(fieldName),
    required: isRequired
  }
  const fieldDescription: FormFieldDescription = JSON.parse(fieldSchema.description as string);

  const getField = () => {
    if (fieldDescription.isDate) {
      // Render a date input for ZodDate fields
      return <input type="date" {...sharedProps} />;
    }
    if (fieldSchema instanceof ZodString) {
      // Handle specific formats for strings if needed
      return <input type="text" {...sharedProps} />;
    }
    if (fieldSchema instanceof ZodEnum) {
      // Render a select dropdown for enums
      return (
        <select {...sharedProps} defaultValue="">
          <option value="" disabled>Select {fieldName}</option>
          {fieldSchema.options.map((option: string) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      );
    }
    if (fieldSchema instanceof ZodNumber) {
      // Render a number input
      return <input type="number" {...sharedProps} />;
    }
    if (fieldSchema instanceof ZodBoolean) {
      // Render a checkbox for booleans
      return <input type="checkbox" {...sharedProps} />;
    }
    if (fieldSchema instanceof ZodDate) {
      // Render a date input for ZodDate fields
      return <input type="date" {...sharedProps} />;
    }
    if (fieldSchema instanceof ZodObject) {
      // For objects or nested schemas, handle as needed
      return (
        <textarea
          {...sharedProps}
          placeholder={`Enter JSON data for ${fieldName}`}
        />
      );
    }
    return <span>Unsupported field type</span>;
  }

  const field = getField();
  const fieldLabel = fieldDescription.title ?? fieldName.charAt(0).toUpperCase() + fieldName.slice(1);

  return (
    <label
      className={styles.field}
    >
      <span className={styles.label}>{fieldLabel}:</span>
      {field}

      {errors[fieldName] && (
        <span className={styles.error}>
          {errors[fieldName]?.message as string}
        </span>
      )}
    </label>
  )
}
