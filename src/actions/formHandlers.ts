"use server"

import { SERVICE } from "@/config/master";
import { FORM_CONFIGS, FORM_NAME, FORM_SCHEMA_NAME } from "@/config/forms";
// types
import {
  FormState,
} from "@/src/types/form";

import { ServiceModel } from "@/src/types/serviceModels";
import { addModel, updateModel } from "./serviceHandlers";
import { FORM_TYPE } from "@/config/forms";


export const formServerAction = async (prevState: FormState, formData: FormData): Promise<FormState> => {

  // TODO you definiely do NOT need to do it like this
  // THIS FEEL STUPID!
  const formName = formData.get("formName") as FORM_NAME;
  const formConfig = FORM_CONFIGS[formName];
  const service = formConfig.service as SERVICE;
  const modelName = formConfig.model as ServiceModel<SERVICE>;
  const formType = formConfig.type as FORM_TYPE;
  const zodSchemaName = formConfig.zodSchemaName as FORM_SCHEMA_NAME;

  try {
    const message: string[] = formType == FORM_TYPE.ADD ? (
      await addModel(service, modelName, zodSchemaName, formData)
    ) : (
      await updateModel(service, modelName, zodSchemaName, formData)
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