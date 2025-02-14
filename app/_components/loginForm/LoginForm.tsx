import classNames from "classnames";
import { loginWithKeycloak } from "@/app/_actions/auth";

// styles
import globalStyles from '@/styles/globals.module.scss';

export const LoginForm = () => {
  return (
    <form action={loginWithKeycloak}>
      <button className={classNames(globalStyles.button, globalStyles.buttonGreen)} type="submit">Login</button>
    </form>
  )
}
