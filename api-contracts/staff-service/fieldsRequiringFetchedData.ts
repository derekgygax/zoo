import { SchemasSelectors} from "@/types/script";

  export const fieldsRequiringFetchedData: SchemasSelectors = {
  "Department": [],
  "DepartmentBase": [],
  "DepartmentIdentifier": [],
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
  "StaffIdentifier": [],
  "Title": [],
  "UUID": []
} as SchemasSelectors;