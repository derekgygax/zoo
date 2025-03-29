
// types
import { AnimalBio } from "@/types/animals-service";

// components
import { AnimalIntro } from "@/app/_components/animalIntro/AnimalIntro";
import { Title } from "@/app/_components/title/Title";
import { AnimalInfo } from "@/app/_components/animalInfo/AnimalInfo";

// Mock Data
import { mockAnimalBio } from "@/content/app/animals/animalId/layout";

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