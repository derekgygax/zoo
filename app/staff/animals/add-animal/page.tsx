

// config
import { FORM_CONFIGS } from "@/config/formConfigs";

// types
import { FORM_NAME, FormConfig, SelectorOption } from "@/types/form";
import { SpecieBase } from "@/types/animals-service";

// server actions
import { addAnimalAction } from "@/app/_actions/animals-service/animals";
import { getSpeciesBase } from "@/app/_actions/animals-service/specie";

// utils
import { toSelectorOptions } from "@/lib/utils/general";

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


  // TODO MAKE THE NAME OF THE FIELD THAT NEEDS A SELECTOR DYNAMIC!!
  // TODO I HATE the hard coding of "specie" here but you gotta move forward
  // for now and come back and fix later
  const species: SpecieBase[] = await getSpeciesBase();
  const selectorOptions: Record<string, SelectorOption[]> = {
    specie: toSelectorOptions(species, "specie", "specie")
  };

  // console.log(formConfig.fieldsRequiringFetcheData);


  return (
    <main>
      <Title
        title={title.label}
        level={title.level}
      />
      <PageSection>
        <div></div>
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