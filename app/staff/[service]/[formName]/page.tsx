

// config
import { FORM_CONFIGS, FORM_NAME, FORM_TYPE } from "@/config/forms";

// types
import { FormConfig, ModelIdentifierOptions, SelectorOption } from "@/types/form";

// server actions
import { formServerAction } from "@/app/_actions/utils/server/formHandlers";
import { fetchFormDependencies } from "@/app/_actions/utils/server/formDependencies";
import { fetchModelIdentifiers } from "@/app/_actions/utils/server/formIdentifiers";

// global components
import { Title } from "@/app/_components/title/Title";

// client components
import { UpdateForm } from "../../_client_components/updateForm/UpdateForm";
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

  const { formName } = await params;

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
  const selectorOptions: Record<string, SelectorOption[]> = formConfig.fieldsRequiringFetchedData.length > 0 ? (
    await fetchFormDependencies(formConfig.fieldsRequiringFetchedData)
  ) : {};


  const modelIdentfierOptions: ModelIdentifierOptions = formConfig.modelsRequiringIdentifiers ? (
    await fetchModelIdentifiers(formConfig.modelsRequiringIdentifiers)
  ) : {};

  console.log(formConfig);
  // Check is the form is an add or an update
  // Add:
  //    Directly put in the form
  // Update:
  //    Go to the UpdateForm Component to retrieve the options for the modle
  let pageContent: React.ReactNode;
  if (formConfig.type === FORM_TYPE.ADD) {
    pageContent = (
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
    );
  } else if (formConfig.type === FORM_TYPE.UPDATE) {

    pageContent = (
      <UpdateForm
        modelIdentfierOptions={modelIdentfierOptions}
        formConfig={formConfig}
        selectorOptions={selectorOptions}
      />
    )
  }

  return (
    <main>
      <Title
        title={formConfig.label}
        // TODO I HATE THIS HARD CODING!!!
        level={1}
      />
      <PageSection>
        {pageContent}
      </PageSection>
    </main>
  )
}