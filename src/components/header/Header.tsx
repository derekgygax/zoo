"use server"

import classNames from 'classnames';
import Link from 'next/link';

// config
import { SITE_URLS } from '@/config/siteUrls';

// types
// import { User } from "@/src/types/auth";

// components
import { Logo, SignInStatus } from '@/src/components';

// content
import { content } from '@/src/content/app/_components/header';

// styles
import styles from './Header.module.scss';
import globalStyles from '@/src/styles/globals.module.scss';
// import { currentUser } from '@clerk/nextjs/server';


export const Header = async () => {

  // Better to use useUser() in the signInStatus
  // The rest of the page can be static
  // const user = await currentUser();

  return (
    <header className={styles.header}>
      <nav className={classNames(styles.nav, globalStyles.containerFullPage)}>
        <Link
          href={SITE_URLS.home}
          title={content.logo.text}
        >
          <Logo
            id={content.logo.id}
            alt={content.logo.text}
            logoContainerClass={styles.logoContainer}
            logoClassname={styles.logo}
          />
        </Link>
        <div className={styles.menu}>
          <Link
            href={SITE_URLS.staff.index}
            className={classNames(globalStyles.button, globalStyles.buttonGreen)}
          >
            Staff Work
          </Link>
          <SignInStatus
          // BETTER TO DO THIS as useUser() in the CLIENT!!!
          // Can keep the rest of the page as static as you would like
          // The !!userId checks is the userId is true or false
          // It askes is the userId NOT falsy. So it will return 
          // true if the userId is defined and false if the userId is null, undefined, 0, "", false, or NaN
          // isSignedIn={!!user}
          // firstName={user?.firstName}
          />
        </div>
      </nav>
    </header>
  )
}