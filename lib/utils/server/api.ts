"use server"

// import jwt from 'jsonwebtoken';


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



// TODO FIX!!
// wrapper to make readability easier
// export const getAPIRequestWithJWT = async <T>(url: string, defaultValue: T, sessionToken: any): Promise<T> => {
//   const secretKey = process.env.AUTH_SECRET ?? "";

//   const signedToken = jwt.sign(
//     sessionToken,
//     secretKey,
//     { algorithm: 'HS256' }
//   ).trim();

//   return getAPIRequest(
//     url,
//     defaultValue,
//     signedToken
//   )
// }

export const getAPIRequest = async <T>(
  url: string,
  defaultValue: T,
  signedToken: string | null = null
): Promise<T> => {

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  // Only add authorization if sessionToken is passed in
  if (signedToken) {
    headers['Authorization'] = `Bearer ${signedToken}`;
  }


  const response = await fetch(
    url,
    {
      method: 'GET',
      headers: headers,
    }
  );

  if (response.ok) {
    return await response.json();
  } else {
    console.error("The getAPIRequest did not work");
    console.error(url);
    console.error(response);
    return defaultValue;
  }

}

// Send the API request
export const sendAPIRequest = async (
  url: string,
  method: string,
  body: unknown,
  // sessionToken: any,
): Promise<void> => {

  // const secretKey = process.env.AUTH_SECRET ?? "";

  // console.log({
  //   secretKey,
  //   // sessionToken,
  //   url,
  //   body
  // });

  // const signedToken = jwt.sign(
  //   sessionToken,
  //   secretKey,
  //   {
  //     algorithm: (process.env.AUTH_ALGORITHM ?? "HS256") as jwt.Algorithm
  //   }
  // ).trim();

  console.log("\n", url, "\n");

  try {

    const response = await fetch(
      url,
      {
        method: method,
        headers: {
          // 'Authorization': `Bearer ${signedToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
      }
    );

    if (response.ok) {
      // console.log('Response data:', response);
    } else {
      console.error("The sendAPIRequest did not work");
      console.error(url);
      console.error(response);
      const errorText = await response.text();
      throw new Error(`Error: ${response.status} ${response.statusText} - ${errorText}`);
    }
  } catch (err) {
    console.error(err);
    throw err;
  }

}