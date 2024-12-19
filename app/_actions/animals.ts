"use server"

// types
import { FormState } from "@/types/form";

// utils
import { actionProcessing } from "./utils_server"

// zod schemas
import { schemas as zodSchemas } from "@/api-contracts/animals-service/zodSchemas";

// The functional part of the action
const addAnimal = async (prevState: FormState, formData: FormData) => {

  console.log(prevState);
  console.log(formData);
  const result = zodSchemas.AnimalBase.safeParse(Object.fromEntries(formData));


  if (result.success) {
    // const ass: AnimalBase = result.data as AnimalBase; // Parsed and validated data
    console.log("Parsed Animal:");
  } else {
    console.error("Validation failed:", result.error);
  }

  // const animal: AnimalBase = animalZodSchema.safeParse(Object.fromEntries(formData));

  return [];
}


// Add the catch wrapping and processing the state returning
export const addAnimalAction = await actionProcessing(addAnimal);