"use client"

import classNames from "classnames";
import { useActionState, startTransition, useRef, useEffect } from "react";
import { useForm, DefaultValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z, ZodObject, ZodRawShape, ZodTypeAny } from "zod";

// types
import { FormState } from "@/types/form";

// components
import { SubmitFormButton } from "../submitFormButton/SubmitFormButton"
import { ZodField } from "../zodField/ZodField";

// styles
import styles from './ZodForm.module.scss';

// Working with the state
const initialState: FormState = {
  success: false,
  message: []
}

interface ZodFormProps<Schema extends ZodObject<ZodRawShape>> {
  formName: string;
  formServerAction: (prevState: FormState, formData: FormData) => Promise<FormState>;
  zodSchema: Schema;
  hiddenFields?: {
    name: string;
    value: string;
  }[];
  defaultValues?: z.infer<Schema>;
  callBack?: (success: boolean) => void;
}

export const ZodForm = <Schema extends ZodObject<ZodRawShape>>({ formName, formServerAction, zodSchema, hiddenFields, defaultValues, callBack }: ZodFormProps<Schema>) => {

  const [state, action] = useActionState(formServerAction, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful }
  } = useForm({
    resolver: zodResolver(zodSchema),
    defaultValues: defaultValues as DefaultValues<z.infer<Schema>>
  });

  const fields = Object.entries(zodSchema.shape);


  useEffect(() => {
    // TODO this is fucked
    // technically teh call back could reset or erase the form but we don't  know that
    // TODO: fix this later
    if (isSubmitSuccessful && state.success) {
      if (callBack) {
        callBack(true);
      } else {
        reset();
      }
    }

  }, [reset, callBack, state, isSubmitSuccessful]);

  return (
    <form
      ref={formRef}
      action={action}
      name={formName}
      onSubmit={(evt) => {
        evt.preventDefault();
        handleSubmit(() => {
          startTransition(() => action(new FormData(formRef.current!)));
        })(evt);
      }}
    >
      {/* hidden fields in the form */}
      {hiddenFields && hiddenFields.map((field: { name: string, value: string }, index: number) => {
        return (
          <input key={index} type="hidden" name={field.name} value={field.value} />
        )
      })}

      {/* fields defined by the zod schema */}
      {fields.map(([fieldName, fieldSchema], index: number) => {

        return (
          <ZodField
            key={index}
            fieldName={fieldName}
            fieldSchema={fieldSchema as ZodTypeAny}
            register={register}
            errors={errors}
          />
        )
      })}

      {/* Report the state of the form form useActionState */}
      <div
        className={
          classNames(
            state.message.length === 0 ? styles.hide : undefined,
            state.success ? styles.success : styles.error
          )
        }
      >
        {state.message.map((phrase: string, index: number) => {
          return (
            <p key={index}>
              {phrase}
            </p>
          );
        })}
      </div>

      {/* submit button */}
      <SubmitFormButton
        className={styles.submitButton}
      />
    </form >
  );
}