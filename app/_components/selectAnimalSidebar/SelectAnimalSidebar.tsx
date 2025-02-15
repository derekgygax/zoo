import Link from 'next/link';

// config
import { SITE_URLS } from '@/config/siteUrls';

// utils
import { capitalizeFirstLetter } from '@/lib/utils/general';

// types
import { ModelIdentifier } from '@/types/serviceModels';

// styles
import styles from './SelectAnimalSidebar.module.scss';

interface SelectAnimalSidebarProps {
  animalsGroups: { genus: string; animals: ModelIdentifier[] }[]
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
          {animalsGroups.map((animalGroup: { genus: string; animals: ModelIdentifier[] }) => {
            return (
              <li key={animalGroup.genus} className={styles.li}>
                <h3>{capitalizeFirstLetter(animalGroup.genus)}</h3>
                <ul className={styles.genus}>
                  {animalGroup.animals.map((animal: ModelIdentifier) => {
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
