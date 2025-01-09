"use server"


// types
import {
  FormState,
} from "@/types/form";

// Higher Order Function (HOF)
// -try catch for error catching
// -Return the state
export const processFormAction = async (formAction: (prevState: FormState, formData: FormData) => Promise<string[]>) => {
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