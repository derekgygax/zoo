"use server"

// API endpoints
import { API_ENDPOINTS } from "@/config/api";

// types
import { FORM_SCHEMA_NAME, FormState } from "@/types/form";

// action utils
import { processFormAction } from "../utils/server/formActionUtils"
import { deserializeFormData } from "../utils/general";

// lib utils
import { getAPIRequest, sendAPIRequest } from "@/lib/utils/server/api";

// types
import { Specie, SpecieBase } from "@/types/animals-service";

// zod schemas
import { ZOD_SCHEMAS } from "@/config/zodSchemas";

// A simple request call to get the animal by the id
export const getSpecie = async (specieName: string): Promise<SpecieBase | undefined> => {

  const specie: SpecieBase | undefined = await getAPIRequest(
    `${API_ENDPOINTS.animalsService.species.index}/${specieName}`,
    undefined
  );

  return specie;
}

export const getSpecies = async (): Promise<Specie[]> => {

  const species: Specie[] = await getAPIRequest(
    API_ENDPOINTS.animalsService.species.index,
    []
  );

  return species
}

export const getSpeciesBase = async (): Promise<SpecieBase[]> => {

  const species: SpecieBase[] = await getAPIRequest(
    API_ENDPOINTS.animalsService.species.base,
    []
  );

  return species
}


// Server Actions to forms
// The functional part of the action
const addSpecie = async (prevState: FormState, formData: FormData) => {
  const zodSchema = ZOD_SCHEMAS[FORM_SCHEMA_NAME.SPECIE_BASE];

  const specie: SpecieBase = deserializeFormData(formData, zodSchema) as SpecieBase;

  await sendAPIRequest(
    API_ENDPOINTS.animalsService.species.index,
    'POST',
    specie
  );

  return [
    `${specie.specie} added.`
  ];
}

// TODO FIX THIS!!
// TODO FIX THIS!!
// TODO FIX THIS!!
// TODO FIX THIS!!
// TODO FIX THIS!!
// const udpateAnimal = async (prevState: FormState, formData: FormData) => {
//   const zodSchema = ZOD_SCHEMAS[FORM_SCHEMA_NAME.SPECIE_BASE];

//   const animalId = formData.get("id");
//   const animal: AnimalBase = deserializeFormData(formData, zodSchema) as AnimalBase;

//   await sendAPIRequest(
//     `${API_ENDPOINTS.animalsService.animals.index}/${animalId}`,
//     'POST',
//     animal
//   );

//   return [
//     `${animal.name} the ${animal.specie} added.`
//   ];
// }


// Add the catch wrapping and processing the state returning
export const addSpecieAction = await processFormAction(addSpecie);