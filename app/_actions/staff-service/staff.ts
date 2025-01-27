
// types
import { StaffBase, StaffIdentifier } from "@/types/staff-service";

// API endpoints
import { API_ENDPOINTS } from "@/config/apis";

// aciton utils
import { processFormAction, deserializeFormData } from "../utils/general";
import { FormState } from "@/types/form"; import { FORM_SCHEMA_NAME, ZOD_SCHEMAS } from "@/config/forms";
import { getAPIRequest, sendAPIRequest } from "@/lib/utils/server/api";
import { HTTP_METHOD } from "@/types/httpMethod";

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

export const getStaffIdentifiers = async (): Promise<StaffIdentifier[]> => {
  const staffIdentifiers: StaffIdentifier[] = await getAPIRequest<StaffIdentifier[]>(
    API_ENDPOINTS.staffService.staff.identifiers,
    []
  );
  return staffIdentifiers;
}

const addStaff = async (prevState: FormState, formData: FormData) => {
  const zodSchema = ZOD_SCHEMAS[FORM_SCHEMA_NAME.STAFF_BASE];

  const staff: StaffBase = deserializeFormData(formData, zodSchema) as StaffBase;

  await sendAPIRequest(
    API_ENDPOINTS.staffService.staff.index,
    HTTP_METHOD.POST,
    staff
  );

  return [
    `${staff.firstName} ${staff.lastName} added as a ${staff.title}`
  ]

}

const updateStaff = async (prevState: FormState, formData: FormData) => {
  const zodSchema = ZOD_SCHEMAS[FORM_SCHEMA_NAME.STAFF_BASE];

  const staffId = formData.get("id");
  const staff: StaffBase = deserializeFormData(formData, zodSchema) as StaffBase;

  await sendAPIRequest(
    `${API_ENDPOINTS.staffService.staff.index}/${staffId}`,
    HTTP_METHOD.PUT,
    staff
  )

  return [
    `${staff.firstName} ${staff.lastName} the ${staff.title} updated`
  ];
}

export const addStaffAction = processFormAction(addStaff);
export const udpateStaffAction = processFormAction(updateStaff);