
// layouts
import { PageSection } from "../_layouts/pageSection/PageSection";

// components
import { HomePageHero } from "../_components/homePageHero/HomePageHero";

export default function HomePage() {
  return (
    <main>
      <HomePageHero />
      <PageSection>
        <span>div</span>
      </PageSection>
    </main>
  );
}
