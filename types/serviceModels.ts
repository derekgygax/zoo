import { SERVICE } from "@/config/master";
import {
  SERVICE_MODELS,
} from "@/config/serviceModels";

// export type ServiceModel<S extends SERVICE> = Extract<(typeof SERVICE_MODELS[S])[keyof typeof SERVICE_MODELS[S]], string>;

// TODO improve this!
// TODO lazy and gross typing, can make stronger
// Then fix the form model too, it needs to be required to match the service provided
export type ServiceModel<S extends SERVICE> = S extends keyof typeof SERVICE_MODELS
  ? (typeof SERVICE_MODELS[S])[keyof (typeof SERVICE_MODELS[S])]
  : never;
