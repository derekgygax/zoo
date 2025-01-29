"use server"

// config
import { FORM_DEPENDENCY_FIELD } from "@/config/master";
import { FORM_DEPENDENCIES } from "@/config/forms";

// types
import { SelectorOption } from "@/types/form";

// sever actions
import { fetchModelOptions } from "./formModelFetchers";

export const fetchFormDependencies = async (
  fieldsRequiringDependencies: FORM_DEPENDENCY_FIELD[]
): Promise<Record<FORM_DEPENDENCY_FIELD, SelectorOption[]>> => {

  const selectorsOptions: Record<FORM_DEPENDENCY_FIELD, SelectorOption[]> = {} as Record<FORM_DEPENDENCY_FIELD, SelectorOption[]>;

  for (const field of fieldsRequiringDependencies) {
    selectorsOptions[field] = await fetchModelOptions(
      FORM_DEPENDENCIES[field].service,
      FORM_DEPENDENCIES[field].model
    );
  }

  return selectorsOptions;
}