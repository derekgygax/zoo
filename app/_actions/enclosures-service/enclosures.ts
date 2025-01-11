"use server"

// config
import { ZOD_SCHEMAS } from "@/config/zodSchemas";
import { API_ENDPOINTS } from "@/config/api";

// types
import { EnclosureBase } from "@/types/enclosures-service";
import { FormState, FORM_SCHEMA_NAME } from "@/types/form";

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
    'POST',
    enclosure
  )

  return [
    `The enclosure ${enclosure.name} of type ${enclosure.enclosureType} has been added to the zoo`
  ];
}

export const addEnclosureAction = await processFormAction(addEnclosure);