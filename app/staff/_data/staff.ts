
// config
import { ROLE, SITE_URLS } from "@/config";

// types
import { Task } from "../types";

export const title = {
  label: "Zoo Staff",
  level: 1
}

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