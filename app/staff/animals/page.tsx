
// layouts

// components
import { Title } from "../../_components/title/Title";
import { Tasks } from "../_components/tasks/Tasks";

// content
import { tasks, title } from "../../../content/app/staff/animals/page";

// TODO I think all the pages within STAFF is going to be the same
// unorder list so you can make one component. but do that after
// when you see its real. Preemptive optimization is the root of evil

export default function StaffAnimalsPage() {
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