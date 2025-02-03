"use server"

// config
import { FORM_SCHEMA_NAME, ZOD_SCHEMAS } from "@/config/forms";

// API endpoints
import { API_ENDPOINTS } from "@/config/apis";

// types
import { FormState } from "@/types/form";
import { HTTP_METHOD } from "@/types/httpMethod";
import { FoodTypeBase } from "@/types/food-service";
import { ModelIdentifier } from "@/types/serviceModels";

// action utils
import { deserializeFormData } from "@/app/_actions/utils";

// lib utils
import { getAPIRequest, sendAPIRequest } from "@/lib/utils/server/api";


export const getFoodTypeIds = async (): Promise<string[]> => {
  const foodTypes: string[] = await getAPIRequest(
    API_ENDPOINTS.foodService.foodTypes.ids,
    []
  );

  return foodTypes
}

export const getFoodTypeIdentifiers = async (): Promise<ModelIdentifier[]> => {
  const foodTypeIdentifiers: ModelIdentifier[] = await getAPIRequest<ModelIdentifier[]>(
    API_ENDPOINTS.foodService.foodTypes.identifiers,
    []
  );
  return foodTypeIdentifiers;
}

export const addFoodType = async (prevState: FormState, formData: FormData) => {
  const zodSchema = ZOD_SCHEMAS[FORM_SCHEMA_NAME.FOOD_TYPE_BASE];

  const foodType: FoodTypeBase = await deserializeFormData(formData, zodSchema) as FoodTypeBase;

  await sendAPIRequest(
    API_ENDPOINTS.foodService.foodTypes.index,
    HTTP_METHOD.POST,
    foodType
  );

  return [
    `${foodType.id} added.`
  ];
}

// TODO PUT SOMETHING HERE!
export const updateFoodType = async (prevState: FormState, formData: FormData): Promise<string[]> => {
  console.log(prevState, formData);
  console.error("Put something in updateFoodType");
  return [];
}