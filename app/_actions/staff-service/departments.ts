"use server"

// types
import { DepartmentBase } from "@/types/staff-service";
import { ModelIdentifier } from "@/types/serviceModels";
import { FormState } from "@/types/form"; import { FORM_SCHEMA_NAME, ZOD_SCHEMAS } from "@/config/forms";
import { HTTP_METHOD } from "@/types/httpMethod";

// API endpoints
import { API_ENDPOINTS } from "@/config/apis";

// aciton utils
import { deserializeFormData } from "@/app/_actions/utils";
import { getAPIRequest, sendAPIRequest } from "@/lib/utils/server/api";

// TODO ID should be UUID!!
// put that everywhere, even where the id is retrieved!! before calling this function!!
export const getDepartmentBaseById = async (departmentId: string): Promise<DepartmentBase | undefined> => {
  const department: DepartmentBase | undefined = await getAPIRequest(
    `${API_ENDPOINTS.staffService.departments.index}/${departmentId}/base`,
    undefined
  )

  return department;
}

export const getDepartmentIdentifiers = async (): Promise<ModelIdentifier[]> => {
  const departmentIdentifiers: ModelIdentifier[] = await getAPIRequest<ModelIdentifier[]>(
    API_ENDPOINTS.staffService.departments.identifiers,
    []
  );
  return departmentIdentifiers;
}

export const addDepartment = async (prevState: FormState, formData: FormData) => {
  const zodSchema = ZOD_SCHEMAS[FORM_SCHEMA_NAME.DEPARTMENT_BASE];

  const department: DepartmentBase = await deserializeFormData(formData, zodSchema) as DepartmentBase;

  await sendAPIRequest(
    API_ENDPOINTS.staffService.departments.index,
    HTTP_METHOD.POST,
    department
  );

  return [
    `${department.name} added`
  ]

}

export const updateDepartment = async (prevState: FormState, formData: FormData) => {
  const zodSchema = ZOD_SCHEMAS[FORM_SCHEMA_NAME.DEPARTMENT_BASE];

  const departmentId = formData.get("id");
  const department: DepartmentBase = await deserializeFormData(formData, zodSchema) as DepartmentBase;

  await sendAPIRequest(
    `${API_ENDPOINTS.staffService.departments.index}/${departmentId}`,
    HTTP_METHOD.PUT,
    department
  )

  return [
    `${department.name} updated`
  ];
}