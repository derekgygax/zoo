
// layouts

// components
import { Title } from "../../_components/title/Title";

// content
import { title } from "../../../content/app/staff/food";

export default function StaffFoodPage() {
  return (
    <main>
      <Title
        title={title.label}
        level={title.level}
      />
    </main>
  )
}