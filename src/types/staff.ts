import { SERVICE } from '@/config/master';
import { ROLE } from '@/src/types/role';

export interface Duty {
  label: string;
  url?: string;
  service: SERVICE;
  roles: ROLE[]
}