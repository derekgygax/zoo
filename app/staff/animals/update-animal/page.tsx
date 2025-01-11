
// config
import { API_ENDPOINTS } from "@/config/apis";
import { FORM_CONFIGS, FORM_NAME } from "@/config/forms";

// types
import { FormConfig, SelectorOption } from "@/types/form";
import { AnimalIdentifier } from "@/types/animals-service";

// server action utils
import { fetchFormDependencies } from "@/app/_actions/utils/server/fetchFormDependencies";

// lib utils
import { getAPIRequest } from "@/lib/utils/server/api";

// global components
import { Title } from "@/app/_components/title/Title";

// local components
import { UpdateAnimal } from "../../_client_components/updateAnimal/UpdateAnimal";

// content
import { title } from "@/content/app/staff/animals/update-animal";

// styles
// import styles from './page.module.scss';

export default async function UpdateAnimalPage() {
  const formConfig: FormConfig<FORM_NAME.UPDATE_ANIMAL> = FORM_CONFIGS[FORM_NAME.UPDATE_ANIMAL];

  // Right here the string in the Record could be FIELD_REQUIRING_FETCHED_DATA
  // but that might make things werid later so just don't do it
  const selectorOptions: Record<string, SelectorOption[]> = await fetchFormDependencies(formConfig.fieldsRequiringFetchedData);

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
        selectorOptions={selectorOptions}
      />
    </main>
  )
}

