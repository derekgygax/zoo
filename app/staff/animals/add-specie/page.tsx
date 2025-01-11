// master config
import { FORM_NAME } from "@/config/master";

// config
import { FORM_CONFIGS } from "@/config/formConfigs";

// types
import { FormConfig } from "@/types/form";

// server actions
import { addSpecieAction } from "@/app/_actions/animals-service/specie";

// global components
import { Title } from "@/app/_components/title/Title";

// client components
import { ZodForm } from "@/app/_client_components/zodForm/ZodForm";

// layouts
import { PageSection } from "@/app/_layouts/pageSection/PageSection";

// content
import { title } from "@/content/app/staff/animals/add-specie";

// styles
// import styles from './page.module.scss';

export default async function AddSpeciePage() {
  const formConfig: FormConfig<FORM_NAME.ADD_SPECIE> = FORM_CONFIGS[FORM_NAME.ADD_SPECIE];

  return (
    <main>
      <Title
        title={title.label}
        level={title.level}
      />
      <PageSection>
        <ZodForm
          formName={formConfig.name}
          formServerAction={addSpecieAction}
          zodSchemaName={formConfig.zodSchemaName}
        />
      </PageSection>
    </main>
  )
}