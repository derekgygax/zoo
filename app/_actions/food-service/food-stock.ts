"use server"

// config
import { FORM_SCHEMA_NAME, ZOD_SCHEMAS } from "@/config/forms";

// API endpoints
import { API_ENDPOINTS } from "@/config/apis";

// types
import { FormState } from "@/types/form";
import { HTTP_METHOD } from "@/types/httpMethod";
import { FoodStockBase } from "@/types/food-service";
import { ModelIdentifier } from "@/types/serviceModels";

// action utils
import { deserializeFormData } from "@/app/_actions/utils";

// lib utils
import { getAPIRequest, sendAPIRequest } from "@/lib/utils/server/api";

export const getFoodStockIdentifiers = async (): Promise<ModelIdentifier[]> => {
  const foodStockIdentifiers: ModelIdentifier[] = await getAPIRequest<ModelIdentifier[]>(
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

export const addFoodStock = async (prevState: FormState, formData: FormData) => {
  const zodSchema = ZOD_SCHEMAS[FORM_SCHEMA_NAME.FOOD_STOCK_BASE];

  const foodStock: FoodStockBase = await deserializeFormData(formData, zodSchema) as FoodStockBase;

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
export const updateFoodStock = async (prevState: FormState, formData: FormData): Promise<string[]> => {
  console.log(prevState, formData);
  console.error("PUT SOMETHING in updateFoodStock");
  return [];
}