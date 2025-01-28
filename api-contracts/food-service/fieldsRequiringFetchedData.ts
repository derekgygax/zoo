import { SchemasSelectors} from "@/types/script";

  export const fieldsRequiringFetchedData: SchemasSelectors = {
  "FoodStock": [
    "food_type_id",
    "storage_unit_id"
  ],
  "FoodStockBase": [
    "food_type_id",
    "storage_unit_id"
  ],
  "FoodType": [],
  "FoodTypeBase": [],
  "HTTPValidationError": [],
  "ModelIdentifier": [],
  "StorageUnit": [
    "storage_unit_type_id"
  ],
  "StorageUnitBase": [
    "storage_unit_type_id"
  ],
  "StorageUnitType": [],
  "StorageUnitTypeBase": [],
  "ValidationError": []
} as SchemasSelectors;