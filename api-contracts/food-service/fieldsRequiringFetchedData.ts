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
  "StorageUnit": [
    "storage_unit_type_id"
  ],
  "StorageUnitBase": [
    "storage_unit_type_id"
  ],
  "StorageUnitIdentifier": [
    "storage_unit_type_id"
  ],
  "StorageUnitType": [],
  "StorageUnitTypeBase": [],
  "ValidationError": []
} as SchemasSelectors;