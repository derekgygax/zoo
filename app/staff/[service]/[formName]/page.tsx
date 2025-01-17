

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

  console.log(service);



  // TODO FIX THIS!!!
  // TODO FIX THIS!!!
  // TODO FIX THIS!!!
  // TODO FIX THIS!!!
  // TODO FIX THIS!!!

  if (!Object.values(FORM_NAME).includes(formName as FORM_NAME)) {
    return (
      <div>NOT A FORM!!!</div>
    )
  }

  // TODO FIX!!!!

  // Safely cast formName to FORM_NAME after validation
  const formConfig: FormConfig<FORM_NAME> = FORM_CONFIGS[formName as FORM_NAME];


  // Right here the string in the Record could be FIELD_REQUIRING_FETCHED_DATA
  // but that might make things werid later so just don't do it
  const selectorOptions: Record<string, SelectorOption[]> = await fetchFormDependencies(formConfig.fieldsRequiringFetchedData);

  console.log(selectorOptions);

  // TODO!!!
  // You NEED TO FIX THIS so it can accomodate updating!!
  // TODO!!!
  // You NEED TO FIX THIS so it can accomodate updating!!
  // TODO!!!
  // You NEED TO FIX THIS so it can accomodate updating!!
  // TODO!!!
  // You NEED TO FIX THIS so it can accomodate updating!!
  // TODO!!!
  // You NEED TO FIX THIS so it can accomodate updating!!
  // IT needs to go to another component so it has the drop down!!
  // IT needs to go to another component so it has the drop down!!
  // IT needs to go to another component so it has the drop down!!
  // IT needs to go to another component so it has the drop down!!
  // IT needs to go to another component so it has the drop down!!

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