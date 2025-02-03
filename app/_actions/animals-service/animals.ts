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
import { sendAPIRequest } from "@/lib/utils/server/api";

// types
import { AnimalBase } from "@/types/animals-service";

// Server Actions to forms
// The functional part of the action
export const addAnimal = async (prevState: FormState, formData: FormData) => {
  const zodSchema = ZOD_SCHEMAS[FORM_SCHEMA_NAME.ANIMAL_BASE];

  const animal: AnimalBase = await deserializeFormData(formData, zodSchema) as AnimalBase;

  await sendAPIRequest(
    API_ENDPOINTS.animalsService.animals.index,
    HTTP_METHOD.POST,
    animal
  );

  return [
    `${animal.name} the ${animal.specie_id} added.`
  ];
}

export const updateAnimal = async (prevState: FormState, formData: FormData) => {
  const zodSchema = ZOD_SCHEMAS[FORM_SCHEMA_NAME.ANIMAL_BASE];

  const animalId = formData.get("id");
  const animal: AnimalBase = await deserializeFormData(formData, zodSchema) as AnimalBase;

  await sendAPIRequest(
    `${API_ENDPOINTS.animalsService.animals.index}/${animalId}`,
    HTTP_METHOD.PUT,
    animal
  );

  return [
    `${animal.name} the ${animal.specie_id} updated.`
  ];
}
