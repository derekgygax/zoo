"use server"

// config
import { FORM_SCHEMA_NAME, ZOD_SCHEMAS } from "@/config/forms";

// API endpoints
import { API_ENDPOINTS } from "@/config/apis";

// types
import { FormState } from "@/types/form";
import { HTTP_METHOD } from "@/types/httpMethod";
import { StorageUnitTypeBase } from "@/types/food-service";
import { ModelIdentifier } from "@/types/serviceModels";

// action utils
import { deserializeFormData } from "@/app/_actions/utils";

// lib utils
import { getAPIRequest, sendAPIRequest } from "@/lib/utils/server/api";

export const getStorageUnitTypeIds = async (): Promise<string[]> => {
  const storageUnitTypes: string[] = await getAPIRequest(
    API_ENDPOINTS.foodService.storageUnitTypes.ids,
    []
  );

  return storageUnitTypes
}

export const getStorageUnitTypeIdentifiers = async (): Promise<ModelIdentifier[]> => {
  const storageUnitIdentifiers: ModelIdentifier[] = await getAPIRequest<ModelIdentifier[]>(
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

export const addStorageUnitType = async (prevState: FormState, formData: FormData) => {
  const zodSchema = ZOD_SCHEMAS[FORM_SCHEMA_NAME.STORAGE_UNIT_TYPE_BASE];

  const storageUnitType: StorageUnitTypeBase = await deserializeFormData(formData, zodSchema) as StorageUnitTypeBase;

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
export const updateStorageUnitType = async (prevState: FormState, formData: FormData): Promise<string[]> => {
  console.log(prevState, formData);
  console.error("ADD FOR updateStorageUnitType");
  return [];
}