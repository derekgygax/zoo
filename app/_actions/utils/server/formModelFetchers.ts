"use server"

// TODO I can NOT believe you forgot to put "use server" at the top
// AND HOW HAD YOU NOT NOTICED!!

// TODO FUCK YOU NEED TO CHECK AROUND

// types
import { ModelSelectorMapper, SelectorOption } from "@/types/form"
import { ServiceModel } from "@/types/serviceModels"

// config
import { MODEL_FETCHERS, MODEL_OPTIONS_FETCHERS } from "@/config/formActions"
import { SERVICE_MODEL_SELECTOR_MAPPING } from "@/config/forms"
import { SERVICE } from "@/config/master"
import { toSelectorOptions } from "@/lib/utils/general"

export const fetchModelOptions = async <S extends SERVICE, T>(
  service: S,
  modelName: ServiceModel<S>
): Promise<SelectorOption[]> => {
  try {

    const modelOptionsFetcher = MODEL_OPTIONS_FETCHERS[service][modelName] as () => Promise<T[]>;
    const modelOptions: T[] = await modelOptionsFetcher();

    const modelToOptionsMapper: ModelSelectorMapper = SERVICE_MODEL_SELECTOR_MAPPING[service][modelName];

    return toSelectorOptions(
      `service ${service} and model ${modelName}`,
      modelOptions,
      // TODO THIS IS SO FUCKED to use as keyof T but fuck it for now
      // I am happy I brough in typing but its too much
      // its not mantainable
      modelToOptionsMapper.valueKey as keyof T,
      modelToOptionsMapper.labelKey as keyof T,
      modelToOptionsMapper.labelFormatter
    );

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

    const modelFetcher = MODEL_FETCHERS[service][modelName] as (id: string) => Promise<T | undefined>;
    const model: T | undefined = await modelFetcher(modelId);
    return model;

  } catch (err) {
    console.error(`Error when performing fetchFormIdentifier with service = ${service} and model = ${modelName}, ${err}`)
    return undefined;
  }
};