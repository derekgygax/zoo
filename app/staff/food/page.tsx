
// layouts

// components
import { Title } from "../../_components/title/Title";

// data
import { title } from "../_data/food/food";

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