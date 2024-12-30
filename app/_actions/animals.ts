"use server"

// types
import { FORM_SCHEMA, FormState } from "@/types/form";

// utils
import { actionProcessing } from "./utils/server"
import { deserializeFormData } from "./utils/general";

// types
import { AnimalBase } from "@/types/animal";

// zod schemas
import { ZOD_SCHEMAS } from "@/config/zodSchemas";

// The functional part of the action
const addAnimal = async (prevState: FormState, formData: FormData) => {
  const zodSchema = ZOD_SCHEMAS[FORM_SCHEMA.ANIMAL_BASE];

  const animal: AnimalBase = deserializeFormData(formData, zodSchema) as AnimalBase;

  console.log(animal);

  throw new Error("I HATE YOU!");

  return [];
}


// Add the catch wrapping and processing the state returning
export const addAnimalAction = await actionProcessing(addAnimal);