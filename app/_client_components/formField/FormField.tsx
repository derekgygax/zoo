"use client"

import classNames from "classnames";
import { OpenAPIV3 } from "openapi-types";

// types
import { OPEN_API_FIELD_TYPE, OPEN_API_STRING_FORMAT } from "@/types/openAPI";

// styles
import styles from './FormField.module.scss';

interface FormFiledProps {
  fieldConfig: OpenAPIV3.SchemaObject;
  name: string;
}

export const FormField = ({ fieldConfig, name }: FormFiledProps) => {
  let content: React.ReactNode | null = null;

  switch (fieldConfig.type) {
    case OPEN_API_FIELD_TYPE.STRING:
      if (fieldConfig.enum) {
        content = (
          <select
            name={name}
            className={classNames(styles.field, styles.selector)}
            defaultValue=""
            required={fieldConfig.nullable !== true}
          >
            <option value="" disabled>
              Select {fieldConfig.title || name}
            </option>
            {fieldConfig.enum?.map((value: string) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        );
      } else {

        const inputProps = {
          name,
          className: styles.field,
          required: fieldConfig.nullable !== true,
          maxLength: fieldConfig.maxLength || undefined,
          placeholder: fieldConfig.title || undefined,
          title: fieldConfig.title || undefined,
        };

        switch (fieldConfig.format) {
          case OPEN_API_STRING_FORMAT.DATE:
            content = <input {...inputProps} type="date" />;
            break;

          case OPEN_API_STRING_FORMAT.DATE_TIME:
            content = <input {...inputProps} type="datetime-local" />;
            break;

          case OPEN_API_STRING_FORMAT.PASSWORD:
            content = <input {...inputProps} type="password" />;
            break;

          case OPEN_API_STRING_FORMAT.BYTE:
            content = <input {...inputProps} type="text" placeholder="Enter Base64 encoded value" />;
            break;

          case OPEN_API_STRING_FORMAT.BINARY:
            content = <input {...inputProps} type="file" />;
            break;

          case OPEN_API_STRING_FORMAT.EMAIL:
            content = <input {...inputProps} type="email" />;
            break;

          case OPEN_API_STRING_FORMAT.UUID:
            content = <input {...inputProps} type="text" pattern="[0-9a-fA-F-]{36}" />;
            break;

          case OPEN_API_STRING_FORMAT.URI:
            content = <input {...inputProps} type="url" />;
            break;

          case OPEN_API_STRING_FORMAT.HOSTNAME:
            content = <input {...inputProps} type="text" pattern="^([a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,}$" />;
            break;

          case OPEN_API_STRING_FORMAT.IPV4:
            content = <input {...inputProps} type="text" pattern="^(\\d{1,3}\\.){3}\\d{1,3}$" />;
            break;

          case OPEN_API_STRING_FORMAT.IPV6:
            content = <input {...inputProps} type="text" pattern="^([0-9a-fA-F]{0,4}:){1,7}[0-9a-fA-F]{1,4}$" />;
            break;

          default:
            content = <input {...inputProps} type="text" />;
            break;
        }
      }
      break;

    case OPEN_API_FIELD_TYPE.NUMBER:
    case OPEN_API_FIELD_TYPE.INTEGER:
      content = (
        <input
          type="number"
          name={name}
          className={styles.field}
          max={fieldConfig.maximum || undefined}
          min={fieldConfig.minimum || undefined}
          required={fieldConfig.nullable !== true}
        />
      );
      break;

    default:
      content = <span>Unsupported field type: {fieldConfig.type}</span>;
      break;
  }

  return (
    <label
      className={
        classNames(
          styles.field,
          styles.label
        )
      }
    >
      <span>{fieldConfig.title || name}:</span>
      {content}
    </label>
  );
}