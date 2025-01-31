"use server"

// config
import { FORM_SCHEMA_NAME, ZOD_SCHEMAS } from "@/config/forms";

// API endpoints
import { API_ENDPOINTS } from "@/config/apis";

// types
import { FormState } from "@/types/form";
import { HTTP_METHOD } from "@/types/httpMethod";
import { StorageUnitBase } from "@/types/food-service";

// action utils
import { deserializeFormData } from "@/app/_actions/utils";

// lib utils
import { getAPIRequest, sendAPIRequest } from "@/lib/utils/server/api";
import { ModelIdentifier } from "@/types/animals-service";

export const getStorageUnitBaseById = async (storageUnitId: string): Promise<StorageUnitBase | undefined> => {
  const storageUnit: StorageUnitBase | undefined = await getAPIRequest(
    `${API_ENDPOINTS.foodService.storageUnits.index}/${storageUnitId}/base`,
    undefined
  )
  return storageUnit;
}

export const getStorageUnitIdentifiers = async (): Promise<ModelIdentifier[]> => {
  const storageUnitIdentifiers: ModelIdentifier[] = await getAPIRequest<ModelIdentifier[]>(
    API_ENDPOINTS.foodService.storageUnits.identifiers,
    []
  );
  return storageUnitIdentifiers;
}

export const addStorageUnit = async (prevState: FormState, formData: FormData) => {

  const zodSchema = ZOD_SCHEMAS[FORM_SCHEMA_NAME.STORAGE_UNIT_BASE];

  const storageUnit: StorageUnitBase = await deserializeFormData(formData, zodSchema) as StorageUnitBase;

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
export const updateStorageUnit = async (prevState: FormState, formData: FormData): Promise<string[]> => {
  console.log(prevState, formData);
  console.error("ADD FOR updateStorageUnit");
  return [];
}