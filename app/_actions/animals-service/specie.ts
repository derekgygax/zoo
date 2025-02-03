"use server"

// config
import { FORM_SCHEMA_NAME, ZOD_SCHEMAS } from "@/config/forms";

// API endpoints
import { API_ENDPOINTS } from "@/config/apis";

// types
import { FormState } from "@/types/form";
import { HTTP_METHOD } from "@/types/httpMethod";
import { ModelIdentifier } from "@/types/serviceModels";

// action utils
import { deserializeFormData } from "@/app/_actions/utils";

// lib utils
import { getAPIRequest, sendAPIRequest } from "@/lib/utils/server/api";

// types
import { Specie, SpecieBase } from "@/types/animals-service";


export const getSpecies = async (): Promise<Specie[]> => {

  const species: Specie[] = await getAPIRequest(
    API_ENDPOINTS.animalsService.species.index,
    []
  );

  return species
}

export const getSpecieIdentifiers = async (): Promise<ModelIdentifier[]> => {
  const specieIdentifiers: ModelIdentifier[] = await getAPIRequest<ModelIdentifier[]>(
    API_ENDPOINTS.animalsService.species.identifiers,
    []
  )
  return specieIdentifiers;
}

export const getSpeciesBases = async (): Promise<SpecieBase[]> => {

  const species: SpecieBase[] = await getAPIRequest(
    API_ENDPOINTS.animalsService.species.bases,
    []
  );

  return species
}

export const getSpecieBaseById = async (specieId: string): Promise<SpecieBase | undefined> => {
  const specie: SpecieBase | undefined = await getAPIRequest<SpecieBase | undefined>(
    `${API_ENDPOINTS.animalsService.species.index}/${specieId}/base`,
    undefined
  )
  return specie;
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
export const addSpecie = async (prevState: FormState, formData: FormData) => {
  const zodSchema = ZOD_SCHEMAS[FORM_SCHEMA_NAME.SPECIE_BASE];

  const specie: SpecieBase = await deserializeFormData(formData, zodSchema) as SpecieBase;

  await sendAPIRequest(
    API_ENDPOINTS.animalsService.species.index,
    HTTP_METHOD.POST,
    specie
  );

  return [
    `${specie.id} added.`
  ];
}

// TODO This is LE FUCKEDD!!!
// Do NOT send the whole specie!!
// You can NOT change the specie id idjet!!
// TODO FIX FIX FIX
export const updateSpecie = async (prevState: FormState, formData: FormData) => {
  const zodSchema = ZOD_SCHEMAS[FORM_SCHEMA_NAME.SPECIE_BASE];

  const specieId = formData.get("id");
  const specie: SpecieBase = await deserializeFormData(formData, zodSchema) as SpecieBase;

  await sendAPIRequest(
    `${API_ENDPOINTS.animalsService.species.index}/${specieId}`,
    HTTP_METHOD.PUT,
    specie
  );

  return [
    `The ${specie.id} has been updated`
  ];
}