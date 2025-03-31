import classNames from 'classnames';

// styles
import styles from './layout.module.scss';
import globalStyles from '@/src/styles/globals.module.scss';

// MOCK DATA
import { mockAnimalIdentifiers } from '@/src/content/app/animals/animalId/layout';
import { SelectAnimalSidebar } from '@/src/app/_components/selectAnimalSidebar/SelectAnimalSidebar';

interface AnimalProfileLayoutProps {
  params: Promise<{
    animalId: string;
  }>;
  children: React.ReactNode;
}

export default async function AnimalProfileLayout(props: AnimalProfileLayoutProps) {

  const { animalId } = await props.params;
  const children = props.children

  return (
    <div className={classNames(globalStyles.containerFullPage, styles.animalsLayout)}>
      <SelectAnimalSidebar
        animalsGroups={mockAnimalIdentifiers}
        selectedAnimalId={animalId}
      />
      <main className={styles.animal}>
        {children}
      </main>
    </div>
  )
}