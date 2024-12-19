
// layouts

// components
import { Title } from "../../_components/title/Title";

// content
import { title } from "../../../_content/app/staff/food/page";

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