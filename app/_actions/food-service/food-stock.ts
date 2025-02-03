"use server"

// config
import { FORM_SCHEMA_NAME, ZOD_SCHEMAS } from "@/config/forms";

// API endpoints
import { API_ENDPOINTS } from "@/config/apis";

// types
import { FormState } from "@/types/form";
import { HTTP_METHOD } from "@/types/httpMethod";
import { FoodStockBase } from "@/types/food-service";

// action utils
import { deserializeFormData } from "@/app/_actions/utils";

// lib utils
import { sendAPIRequest } from "@/lib/utils/server/api";

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