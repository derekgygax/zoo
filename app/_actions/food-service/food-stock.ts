
// config
import { FORM_SCHEMA_NAME } from "@/config/forms";

// API endpoints
import { API_ENDPOINTS } from "@/config/apis";

// types
import { FormState } from "@/types/form";
import { HTTP_METHOD } from "@/types/httpMethod";
import { FoodStockBase } from "@/types/food-service";

// action utils
import { processFormAction } from "../utils/server/formActionUtils"
import { deserializeFormData } from "../utils/general";

// lib utils
import { sendAPIRequest } from "@/lib/utils/server/api";



// zod schemas
import { ZOD_SCHEMAS } from "@/config/zodSchemas";


const addFoodStock = async (prevState: FormState, formData: FormData) => {
  const zodSchema = ZOD_SCHEMAS[FORM_SCHEMA_NAME.FOOD_STOCK_BASE];

  const foodStock: FoodStockBase = deserializeFormData(formData, zodSchema) as FoodStockBase;

  await sendAPIRequest(
    API_ENDPOINTS.animalsService.animals.index,
    HTTP_METHOD.POST,
    foodStock
  );

  return [
    `${foodStock.quantity} ${foodStock.food_type_id} added.`
  ];
}


export const addFoodStockAction = await processFormAction(addFoodStock);