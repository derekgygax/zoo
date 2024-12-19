
import Link from "next/link";

// types
import { Task } from "@/types/staff";

// layouts
import { PageSection } from "@/app/_layouts/pageSection/PageSection";

// styles
import styles from "./Tasks.module.scss";

interface TasksProps {
  tasks: Task[]
}

export const Tasks = ({ tasks }: TasksProps) => {
  return (
    <PageSection>
      <ul className={styles.tasks}>
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
  )
}