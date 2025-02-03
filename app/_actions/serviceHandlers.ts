"use server"

// config
import { SERVICE } from "@/config/master";

// types
import { ServiceModel } from "@/types/serviceModels";
import { API_MODEL_ENDPOINTS } from "@/config/apis";

import { getAPIRequest } from "@/lib/utils/server/api";
import { ModelIdentifier } from "@/types/animals-service";


export const getServiceModelBaseById = async <T, S extends SERVICE>(
  service: S,
  model: ServiceModel<S>,
  modelId: string
): Promise<T | undefined> => {

  const modelBase: T | undefined = await getAPIRequest(
    `${process.env.API_GATEWAY}/${service}/${API_MODEL_ENDPOINTS[service][model]}/${modelId}/base`,
    undefined
  );

  return modelBase;
}

export const getModelIdentifiers = async<S extends SERVICE>(
  service: S,
  model: ServiceModel<S>
): Promise<ModelIdentifier[]> => {

  const modelIdentifiers: ModelIdentifier[] = await getAPIRequest<ModelIdentifier[]>(
    `${process.env.API_GATEWAY}/${service}/${API_MODEL_ENDPOINTS[service][model]}/identifiers`,
    []
  );

  return modelIdentifiers;
}