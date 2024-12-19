

// config
import { FORM_CONFIGS } from "@/config/formConfigs";

// types
import { FORM_NAME } from "@/types/form";

// components
import { Title } from "@/app/_components/title/Title";

// client components
import { AnimalForm } from "../../_components/animalForm/AnimalForm";

// content
import { title } from "../../../../_content/app/staff/animals/add";

// styles
// import styles from './page.module.scss';

export default async function AddAnimalPage() {
  return (
    <main>
      <Title
        title={title.label}
        level={title.level}
      />
      {/* TODO are you ok with config not having a name?? */}
      <AnimalForm
        formName={FORM_CONFIGS[FORM_NAME.ADD_ANIMAL].name}
        formLabel={FORM_CONFIGS[FORM_NAME.ADD_ANIMAL].label}
        config={FORM_CONFIGS[FORM_NAME.ADD_ANIMAL].config}
      />
    </main>
  )
}