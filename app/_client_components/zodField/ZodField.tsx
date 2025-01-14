"use client"


// TODO YOU GET WORRIED ABOUT WHAT IS IN THE CLIENT AND WHAT IS IN THE SERVER!!!
// TODO YOU GET WORRIED ABOUT WHAT IS IN THE CLIENT AND WHAT IS IN THE SERVER!!!
// TODO YOU GET WORRIED ABOUT WHAT IS IN THE CLIENT AND WHAT IS IN THE SERVER!!!
// TODO YOU GET WORRIED ABOUT WHAT IS IN THE CLIENT AND WHAT IS IN THE SERVER!!!
// TODO YOU GET WORRIED ABOUT WHAT IS IN THE CLIENT AND WHAT IS IN THE SERVER!!!
// TODO YOU GET WORRIED ABOUT WHAT IS IN THE CLIENT AND WHAT IS IN THE SERVER!!!
// TODO YOU GET WORRIED ABOUT WHAT IS IN THE CLIENT AND WHAT IS IN THE SERVER!!!
// TODO YOU GET WORRIED ABOUT WHAT IS IN THE CLIENT AND WHAT IS IN THE SERVER!!!

import { UseFormRegister, UseFormRegisterReturn, FieldValues, FieldErrors } from "react-hook-form";
import {
  ZodObject,
  ZodTypeAny,
  ZodString,
  ZodEnum,
  ZodNumber,
  ZodDate,
  ZodBoolean,
  ZodEffects
} from "zod";

// config
import { FORM_FIELD_DEFAULTS } from "@/config/constants";

// utiles
import { capitalizeFirstLetter } from "@/lib/utils/general";

// types
import { FieldSchemaMeta } from "@/types/script";
import { SelectorOption } from "@/types/form";

// styles
import styles from './ZodField.module.scss';


const buildSelector = (
  sharedProps: UseFormRegisterReturn & { required?: boolean },
  title: string,
  options: string[] | SelectorOption[]
) => {
  return (
    <select {...sharedProps} defaultValue="">
      <option value="" disabled>Select {title}</option>
      {options.map((option: string | SelectorOption) => (
        typeof option === "string" ? (
          <option key={option} value={option}>
            {capitalizeFirstLetter(option)}
          </option>
        ) : (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        )
      ))}
    </select>
  )
}

interface ZodFieldProps {
  fieldName: string;
  fieldSchema: ZodTypeAny;
  selectorOptions?: string[] | SelectorOption[];
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

export const ZodField = ({ fieldName, fieldSchema, selectorOptions = [], errors, register }: ZodFieldProps) => {

  const isRequired = !fieldSchema.isOptional();

  const sharedProps: UseFormRegisterReturn & { required?: boolean } = {
    ...register(fieldName),
    required: isRequired
  }
  const fieldDescription: FieldSchemaMeta = JSON.parse(fieldSchema.description as string);

  const getField = () => {
    if (fieldSchema instanceof ZodEffects) {
      if (fieldDescription.stringMeta?.isDate) {
        // Render a date input for ZodDate fields
        return <input type="date" {...sharedProps} />;
      }
    }
    if (fieldSchema instanceof ZodString) {
      if (fieldDescription.stringMeta) {
        if (fieldDescription.stringMeta.isSelector) {
          return buildSelector(sharedProps, fieldDescription.title, selectorOptions);
        } else if (fieldDescription.stringMeta.maxLength > FORM_FIELD_DEFAULTS.string.maxLength) {
          return (
            <textarea
              {...sharedProps}
              placeholder={`Enter ${fieldDescription.title}`}
            />
          );
        }
      }

      return <input type="text" {...sharedProps} />;

    }
    if (fieldSchema instanceof ZodEnum) {
      // Render a select dropdown for enums
      return buildSelector(sharedProps, fieldDescription.title, fieldSchema.options);
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
