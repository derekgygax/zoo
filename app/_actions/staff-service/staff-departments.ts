"use server"

// types
import { StaffDepartmentBase } from "@/types/staff-service";

// API endpoints
import { API_ENDPOINTS } from "@/config/apis";

// aciton utils
import { processFormAction, deserializeFormData } from "../utils/general";
import { FormState, SelectorOption } from "@/types/form"; import { FORM_SCHEMA_NAME, ZOD_SCHEMAS } from "@/config/forms";
import { getAPIRequest, sendAPIRequest } from "@/lib/utils/server/api";
import { HTTP_METHOD } from "@/types/httpMethod";

export const getStaffDepartmentBaseById = async (staffDepartmentId: string): Promise<StaffDepartmentBase | undefined> => {
  const staffDepartment: StaffDepartmentBase | undefined = await getAPIRequest(
    `${API_ENDPOINTS.staffService.staffDepartments.index}/${staffDepartmentId}/base`,
    undefined
  )

  return staffDepartment;
}

export const getStaffDepartmentIdentifiers = async (): Promise<SelectorOption[]> => {
  const staffDepartmentIdentifiers: SelectorOption[] = await getAPIRequest<SelectorOption[]>(
    API_ENDPOINTS.staffService.staffDepartments.identifiers,
    []
  );
  return staffDepartmentIdentifiers;
}

const addStaffDepartment = async (prevState: FormState, formData: FormData) => {
  const zodSchema = ZOD_SCHEMAS[FORM_SCHEMA_NAME.STAFF_DEPARTMENT_BASE];

  const staffDepartment: StaffDepartmentBase = deserializeFormData(formData, zodSchema) as StaffDepartmentBase;

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

const updateStaffDepartment = async (prevState: FormState, formData: FormData) => {
  const zodSchema = ZOD_SCHEMAS[FORM_SCHEMA_NAME.STAFF_DEPARTMENT_BASE];

  const staffDepartmentId = formData.get("id");
  const staffDepartment: StaffDepartmentBase = deserializeFormData(formData, zodSchema) as StaffDepartmentBase;

  await sendAPIRequest(
    `${API_ENDPOINTS.staffService.staffDepartments.index}/${staffDepartmentId}`,
    HTTP_METHOD.PUT,
    staffDepartment
  )

  return [
    `The Staff member in the been added to the department`
  ];
}

export const addStaffDepartmentAction = processFormAction(addStaffDepartment);
export const updateStaffDepartmentAction = processFormAction(updateStaffDepartment);