"use client"

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

// config
import { FORM_NAME } from "@/config/forms";

// config

// types
import { AnimalIdentifier, AnimalBase } from "@/types/animals-service"
import { FormConfig, HiddenField, SelectorOption } from "@/types/form";

// TODO
// can you do this here!!?? Like pull config stuff in a client component??? DAANNNGGGG
// Like is it good practice ... maybe need to set it up for protection
// Next.js lets you do so much you can get messy
// config
import { SITE_URLS } from "@/config/siteUrls";

// server actions
import { updateAnimalAction, getAnimal } from "@/app/_actions/animals-service/animals";

// client components
import { ZodForm } from "@/app/_client_components/zodForm/ZodForm";


interface AnimalUpdate {
  id: string,
  animal: AnimalBase | undefined
}

interface UpdateAnimalProps {
  animals: AnimalIdentifier[];
  formConfig: FormConfig<FORM_NAME.UPDATE_ANIMAL>;
  selectorOptions: Record<string, SelectorOption[]>;
}

export const UpdateAnimal = ({ animals, formConfig, selectorOptions }: UpdateAnimalProps) => {

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

  // this is NOT a state, it will be filled differently 
  // on every rerender. so this will work just fine
  // still makes you nervous but here it is
  const hiddenFields: HiddenField[] = animal ? [{
    name: "id",
    value: animal.id
  }] : [];

  return (
    <>
      <select ref={selectRef} onChange={handleAnimalChange}>
        <option></option>
        {animals.map((animal: AnimalIdentifier) => {
          return (
            <option
              key={animal.id}
              value={animal.id}
            >
              {`${animal.name} (${animal.specie_id})`}
            </option>
          )
        })}
      </select>
      {animal && (
        <ZodForm
          formName={formConfig.name}
          formServerAction={updateAnimalAction}
          zodSchemaName={formConfig.zodSchemaName}
          hiddenFields={hiddenFields}
          selectorOptions={selectorOptions}
          defaultValues={animal.animal}
          callBack={handleFormCallBack}
        />
      )}
    </>
  )
}