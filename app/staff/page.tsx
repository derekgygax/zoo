
// layouts
import { PageSection } from "../_layouts/pageSection/PageSection";

// components
import { Duties } from "../_components/duties/Duties";
import { Title } from "../_components/title/Title";

// content
import { duties, title } from "@/content/app/staff";

// styles
import globalStyles from "@/styles/globals.module.scss";

export default function StaffPage() {
  return (
    <main>
      <Title
        title={title.label}
        level={title.level}
        className={globalStyles.containerFullPage}
      />
      <PageSection ariaLabel="staff-duties">
        <Duties
          duties={duties}
        />
      </PageSection>
    </main>
  )
}