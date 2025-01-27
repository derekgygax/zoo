
// types
import { DepartmentBase, DepartmentIdentifier } from "@/types/staff-service";

// API endpoints
import { API_ENDPOINTS } from "@/config/apis";

// aciton utils
import { processFormAction, deserializeFormData } from "../utils/general";
import { FormState } from "@/types/form"; import { FORM_SCHEMA_NAME, ZOD_SCHEMAS } from "@/config/forms";
import { getAPIRequest, sendAPIRequest } from "@/lib/utils/server/api";
import { HTTP_METHOD } from "@/types/httpMethod";

// TODO ID should be UUID!!
// put that everywhere, even where the id is retrieved!! before calling this function!!
export const getDepartmentBaseById = async (departmentId: string): Promise<DepartmentBase | undefined> => {
  const department: DepartmentBase | undefined = await getAPIRequest(
    `${API_ENDPOINTS.staffService.departments.index}/${departmentId}/base`,
    undefined
  )

  return department;
}

export const getDepartmentIdentifiers = async (): Promise<DepartmentIdentifier[]> => {
  const departmentIdentifiers: DepartmentIdentifier[] = await getAPIRequest<DepartmentIdentifier[]>(
    API_ENDPOINTS.staffService.departments.identifiers,
    []
  );
  return departmentIdentifiers;
}

const addDepartment = async (prevState: FormState, formData: FormData) => {
  const zodSchema = ZOD_SCHEMAS[FORM_SCHEMA_NAME.DEPARTMENT_BASE];

  const department: DepartmentBase = deserializeFormData(formData, zodSchema) as DepartmentBase;

  await sendAPIRequest(
    API_ENDPOINTS.staffService.departments.index,
    HTTP_METHOD.POST,
    department
  );

  return [
    `${department.name} added`
  ]

}

const updateDepartment = async (prevState: FormState, formData: FormData) => {
  const zodSchema = ZOD_SCHEMAS[FORM_SCHEMA_NAME.DEPARTMENT_BASE];

  const departmentId = formData.get("id");
  const department: DepartmentBase = deserializeFormData(formData, zodSchema) as DepartmentBase;

  await sendAPIRequest(
    `${API_ENDPOINTS.staffService.departments.index}/${departmentId}`,
    HTTP_METHOD.PUT,
    department
  )

  return [
    `${department.name} updated`
  ];
}

export const addDepartmentAction = processFormAction(addDepartment);
export const updateDepartmentAction = processFormAction(updateDepartment);