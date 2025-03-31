"use client"
import classNames from "classnames";
import Link from "next/link";

import { useClerk } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";

// styles
import globalStyles from '@/src/styles/globals.module.scss';

export const SignInStatus = () => {

  const { user, isLoaded } = useUser();

  const { signOut } = useClerk();

  // I HATE THIS!!!!
  // There has to be a good way to show it!
  // To show the loading things correctly!!
  if (!isLoaded) {
    return (
      <div>Getting User</div>
    );
  }

  if (!user?.id) {
    return (
      <Link
        href={"/sign-in"}
        className={classNames(globalStyles.button, globalStyles.buttonGreen)}
      >
        Sign In
      </Link>
    );
  }

  // TODO CLEAN UP!!!!

  return (
    <div
      // I HATE doing this but for speed ... that is why people use tailwind
      style={{
        display: "flex",
        flexDirection: "column"
      }}
    >
      <p>{user.fullName}</p>
      <button
        className={classNames(globalStyles.button, globalStyles.buttonGreen)}
        onClick={() => {
          signOut()
        }}
      >
        Sign Out
      </button>
    </div>
  )
}
