"use server"

// config
import { FORM_SCHEMA_NAME, ZOD_SCHEMAS } from "@/config/forms";
import { API_ENDPOINTS } from "@/config/apis";

// types
import { EnclosureBase, EnclosureIdentifier } from "@/types/enclosures-service";
import { FormState, SelectorOption } from "@/types/form";
import { HTTP_METHOD } from "@/types/httpMethod";

// server actions
import { deserializeFormData, processFormAction } from "@/app/_actions/utils/general"

// utils
import { getAPIRequest, sendAPIRequest } from "@/lib/utils/server/api";
import { toSelectorOptions } from "@/lib/utils/general";


export const getEnclosureBase = async (enclosureId: string): Promise<EnclosureBase | undefined> => {
  const enclosure: EnclosureBase | undefined = await getAPIRequest(
    `${API_ENDPOINTS.enclosuresService.enclosures.bases}/${enclosureId}`,
    undefined
  )
  return enclosure;
}

export const getEnclosureIdentifiers = async (): Promise<EnclosureIdentifier[]> => {
  const enclosureIdentifiers: EnclosureIdentifier[] = await getAPIRequest<EnclosureIdentifier[]>(
    API_ENDPOINTS.enclosuresService.enclosures.identifiers,
    []
  );
  return enclosureIdentifiers;
}

export const getEnclosureIdentifierOptions = async (): Promise<SelectorOption[]> => {
  const enclosureIdentifiers: EnclosureIdentifier[] = await getEnclosureIdentifiers();
  // TODO SHOULD USE A COMMON FUNCTION!!!!
  // OR THE BACK END!!
  return enclosureIdentifiers.map((enclosure: EnclosureIdentifier) => {
    return {
      value: enclosure.id,
      label: enclosure.name
    }
  })
}

// Form server actions
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

const updateEnclosure = async (prevState: FormState, formData: FormData) => {
  const zodSchema = ZOD_SCHEMAS[FORM_SCHEMA_NAME.ENCLOSURE_BASE];

  const enclosureId = formData.get("id");

  const enclosure: EnclosureBase = deserializeFormData(formData, zodSchema) as EnclosureBase;

  await sendAPIRequest(
    `${API_ENDPOINTS.enclosuresService.enclosures.index}/${enclosureId}`,
    HTTP_METHOD.PUT,
    enclosure
  )

  return [
    `The enclosure ${enclosure.name} of type ${enclosure.enclosureTypeId} has been updated`
  ]
}

export const addEnclosureAction = processFormAction(addEnclosure);
export const updateEnclosureAction = processFormAction(updateEnclosure);