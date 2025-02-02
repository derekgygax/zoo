"use client"

import classNames from "classnames";
import { useActionState } from "react";

// types
import { FormState } from "@/types/form";

// components
import { SubmitFormButton } from "../submitFormButton/SubmitFormButton"

// styles
import styles from './FormWithServerAction.module.scss';

// Working with the state
const initialState: FormState = {
  success: false,
  message: []
}

interface FormWithServerActionProps {
  children: React.ReactNode;
  formName: string;
  formServerAction: (prevState: FormState, formData: FormData) => Promise<FormState>;
}

export const FormWithServerAction = ({ children, formName, formServerAction }: FormWithServerActionProps) => {

  const [state, action] = useActionState(formServerAction, initialState);

  return (
    <form
      action={action}
      name={formName}
    >
      {/* This is the actual form components */}
      {children}
      {/* This is where the state stuff is written */}
      <div
        className={
          classNames(
            state.message.length === 0 ? styles.hide : undefined,
            state.success ? styles.messageSuccess : styles.messageError
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
    </form>
  )
}