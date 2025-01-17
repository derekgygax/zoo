"use server"

import { FORM_NAME } from "@/config/forms";
// types
import {
  FormState,
} from "@/types/form";

import { FORM_ACTIONS } from "@/config/formActions";


// TODO MAYBE GIVE THIS A BETTER NAME
export const formServerAction = async (prevState: FormState, formData: FormData) => {
  // TODO you need to add this
  const formName = formData.get("formName") as FORM_NAME;
  const action = FORM_ACTIONS[formName];
  return await action(prevState, formData);
}