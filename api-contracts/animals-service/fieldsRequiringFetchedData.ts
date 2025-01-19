import { SchemasSelectors } from "@/types/script";

export const fieldsRequiringFetchedData: SchemasSelectors = {
  "Animal": [
    "specie_id"
  ],
  "AnimalBase": [
    "specie_id"
  ],
  "AnimalIdentifier": [
    "specie_id"
  ],
  "GENDER": [],
  "HEALTH_TYPE": [],
  "HTTPValidationError": [],
  "Specie": [],
  "SpecieBase": [],
  "ValidationError": []
} as SchemasSelectors;