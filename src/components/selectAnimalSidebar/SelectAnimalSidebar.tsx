import Link from 'next/link';

// config
import { SITE_URLS } from '@/config/siteUrls';

// utils
import { capitalizeFirstLetter } from '@/src/lib/utils/general';

// types
import { AnimalsInCategory } from '@/src/types/animals-service';
import { ModelIdentifier } from '@/src/types/serviceModels';

// styles
import styles from './SelectAnimalSidebar.module.scss';

interface SelectAnimalSidebarProps {
  animalsGroups: AnimalsInCategory[]
  selectedAnimalId: string
}

export const SelectAnimalSidebar = ({ animalsGroups, selectedAnimalId }: SelectAnimalSidebarProps) => {
  return (
    <aside
      className={styles.animalSelector}
      aria-label="Animal selection"
    >
      <nav aria-label="Select an animal">
        <ul>
          {animalsGroups.map((category: AnimalsInCategory) => {
            return (
              <li key={category.category_name} className={styles.li}>
                <h3>{capitalizeFirstLetter(category.category_name)}</h3>
                <ul className={styles.genus}>
                  {category.animals.map((animal: ModelIdentifier) => {
                    return (
                      <li key={animal.id} className={styles.li}>
                        <Link
                          href={`${SITE_URLS.animals.index}/${animal.id}`}
                          className={selectedAnimalId === animal.id ? styles.selected : undefined}
                          aria-current={selectedAnimalId === animal.id ? "page" : undefined}
                        >
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
  )
}
