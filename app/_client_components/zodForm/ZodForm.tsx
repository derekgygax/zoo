"use client"

import classNames from "classnames";
import { useActionState, startTransition, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodObject, ZodRawShape, ZodTypeAny } from "zod";

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

interface ZodFormProps {
  formName: string;
  formServerAction: (prevState: FormState, formData: FormData) => Promise<FormState>;
  zodSchema: ZodObject<ZodRawShape>
}

export const ZodForm = ({ formName, formServerAction, zodSchema }: ZodFormProps) => {

  const [state, action] = useActionState(formServerAction, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(zodSchema),
  });
  const fields = Object.entries(zodSchema.shape);


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
      <SubmitFormButton
        className={styles.submitButton}
      />
    </form >
  );
}