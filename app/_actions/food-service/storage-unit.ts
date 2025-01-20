"use server"

// config
import { FORM_SCHEMA_NAME, ZOD_SCHEMAS } from "@/config/forms";

// API endpoints
import { API_ENDPOINTS } from "@/config/apis";

// types
import { FormState } from "@/types/form";
import { HTTP_METHOD } from "@/types/httpMethod";
import { SelectorOption } from "@/types/form";
import { StorageUnitBase, StorageUnitIdentifier } from "@/types/food-service";

// action utils
import { deserializeFormData, processFormAction } from "@/app/_actions/utils/general";

// lib utils
import { getAPIRequest, sendAPIRequest } from "@/lib/utils/server/api";

export const getStorageUnit = async (storageUnitId: string): Promise<StorageUnitBase | undefined> => {
  const storageUnit: StorageUnitBase | undefined = await getAPIRequest(
    `${API_ENDPOINTS.foodService.storageUnits.index}/${storageUnitId}`,
    undefined
  )
  return storageUnit;
}

export const getStorageUnitIdentifiers = async (): Promise<StorageUnitIdentifier[]> => {
  const storageUnitIdentifiers: StorageUnitIdentifier[] = await getAPIRequest<StorageUnitIdentifier[]>(
    API_ENDPOINTS.foodService.storageUnits.identifiers,
    []
  );
  return storageUnitIdentifiers;
}

export const getStorageUnitIdentifiersOptions = async (): Promise<SelectorOption[]> => {
  const storageUnitIdentifiers: StorageUnitIdentifier[] = await getStorageUnitIdentifiers();
  // TODO SHOULD USE A COMMON FUNCTION!!!!
  // OR THE BACK END!!
  return storageUnitIdentifiers.map((storageUnit: StorageUnitIdentifier) => {
    return {
      value: storageUnit.id,
      label: storageUnit.name
    }
  })
}

export const addStorageUnit = async (prevState: FormState, formData: FormData) => {

  const zodSchema = ZOD_SCHEMAS[FORM_SCHEMA_NAME.STORAGE_UNIT_BASE];

  const storageUnit: StorageUnitBase = deserializeFormData(formData, zodSchema) as StorageUnitBase;

  await sendAPIRequest(
    API_ENDPOINTS.foodService.storageUnits.index,
    HTTP_METHOD.POST,
    storageUnit
  );

  return [
    `The ${storageUnit.storage_unit_type_id} ${storageUnit.name}  added.`
  ];
}

// TODO PUT SOMETHING HERE!!!
const updateStorageUnit = async (prevState: FormState, formData: FormData): Promise<string[]> => {
  console.log(prevState, formData);
  return [];
}


export const addStorageUnitAction = processFormAction(addStorageUnit);
export const updateStorageUnitAction = processFormAction(updateStorageUnit);