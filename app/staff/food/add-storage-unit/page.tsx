
// config
import { FORM_CONFIGS, FORM_NAME } from "@/config/forms";

// types
import { FormConfig, SelectorOption } from "@/types/form";

// server actions
import { fetchFormDependencies } from "@/app/_actions/utils/server/fetchFormDependencies";
import { addStorageUnitAction } from "@/app/_actions/food-service/storage-unit";

// layouts
import { PageSection } from "@/app/_layouts/pageSection/PageSection";

// components
import { Title } from "@/app/_components/title/Title";
import { ZodForm } from "@/app/_client_components/zodForm/ZodForm";

// content
import { title } from "@/content/app/staff/food/add-storage-unit";

export default async function AddStorageUnitPage() {

  const formConfig: FormConfig<FORM_NAME.ADD_STORAGE_UNIT> = FORM_CONFIGS[FORM_NAME.ADD_STORAGE_UNIT];

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
          formServerAction={addStorageUnitAction}
          selectorOptions={selectorOptions}
          zodSchemaName={formConfig.zodSchemaName}
        />
      </PageSection>
    </main>
  )
}