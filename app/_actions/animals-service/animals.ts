"use server"

// config
import { FORM_SCHEMA_NAME, ZOD_SCHEMAS } from "@/config/forms";

// API endpoints
import { API_ENDPOINTS } from "@/config/apis";

// types
import { FormState, SelectorOption } from "@/types/form";
import { HTTP_METHOD } from "@/types/httpMethod";

// action utils
import { processFormAction, deserializeFormData } from "@/app/_actions/utils/general";

// lib utils
import { getAPIRequest, sendAPIRequest } from "@/lib/utils/server/api";

// types
import { AnimalBase, AnimalIdentifier } from "@/types/animals-service";

// A simple request call to get the animal by the id
export const getAnimal = async (animalId: string): Promise<AnimalBase | undefined> => {

  const animal: AnimalBase | undefined = await getAPIRequest(
    `${API_ENDPOINTS.animalsService.animals.index}/${animalId}`,
    undefined
  );

  return animal;
}

export const getAnimalIdentifiers = async (): Promise<AnimalIdentifier[]> => {
  const animalIdentifiers: AnimalIdentifier[] = await getAPIRequest<AnimalIdentifier[]>(
    API_ENDPOINTS.animalsService.animals.identifiers,
    []
  );
  return animalIdentifiers;
}

export const getAnimalIdentifierOptions = async (): Promise<SelectorOption[]> => {
  const animalIdentifiers: AnimalIdentifier[] = await getAnimalIdentifiers();
  return animalIdentifiers.map((animal: AnimalIdentifier) => {
    return {
      value: animal.id,
      label: `${animal.name} (${animal.specie_id})`
    }
  })
}


// Server Actions to forms
// The functional part of the action
const addAnimal = async (prevState: FormState, formData: FormData) => {
  const zodSchema = ZOD_SCHEMAS[FORM_SCHEMA_NAME.ANIMAL_BASE];

  const animal: AnimalBase = deserializeFormData(formData, zodSchema) as AnimalBase;

  await sendAPIRequest(
    API_ENDPOINTS.animalsService.animals.index,
    HTTP_METHOD.POST,
    animal
  );

  return [
    `${animal.name} the ${animal.specie_id} added.`
  ];
}

const updateAnimal = async (prevState: FormState, formData: FormData) => {
  const zodSchema = ZOD_SCHEMAS[FORM_SCHEMA_NAME.ANIMAL_BASE];

  const animalId = formData.get("id");
  const animal: AnimalBase = deserializeFormData(formData, zodSchema) as AnimalBase;

  await sendAPIRequest(
    `${API_ENDPOINTS.animalsService.animals.index}/${animalId}`,
    HTTP_METHOD.PUT,
    animal
  );

  return [
    `${animal.name} the ${animal.specie_id} added.`
  ];
}


// Add the catch wrapping and processing the state returning
export const addAnimalAction = processFormAction(addAnimal);
export const updateAnimalAction = processFormAction(updateAnimal);