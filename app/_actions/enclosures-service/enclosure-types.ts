"use server"

// config
import { FORM_SCHEMA_NAME, ZOD_SCHEMAS } from "@/config/forms";
import { API_ENDPOINTS } from "@/config/apis";

// types
import { EnclosureTypeBase } from "@/types/enclosures-service";
import { FormState } from "@/types/form";
import { HTTP_METHOD } from "@/types/httpMethod";

// utils _action
import { deserializeFormData } from "@/app/_actions/utils";

// utils lib
import { sendAPIRequest } from "@/lib/utils/server/api";

// Server Actions to forms
// The functional part of the action
export const addEnclosureType = async (prevState: FormState, formData: FormData) => {
  const zodSchema = ZOD_SCHEMAS[FORM_SCHEMA_NAME.ENCLOSURE_TYPE_BASE];

  const enclosureType: EnclosureTypeBase = await deserializeFormData(formData, zodSchema) as EnclosureTypeBase;

  await sendAPIRequest(
    API_ENDPOINTS.enclosuresService.enclosureTypes.index,
    HTTP_METHOD.POST,
    enclosureType
  )


  return [
    `The enclosure type ${enclosureType.id} was created`
  ]
}

// TODO PUT SOMETHING HERE!!!
// TODO PUT SOMETHING HERE!!!
// TODO PUT SOMETHING HERE!!!
// TODO PUT SOMETHING HERE!!!
// TODO PUT SOMETHING HERE!!!
export const updateEnclosureType = async (prevState: FormState, formData: FormData): Promise<string[]> => {
  console.log(prevState, formData);
  console.error("YOU NEED TO PUT SOMETHING HERE");
  return [];
}