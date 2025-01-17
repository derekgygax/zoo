
// config
import { SITE_URLS } from '@/config/siteUrls';

// types
import { ROLE } from '@/types/role'
import { Title } from "@/types/general";
import { Duty } from "@/types/staff";
import { SERVICE } from '@/config/master';


export const title: Title = {
  label: "Zoo Staff",
  level: 1
}

export const duties: Duty[] = [
  {
    label: "Animals",
    url: SITE_URLS.staff.animals.index,
    service: SERVICE.ANIMALS,
    roles: [ROLE.ADMIN, ROLE.STAFF]
  },
  {
    label: "Food",
    url: SITE_URLS.staff.food.index,
    service: SERVICE.FOOD,
    roles: [ROLE.ADMIN, ROLE.STAFF]
  },
  {
    label: "Enclosures",
    url: SITE_URLS.staff.enclosures.index,
    service: SERVICE.ENCLOSURES,
    roles: [ROLE.ADMIN, ROLE.STAFF]
  }
];