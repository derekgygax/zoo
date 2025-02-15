import classNames from 'classnames';

// utils
import { capitalizeFirstLetter } from '@/lib/utils/general';

// types
import { ModelIdentifier } from '@/types/animals-service';

// styles
import styles from './layout.module.scss';
import globalStyles from '@/styles/globals.module.scss';

// MOCK DATA
import { mockAnimalIdentifiers } from '@/content/app/animals/layout';
import Link from 'next/link';

interface AnimalsLayoutProps {
  children: React.ReactNode;
}

export default function AnimalsLayout({ children }: AnimalsLayoutProps) {

  // I do NOT like that you use ModelIdentifier here!!
  // I do NOT like that you use ModelIdentifier here!!
  // I do NOT like that you use ModelIdentifier here!!
  // I do NOT like that you use ModelIdentifier here!!
  // I do NOT like that you use ModelIdentifier here!!

  return (
    <div className={classNames(globalStyles.containerFullPage, styles.animalsLayout)}>
      <aside className={styles.animalSelector}>
        <nav>
          <ul>
            {mockAnimalIdentifiers.map((animalGroup: { genus: string; animals: ModelIdentifier[] }) => {
              return (
                <li key={animalGroup.genus} className={styles.li}>
                  <h3>{capitalizeFirstLetter(animalGroup.genus)}</h3>
                  <ul className={styles.genus}>
                    {animalGroup.animals.map((animal: ModelIdentifier) => {
                      return (
                        <li key={animal.id} className={styles.li}>
                          <Link href={`/animals/${animal.id}`}>
                            {capitalizeFirstLetter(animal.label)}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </li>
              )
            })}
          </ul>
        </nav>
      </aside>
      <main className={styles.animal}>
        {children}
      </main>
    </div>
  )
}