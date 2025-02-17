
// types
import { AnimalBio } from "@/types/animals-service";

// components
import { AnimalIntro } from "@/app/_components/animalIntro/AnimalIntro";
import { Title } from "@/app/_components/title/Title";

// Mock Data
import { mockAnimalBio } from "@/content/app/animals/animalId/layout";

interface AnimalPageProps {
  params: Promise<{
    animalId: string;
  }>
}

export default async function AnimalPage(props: AnimalPageProps) {

  const { animalId } = await props.params
  const animal: AnimalBio = mockAnimalBio[animalId];

  return (
    <>
      <Title
        title={animal.name}
        level={1}
      />
      <section>
        <AnimalIntro animal={animal} />
      </section>
    </>
  )
}