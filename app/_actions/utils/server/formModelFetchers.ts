import { MODEL_FETCHERS, MODEL_OPTIONS_FETCHERS } from "@/config/formActions"
import { SERVICE } from "@/config/master"
import { SelectorOption } from "@/types/form"
import { ServiceModel } from "@/types/serviceModels"

export const fetchModelOptions = async <S extends SERVICE>(
  service: S,
  modelName: ServiceModel<S>
): Promise<SelectorOption[]> => {
  try {

    const modelOptionsFetcher: () => Promise<SelectorOption[]> = MODEL_OPTIONS_FETCHERS[service][modelName];
    const modelOptions: SelectorOption[] = await modelOptionsFetcher();
    return modelOptions;

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