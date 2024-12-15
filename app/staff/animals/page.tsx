
// layouts

// components
import { Title } from "../../_components/title/Title";

// data
import { title } from "../_data/animals/animals";

export default function StaffAnimalsPage() {
  return (
    <main>
      <Title
        title={title.label}
        level={title.level}
      />
    </main>
  )
}