"use server"

// config
import { FORM_SCHEMA_NAME, ZOD_SCHEMAS } from "@/config/forms";

// API endpoints
import { API_ENDPOINTS } from "@/config/apis";

// types
import { FormState, SelectorOption } from "@/types/form";
import { HTTP_METHOD } from "@/types/httpMethod";
import { FoodStockBase } from "@/types/food-service";

// action utils
import { deserializeFormData, processFormAction } from "@/app/_actions/utils/general";

// lib utils
import { getAPIRequest, sendAPIRequest } from "@/lib/utils/server/api";

export const getFoodStockIdentifiers = async (): Promise<SelectorOption[]> => {
  const foodStockIdentifiers: SelectorOption[] = await getAPIRequest<SelectorOption[]>(
    API_ENDPOINTS.foodService.foodStocks.identifiers,
    []
  );
  return foodStockIdentifiers;
}

export const getFoodStockBaseById = async (foodStockId: string): Promise<FoodStockBase | undefined> => {
  const foodStock: FoodStockBase | undefined = await getAPIRequest<FoodStockBase | undefined>(
    `${API_ENDPOINTS.foodService.foodStocks.index}/${foodStockId}/base`,
    undefined
  );
  return foodStock;
}

const addFoodStock = async (prevState: FormState, formData: FormData) => {
  const zodSchema = ZOD_SCHEMAS[FORM_SCHEMA_NAME.FOOD_STOCK_BASE];

  const foodStock: FoodStockBase = deserializeFormData(formData, zodSchema) as FoodStockBase;

  await sendAPIRequest(
    API_ENDPOINTS.foodService.foodStocks.index,
    HTTP_METHOD.POST,
    foodStock
  );

  return [
    `${foodStock.quantity} ${foodStock.food_type_id} added.`
  ];
}

// TODO PUT SOMETHING HERE!!!
const updateFoodStock = async (prevState: FormState, formData: FormData): Promise<string[]> => {
  console.log(prevState, formData);
  console.error("PUT SOMETHING in updateFoodStock");
  return [];
}


export const addFoodStockAction = processFormAction(addFoodStock);
export const updateFoodStockAction = processFormAction(updateFoodStock);