import Link from "next/link";

// config
import { SITE_URLS } from "@/config/siteUrls";

// layouts
import { PageSection } from "@/app/_layouts/pageSection/PageSection";

// TODO PROBABLY ERASE THIS!!

export const BackToStaffPage = () => {
  return (
    <PageSection>
      <h2>
        <Link
          href={SITE_URLS.staff.index}
        >
          Back to Staff Page
        </Link>
      </h2>
    </PageSection>
  )
}