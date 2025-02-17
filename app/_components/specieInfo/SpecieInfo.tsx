
// utils
import { snakeToTitleCase, underscoreToSpace } from "@/lib/utils/general";

// types
import { SpecieBase } from "@/types/animals-service";

// styles
import styles from './SpecieInfo.module.scss';

interface SpecieInfoProps {
  specie: SpecieBase
}

export const SpecieInfo = ({ specie }: SpecieInfoProps) => {
  return (
    <div className={styles.specieInfo}>
      {Object.entries(specie).map(([key, value]) => {
        return (
          <div key={key} className={styles.infoContainer}>
            <h4 className={styles.infoTitle}>{snakeToTitleCase(key)}:</h4>
            <span className={styles.info}>{underscoreToSpace(String(value))}</span>
          </div>
        )
      })}
    </div>
  )
}
