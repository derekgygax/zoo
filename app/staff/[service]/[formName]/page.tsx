

// config
import { FORM_CONFIGS, FORM_NAME } from "@/config/forms";

// types
import { FormConfig, SelectorOption } from "@/types/form";

// server actions
import { formServerAction } from "@/app/_actions/utils/server/formHandlers";
import { fetchFormDependencies } from "@/app/_actions/utils/server/formDependencies";

// global components
import { Title } from "@/app/_components/title/Title";

// client components
import { ZodForm } from "@/app/_client_components/zodForm/ZodForm";

// layouts
import { PageSection } from "@/app/_layouts/pageSection/PageSection";


interface StaffServiceFormPageParams {
  service: string;
  formName: string;
}

interface StaffServiceFormPageProps {
  params: Promise<StaffServiceFormPageParams>;
}

export default async function StaffServiceFormPage({ params }: StaffServiceFormPageProps) {

  const { service, formName } = await params;

  // TODO FIX THIS!
  if (!Object.values(FORM_NAME).includes(formName as FORM_NAME)) {
    return (
      <div>NOT A FORM!!!</div>
    )
  }

  // Get the formConfig based on the form name
  const formConfig: FormConfig<FORM_NAME> = FORM_CONFIGS[formName as FORM_NAME];

  // Only make the call to fill selectorOptions if you need to
  // selectOptions will be passed into the forms as {}
  // This is intentional. The form can handle it
  const selectorOptions: Record<string, SelectorOption[]> = formConfig.fieldsRequiringFetchedData ? (
    await fetchFormDependencies(formConfig.fieldsRequiringFetchedData)
  ) : {};

  return (
    <main>
      <Title
        title={formConfig.label}
        // TODO I HATE THIS HARD CODING!!!
        level={1}
      />
      <PageSection>
        <ZodForm
          formName={formConfig.name}
          formServerAction={formServerAction}
          // TODO ONLY SUBMIT THIS IF ITS THERE!! 
          // OR SOMETHING
          selectorOptions={selectorOptions}
          hiddenFields={[
            {
              name: "formName",
              value: formConfig.name
            }
          ]}
          zodSchemaName={formConfig.zodSchemaName}
        />
      </PageSection>
    </main>
  )
}