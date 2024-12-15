
// components
import { Tasks } from "./_components/tasks/Tasks";
import { Title } from "../_components/title/Title";

// data
import { tasks, title } from "./_data/base";

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