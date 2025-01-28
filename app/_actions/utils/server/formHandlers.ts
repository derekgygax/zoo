"use server"

import { FORM_NAME } from "@/config/forms";
// types
import {
  FormState,
} from "@/types/form";

import { FORM_ACTIONS } from "@/config/formActions";


// TODO MAYBE GIVE THIS A BETTER NAME
export const formServerAction = async (prevState: FormState, formData: FormData): Promise<FormState> => {

  // This is a hidden field in the form
  // so you know what you are working with
  // and can direct it the correct way
  const formName = formData.get("formName") as FORM_NAME;

  const action = FORM_ACTIONS[formName];

  const formState: FormState = await action(prevState, formData);

  return formState;
}