import Link from "next/link"

// config
import { SITE_URLS } from "@/config"

// layouts
import { PageSection } from "@/app/_layouts/pageSection/PageSection"

export const BackToStaffPage = () => {
  return (
    <PageSection>
      <h2>
        <Link
          href={SITE_URLS.staff.base}
        >
          Back to Staff Page
        </Link>
      </h2>
    </PageSection>
  )
}