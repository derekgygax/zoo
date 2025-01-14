
// layouts

// components
import { Duties } from "../_components/duties/Duties";
import { Title } from "../../_components/title/Title";

// content
import { title, duties } from "../../../content/app/staff/food";

export default function StaffFoodPage() {
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