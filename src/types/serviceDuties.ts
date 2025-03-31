import { FORM_NAME } from "@/config/forms";
import { SERVICE } from "@/config/master";

export type ServiceDuties = {
  [K in SERVICE]: FORM_NAME[];
};