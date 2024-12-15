import classNames from "classnames";

// styles
import globalStyles from '@/styles/globals.module.scss';
import styles from './PageSection.module.scss';

interface SectionProps {
  background?: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
  innerStyle?: string;
}

export const PageSection = ({
  background,
  children,
  className,
  id,
  innerStyle
}: SectionProps) => {
  return (
    <section id={id} className={classNames(className, background, styles.pageSection)}>
      <div className={classNames(innerStyle, globalStyles.containerFullPage)}>
        {children}
      </div>
    </section>
  )
}