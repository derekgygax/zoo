'use client'

import classNames from "classnames";

import { useFormStatus } from "react-dom";

// styles
import styles from './SubmitFormButton.module.scss';

interface SubmitFormButtonProps {
  className?: string;
  text?: string;
  disabled?: boolean;
}

// https://www.youtube.com/watch?v=dDpZfOQBMaU
export const SubmitFormButton = (
  {
    className,
    text = "Submit",
    disabled = false
  }: SubmitFormButtonProps
) => {
  const { pending } = useFormStatus();
  return (
    <button
      className={
        classNames(
          pending || disabled ? styles.disabledButton : undefined,
          styles.button,
          className
        )
      }
      type="submit"
      disabled={disabled || pending}
    >
      {text}
    </button>
  )
}