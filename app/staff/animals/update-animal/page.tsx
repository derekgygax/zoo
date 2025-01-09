
// config
import { API_ENDPOINTS } from "@/config/api";
import { FORM_CONFIGS } from "@/config/formConfigs";

// types
import { FORM_NAME, FormConfig } from "@/types/form";
import { AnimalIdentifier } from "@/types/animals-service";

// lib utils
import { getAPIRequest } from "@/lib/utils/server/api";

// global components
import { Title } from "@/app/_components/title/Title";

// local components
import { UpdateAnimal } from "../../_client_components/updateAnimal/UpdateAnimal";
// import { AnimalForm } from "../../_components/animalForm/AnimalForm";

// content
import { title } from "@/content/app/staff/animals/update-animal";

// styles
// import styles from './page.module.scss';

export default async function UpdateAnimalPage() {
  const formConfig: FormConfig<FORM_NAME.UPDATE_ANIMAL> = FORM_CONFIGS[FORM_NAME.UPDATE_ANIMAL];

  const animals: AnimalIdentifier[] = await getAPIRequest<AnimalIdentifier[]>(
    API_ENDPOINTS.animalsService.animals.ids,
    []
  );

  return (
    <main>
      <Title
        title={title.label}
        level={title.level}
      />
      <UpdateAnimal
        animals={animals}
        formConfig={formConfig}
      />
    </main>
  )
}

