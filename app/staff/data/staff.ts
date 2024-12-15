
// config
import { ROLE, SITE_URLS } from "@/config";

// types
import { Task } from "../types/staff";

export const tasks: Task[] = [
  {
    label: "Animals",
    url: SITE_URLS.staff.animals,
    roles: [ROLE.ADMIN, ROLE.STAFF]
  },
  {
    label: "Food",
    url: SITE_URLS.staff.food,
    roles: [ROLE.ADMIN, ROLE.STAFF]
  }
];