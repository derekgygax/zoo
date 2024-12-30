"use server"

// API endpoints
import { APIS } from "@/config/api";

// types
import { FORM_SCHEMA, FormState } from "@/types/form";

// action utils
import { actionProcessing } from "./utils/server"
import { deserializeFormData } from "./utils/general";

// lib utils
import { sendAPIRequest } from "@/lib/utils/server";

// types
import { AnimalBase } from "@/types/animal";

// zod schemas
import { ZOD_SCHEMAS } from "@/config/zodSchemas";

// The functional part of the action
const addAnimal = async (prevState: FormState, formData: FormData) => {
  const zodSchema = ZOD_SCHEMAS[FORM_SCHEMA.ANIMAL_BASE];

  const animal: AnimalBase = deserializeFormData(formData, zodSchema) as AnimalBase;

  sendAPIRequest(
    APIS.animalsService.animals,
    'POST',
    animal
  );

  return [
    `${animal.name} the ${animal.specie} added.`
  ];
}


// Add the catch wrapping and processing the state returning
export const addAnimalAction = await actionProcessing(addAnimal);