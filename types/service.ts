// master config
import { SERVICE, FRAMEWORK } from "@/config/master";

export interface Service<K extends SERVICE> {
  name: K;
  framework: FRAMEWORK;
}

export type Services = {
  [K in SERVICE]: Service<K>
}