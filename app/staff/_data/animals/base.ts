// config
import { ROLE, SITE_URLS } from "@/config";

// types
import { Task, Title } from "../../types";

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