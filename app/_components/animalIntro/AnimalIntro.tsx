
import Image from "next/image";

// types
import { AnimalBio, AnimalImageInBio } from "@/types/animals-service";

// layouts
import { SplitSection } from "@/app/_layouts/splitSection/SplitSection";

// components
import { SpecieInfo } from "@/app/_components/specieInfo/SpecieInfo";

// styles
import globalStyles from '@/styles/globals.module.scss';
import styles from './AnimalIntro.module.scss';

interface AnimalIntroProps {
  animal: AnimalBio
}

export const AnimalIntro = ({ animal }: AnimalIntroProps) => {

  const primaryImage = animal.images.find((image: AnimalImageInBio) => image.is_primary);

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
      panelB={<SpecieInfo specie={animal.specie} />}
      classNameSplitSections={styles.animalIntroSection}
      classNamePanelB={styles.infoContainer}
    />
  )
}