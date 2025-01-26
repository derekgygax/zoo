
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
    url: SITE_URLS.staff[SERVICE.ANIMALS].index,
    service: SERVICE.ANIMALS,
    roles: [ROLE.ADMIN, ROLE.STAFF]
  },
  {
    label: "Food",
    url: SITE_URLS.staff[SERVICE.FOOD].index,
    service: SERVICE.FOOD,
    roles: [ROLE.ADMIN, ROLE.STAFF]
  },
  {
    label: "Enclosures",
    url: SITE_URLS.staff[SERVICE.ENCLOSURES].index,
    service: SERVICE.ENCLOSURES,
    roles: [ROLE.ADMIN, ROLE.STAFF]
  },
  {
    label: "Staff",
    url: SITE_URLS.staff[SERVICE.STAFF].index,
    service: SERVICE.STAFF,
    roles: [ROLE.ADMIN]
  }
];