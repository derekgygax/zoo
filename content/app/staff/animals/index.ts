// config
import { SITE_URLS } from "@/config/siteUrls";

// types
import { ROLE } from '@/types/role';
import { Duty } from "@/types/staff";
import { Title } from "@/types/general";

export const title: Title = {
  label: "Staff Animal Page",
  level: 1
};

export const duties: Duty[] = [
  {
    label: "Add Animal",
    url: SITE_URLS.staff.animals.add,
    roles: [ROLE.ADMIN]
  },
  {
    label: "Edit Animal",
    url: SITE_URLS.staff.animals.edit,
    roles: [ROLE.ADMIN]
  }
]