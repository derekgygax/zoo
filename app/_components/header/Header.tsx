"use server"

// server actions
import { getLoggedInUser } from "@/app/_actions/auth";

// components
import { LoginForm } from "@/app/_components/loginForm/LoginForm"
import { LogoutForm } from "@/app/_components/logoutForm/LogoutForm";

// styles
import styles from './Header.module.scss';
import { User } from "@/types/auth";

export const Header = async () => {

  const user: User | null = await getLoggedInUser();

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {user ? (
          <div className={styles.logout}>
            <span>{user.name}</span>
            <LogoutForm />
          </div>
        ) : (
          <LoginForm />
        )}
      </nav>
    </header>
  )
}