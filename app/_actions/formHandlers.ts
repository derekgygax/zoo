"use server"

import { SERVICE } from "@/config/master";
// types
import {
  FormState,
} from "@/types/form";

import { ServiceModel } from "@/types/serviceModels";
import { addModel, updateModel } from "./serviceHandlers";
import { FORM_TYPE } from "@/config/forms";


export const formServerAction = async (prevState: FormState, formData: FormData): Promise<FormState> => {

  // This is a hidden field in the form
  // so you know what you are working with
  // and can direct it the correct way
  const service = formData.get("service") as SERVICE;
  const modelName = formData.get("model") as ServiceModel<SERVICE>;
  const formType = formData.get("formType") as FORM_TYPE;

  try {
    const message: string[] = formType == FORM_TYPE.ADD ? (
      await addModel(service, modelName, formData)
    ) : (
      await updateModel(service, modelName, formData)
    );

    return {
      success: true,
      message: message
    }
  } catch (err: unknown) {

    console.error(err);
    const message: string = (err as Error)?.message || "An error occurred";

    return {
      success: false,
      message: [
        message
      ]
    }
  }
}