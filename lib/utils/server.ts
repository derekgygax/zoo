"use server"

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