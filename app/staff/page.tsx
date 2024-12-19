
// components
import { Tasks } from "./_components/tasks/Tasks";
import { Title } from "../_components/title/Title";

// content
import { tasks, title } from "@/_content/app/staff/page";

// styles
// import styles from "./page.module.scss";

export default function StaffPage() {
  return (
    <main>
      <Title
        title={title.label}
        level={title.level}
      />
      <Tasks
        tasks={tasks}
      />
    </main>
  )
}