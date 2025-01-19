import { MODEL_IDENTIFIER_FETCHERS } from "@/config/formActions";
import { SERVICE } from "@/config/master";
import { SelectorOption } from "@/types/form";
import { ServiceModel, ServiceModelMapping } from "@/types/serviceModels";

import { ModelIdentifierOptions } from "@/types/form";
import { getAnimalIdentifiers, getAnimal } from "../../animals-service/animals";
import { AnimalBase } from "@/types/animals-service";


export const fetchModelIdentifiers = async (serviceModelsRequiringIdentifiers: ServiceModelMapping) => {
  const services: SERVICE[] = Object.keys(serviceModelsRequiringIdentifiers) as SERVICE[];

  const allOptions: ModelIdentifierOptions = {};

  for (let i = 0; i < services.length; i++) {
    const service: SERVICE = services[i];
    allOptions[service] = {};
    const models = serviceModelsRequiringIdentifiers[service] as ServiceModel<typeof service>[];
    for (let j = 0; j < models.length; j++) {
      const model: ServiceModel<typeof service> = models[j];
      const fetchIdentifierOptions = MODEL_IDENTIFIER_FETCHERS[service]?.[model] as (() => Promise<SelectorOption[]>) | undefined;
      if (fetchIdentifierOptions) {
        const options: SelectorOption[] = await fetchIdentifierOptions();
        (allOptions[service] as Record<string, SelectorOption[]>)[model] = options;
      }
    }
  }
  console.log(allOptions);
  return allOptions;
}


export const fetchModel = async <T>(id: string): Promise<T> => {
  const animal: AnimalBase | undefined = await getAnimal(id);
  return animal;
}