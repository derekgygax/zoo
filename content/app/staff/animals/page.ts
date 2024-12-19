// config
import { SITE_URLS } from "@/config/siteUrls";

// types
import { ROLE } from '@/types/role';
import { Task } from "@/types/staff";
import { Title } from "@/types/general";

export const title: Title = {
  label: "Staff Animal Page",
  level: 1
};

export const tasks: Task[] = [
  {
    label: "Add Animals",
    url: SITE_URLS.staff.animals.add,
    roles: [ROLE.ADMIN]
  }
]