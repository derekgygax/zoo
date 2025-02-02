"use client"

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

// config
import { FORM_NAME } from "@/config/forms";


// types
import { FormConfig, HiddenField, SelectorOption } from "@/types/form";

// TODO
// can you do this here!!?? Like pull config stuff in a client component??? DAANNNGGGG
// Like is it good practice ... maybe need to set it up for protection
// Next.js lets you do so much you can get messy
// config

// server actions
import { formServerAction } from "@/app/_actions/formHandlers";
import { fetchModel } from "@/app/_actions/formModels";

// client components
import { ZodForm } from "@/app/_components/zodForm/ZodForm";


interface ModelState<T> {
  id: string;
  model: T | undefined;
}

interface UpdateFormProps {
  modelOptions: SelectorOption[];
  formConfig: FormConfig<FORM_NAME>;
  dependenciesOptions: Record<string, SelectorOption[]>;
}

export const UpdateForm = <T extends Record<string, unknown> | undefined>({ modelOptions, formConfig, dependenciesOptions }: UpdateFormProps) => {

  const router = useRouter();

  const [modelState, setModel] = useState<ModelState<T> | undefined>();
  const selectRef = useRef<HTMLSelectElement>(null);

  // TODO CHECK THIS IS OK
  // with formConfig.model being optional!!
  // in FormConfig model is ?
  const handleModelChange = async () => {
    // TODO THIS NEEDS TO FAIL BETTER!!!
    if (selectRef.current) {
      const modelId = selectRef.current.value;
      setModel(undefined);
      if (formConfig.model) {
        const fetchedModel = await fetchModel<typeof formConfig.service, T>(formConfig.service, formConfig.model, modelId);
        setModel({
          id: modelId,
          model: fetchedModel,
        } as ModelState<T>);
      }
    }
  }

  // TODO THIS NEEDS TO FAIL BETTER
  // TODO THIS NEEDS TO FAIL BETTER
  // TODO THIS NEEDS TO FAIL BETTER
  // TODO THIS NEEDS TO FAIL BETTER
  // TODO THIS NEEDS TO FAIL BETTER
  // TODO THIS NEEDS TO FAIL BETTER
  const handleFormCallBack = (success: boolean) => {
    // TODO FIX THIS!!!!
    // TODO SAVE THIS LOCATION IN THE formConfigs
    if (success) {
      router.push(formConfig.selectionScreenUrl);
      setModel(undefined);
      if (selectRef.current) {
        selectRef.current.value = "";
      }
    }
  }

  // this is NOT a state, it will be filled differently 
  // on every rerender. so this will work just fine
  // still makes you nervous but here it is
  const hiddenFields: HiddenField[] = modelState ? [
    {
      name: "id",
      value: modelState.id
    },
    {
      name: "formName",
      value: formConfig.name
    }
  ] : [];

  return (
    <>
      <select ref={selectRef} onChange={handleModelChange}>
        <option></option>
        {modelOptions.map((option: SelectorOption) => {
          return (
            <option
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          )
        })}
      </select>
      {modelState && (
        <ZodForm
          formName={formConfig.name}
          formServerAction={formServerAction}
          zodSchemaName={formConfig.zodSchemaName}
          hiddenFields={hiddenFields}
          dependenciesOptions={dependenciesOptions}
          defaultValues={modelState.model}
          callBack={handleFormCallBack}
        />
      )}
    </>
  )
}