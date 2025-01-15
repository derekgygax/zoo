import { ZodObject, ZodRawShape } from "zod";

// types
import {
  FormState,
} from "@/types/form";


// Higher Order Function (HOF)
// -try catch for error catching
// -Return the state
// NOTE:  It doesn't actually do the await
//        That is done when the function that returns
//        is run ... so you don't put async
//        you KNOW an async will be there because
//        it returns a Promise
export const processFormAction = (
  formAction: (prevState: FormState, formData: FormData) => Promise<string[]>
): ((prevState: FormState, formData: FormData) => Promise<FormState>) => {
  return async (prevState: FormState, formData: FormData): Promise<FormState> => {
    try {
      const message: string[] = await formAction(prevState, formData);
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
}


export const deserializeFormData = (formData: FormData, zodSchema: ZodObject<ZodRawShape>) => {

  // make a new schema that stips away the extra fields in the formData
  const zodSchemaStrip = zodSchema.strip();

  return zodSchemaStrip.parse(Object.fromEntries(formData.entries()));
}