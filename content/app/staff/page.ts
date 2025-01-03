
// config
import { SITE_URLS } from '@/config/siteUrls';

// types
import { ROLE } from '@/types/role'
import { Title } from "@/types/general";
import { Duty } from "@/types/staff";


export const title: Title = {
  label: "Zoo Staff",
  level: 1
}

export const duties: Duty[] = [
  {
    label: "Animals",
    url: SITE_URLS.staff.animals.index,
    roles: [ROLE.ADMIN, ROLE.STAFF]
  },
  {
    label: "Food",
    url: SITE_URLS.staff.food.index,
    roles: [ROLE.ADMIN, ROLE.STAFF]
  }
];