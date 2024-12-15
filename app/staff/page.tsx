import Link from "next/link";

// types
import { Task } from "./types/staff";

// config
import { SITE_URLS } from "@/config";

// layouts
import { PageSection } from "../_layouts/pageSection/PageSection";

// data
import { tasks } from "./data/staff";

// styles
import styles from "./page.module.scss";

export default function StaffPage() {
  return (
    <main>
      <PageSection>
        <h1 className={styles.header}>Zoo Staff</h1>
      </PageSection>
      <PageSection>
        <ul className={styles.options}>
          {tasks.map((task: Task) => {
            // TODO Incorporate the role based on who is signed in
            return (
              <li>
                <Link
                  href={task.url}
                >
                  {task.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </PageSection>
    </main>
  )
}