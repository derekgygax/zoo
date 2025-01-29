import Link from "next/link";
import { PageSection } from "../_layouts/pageSection/PageSection";
import { SITE_URLS } from "@/config/siteUrls";

export default function HomePage() {
  return (
    <main>
      <PageSection>
        <div>ZOO</div>
        <Link href={SITE_URLS.staff.index}>Staff DB Change</Link>
      </PageSection>
    </main>
  );
}
