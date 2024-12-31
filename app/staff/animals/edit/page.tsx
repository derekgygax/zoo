
// config
// import { FORM_CONFIGS } from "@/config/formConfigs";
import { APIS } from "@/config/api";
import { FORM_CONFIGS } from "@/config/formConfigs";

// types
import { FORM_NAME, FormConfig } from "@/types/form";
import { AnimalIdentifier } from "@/types/animal";

// lib utils
import { getAPIRequest } from "@/lib/utils/server";

// global components
import { Title } from "@/app/_components/title/Title";

// local components
// import { AnimalForm } from "../../_components/animalForm/AnimalForm";

// content
import { title } from "@/content/app/staff/animals/edit";
import { EditAnimal } from "../../_client_components/editAnimal/EditAnimal";

// styles
// import styles from './page.module.scss';

export default async function EditAnimalPage() {
  const formConfig: FormConfig<FORM_NAME.EDIT_ANIMAL> = FORM_CONFIGS[FORM_NAME.EDIT_ANIMAL];
  console.log(formConfig);

  const animals: AnimalIdentifier[] = await getAPIRequest<AnimalIdentifier[]>(
    APIS.animalsService.animals.ids,
    []
  );

  return (
    <main>
      <Title
        title={title.label}
        level={title.level}
      />
      <EditAnimal
        animals={animals}
        formConfig={formConfig}
      />
    </main>
  )
}

