"use client"

// types
import { FORM_SCHEMA_NAME } from "@/types/form";

// client components
import { ZodForm } from "@/app/_client_components/zodForm/ZodForm";

// server actions
import { addSpecieAction } from "@/app/_actions/animals-service/specie";

interface SpecieFormProps {
  formName: string;
  formLabel: string;
  zodSchemaName: FORM_SCHEMA_NAME;
}

export const SpecieForm = ({ formName, zodSchemaName }: SpecieFormProps) => {

  return (
    <ZodForm
      formName={formName}
      formServerAction={addSpecieAction}
      zodSchemaName={zodSchemaName}
    />
  );
}
