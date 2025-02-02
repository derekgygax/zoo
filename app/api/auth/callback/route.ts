import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const code = searchParams.get("code");

  if (!code) {
    return NextResponse.redirect("/login?error=NoCode");
  }

  // Exchange the code for a token
  const tokenResponse = await fetch(
    `${process.env.KEYCLOAK}/realms/${process.env.KEYCLOAK_REALM}/protocol/openid-connect/token`,
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id: process.env.KEYCLOAK_CLIENT_ID!,
        client_secret: process.env.KEYCLOAK_CLIENT_SECRET!,
        redirect_uri: process.env.KEYCLOAK_REDIRECT_URI!,
        grant_type: "authorization_code",
        code,
      }),
    }
  );

  if (!tokenResponse.ok) {
    return NextResponse.redirect("/auth/login?error=TokenError");
  }

  const tokenData = await tokenResponse.json();
  const response = NextResponse.redirect(new URL("/", req.url));

  // Store the tokens in an HTTP-only cookie
  // MUST happen here
  // cookies can only be set in response spots
  // the import { cookies } from "next/headers"; is READ ONLY
  response.cookies.set("keycloak_token", tokenData.access_token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
  });

  // Store the Refresh Token in an HTTP-only cookie
  response.cookies.set("keycloak_refresh_token", tokenData.refresh_token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
  });

  return response;
}
