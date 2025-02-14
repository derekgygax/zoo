
// components
import { Duties } from "../_components/duties/Duties";
import { Title } from "../_components/title/Title";

// content
import { duties, title } from "@/content/app/staff";

// styles
// import styles from "./page.module.scss";

export default function StaffPage() {
  return (
    <main>
      <Title
        title={title.label}
        level={title.level}
      />
      <Duties
        duties={duties}
      />
    </main>
  )
}