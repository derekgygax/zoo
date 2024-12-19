"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  // z, 
  ZodObject,
  ZodTypeAny,
  ZodString,
  ZodEnum,
  ZodNumber,
  ZodBoolean
} from "zod";

import { FORM_CONFIGS } from "@/config/formConfigs";





// OpenAPI enums
import { OPEN_API_FIELD_TYPE, OPEN_API_STRING_FORMAT } from "@/types/openAPI";

// layouts and components
import { PageSection } from "@/app/_layouts/pageSection/PageSection";
import { SubmitFormButton } from "@/app/client_components/submitFormButton/SubmitFormButton";

// types
import { FormState } from "@/types/form";
import { useActionState } from "react";

// initial state for useActionState
const initialState: FormState = {
  success: false,
  message: [],
};

interface AnimalFormProps {
  formName: string;
  formLabel: string;
  formServerAction: (prevState: FormState, formData: FormData) => Promise<FormState>;
}

export const AnimalFormz = ({
  formName,
  // formLabel,
  formServerAction,
}: AnimalFormProps) => {

  const zodSchema = FORM_CONFIGS.AddAnimal.zodSchema;

  const {
    register,
    // handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(zodSchema),
  });

  const [state, action] = useActionState(formServerAction, initialState);

  const fields = Object.entries(zodSchema.shape);

  return (
    <PageSection>
      <form action={action} name={formName} className="animal-form">
        {fields.map(([fieldName, fieldSchema]) => {
          const typedFieldSchema = fieldSchema as ZodTypeAny;

          // Render inputs dynamically based on Zod types
          return (
            <label key={fieldName}>
              {fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}:
              {(() => {
                if (typedFieldSchema instanceof ZodString) {
                  // Handle specific formats for strings if needed
                  return <input type="text" {...register(fieldName)} />;
                }
                if (typedFieldSchema instanceof ZodEnum) {
                  // Render a select dropdown for enums
                  return (
                    <select {...register(fieldName)} defaultValue="">
                      <option value="" disabled>Select {fieldName}</option>
                      {typedFieldSchema.options.map((option: string) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  );
                }
                if (typedFieldSchema instanceof ZodNumber) {
                  // Render a number input
                  return <input type="number" {...register(fieldName)} />;
                }
                if (typedFieldSchema instanceof ZodBoolean) {
                  // Render a checkbox for booleans
                  return <input type="checkbox" {...register(fieldName)} />;
                }
                if (typedFieldSchema instanceof ZodObject) {
                  // For objects or nested schemas, handle as needed
                  return (
                    <textarea
                      {...register(fieldName)}
                      placeholder={`Enter JSON data for ${fieldName}`}
                    />
                  );
                }
                return <span>Unsupported field type</span>;
              })()}
              {errors[fieldName] && <span>{errors[fieldName]?.message as string}</span>}
            </label>
          );
        })}

        <div className={`server-feedback ${state.success ? "success" : "error"}`}>
          {state.message.map((msg, idx) => (
            <p key={idx}>{msg}</p>
          ))}
        </div>
        <SubmitFormButton />
      </form>
    </PageSection>
  );
};
