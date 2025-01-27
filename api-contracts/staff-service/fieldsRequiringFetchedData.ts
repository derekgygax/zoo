import { SchemasSelectors} from "@/types/script";

  export const fieldsRequiringFetchedData: SchemasSelectors = {
  "Department": [],
  "DepartmentBase": [],
  "DepartmentIdentifier": [],
  "Instant": [],
  "LocalDate": [],
  "Staff": [],
  "StaffBase": [],
  "StaffDepartment": [],
  "StaffDepartmentBase": [
    "staffId",
    "departmentId"
  ],
  "StaffDepartmentIdentifierResponse": [],
  "StaffIdentifier": [],
  "Title": [],
  "UUID": []
} as SchemasSelectors;