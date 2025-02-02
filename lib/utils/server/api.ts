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

  // TODO this is some absolute bullshit that you do NOT want
  // to keep around but for some reason it is NECESSARY for kong to work
  // I am sure you are doing something fucked
  // but this is your solution for now
  // TODO IDK why it needs that trailing / but it stupidly DOES!
  // TODO i am sure it is your fault but you can't think of why!!
  url = url + "/"

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