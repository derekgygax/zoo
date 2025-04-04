import { SchemasSelectors } from "@/src/types/script";

export const fieldsRequiringFetchedData: SchemasSelectors = {
  "Enclosure": [],
  "EnclosureBase": [
    "enclosureTypeId"
  ],
  "EnclosureStatus": [],
  "EnclosureType": [],
  "EnclosureTypeBase": [],
  "Instant": [],
  "ModelIdentifier": [],
  "UUID": []
} as SchemasSelectors;