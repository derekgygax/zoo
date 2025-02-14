import classNames from 'classnames';

import Image, { StaticImageData } from 'next/image';

// styles
import styles from './Logo.module.scss';

// logo
import zooLogo from '@/public/assets/logo/zoo.png';

const logos: Record<string, StaticImageData> = {
  zoo: zooLogo,
};


interface LogoProps {
  id: string;
  alt?: string;
  logoContainerClass?: string;
  logoClassname?: string;
}

export const Logo = ({
  id,
  alt,
  logoContainerClass,
  logoClassname
}: LogoProps) => {
  return (
    <div className={logoContainerClass}>
      <Image
        src={logos[id]}
        alt={alt ?? `Logo for ${id}`}
        priority={true}
        className={classNames(styles.logoImg, logoClassname)}
      />
    </div>
  )
}
