"use client";

import { logoutWithKeycloak } from "@/app/_actions/auth";

export default function LogoutPage() {
  return (
    <form action={logoutWithKeycloak}>
      <button type="submit">Logout with Keycloak</button>
    </form>
  );
}
