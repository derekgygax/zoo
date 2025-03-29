"use server"

import classNames from 'classnames';
import Link from 'next/link';

// config
import { SITE_URLS } from '@/config/siteUrls';

// types
import { User } from "@/types/auth";

// server actions
import { getLoggedInUser } from "@/app/_actions/auth";

// components
import { Logo } from '../logo/Logo';
import { LoginForm } from "@/app/_components/loginForm/LoginForm"
import { LogoutForm } from "@/app/_components/logoutForm/LogoutForm";

// content
import { content } from '@/content/app/_components/header';

// styles
import styles from './Header.module.scss';
import globalStyles from '@/styles/globals.module.scss';


export const Header = async () => {

  const user: User | null = await getLoggedInUser();

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
          {user ? (
            <div className={styles.logout}>
              <span>{user.name}</span>
              <LogoutForm />
            </div>
          ) : (
            <LoginForm />
          )}
        </div>
      </nav>
    </header>
  )
}