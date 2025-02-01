"use client";

import { loginWithKeycloak } from "@/app/_actions/auth";

export default function LoginPage() {
  return (
    <form action={loginWithKeycloak}>
      <button type="submit">Login with Keycloak</button>
    </form>
  );
}
