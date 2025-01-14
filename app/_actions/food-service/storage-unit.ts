
// config
import { FORM_SCHEMA_NAME } from "@/config/forms";

// API endpoints
import { API_ENDPOINTS } from "@/config/apis";

// types
import { FormState } from "@/types/form";
import { HTTP_METHOD } from "@/types/httpMethod";
import { FoodStockBase, StorageUnitBase } from "@/types/food-service";

// action utils
import { processFormAction } from "../utils/server/formActionUtils"
import { deserializeFormData } from "../utils/general";

// lib utils
import { sendAPIRequest } from "@/lib/utils/server/api";



// zod schemas
import { ZOD_SCHEMAS } from "@/config/zodSchemas";


const addStorageUnit = async (prevState: FormState, formData: FormData) => {
  const zodSchema = ZOD_SCHEMAS[FORM_SCHEMA_NAME.FOOD_STOCK_BASE];

  const storageUnit: StorageUnitBase = deserializeFormData(formData, zodSchema) as StorageUnitBase;

  await sendAPIRequest(
    API_ENDPOINTS.animalsService.animals.index,
    HTTP_METHOD.POST,
    storageUnit
  );

  return [
    `The ${storageUnit.storage_unit_type_id} ${storageUnit.name}  added.`
  ];
}


export const addStorageUnitAction = await processFormAction(addStorageUnit);