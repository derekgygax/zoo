
// components
import { Title } from "@/app/_components/title/Title";

// data
import { title } from "../../_data/animals/add";

// styles
import styles from './page.module.scss';
import { PageSection } from "@/app/_layouts/pageSection/PageSection";
import { AnimalEnumResponse } from "../../types";
import { getAPIRequest } from "@/lib/utils/server";

export default async function StaffAddAnimalPage() {

  const animalEnums: AnimalEnumResponse[] = await getAPIRequest(
    process.env.API_ANIMALS_ENUM_ANIMAL ?? "",
    [],
    null
  );

  console.log(animalEnums);


  return (
    <main>
      <Title
        title={title.label}
        level={title.level}
      />
      <PageSection>
        <form className={styles.form}>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <label>
            Species:
            <input type="text" name="species" />
          </label>
          <label>
            Gender:
            <input type="text" name="gender" />
          </label>
          <label>
            Health:
            <input type="text" name="health" />
          </label>
          <button type="submit">
            Submit
          </button>
        </form>
      </PageSection>
    </main>
  )
}