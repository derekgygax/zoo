"use server"

import { ZOD_SCHEMAS } from "@/config/zodSchemas";
import { EnclosureTypeBase } from "@/types/enclosures-service";
// types
import { FORM_SCHEMA_NAME, FormState } from "@/types/form";
import { deserializeFormData } from "../utils/general";
import { processFormAction } from "../utils/server/formActionUtils";
import { sendAPIRequest } from "@/lib/utils/server/api";
import { API_ENDPOINTS } from "@/config/api";

// Server Actions to forms
// The functional part of the action
const addEnclosureType = async (prevState: FormState, formData: FormData) => {
  const zodSchema = ZOD_SCHEMAS[FORM_SCHEMA_NAME.ENCLOSURE_TYPE_BASE];

  const enclosureType: EnclosureTypeBase = deserializeFormData(formData, zodSchema) as EnclosureTypeBase;

  await sendAPIRequest(
    API_ENDPOINTS.enclosuresService.enclosureTypes.index,
    'POST',
    enclosureType
  )


  return [
    `The enclosure type ${enclosureType.type} was created`
  ]
}


export const addEnclosureTypeAction = await processFormAction(addEnclosureType);