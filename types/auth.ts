import { ROLE } from "./role";

export interface User {
  name: string;
  email: string;
  roles: ROLE[];
};