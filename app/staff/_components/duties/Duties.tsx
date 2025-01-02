
import Link from "next/link";

// types
import { Duty } from "@/types/staff";

// layouts
import { PageSection } from "@/app/_layouts/pageSection/PageSection";

// styles
import styles from "./Duties.module.scss";

interface DutiesProps {
  duties: Duty[]
}

export const Duties = ({ duties }: DutiesProps) => {
  return (
    <PageSection>
      <ul className={styles.duties}>
        {duties.map((duty: Duty, index: number) => {
          // TODO Incorporate the role based on who is signed in
          return (
            // Remember this key is NEEDED but only remembered locally so index is good enough, unless you have nested
            <li key={index}>
              <Link
                href={duty.url}
              >
                {duty.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </PageSection>
  )
}