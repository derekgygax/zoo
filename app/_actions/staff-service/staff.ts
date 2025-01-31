"use server"

// types
import { StaffBase } from "@/types/staff-service";
import { ModelIdentifier } from "@/types/serviceModels";
import { HTTP_METHOD } from "@/types/httpMethod";
import { FormState } from "@/types/form";

// API endpoints
import { API_ENDPOINTS } from "@/config/apis";

// aciton utils
import { deserializeFormData } from "@/app/_actions/utils";
import { FORM_SCHEMA_NAME, ZOD_SCHEMAS } from "@/config/forms";
import { getAPIRequest, sendAPIRequest } from "@/lib/utils/server/api";

// TODO ID should be UUID!!
// put that everywhere, even where the id is retrieved!! before calling this function!!
export const getStaffBaseById = async (staffId: string): Promise<StaffBase | undefined> => {
  console.log(staffId, `${API_ENDPOINTS.staffService.staff.index}/${staffId}/base`);
  const staff: StaffBase | undefined = await getAPIRequest(
    `${API_ENDPOINTS.staffService.staff.index}/${staffId}/base`,
    undefined
  )

  return staff;
}

export const getStaffIdentifiers = async (): Promise<ModelIdentifier[]> => {
  const staffIdentifiers: ModelIdentifier[] = await getAPIRequest<ModelIdentifier[]>(
    API_ENDPOINTS.staffService.staff.identifiers,
    []
  );
  return staffIdentifiers;
}

export const addStaff = async (prevState: FormState, formData: FormData) => {
  const zodSchema = ZOD_SCHEMAS[FORM_SCHEMA_NAME.STAFF_BASE];

  const staff: StaffBase = await deserializeFormData(formData, zodSchema) as StaffBase;

  await sendAPIRequest(
    API_ENDPOINTS.staffService.staff.index,
    HTTP_METHOD.POST,
    staff
  );

  return [
    `${staff.firstName} ${staff.lastName} added as a ${staff.title}`
  ]

}

export const updateStaff = async (prevState: FormState, formData: FormData) => {
  const zodSchema = ZOD_SCHEMAS[FORM_SCHEMA_NAME.STAFF_BASE];

  const staffId = formData.get("id");
  const staff: StaffBase = await deserializeFormData(formData, zodSchema) as StaffBase;

  await sendAPIRequest(
    `${API_ENDPOINTS.staffService.staff.index}/${staffId}`,
    HTTP_METHOD.PUT,
    staff
  )

  return [
    `${staff.firstName} ${staff.lastName} the ${staff.title} updated`
  ];
}