"use server"

// config
import { FORM_SCHEMA_NAME, ZOD_SCHEMAS } from "@/config/forms";

// API endpoints
import { API_ENDPOINTS } from "@/config/apis";

// types
import { FormState } from "@/types/form";
import { HTTP_METHOD } from "@/types/httpMethod";

// action utils
import { processFormAction } from "../utils/server/formActionUtils"
import { deserializeFormData } from "../utils/general";

// lib utils
import { getAPIRequest, sendAPIRequest } from "@/lib/utils/server/api";

// types
import { Specie, SpecieBase } from "@/types/animals-service";

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

export const getSpecieIds = async (): Promise<string[]> => {
  const species: string[] = await getAPIRequest(
    API_ENDPOINTS.animalsService.species.ids,
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
    HTTP_METHOD.POST,
    specie
  );

  return [
    `${specie.id} added.`
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