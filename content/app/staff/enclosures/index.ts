// config
import { SITE_URLS } from "@/config/siteUrls";

// types
import { ROLE } from '@/types/role';
import { Duty } from "@/types/staff";
import { Title } from "@/types/general";

export const title: Title = {
  label: "Staff Enclosure Page",
  level: 1
};

export const duties: Duty[] = [
  {
    label: "Add Enclosure Type",
    url: SITE_URLS.staff.enclosures.add_enclosure_type,
    roles: [ROLE.ADMIN]
  },
  {
    label: "Update Enclosure Type",
    url: SITE_URLS.staff.enclosures.update_enclosure_type,
    roles: [ROLE.ADMIN]
  },
]