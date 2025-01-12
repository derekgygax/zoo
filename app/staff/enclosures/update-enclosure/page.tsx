
// config
import { FORM_CONFIGS, FORM_NAME } from "@/config/forms";

// types
import { FormConfig, SelectorOption } from "@/types/form";

// server actions
import { getEnclosureIdentifiers } from "@/app/_actions/enclosures-service/enclosures";
import { fetchFormDependencies } from "@/app/_actions/utils/server/fetchFormDependencies";

// global components
import { Title } from "@/app/_components/title/Title";

// layouts
import { PageSection } from "@/app/_layouts/pageSection/PageSection";

// content
import { title } from "@/content/app/staff/enclosures/update-enclosure";
import { EnclosureIdentifier } from "@/types/enclosures-service";
import { UpdateEnclosure } from "../../_client_components/updateEnclosure/UpdateEnclosure";

// styles
// import styles from './page.module.scss';

export default async function UpdateEnclosurePage() {
  const formConfig: FormConfig<FORM_NAME.UPDATE_ENCLOSURE> = FORM_CONFIGS[FORM_NAME.UPDATE_ENCLOSURE];

  // Right here the string in the Record could be FIELD_REQUIRING_FETCHED_DATA
  // but that might make things werid later so just don't do it
  const selectorOptions: Record<string, SelectorOption[]> = await fetchFormDependencies(formConfig.fieldsRequiringFetchedData);

  const enclosureIdentifiers: EnclosureIdentifier[] = await getEnclosureIdentifiers();

  return (
    <main>
      <Title
        title={title.label}
        level={title.level}
      />
      <PageSection>
        <UpdateEnclosure
          enclosureIdentifiers={enclosureIdentifiers}
          formConfig={formConfig}
          selectorOptions={selectorOptions}
        />
      </PageSection>
    </main>
  )
}