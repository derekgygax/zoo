"use server"

// API endpoints
import { API_ENDPOINTS } from "@/config/api";

// types
import { FORM_SCHEMA_NAME, FormState } from "@/types/form";

// action utils
import { actionProcessing } from "../utils/server"
import { deserializeFormData } from "../utils/general";

// lib utils
import { getAPIRequest, sendAPIRequest } from "@/lib/utils/server/api";

// types
import { AnimalBase } from "@/types/animals-service";

// zod schemas
import { ZOD_SCHEMAS } from "@/config/zodSchemas";

// A simple request call to get the animal by the id
export const getAnimal = async (animalId: string): Promise<AnimalBase | undefined> => {

  const animal: AnimalBase | undefined = await getAPIRequest(
    `${API_ENDPOINTS.animalsService.animals.index}/${animalId}`,
    undefined
  );

  return animal;
}


// Server Actions to forms
// The functional part of the action
const addAnimal = async (prevState: FormState, formData: FormData) => {
  const zodSchema = ZOD_SCHEMAS[FORM_SCHEMA_NAME.ANIMAL_BASE];

  const animal: AnimalBase = deserializeFormData(formData, zodSchema) as AnimalBase;

  await sendAPIRequest(
    API_ENDPOINTS.animalsService.animals.index,
    'POST',
    animal
  );

  return [
    `${animal.name} the ${animal.specie} added.`
  ];
}

const updateAnimal = async (prevState: FormState, formData: FormData) => {
  const zodSchema = ZOD_SCHEMAS[FORM_SCHEMA_NAME.ANIMAL_BASE];

  const animalId = formData.get("id");
  const animal: AnimalBase = deserializeFormData(formData, zodSchema) as AnimalBase;

  await sendAPIRequest(
    `${API_ENDPOINTS.animalsService.animals.index}/${animalId}`,
    'POST',
    animal
  );

  return [
    `${animal.name} the ${animal.specie} added.`
  ];
}


// Add the catch wrapping and processing the state returning
export const addAnimalAction = await actionProcessing(addAnimal);
export const updateAnimalAction = await actionProcessing(updateAnimal);