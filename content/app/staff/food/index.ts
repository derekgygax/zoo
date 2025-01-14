
// config
import { SITE_URLS } from "@/config/siteUrls";

// types
import { ROLE } from '@/types/role';
import { Duty } from "@/types/staff";
import { Title } from "@/types/general";

export const title: Title = {
  label: "Staff Food Page",
  level: 1
};

export const duties: Duty[] = [
  {
    label: "Add Storage Unit Type",
    url: SITE_URLS.staff.food.addStorageUnitType,
    roles: [ROLE.ADMIN]
  },
  {
    label: "Add Storage Unit",
    url: SITE_URLS.staff.food.addStorageUnit,
    roles: [ROLE.ADMIN]
  },
  {
    label: "Add Food Type",
    url: SITE_URLS.staff.food.addFoodType,
    roles: [ROLE.ADMIN]
  },
  {
    label: "Add Food Stock",
    url: SITE_URLS.staff.food.addFoodStock,
    roles: [ROLE.ADMIN]
  }
]