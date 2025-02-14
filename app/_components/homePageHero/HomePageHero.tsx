
// TODO NOT GOOD!!

// import Image from 'next/image';

// styles
import styles from './HomePageHero.module.scss';

export const HomePageHero = () => {
  return (
    <section className={styles.hero}>
      {/* TODO THIS IS MESSED UP!!
      YOU SHOULD BE USING Image from Next but for now
      it NO WORK */}
      <img
        src="/assets/homePageHero.webp"
        alt="Zoo Entrance"
        className={styles.heroImage}
      />
    </section>
  )
}
