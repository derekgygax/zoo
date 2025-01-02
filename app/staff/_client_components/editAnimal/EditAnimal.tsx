"use client"

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

// types
import { AnimalIdentifier, AnimalBase } from "@/types/animal"
import { FORM_NAME, FormConfig } from "@/types/form";

// TODO
// can you do this here!!?? Like pull config stuff in a client component??? DAANNNGGGG
// Like is it good practice ... maybe need to set it up for protection
// Next.js lets you do so much you can get messy
// config
import { SITE_URLS } from "@/config/siteUrls";
import { ZOD_SCHEMAS } from "@/config/zodSchemas";

// server actions
import { editAnimalAction, getAnimal } from "@/app/_actions/animals";

// layouts
import { PageSection } from "@/app/_layouts/pageSection/PageSection";

// client components
import { ZodForm } from "@/app/_client_components/zodForm/ZodForm";

interface AnimalUpdate {
  id: string,
  animal: AnimalBase | undefined
}

interface EditAnimalProps {
  animals: AnimalIdentifier[];
  formConfig: FormConfig<FORM_NAME.EDIT_ANIMAL>
}

export const EditAnimal = ({ animals, formConfig }: EditAnimalProps) => {

  const router = useRouter();

  const [animal, setAnimal] = useState<AnimalUpdate>();
  const selectRef = useRef<HTMLSelectElement>(null);

  const handleAnimalChange = async () => {
    if (selectRef.current) {
      const animalId = selectRef.current.value;
      setAnimal(undefined);
      const fetchedAnimal: AnimalBase | undefined = await getAnimal(animalId);
      setAnimal({
        id: animalId,
        animal: fetchedAnimal,
      });
    }
  }

  const handleFormCallBack = (success: boolean) => {
    if (success) {
      router.push(SITE_URLS.staff.animals.index);
      setAnimal(undefined);
      if (selectRef.current) {
        selectRef.current.value = "";
      }
    }
  }

  return (
    <>
      <PageSection>
        <select ref={selectRef} onChange={handleAnimalChange}>
          <option></option>
          {animals.map((animal: AnimalIdentifier) => {
            return (
              <option
                key={animal.id}
                value={animal.id}
              >
                {`${animal.name} (${animal.specie})`}
              </option>
            )
          })}
        </select>
      </PageSection>
      {animal && (
        <PageSection>
          <ZodForm
            formName={formConfig.name}
            formServerAction={editAnimalAction}
            zodSchema={ZOD_SCHEMAS[formConfig.zodSchemaName]}
            hiddenFields={[
              {
                name: "id",
                value: animal.id
              }
            ]}
            defaultValues={animal.animal}
            callBack={handleFormCallBack}
          />
        </PageSection>
      )}
    </>
  )
}