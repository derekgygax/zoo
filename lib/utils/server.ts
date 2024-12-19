"use server"

// import jwt from 'jsonwebtoken';


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
    console.error(response.statusText);
    return defaultValue;
  }

}

// TODO FIX!!
// This is ONLY for requests that require a JWT
// export const sendAPIRequest = async (
//   url: string,
//   method: string,
//   sessionToken: any,
//   body: any
// ): Promise<void> => {

//   const secretKey = process.env.AUTH_SECRET ?? "";

//   console.log({
//     secretKey,
//     sessionToken,
//     url,
//     body
//   });

//   const signedToken = jwt.sign(
//     sessionToken,
//     secretKey,
//     {
//       algorithm: (process.env.AUTH_ALGORITHM ?? "HS256") as jwt.Algorithm
//     }
//   ).trim();

//   const response = await fetch(
//     url,
//     {
//       method: method,
//       headers: {
//         'Authorization': `Bearer ${signedToken}`,
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(body)
//     });

//   if (response.ok) {
//     // console.log('Response data:', response);
//   } else {
//     const errorText = await response.text();
//     throw new Error(`Error: ${response.status} ${response.statusText} - ${errorText}`);
//   }
// }