

// config
import { FORM_CONFIGS } from "@/config/formConfigs";

// types
import { FORM_NAME, FormConfig } from "@/types/form";
import { SpecieBase } from "@/types/animals-service";

// global components
import { Title } from "@/app/_components/title/Title";

// server actions
import { getSpeciesBase } from "@/app/_actions/animals-service/specie";

// layouts
import { PageSection } from "@/app/_layouts/pageSection/PageSection";

// local components
import { AnimalForm } from "../../_client_components/animalForm/AnimalForm";

// content
import { title } from "@/content/app/staff/animals/add-animal";

// styles
// import styles from './page.module.scss';

export default async function AddAnimalPage() {
  const formConfig: FormConfig<FORM_NAME.ADD_ANIMAL> = FORM_CONFIGS[FORM_NAME.ADD_ANIMAL];

  const species: SpecieBase[] = await getSpeciesBase();

  return (
    <main>
      <Title
        title={title.label}
        level={title.level}
      />
      <PageSection>
        <AnimalForm
          species={species}
          formName={formConfig.name}
          formLabel={formConfig.label}
          zodSchemaName={formConfig.zodSchemaName}
        />
      </PageSection>
    </main>
  )
}