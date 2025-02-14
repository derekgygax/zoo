
import Image, { StaticImageData } from "next/image";

// types
import { AnimalBase } from "@/types/animals-service";

// layouts
import { SplitSection } from "@/app/_layouts/splitSection/SplitSection";

// components
import { Title } from "@/app/_components/title/Title";

// styles
import globalStyles from '@/styles/globals.module.scss';

// Mock Data
import { mockAnimals } from "@/content/app/animals/layout";
import { mockAnimalsInformation } from "@/content/app/animals/layout";
import tigerPic from '@/public/assets/tiger.webp';
import lizardPic from '@/public/assets/lizard.webp';
import elephantPic from '@/public/assets/elephant.webp';
import monkeyPic from '@/public/assets/monkey.webp';

// styles
import styles from './page.module.scss';
import { capitalizeFirstLetter } from "@/lib/utils/general";


const animalPics: Record<string, StaticImageData> = {
  tiger: tigerPic,
  lizard: lizardPic,
  elephant: elephantPic,
  monkey: monkeyPic,
};

interface AnimalPageProps {
  params: Promise<{
    animalId: string;
  }>
}

export default async function AnimalPage(props: AnimalPageProps) {

  const { animalId } = await props.params
  const animal: AnimalBase = mockAnimals[animalId];
  const animalInfo: Map<string, string> = mockAnimalsInformation.get(animalId) ?? new Map();

  return (
    <section>
      <Title
        title={animal.name}
        level={1}
      />
      <SplitSection
        panelA={(
          <Image
            src={animalPics[animal.specie_id]}
            alt="tiger"
            className={globalStyles.image}
          />
        )}
        panelB={Array.from(animalInfo).map(([key, value]) => {
          return (
            <>
              <h3>{capitalizeFirstLetter(key)}</h3>
              <p className={styles.info}>{value}</p>
            </>
          )
        })}
        classNameSplitSections={styles.picDescription}
      />
    </section>
  )
}