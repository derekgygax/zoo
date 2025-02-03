"use server"

// types
import { StaffDepartmentBase } from "@/types/staff-service";
import { HTTP_METHOD } from "@/types/httpMethod";
import { FormState } from "@/types/form";

// API endpoints
import { API_ENDPOINTS } from "@/config/apis";

// aciton utils
import { deserializeFormData } from "@/app/_actions/utils";
import { FORM_SCHEMA_NAME, ZOD_SCHEMAS } from "@/config/forms";
import { sendAPIRequest } from "@/lib/utils/server/api";

export const addStaffDepartment = async (prevState: FormState, formData: FormData) => {
  const zodSchema = ZOD_SCHEMAS[FORM_SCHEMA_NAME.STAFF_DEPARTMENT_BASE];

  const staffDepartment: StaffDepartmentBase = await deserializeFormData(formData, zodSchema) as StaffDepartmentBase;

  console.log(staffDepartment);
  console.log(API_ENDPOINTS.staffService.staffDepartments.index);

  await sendAPIRequest(
    API_ENDPOINTS.staffService.staffDepartments.index,
    HTTP_METHOD.POST,
    staffDepartment
  );

  // TODO you have no way to print better data
  // TODO you have no way to print better data
  // TODO you have no way to print better data
  // TODO FIX!
  return [
    `Staff has been added to the department`
  ]

}

export const updateStaffDepartment = async (prevState: FormState, formData: FormData) => {
  const zodSchema = ZOD_SCHEMAS[FORM_SCHEMA_NAME.STAFF_DEPARTMENT_BASE];

  const staffDepartmentId = formData.get("id");
  const staffDepartment: StaffDepartmentBase = await deserializeFormData(formData, zodSchema) as StaffDepartmentBase;

  await sendAPIRequest(
    `${API_ENDPOINTS.staffService.staffDepartments.index}/${staffDepartmentId}`,
    HTTP_METHOD.PUT,
    staffDepartment
  )

  return [
    `The Staff member in the been added to the department`
  ];
}