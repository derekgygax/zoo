"use client"

import classNames from "classnames";

// types
import { Metadata, FORM_FIELD_TYPE } from "@/types/form";

// layouts
import { PageSection } from "@/app/_layouts/pageSection/PageSection";

// components

// styles
import styles from './Form.module.scss';
import { SubmitFormButton } from "../submitFormButton/SubmitFormButton";

interface FormProps {
  fields: Metadata[];
}

export const Form = ({ fields }: FormProps) => {
  return (
    <PageSection>
      <form className={styles.form}>
        {fields.map((field: Metadata, index: number) => {

          let content: React.ReactNode | null = null;

          switch (field.type) {
            case FORM_FIELD_TYPE.TEXT:
              content = (
                <input
                  type="text"
                  name={field.name}
                  className={styles.field}
                  placeholder={field.label}
                  required={field.required}
                  maxLength={field.maxLength}
                />
              );
              break;
            case FORM_FIELD_TYPE.SELECTOR:
              content = (
                <select
                  name={field.name}
                  className={classNames(styles.field, styles.selector)}
                  defaultValue=""
                  required={field.required}
                >
                  <option value="" disabled>
                    Select {field.label}
                  </option>
                  {field.values?.map((value) => (
                    <option key={value} value={value}>
                      {value}
                    </option>
                  ))}
                </select>
              );
              break;
            case FORM_FIELD_TYPE.DATE:
              content = (
                <input
                  type="date"
                  className={styles.field}
                  name={field.name}
                  required={field.required}
                />
              );
              break;
            default:
              break;
          }

          return (
            <label key={index} className={classNames(styles.field, styles.label)}>
              <span>{field.label}:</span>
              {content}
            </label>
          )
        })}
        <SubmitFormButton
          className={styles.submitButton}
        />
      </form>
    </PageSection>
  )
}