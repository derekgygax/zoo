"use server"

// config
import { FORM_SCHEMA_NAME, ZOD_SCHEMAS } from "@/config/forms";

// API endpoints
import { API_ENDPOINTS } from "@/config/apis";

// types
import { FormState, SelectorOption } from "@/types/form";
import { HTTP_METHOD } from "@/types/httpMethod";
import { StorageUnitTypeBase } from "@/types/food-service";

// action utils
import { deserializeFormData, processFormAction } from "@/app/_actions/utils/general";

// lib utils
import { getAPIRequest, sendAPIRequest } from "@/lib/utils/server/api";

export const getStorageUnitTypeIds = async (): Promise<string[]> => {
  const storageUnitTypes: string[] = await getAPIRequest(
    API_ENDPOINTS.foodService.storageUnitTypes.ids,
    []
  );

  return storageUnitTypes
}

export const getStorageUnitTypeIdentifiers = async (): Promise<SelectorOption[]> => {
  const storageUnitIdentifiers: SelectorOption[] = await getAPIRequest<SelectorOption[]>(
    API_ENDPOINTS.foodService.storageUnitTypes.identifiers,
    []
  );
  return storageUnitIdentifiers;
}

export const getStorageUnitTypeBaseById = async (storageUnitTypeId: string): Promise<StorageUnitTypeBase | undefined> => {
  const storageUnitType: StorageUnitTypeBase | undefined = await getAPIRequest<StorageUnitTypeBase | undefined>(
    `${API_ENDPOINTS.foodService.storageUnitTypes.index}/${storageUnitTypeId}/base`,
    undefined
  );
  return storageUnitType;
}

const addStorageUnitType = async (prevState: FormState, formData: FormData) => {
  const zodSchema = ZOD_SCHEMAS[FORM_SCHEMA_NAME.STORAGE_UNIT_TYPE_BASE];

  const storageUnitType: StorageUnitTypeBase = deserializeFormData(formData, zodSchema) as StorageUnitTypeBase;

  await sendAPIRequest(
    API_ENDPOINTS.foodService.storageUnitTypes.index,
    HTTP_METHOD.POST,
    storageUnitType
  );

  return [
    `${storageUnitType.id} added.`
  ];
}

// TODO PUT SOMETHING HERE!!!
const updateStorageUnitType = async (prevState: FormState, formData: FormData): Promise<string[]> => {
  console.log(prevState, formData);
  console.error("ADD FOR updateStorageUnitType");
  return [];
}


export const addStorageUnitTypeAction = processFormAction(addStorageUnitType);
export const updateStorageUnitTypeAction = processFormAction(updateStorageUnitType);