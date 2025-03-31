import React from 'react';
import classNames from 'classnames';

// utiles
import { snakeToTitleCase, underscoreToSpace } from '@/src/lib/utils/general';

// styles
import styles from './IntroInfo.module.scss';

interface IntroInfoProps<T extends Record<string, unknown>> {
  info: T;
  description: string;
  className?: string;
}

export const IntroInfo = <T extends Record<string, unknown>>({ info, description, className }: IntroInfoProps<T>) => {
  return (
    <>
      <dl className={classNames(styles.info_dl, className)}>
        {Object.entries(info).map(([key, value], index) => {
          return (
            <React.Fragment key={index}>
              <dt className={styles.info_dt}>{snakeToTitleCase(key)}:</dt>
              <dl className={styles.info_dd}>{underscoreToSpace(String(value))}</dl>
            </React.Fragment>
          )
        })}
      </dl>
      <div className={styles.infoDescription}>
        <h4>Description:</h4>
        <p>{description}</p>
      </div>
    </>
  );
};

