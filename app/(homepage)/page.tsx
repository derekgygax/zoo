import Link from "next/link";

// config
import { SITE_URLS } from "@/config/siteUrls";

// layouts
import { PageSection } from "../_layouts/pageSection/PageSection";

// styles
import styles from './page.module.scss';
import { HomePageHero } from "../_components/homePageHero/HomePageHero";

export default function HomePage() {
  return (
    <main>
      <HomePageHero />
      <PageSection>
        <Link href={SITE_URLS.staff.index}>DB Changes</Link>
      </PageSection>
    </main>
  );
}
