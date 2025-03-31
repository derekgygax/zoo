
// layouts
import { PageSection } from "../../layouts/pageSection/PageSection";

// components
import { Duties } from "../../components/duties/Duties";
import { Title } from "../../components/title/Title";

// content
import { duties, title } from "@/src/content/app/staff/page";

// styles
import globalStyles from "@/src/styles/globals.module.scss";

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