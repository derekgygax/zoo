import Link from "next/link";

// config
import { SITE_URLS } from "@/config/siteUrls";
import { PageSection } from "@/app/_layouts/pageSection/PageSection";

// TODO ERASE THIS!!

export const BackToStaffPage = () => {
  return (
    <PageSection ariaLabel="Back Navigation">
      <nav aria-label="Breadcrumb">
        <h2>
          <Link
            href={SITE_URLS.staff.index}
          >
            Back to Staff Page
          </Link>
        </h2>
      </nav>
    </PageSection>
  )
}