"use client"



// TODO
// can you do this here!!??
import { SITE_URLS } from "@/config/siteUrls";




import { useRouter } from "next/navigation";

import { FORM_NAME } from "@/types/form";

import { useState, useRef } from "react";

import { ZodForm } from "@/app/_client_components/zodForm/ZodForm";

import { PageSection } from "@/app/_layouts/pageSection/PageSection";
import { AnimalIdentifier, AnimalBase } from "@/types/animal"

import { getAnimal } from "@/app/_actions/animals";
import { FormConfig } from "@/types/form";

import { editAnimalAction } from "@/app/_actions/animals";

import { ZOD_SCHEMAS } from "@/config/zodSchemas";

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