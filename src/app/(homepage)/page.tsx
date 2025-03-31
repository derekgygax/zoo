
// layouts
import { PageSection } from "../../layouts/pageSection/PageSection";

// components
import { Hero } from "../_components/hero/Hero";

// styles
import styles from './page.module.scss';
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <Hero backgroundStyles={styles.heroBackground} />
      <PageSection>
        <Link href={"/animals"}><h1>Animals</h1></Link>
      </PageSection>
    </main>
  );
}
