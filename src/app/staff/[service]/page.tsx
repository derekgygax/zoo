// import { Title } from "@/src/app/_components/title/Title";
import { PageSection } from "@/src/layouts/pageSection/PageSection";
import { FORM_CONFIGS, FORM_NAME } from "@/config/forms";
import { SERVICE } from "@/config/master";
import { SERVICE_DUTIES } from "@/config/serviceDuties";
import { SITE_URLS } from "@/config/siteUrls";
import Link from "next/link";

interface StaffServicePageParams {
  service: string;
}

interface StaffServicePageProps {
  params: Promise<StaffServicePageParams>;
}

export default async function StaffServicePage({ params }: StaffServicePageProps) {
  const { service } = await params;

  const serviceDuties = SERVICE_DUTIES[service as SERVICE];
  return (
    <PageSection>
      <ul>
        {serviceDuties.map((duty: string) => {
          const label = FORM_CONFIGS[duty as FORM_NAME].label;
          return (
            <li key={duty}>
              <Link
                href={`${SITE_URLS.staff.index}/${service}/${duty}`}
              >
                {label}
              </Link>
            </li>
          )
        })}
      </ul>
    </PageSection>
  )
}