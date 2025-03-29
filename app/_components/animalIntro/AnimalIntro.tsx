
import Image from "next/image";

// types
import { AnimalBio, AnimalImageInBio } from "@/types/animals-service";

// layouts
import { SplitSection } from "@/app/_layouts/splitSection/SplitSection";

// components
import { IntroInfo } from "../introInfo/IntroInfo";

// styles
import globalStyles from '@/styles/globals.module.scss';
import styles from './AnimalIntro.module.scss';

interface AnimalIntroProps {
  animal: AnimalBio
}

export const AnimalIntro = ({ animal }: AnimalIntroProps) => {

  const primaryImage = animal.images.find((image: AnimalImageInBio) => image.is_primary);

  const { description, ...specieInfo } = animal.specie;

  return (
    <SplitSection
      panelA={primaryImage ? (
        <figure>
          <Image
            src={primaryImage.url}
            alt={`${animal.name} image`}
            className={globalStyles.image}
            height={primaryImage.height}
            width={primaryImage.width}
          />
        </figure>
      ) : null}
      panelB={
        <IntroInfo
          info={{
            gender: animal.gender,
            birthday: animal.dob,
            health: animal.health,
            day_joined: animal.acquisition_date,
            ...specieInfo
          }}
          description={description}
        />
      }
      classNameSplitSections={styles.animalIntroSection}
    />
  )
}