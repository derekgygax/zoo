"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import jwt from "jsonwebtoken";

// types
import { User } from "@/types/auth";


export async function loginWithKeycloak(): Promise<void> {
  const url: string = `${process.env.KEYCLOAK}/realms/${process.env.KEYCLOAK_REALM}/protocol/openid-connect/auth?` +
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


  const formData = new URLSearchParams();
  formData.append("client_id", process.env.KEYCLOAK_CLIENT_ID!);
  formData.append("client_secret", process.env.KEYCLOAK_CLIENT_SECRET!);

  if (refreshToken) {
    formData.append("refresh_token", refreshToken);
  }

  await fetch(`${process.env.KEYCLOAK}/realms/${process.env.KEYCLOAK_REALM}/protocol/openid-connect/logout`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: formData
  });

  redirect("/");
}

export async function exchangeCodeForToken(code: string): Promise<string> {
  const response = await fetch(`${process.env.KEYCLOAK}/realms/${process.env.KEYCLOAK_REALM}/protocol/openid-connect/token`, {
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


/**
 * Retrieves and decodes the JWT stored in cookies.
 * @returns The decoded JWT payload or null if invalid/missing.
 */
async function getDecodedJWT(): Promise<jwt.JwtPayload | null> {
  const cookieStore = await cookies();
  const jwtToken = cookieStore.get("keycloak_token")?.value;

  if (!jwtToken) return null;

  try {
    return jwt.decode(jwtToken) as jwt.JwtPayload;
  } catch {
    return null;
  }
}


/**
 * Extracts user information from the decoded JWT.
 * @returns The user object or null if no valid JWT exists.
 */
export async function getLoggedInUser(): Promise<User | null> {
  const decodedToken = await getDecodedJWT();

  if (!decodedToken) return null;

  // TODO figure out when you want roles
  // pushed back and if you even do
  return {
    name: decodedToken.name ?? "Unknown User",
    email: decodedToken.email ?? "No Email",
    roles: decodedToken.roles ?? [],
  };
}