"use server"


// types
import {
  FormState,
} from "@/types/form";

// Higher Order Function (HOF)
// -try catch for error catching
// -Return the state
export const actionProcessing = async (action: (prevState: FormState, formData: FormData) => Promise<string[]>) => {
  return async (prevState: FormState, formData: FormData): Promise<FormState> => {
    try {
      const message: string[] = await action(prevState, formData);
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