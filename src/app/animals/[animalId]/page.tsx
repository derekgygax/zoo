
// types
import { AnimalBio } from "@/src/types/animals-service";

// components
import { AnimalIntro } from "@/src/app/_components/animalIntro/AnimalIntro";
import { Title } from "@/src/app/_components/title/Title";
import { AnimalInfo } from "@/src/app/_components/animalInfo/AnimalInfo";

// Mock Data
import { mockAnimalBio } from "@/src/content/app/animals/animalId/layout";

interface AnimalPageProps {
  params: Promise<{
    animalId: string;
  }>
}

export default async function AnimalPage(props: AnimalPageProps) {

  const { animalId } = await props.params;
  const animal: AnimalBio = mockAnimalBio[animalId];
  // console.log(animal);

  return (
    <>
      <Title
        title={animal.name}
        level={1}
      />
      <section>
        <AnimalIntro animal={animal} />
      </section>
      <section>
        <AnimalInfo />
      </section>
    </>
  )
}