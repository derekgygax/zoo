"use server"

// utils
import { toSelectorOptions } from "@/lib/utils/general";

// server actions
import { getSpeciesBase } from "@/app/_actions/animals-service/specie";

// types
import { FORM_SCHEMA } from "@/types/form";
import { SelectorOption } from "@/types/form";
import { SpecieBase } from "@/types/animals-service";

// client components
import { ZodForm } from "@/app/_client_components/zodForm/ZodForm";


// server actions
import { addAnimalAction } from "@/app/_actions/animals-service/animals";

interface AnimalFormProps {
  formName: string;
  formLabel: string;
  zodSchemaName: FORM_SCHEMA;
}

export const AnimalForm = async ({ formName, zodSchemaName }: AnimalFormProps) => {

  // TODO MAKE THE NAME OF THE FIELD THAT NEEDS A SELECTOR DYNAMIC!!
  // TODO I HATE the hard coding of "specie" here but you gotta move forward
  // for now and come back and fix later
  const specieField: keyof SpecieBase = "specie";
  const species: SpecieBase[] = await getSpeciesBase();
  const selectorOptions: Record<string, SelectorOption[]> = {
    [specieField]: toSelectorOptions(species, specieField, specieField)
  };

  return (
    <ZodForm
      formName={formName}
      formServerAction={addAnimalAction}
      selectorOptions={selectorOptions}
      zodSchemaName={zodSchemaName}
    />
  );
}
