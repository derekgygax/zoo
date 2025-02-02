

import { logoutWithKeycloak } from "@/app/_actions/auth";

// styles
import globalStyles from '@/styles/globals.module.scss';

export const LogoutForm = () => {
  return (
    <form action={logoutWithKeycloak}>
      <button className={globalStyles.button} type="submit">Logout</button>
    </form>
  )
}
