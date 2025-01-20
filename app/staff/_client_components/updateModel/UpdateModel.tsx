"use client"

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

// config
import { FORM_NAME } from "@/config/forms";

import { z } from "zod";
import { ZOD_SCHEMAS } from "@/config/forms";

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


interface Model<T = Record<string, unknown>> {
  id: string,
  model: T
}

interface UpdateFormProps {
  modelOptions: SelectorOption[];
  formConfig: FormConfig<FORM_NAME>;
  dependenciesOptions: Record<string, SelectorOption[]>;
}

export const UpdateForm = ({ modelOptions, formConfig, dependenciesOptions }: UpdateFormProps) => {

  console.log(dependenciesOptions);

  const router = useRouter();

  const [model, setModel] = useState<Model>();
  const selectRef = useRef<HTMLSelectElement>(null);

  const handleAnimalChange = async () => {
    if (selectRef.current) {
      const modelId = selectRef.current.value;
      setModel(undefined);
      // const fetchedModel = await fetchModel();
      // setModel({
      //   id: modelId,
      //   model: fetchedModel,
      // });
    }
  }

  const handleFormCallBack = (success: boolean) => {
    if (success) {
      router.push(SITE_URLS.staff.animals.index);
      setModel(undefined);
      if (selectRef.current) {
        selectRef.current.value = "";
      }
    }
  }

  // this is NOT a state, it will be filled differently 
  // on every rerender. so this will work just fine
  // still makes you nervous but here it is
  const hiddenFields: HiddenField[] = model ? [{
    name: "id",
    value: model.id
  }] : [];

  return (
    <>
      {/* {Object.entries(modelIdentfierOptions || {}).map(([service, models]) => (
        models && Object.entries(models).map(([model, options]) => (
          options && (
            <select ref={selectRef} onChange={handleAnimalChange} key={`${service}-${model}`}>
              <option></option>
              {options.map((option: SelectorOption) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          )
        ))
      ))} */}
      {model && (
        <ZodForm
          formName={formConfig.name}
          formServerAction={updateAnimalAction}
          zodSchemaName={formConfig.zodSchemaName}
          hiddenFields={hiddenFields}
          dependenciesOptions={dependenciesOptions}
          defaultValues={model.model}
          callBack={handleFormCallBack}
        />
      )}
    </>
  )
}