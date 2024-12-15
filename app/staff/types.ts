import { ROLE } from "@/config";

export interface Task {
  label: string;
  url: string;
  roles: ROLE[]
}

export interface Title {
  label: string;
  level: number;
}

export interface AnimalEnumResponse {
  type: string;
  label: string;
  values: string[]
}