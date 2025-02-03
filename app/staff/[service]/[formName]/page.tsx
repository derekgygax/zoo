
import { SERVICE } from "@/config/master";

// config
import { FORM_CONFIGS, FORM_NAME, FORM_TYPE } from "@/config/forms";

// types
import { FormConfig, SelectorOption } from "@/types/form";

// server actions
import { formServerAction } from "@/app/_actions/formHandlers";
import { fetchFormDependencies, fetchModelOptions } from "@/app/_actions/formModels";

// global components
import { Title } from "@/app/_components/title/Title";
import { ZodForm } from "@/app/_components/zodForm/ZodForm";

// local client components
// TODO I HATE THIS STRUCTURING!!!
import { UpdateModel } from "@/app/_components/updateModel/UpdateModel";

// layouts
import { PageSection } from "@/app/_layouts/pageSection/PageSection";


interface StaffServiceFormPageParams {
  service: string;
  formName: string;
}

interface StaffServiceFormPageProps {
  params: Promise<StaffServiceFormPageParams>;
}

// TODO This whole page is gross!!!
// TODO This whole page is gross!!!
// TODO This whole page is gross!!!
// TODO This whole page is gross!!!
// TODO This whole page is gross!!!
// TODO This whole page is gross!!!
// TODO This whole page is gross!!!
// TODO This whole page is gross!!!
export default async function StaffServiceFormPage({ params }: StaffServiceFormPageProps) {

  const { service, formName } = await params;

  // TODO FIX THIS!
  if (!Object.values(SERVICE).includes(service as SERVICE)) {
    return (
      <div>NOT A SERVICE!!!</div>
    )
  }

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
  const dependenciesOptions: Record<string, SelectorOption[]> = formConfig.fieldsRequiringFetchedData.length > 0 ? (
    await fetchFormDependencies(formConfig.fieldsRequiringFetchedData)
  ) : {};

  // Check is the form is an add or an update
  // Add:
  //    Directly put in the form
  // Update:
  //    Go to the UpdateModel Component to retrieve the options for the modle
  let pageContent: React.ReactNode;
  if (formConfig.type === FORM_TYPE.ADD) {
    pageContent = (
      <ZodForm
        formName={formConfig.name}
        formServerAction={formServerAction}
        // TODO ONLY SUBMIT THIS IF ITS THERE!! 
        // OR SOMETHING
        dependenciesOptions={dependenciesOptions}
        hiddenFields={[
          {
            name: "formName",
            value: formConfig.name
          },
          {
            name: "service",
            value: service
          },
          {
            name: "model",
            value: formConfig.model
          },
          {
            name: "formType",
            value: formConfig.type
          }
        ]}
        zodSchemaName={formConfig.zodSchemaName}
      />
    );
  } else if (formConfig.type === FORM_TYPE.UPDATE) {

    // TODO SHOULD YOU ERROR HERE OR SOMETHING!!
    // TODO SHOULD YOU ERROR HERE OR SOMETHING!!
    // TODO SHOULD YOU ERROR HERE OR SOMETHING!!
    if (!formConfig.model) {
      console.log(`You are missing a model in formConfig for the update form ${formName} for the service ${service}`);
    }
    const modelOptions: SelectorOption[] = formConfig.model ? (
      await fetchModelOptions(
        service as SERVICE,
        formConfig.model
      )
    ) : [];

    pageContent = (
      <UpdateModel
        modelOptions={modelOptions}
        formConfig={formConfig}
        dependenciesOptions={dependenciesOptions}
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