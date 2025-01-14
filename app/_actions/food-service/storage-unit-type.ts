
// config
import { FORM_SCHEMA_NAME } from "@/config/forms";

// API endpoints
import { API_ENDPOINTS } from "@/config/apis";

// types
import { FormState } from "@/types/form";
import { HTTP_METHOD } from "@/types/httpMethod";
import { StorageUnitTypeBase } from "@/types/food-service";

// action utils
import { processFormAction } from "../utils/server/formActionUtils"
import { deserializeFormData } from "../utils/general";

// lib utils
import { sendAPIRequest } from "@/lib/utils/server/api";



// zod schemas
import { ZOD_SCHEMAS } from "@/config/zodSchemas";


const addStorageUnitType = async (prevState: FormState, formData: FormData) => {
  const zodSchema = ZOD_SCHEMAS[FORM_SCHEMA_NAME.STORAGE_UNIT_TYPE_BASE];

  const storageUnitType: StorageUnitTypeBase = deserializeFormData(formData, zodSchema) as StorageUnitTypeBase;

  await sendAPIRequest(
    API_ENDPOINTS.animalsService.animals.index,
    HTTP_METHOD.POST,
    storageUnitType
  );

  return [
    `${storageUnitType.id} added.`
  ];
}


export const addStorageUnitTypeAction = await processFormAction(addStorageUnitType);