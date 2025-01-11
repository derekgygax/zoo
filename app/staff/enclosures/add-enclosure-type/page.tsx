// master config
import { FORM_NAME } from "@/config/master";

// config
import { FORM_CONFIGS } from "@/config/formConfigs";

// types
import { FormConfig } from "@/types/form";

// server actions
import { addEnclosureTypeAction } from "@/app/_actions/enclosures-service/enclosure-types";

// global components
import { Title } from "@/app/_components/title/Title";

// client components
import { ZodForm } from "@/app/_client_components/zodForm/ZodForm";

// layouts
import { PageSection } from "@/app/_layouts/pageSection/PageSection";

// content
import { title } from "@/content/app/staff/enclosures/add-enclosure-type";

// styles
// import styles from './page.module.scss';

export default async function AddEnclosureTypePage() {
  const formConfig: FormConfig<FORM_NAME.ADD_ENCLOSURE_TYPE> = FORM_CONFIGS[FORM_NAME.ADD_ENCLOSURE_TYPE];

  return (
    <main>
      <Title
        title={title.label}
        level={title.level}
      />
      <PageSection>
        <ZodForm
          formName={formConfig.name}
          formServerAction={addEnclosureTypeAction}
          zodSchemaName={formConfig.zodSchemaName}
        />
      </PageSection>
    </main>
  )
}