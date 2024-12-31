"use server"

// API endpoints
import { APIS } from "@/config/api";

// types
import { FORM_SCHEMA, FormState } from "@/types/form";

// action utils
import { actionProcessing } from "./utils/server"
import { deserializeFormData } from "./utils/general";

// lib utils
import { getAPIRequest, sendAPIRequest } from "@/lib/utils/server";

// types
import { AnimalBase } from "@/types/animal";

// zod schemas
import { ZOD_SCHEMAS } from "@/config/zodSchemas";

// A simple request call to get the animal by the id
export const getAnimal = async (animalId: string): Promise<AnimalBase | undefined> => {

  const animal: AnimalBase | undefined = await getAPIRequest(
    `${APIS.animalsService.animals.index}/${animalId}`,
    undefined
  );

  return animal;
}


// Server Actions to forms
// The functional part of the action
const addAnimal = async (prevState: FormState, formData: FormData) => {
  const zodSchema = ZOD_SCHEMAS[FORM_SCHEMA.ANIMAL_BASE];

  const animal: AnimalBase = deserializeFormData(formData, zodSchema) as AnimalBase;

  sendAPIRequest(
    APIS.animalsService.animals.index,
    'POST',
    animal
  );

  return [
    `${animal.name} the ${animal.specie} added.`
  ];
}

const editAnimal = async (prevState: FormState, formData: FormData) => {
  const zodSchema = ZOD_SCHEMAS[FORM_SCHEMA.ANIMAL_BASE];

  const animalId = formData.get("id");
  const animal: AnimalBase = deserializeFormData(formData, zodSchema) as AnimalBase;

  sendAPIRequest(
    `${APIS.animalsService.animals.index}/${animalId}`,
    'POST',
    animal
  );

  return [
    `${animal.name} the ${animal.specie} added.`
  ];
}


// Add the catch wrapping and processing the state returning
export const addAnimalAction = await actionProcessing(addAnimal);
export const editAnimalAction = await actionProcessing(editAnimal);