
// lib
import { getAPIRequest } from "@/lib/utils/server";

// components
import { Title } from "@/app/_components/title/Title";

// client components
import { Form } from "@/app/client_components/form/Form";

// data
import { title } from "../../_data/animals/add";

// styles
// import styles from './page.module.scss';

export default async function StaffAddAnimalPage() {

  const animalMetadata = await getAPIRequest(
    process.env.API_ANIMALS_METADATA ?? "",
    [],
    null
  );

  return (
    <main>
      <Title
        title={title.label}
        level={title.level}
      />
      <Form
        fields={animalMetadata}
      />
    </main>
  )
}