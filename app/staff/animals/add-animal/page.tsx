
// config
import { FORM_CONFIGS, FORM_NAME } from "@/config/forms";

// types
import { FormConfig, SelectorOption } from "@/types/form";

// server actions
import { addAnimalAction } from "@/app/_actions/animals-service/animals";
import { fetchFormDependencies } from "@/app/_actions/utils/server/fetchFormDependencies";

// global components
import { Title } from "@/app/_components/title/Title";

// client components
import { ZodForm } from "@/app/_client_components/zodForm/ZodForm";

// layouts
import { PageSection } from "@/app/_layouts/pageSection/PageSection";

// content
import { title } from "@/content/app/staff/animals/add-animal";

// styles
// import styles from './page.module.scss';

export default async function AddAnimalPage() {

  const formConfig: FormConfig<FORM_NAME.ADD_ANIMAL> = FORM_CONFIGS[FORM_NAME.ADD_ANIMAL];

  // Right here the string in the Record could be FIELD_REQUIRING_FETCHED_DATA
  // but that might make things werid later so just don't do it
  const selectorOptions: Record<string, SelectorOption[]> = await fetchFormDependencies(formConfig.fieldsRequiringFetchedData);

  return (
    <main>
      <Title
        title={title.label}
        level={title.level}
      />
      <PageSection>
        <ZodForm
          formName={formConfig.name}
          formServerAction={addAnimalAction}
          selectorOptions={selectorOptions}
          zodSchemaName={formConfig.zodSchemaName}
        />
      </PageSection>
    </main>
  )
}