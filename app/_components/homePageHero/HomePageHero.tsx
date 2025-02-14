
// TODO NOT GOOD!!

// styles
import styles from './HomePageHero.module.scss';

export const HomePageHero = () => {
  return (
    <section className={styles.hero}>
      <img src="/assets/homePageHero.webp" alt="Zoo Entrance" className={styles.heroImage} />
    </section>
  )
}
