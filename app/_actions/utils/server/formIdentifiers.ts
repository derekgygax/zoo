import { MODEL_OPTIONS_FETCHERS } from "@/config/formActions"
import { SERVICE } from "@/config/master"
import { SelectorOption } from "@/types/form"
import { ServiceModel } from "@/types/serviceModels"

export const fetchModelOptions = async <S extends SERVICE>(
  service: S,
  model: ServiceModel<S>
): Promise<SelectorOption[]> => {

  try {
    const modelOptionsFetcher = MODEL_OPTIONS_FETCHERS[service][model];

    const modelOptions: SelectorOption[] = await modelOptionsFetcher();

    return modelOptions;

  } catch (err) {
    console.error(`Error when performing fetchFormIdentifier with service = ${service} and model = ${model}, ${err}`)
    return [];
  }
};