"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import jwt from "jsonwebtoken";

// types
import { User } from "@/types/auth";


// TODO
// add this to API calls with JWT
// Yes, **`createAuthRefreshInterceptor` from `axios-auth-refresh`** is a **better choice** for handling **automatic JWT token refresh** in a Next.js/TypeScript project using Axios.  

// ---

// ### **Why `axios-auth-refresh` is the Best Choice**
// ✅ **Lightweight** – Built specifically for handling token refresh logic in Axios.  
// ✅ **Automatic Retries** – It **automatically retries** failed requests after refreshing the token.  
// ✅ **Simple Integration** – You **don’t have to manually queue requests** while refreshing.  
// ✅ **Works well with HTTP-only cookies** – If you store the refresh token in **HTTP-only cookies**, it still works since refresh requests **automatically send cookies**.

// ---

// ### **How to Use `axios-auth-refresh` (Basic Setup)**
// 1️⃣ **Install the package:**
// ```bash
// bun add axios-auth-refresh
// ```

// 2️⃣ **Setup Axios with Refresh Logic (`apiClient.ts`)**
// ```tsx
// import axios from "axios";
// import createAuthRefreshInterceptor from "axios-auth-refresh";

// // Create an Axios instance
// const apiClient = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_API_URL, 
//   withCredentials: true, // Sends cookies with requests
// });

// // Define the refresh function
// const refreshAuthLogic = async (failedRequest: any) => {
//   await axios.post("/api/auth/refresh", {}, { withCredentials: true }); // Calls refresh endpoint
//   return Promise.resolve();
// };

// // Attach the interceptor
// createAuthRefreshInterceptor(apiClient, refreshAuthLogic);

// export default apiClient;
// ```
// ✅ **Now, if a request gets a `401 Unauthorized`, Axios automatically calls `/api/auth/refresh`, gets a new token, and retries the failed request.**  

// ---

// ### **Final Answer: Should You Use `axios-auth-refresh`?**
// ✅ **Yes, it’s the best choice if you’re using Axios and need automatic token refresh with minimal setup.**  
// ✅ **Better than manually handling token refresh logic in interceptors.**  
// ✅ **Works great for enterprise Next.js apps using JWT authentication.**  

// ---

// Would you like me to show **how to integrate this with Keycloak or NextAuth.js?** 🚀


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

export async function getJWT(): Promise<string | null> {

  const cookieStore = await cookies();

  const jwtToken = cookieStore.get("keycloak_token")?.value;

  if (!jwtToken) {
    return null
  }
  return jwtToken;
}


/**
 * Retrieves and decodes the JWT stored in cookies.
 * @returns The decoded JWT payload or null if invalid/missing.
 */
async function getDecodedJWT(): Promise<jwt.JwtPayload | null> {
  const jwtToken = await getJWT();
  if (!jwtToken) {
    return null;
  }

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
    roles: decodedToken.realm_access.roles ?? [],
  };
}