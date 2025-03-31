"use server"

// config
import { SERVICE } from "@/config/master";
import { API_MODEL_ENDPOINTS } from "@/config/apis";
import { FORM_SCHEMA_NAME, ZOD_SCHEMAS } from "@/config/forms";

// types
import { HTTP_METHOD } from "@/src/types/httpMethod";
import { ModelIdentifier } from "@/src/types/serviceModels";
import { ServiceModel } from "@/src/types/serviceModels";

// server action utils
import { deserializeFormData } from "@/src/actions/utils";

// lib utils
import { getAPIRequest, sendAPIRequest } from "@/src/lib/utils/server/api";
import { snakeToTitleCase } from "@/src/lib/utils/general";

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

const saveModel = async<T, S extends SERVICE>(
  service: S,
  modelName: ServiceModel<S>,
  formData: FormData,
  zodSchemaName: FORM_SCHEMA_NAME,
  endPoint: string,
  httpMethod: HTTP_METHOD
) => {
  const zodSchema = ZOD_SCHEMAS[zodSchemaName];

  const model: T = await deserializeFormData(formData, zodSchema) as T;

  await sendAPIRequest(
    endPoint,
    httpMethod,
    model
  );

  return [
    `${snakeToTitleCase(modelName)} in the ${service} saved.`
  ];
}

export const addModel = async<T, S extends SERVICE>(
  service: S,
  modelName: ServiceModel<S>,
  zodSchemaName: FORM_SCHEMA_NAME,
  formData: FormData,
) => {

  return saveModel<T, S>(
    service,
    modelName,
    formData,
    zodSchemaName,
    `${process.env.API_GATEWAY}/${service}/${API_MODEL_ENDPOINTS[service][modelName]}`,
    HTTP_METHOD.POST
  )
}

export const updateModel = async<T, S extends SERVICE>(
  service: S,
  modelName: ServiceModel<S>,
  zodSchemaName: FORM_SCHEMA_NAME,
  formData: FormData,
) => {

  const modelId = formData.get("id");

  return saveModel<T, S>(
    service,
    modelName,
    formData,
    zodSchemaName,
    `${process.env.API_GATEWAY}/${service}/${API_MODEL_ENDPOINTS[service][modelName]}/${modelId}`,
    HTTP_METHOD.PUT
  )
}