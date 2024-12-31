"use client"

// types
import { FORM_SCHEMA } from "@/types/form";

// config
import { ZOD_SCHEMAS } from "@/config/zodSchemas";

// client components
import { ZodForm } from "@/app/_client_components/zodForm/ZodForm";


// server actions
import { addAnimalAction } from "@/app/_actions/animals";

interface AnimalFormProps {
  formName: string;
  formLabel: string;
  zodSchemaName: FORM_SCHEMA;
}

export const AnimalForm = ({ formName, zodSchemaName }: AnimalFormProps) => {

  return (
    <ZodForm
      formName={formName}
      formServerAction={addAnimalAction}
      zodSchema={ZOD_SCHEMAS[zodSchemaName]}
    />
  );
}
