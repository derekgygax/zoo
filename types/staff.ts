import { ROLE } from '@/types/role';

export interface Task {
  label: string;
  url: string;
  roles: ROLE[]
}