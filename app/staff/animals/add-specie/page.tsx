

// config
import { FORM_CONFIGS } from "@/config/formConfigs";

// types
import { FORM_NAME, FormConfig } from "@/types/form";

// global components
import { Title } from "@/app/_components/title/Title";

// layouts
import { PageSection } from "@/app/_layouts/pageSection/PageSection";

// local components
import { SpecieForm } from "../../_client_components/specieForm/SpecieForm";

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
        <SpecieForm
          formName={formConfig.name}
          formLabel={formConfig.label}
          zodSchemaName={formConfig.zodSchemaName}
        />
      </PageSection>
    </main>
  )
}