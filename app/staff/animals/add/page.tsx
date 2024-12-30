

// config
import { FORM_CONFIGS } from "@/config/formConfigs";

// types
import { FORM_NAME, FormConfig } from "@/types/form";

// global components
import { Title } from "@/app/_components/title/Title";

// local components
import { AnimalForm } from "../../_components/animalForm/AnimalForm";

// content
import { title } from "@/content/app/staff/animals/add";

// styles
// import styles from './page.module.scss';

export default async function AddAnimalPage() {
  const formConfig: FormConfig<FORM_NAME.ADD_ANIMAL> = FORM_CONFIGS[FORM_NAME.ADD_ANIMAL];

  return (
    <main>
      <Title
        title={title.label}
        level={title.level}
      />
      <AnimalForm
        formName={formConfig.name}
        formLabel={formConfig.label}
        zodSchemaName={formConfig.zodSchemaName}
      />
    </main>
  )
}