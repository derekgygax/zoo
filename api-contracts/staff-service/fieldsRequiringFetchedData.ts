import { SchemasSelectors } from "@/src/types/script";

export const fieldsRequiringFetchedData: SchemasSelectors = {
  "Department": [],
  "DepartmentBase": [],
  "Instant": [],
  "LocalDate": [],
  "ModelIdentifier": [],
  "Staff": [],
  "StaffBase": [],
  "StaffDepartment": [],
  "StaffDepartmentBase": [
    "staffId",
    "departmentId"
  ],
  "Title": [],
  "UUID": []
} as SchemasSelectors;