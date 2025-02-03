"use server"

// config
import { FORM_SCHEMA_NAME, ZOD_SCHEMAS } from "@/config/forms";
import { API_ENDPOINTS } from "@/config/apis";

// types
import { EnclosureBase } from "@/types/enclosures-service";
import { FormState } from "@/types/form";
import { HTTP_METHOD } from "@/types/httpMethod";

// server actions
import { deserializeFormData } from "@/app/_actions/utils"

// utils
import { sendAPIRequest } from "@/lib/utils/server/api";

// Form server actions
export const addEnclosure = async (prevState: FormState, formData: FormData) => {
  const zodSchema = ZOD_SCHEMAS[FORM_SCHEMA_NAME.ENCLOSURE_BASE];

  const enclosure: EnclosureBase = await deserializeFormData(formData, zodSchema) as EnclosureBase;

  await sendAPIRequest(
    API_ENDPOINTS.enclosuresService.enclosures.index,
    HTTP_METHOD.POST,
    enclosure
  )

  return [
    `The enclosure ${enclosure.name} of type ${enclosure.enclosureTypeId} has been added to the zoo`
  ];
}

export const updateEnclosure = async (prevState: FormState, formData: FormData) => {
  const zodSchema = ZOD_SCHEMAS[FORM_SCHEMA_NAME.ENCLOSURE_BASE];

  const enclosureId = formData.get("id");

  const enclosure: EnclosureBase = await deserializeFormData(formData, zodSchema) as EnclosureBase;

  await sendAPIRequest(
    `${API_ENDPOINTS.enclosuresService.enclosures.index}/${enclosureId}`,
    HTTP_METHOD.PUT,
    enclosure
  )

  return [
    `The enclosure ${enclosure.name} of type ${enclosure.enclosureTypeId} has been updated`
  ]
}