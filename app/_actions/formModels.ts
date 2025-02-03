"use server"

// types
import { SelectorOption } from "@/types/form"
import { ModelIdentifier, ServiceModel } from "@/types/serviceModels"

// config
import {
  MODEL_OPTIONS_FETCHERS
} from "@/config/formActions"
import { SERVICE, FORM_DEPENDENCY_FIELD } from "@/config/master";
import { FORM_FIELD_TO_SERVICE_MODEL } from "@/config/forms";
import { getServiceModelBaseById } from "./serviceHandlers";

export const fetchModelOptions = async <S extends SERVICE>(
  service: S,
  modelName: ServiceModel<S>
): Promise<SelectorOption[]> => {
  try {

    const modelOptionsFetcher = MODEL_OPTIONS_FETCHERS[service][modelName] as () => Promise<ModelIdentifier[]>;
    const modelOptions: ModelIdentifier[] = await modelOptionsFetcher();

    return modelOptions.map((option) => {
      return {
        label: option.label,
        value: option.id
      }
    })

  } catch (err) {
    console.error(`Error when performing fetchFormIdentifier with service = ${service} and model = ${modelName}, ${err}`)
    return [];
  }
};

export const fetchModel = async <S extends SERVICE, T>(
  service: S,
  modelName: ServiceModel<S>,
  modelId: string
): Promise<T | undefined> => {
  try {

    const model: T | undefined = await getServiceModelBaseById(service, modelName, modelId);
    return model;

  } catch (err) {
    console.error(`Error when performing fetchModel with service = ${service} and model = ${modelName}, ${err}`)
    return undefined;
  }
};

export const fetchFormDependencies = async (
  fieldsRequiringDependencies: FORM_DEPENDENCY_FIELD[]
): Promise<Record<FORM_DEPENDENCY_FIELD, SelectorOption[]>> => {

  const selectorsOptions: Record<FORM_DEPENDENCY_FIELD, SelectorOption[]> = {} as Record<FORM_DEPENDENCY_FIELD, SelectorOption[]>;

  for (const field of fieldsRequiringDependencies) {
    selectorsOptions[field] = await fetchModelOptions(
      FORM_FIELD_TO_SERVICE_MODEL[field].service,
      FORM_FIELD_TO_SERVICE_MODEL[field].model
    );
  }

  return selectorsOptions;
}