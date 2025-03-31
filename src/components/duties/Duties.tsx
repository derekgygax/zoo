
import Link from "next/link";

// config
import { SITE_URLS } from "@/config/siteUrls";

// types
import { Duty } from "@/src/types/staff";

// styles
import styles from "./Duties.module.scss";

interface DutiesProps {
  duties: Duty[];
}

export const Duties = ({ duties }: DutiesProps) => {
  return (
    <nav>
      <ul className={styles.duties}>
        {duties.map((duty: Duty, index: number) => {
          // TODO Incorporate the role based on who is signed in
          return (
            // Remember this key is NEEDED but only remembered locally so index is good enough, unless you have nested
            <li key={index}>
              <Link
                href={`${SITE_URLS.staff.index}/${duty.service}`}
              >
                {duty.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}