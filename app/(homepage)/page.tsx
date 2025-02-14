
// layouts
import { PageSection } from "../_layouts/pageSection/PageSection";

// components
import { Hero } from "../_components/hero/Hero";

// styles
import styles from './page.module.scss';

export default function HomePage() {
  return (
    <main>
      <Hero backgroundStyles={styles.heroBackground} />
      <PageSection>
        <span>div</span>
      </PageSection>
    </main>
  );
}
