import { SERVICE } from '@/config/master';
import { ROLE } from '@/types/role';

export interface Duty {
  label: string;
  url?: string;
  service: SERVICE;
  roles: ROLE[]
}