
// config
import { ROLE, SITE_URLS } from "@/config";

// types
import { Task, Title } from "../types";

export const title: Title = {
  label: "Zoo Staff",
  level: 1
}

export const tasks: Task[] = [
  {
    label: "Animals",
    url: SITE_URLS.staff.animals.base,
    roles: [ROLE.ADMIN, ROLE.STAFF]
  },
  {
    label: "Food",
    url: SITE_URLS.staff.food.base,
    roles: [ROLE.ADMIN, ROLE.STAFF]
  }
];