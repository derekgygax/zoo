
// TODO THIS is NOT needed but VS Code complains if I don't have it
import { JSX } from "react";

// styles
import styles from './Title.module.scss';
import { PageSection } from "@/app/_layouts/pageSection/PageSection";

interface TitleProps {
  title: string;
  level: number;
}

export const Title = ({ title, level }: TitleProps) => {

  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <PageSection>
      <Tag className={styles.title}>{title}</Tag>
    </PageSection>
  );

}