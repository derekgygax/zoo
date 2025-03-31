"use server"

import { ZodObject, ZodRawShape } from "zod";

export const deserializeFormData = async (formData: FormData, zodSchema: ZodObject<ZodRawShape>) => {

  // take the zodSchema you already have and make it strip away
  // extra fields
  // That way your formData will contain just the values
  // in the zodSchema when parsed
  const zodSchemaStrip = zodSchema.strip();

  return zodSchemaStrip.parse(Object.fromEntries(formData.entries()));
}


// You loved have a HOF finally
// But everything works better if you just go
// without it and so se la vie or whatever to this guy
// pour one out, he is retired
// Higher Order Function (HOF)
// -try catch for error catching
// -Return the state
// NOTE:  It doesn't actually do the await
//        That is done when the function that returns
//        is run ... so you don't put async
//        you KNOW an async will be there because
//        it returns a Promise
// export const processFormAction = (
//   formAction: (prevState: FormState, formData: FormData) => Promise<string[]>
// ): ((prevState: FormState, formData: FormData) => Promise<FormState>) => {
//   return async (prevState: FormState, formData: FormData): Promise<FormState> => {
//     try {
//       const message: string[] = await formAction(prevState, formData);
//       return {
//         success: true,
//         message: message
//       }
//     } catch (err: unknown) {
//       console.error(err);
//       const message: string = (err as Error)?.message || "An error occurred";
//       return {
//         success: false,
//         message: [
//           message
//         ]
//       }
//     }
//   }
// }