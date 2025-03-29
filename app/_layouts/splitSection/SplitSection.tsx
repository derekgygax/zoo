
import classNames from 'classnames';

// styles
import styles from './SplitSections.module.scss';

interface SplitSectionProps {
  panelA: React.ReactNode;
  panelB: React.ReactNode;
  classNameSplitSections?: string;
  classNamePanelA?: string;
  classNamePanelB?: string;
}

export const SplitSection = ({
  panelA,
  panelB,
  classNameSplitSections,
  classNamePanelA,
  classNamePanelB,
}: SplitSectionProps) => {
  return (
    <div className={classNames(styles.splitSections, classNameSplitSections)}>
      <div
        className={classNames(styles.panelA, classNamePanelA)}
      >
        {panelA}
      </div>
      <div
        className={classNames(styles.panelB, classNamePanelB)}
      >
        {panelB}
      </div>
    </div>
  )
}
