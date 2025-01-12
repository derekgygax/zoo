"use server"

// config
import { FORM_SCHEMA_NAME } from "@/config/forms";

// config
import { API_ENDPOINTS } from "@/config/apis";
import { ZOD_SCHEMAS } from "@/config/zodSchemas";

// types
import { EnclosureBase } from "@/types/enclosures-service";
import { FormState } from "@/types/form";
import { HTTP_METHOD } from "@/types/httpMethod";

// server actions
import { deserializeFormData } from "@/app/_actions/utils/general"
import { processFormAction } from "@/app/_actions/utils/server/formActionUtils";

// utils
import { sendAPIRequest } from "@/lib/utils/server/api";

const addEnclosure = async (prevState: FormState, formData: FormData) => {
  const zodSchema = ZOD_SCHEMAS[FORM_SCHEMA_NAME.ENCLOSURE_BASE];

  const enclosure: EnclosureBase = deserializeFormData(formData, zodSchema) as EnclosureBase;

  await sendAPIRequest(
    API_ENDPOINTS.enclosuresService.enclosures.index,
    HTTP_METHOD.POST,
    enclosure
  )

  return [
    `The enclosure ${enclosure.name} of type ${enclosure.enclosureTypeId} has been added to the zoo`
  ];
}

export const addEnclosureAction = await processFormAction(addEnclosure);