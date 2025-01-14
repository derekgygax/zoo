"use server"

// config
import { FORM_SCHEMA_NAME } from "@/config/forms";

// config
import { API_ENDPOINTS } from "@/config/apis";
import { ZOD_SCHEMAS } from "@/config/zodSchemas";

// types
import { EnclosureTypeBase } from "@/types/enclosures-service";
import { FormState } from "@/types/form";
import { HTTP_METHOD } from "@/types/httpMethod";

// utils _action
import { deserializeFormData } from "@/app/_actions/utils/general";
import { processFormAction } from "@/app/_actions/utils/server/formActionUtils";

// utils lib
import { getAPIRequest, sendAPIRequest } from "@/lib/utils/server/api";


// Get the enclosure types from the enclosures service
export const getEnclosureTypeKeys = async (): Promise<string[]> => {

  const enclosureTypes: string[] = await getAPIRequest(
    API_ENDPOINTS.enclosuresService.enclosureTypes.ids,
    []
  )

  return enclosureTypes;
}

// Server Actions to forms
// The functional part of the action
const addEnclosureType = async (prevState: FormState, formData: FormData) => {
  const zodSchema = ZOD_SCHEMAS[FORM_SCHEMA_NAME.ENCLOSURE_TYPE_BASE];

  const enclosureType: EnclosureTypeBase = deserializeFormData(formData, zodSchema) as EnclosureTypeBase;

  await sendAPIRequest(
    API_ENDPOINTS.enclosuresService.enclosureTypes.index,
    HTTP_METHOD.POST,
    enclosureType
  )


  return [
    `The enclosure type ${enclosureType.id} was created`
  ]
}


export const addEnclosureTypeAction = await processFormAction(addEnclosureType);