
// layouts
import { PageSection } from '@/src/layouts/pageSection/PageSection';

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
