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
    url: SITE_URLS.staff.animals.add_animal,
    roles: [ROLE.ADMIN]
  },
  {
    label: "Update Animal",
    url: SITE_URLS.staff.animals.update_animal,
    roles: [ROLE.ADMIN]
  },
  {
    label: "Add Specie",
    url: SITE_URLS.staff.animals.add_specie,
    roles: [ROLE.ADMIN]
  },
  {
    label: "Update Specie",
    url: SITE_URLS.staff.animals.update_specie,
    roles: [ROLE.ADMIN]
  }
]