
// layouts
import { PageSection } from '@/app/_layouts/pageSection/PageSection';

interface HeroProps {
  backgroundStyles: string;
}

export const Hero = ({ backgroundStyles }: HeroProps) => {
  return (
    <PageSection background={backgroundStyles}>
      <></>
    </PageSection>
  )
}
