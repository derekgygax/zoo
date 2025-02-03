"use server"

// types
import { DepartmentBase } from "@/types/staff-service";
import { FormState } from "@/types/form"; import { FORM_SCHEMA_NAME, ZOD_SCHEMAS } from "@/config/forms";
import { HTTP_METHOD } from "@/types/httpMethod";

// API endpoints
import { API_ENDPOINTS } from "@/config/apis";

// aciton utils
import { deserializeFormData } from "@/app/_actions/utils";
import { sendAPIRequest } from "@/lib/utils/server/api";


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