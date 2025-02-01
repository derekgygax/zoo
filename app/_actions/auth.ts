"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginWithKeycloak(): Promise<void> {
  const url: string = `${process.env.KEYCLOAK_URL}/realms/${process.env.KEYCLOAK_REALM}/protocol/openid-connect/auth?` +
    new URLSearchParams({
      client_id: process.env.KEYCLOAK_CLIENT_ID as string,
      redirect_uri: process.env.KEYCLOAK_REDIRECT_URI as string,
      response_type: "code",
      scope: "openid",
    }).toString();

  redirect(url);
}

export async function logoutWithKeycloak(): Promise<void> {
  const cookie = await cookies();

  const refreshToken = cookie.get("keycloak_refresh_token")?.value;

  cookie.delete("keycloak_token");

  const logoutUrl = `${process.env.KEYCLOAK_URL}/realms/${process.env.KEYCLOAK_REALM}/protocol/openid-connect/logout?client_id=${process.env.KEYCLOAK_CLIENT_ID}&post_logout_redirect_uri=http://localhost:3000`;

  const formData = new URLSearchParams();
  formData.append("client_id", process.env.KEYCLOAK_CLIENT_ID!);
  formData.append("client_secret", process.env.KEYCLOAK_CLIENT_SECRET!);

  if (refreshToken) {
    formData.append("refresh_token", refreshToken);
  }

  const res = await fetch(`${process.env.KEYCLOAK_URL}/realms/${process.env.KEYCLOAK_REALM}/protocol/openid-connect/logout`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: formData
  });

  console.log(res);
  redirect(logoutUrl);
}



export async function exchangeCodeForToken(code: string): Promise<string> {
  const response = await fetch(`${process.env.KEYCLOAK_URL}/realms/${process.env.KEYCLOAK_REALM}/protocol/openid-connect/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      client_id: process.env.KEYCLOAK_CLIENT_ID as string,
      client_secret: process.env.KEYCLOAK_CLIENT_SECRET as string,
      redirect_uri: process.env.KEYCLOAK_REDIRECT_URI as string,
      code,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to authenticate with Keycloak");
  }

  const data = await response.json();
  return data.access_token; // Return JWT token
}

export async function storeTokenInCookie(token: string) {
  const cookie = await cookies();
  cookie.set("access_token", token, {
    httpOnly: true, // Prevents access from JavaScript (XSS protection)
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 3600,
    path: "/",
  });
}