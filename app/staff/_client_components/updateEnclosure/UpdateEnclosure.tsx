"use client"

import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

// server action
import { updateEnclosureAction, getEnclosureBase } from '@/app/_actions/enclosures-service/enclosures';

interface EnclosureUpdate {
  id: string;
  enclosure: EnclosureBase | undefined
}

import { FORM_NAME } from "@/config/forms";
import { EnclosureBase, EnclosureIdentifier } from "@/types/enclosures-service"
import { FormConfig, HiddenField, SelectorOption } from "@/types/form";
import { ZodForm } from '@/app/_client_components/zodForm/ZodForm';
import { SITE_URLS } from '@/config/siteUrls';

interface UpdateEnclosureProps {
  enclosureIdentifiers: EnclosureIdentifier[];
  formConfig: FormConfig<FORM_NAME.UPDATE_ENCLOSURE>;
  selectorOptions: Record<string, SelectorOption[]>;
}

export const UpdateEnclosure = ({enclosureIdentifiers, formConfig, selectorOptions}: UpdateEnclosureProps) => {


  const router = useRouter();

  const [enclosure, setEnclosure] = useState<EnclosureUpdate>();
  const selectRef = useRef<HTMLSelectElement>(null);

  const handleEnclosureChange = async () => {
    if (selectRef.current) {
      const animalId = selectRef.current.value;
      setEnclosure(undefined);
      const enclosure: EnclosureBase | undefined = await getEnclosureBase(animalId);
      setEnclosure({
        id: animalId,
        enclosure: enclosure,
      });
    }
  }

  const handleFormCallBack = (success: boolean) => {
    if (success) {
      router.push(SITE_URLS.staff.enclosures.index);
      setEnclosure(undefined);
      if (selectRef.current) {
        selectRef.current.value = "";
      }
    }
  }

  // The hidden fields is just the enclosureId
  // this is what allows the update to target 
  // the correct enclosure
  // this is NOT a state, it will be filled differently 
  // on every rerender. so this will work just fine
  // still makes you nervous but here it is
  const hiddenFields: HiddenField[] = enclosure ? [{
    name: "id",
    value: enclosure.id
  }] : [];

  return (
    <>
      <select ref={selectRef} onChange={handleEnclosureChange}>
        <option></option>
        {enclosureIdentifiers.map((enclosureIdentifier: EnclosureIdentifier) => {
          return (
            <option
              key={enclosureIdentifier.id}
              value={enclosureIdentifier.id}
            >
              {enclosureIdentifier.name}
            </option>
          )
        })}
      </select>
      {enclosure && (
        <ZodForm
          formName={formConfig.name}
          formServerAction={updateEnclosureAction}
          zodSchemaName={formConfig.zodSchemaName}
          hiddenFields={hiddenFields}
          selectorOptions={selectorOptions}
          defaultValues={enclosure.enclosure}
          callBack={handleFormCallBack}
        />
      )}
    </>
  )
}