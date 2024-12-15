import Link from "next/link";

// types
import { Task } from "./types";

// layouts
import { PageSection } from "../_layouts/pageSection/PageSection";

// components
import { Title } from "../_components/title/Title";

// data
import { tasks, title } from "./_data/staff";

// styles
import styles from "./page.module.scss";

export default function StaffPage() {
  return (
    <main>
      <Title
        title={title.label}
        level={title.level}
      />
      <PageSection>
        <ul className={styles.options}>
          {tasks.map((task: Task, index: number) => {
            // TODO Incorporate the role based on who is signed in
            return (
              // Remember this key is NEEDED but only remembered locally so index is good enough, unless you have nested
              <li key={index}>
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