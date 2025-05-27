// src/utils/cookies.ts

export function setCookie(name: string, value: string, options: {
    path?: string;
    httpOnly?: boolean;
    maxAge?: number;
    sameSite?: 'Strict' | 'Lax' | 'None';
  } = {}): string {
    const cookieParts = [`${name}=${value}`];
  
    if (options.path) cookieParts.push(`Path=${options.path}`);
    if (options.httpOnly) cookieParts.push(`HttpOnly`);
    if (options.maxAge) cookieParts.push(`Max-Age=${options.maxAge}`);
    if (options.sameSite) cookieParts.push(`SameSite=${options.sameSite}`);
  
    return cookieParts.join('; ');
  }
  
  export function getCookie(cookies: string, name: string): string | null {
    const cookie = cookies
      .split(';')
      .map(c => c.trim())
      .find(c => c.startsWith(`${name}=`));
    return cookie ? cookie.split('=')[1] : null;
  }

// Remove a cookie by setting its expiration date to the past
export function removeCookie(name: string, options: { path? : string } = {}): string {
  const cookieParts = [`${name}=; Expires=Thu, 01 Jan 1970 00:00:00 GMT`];
  if (options.path) cookieParts.push(`Path=${options.path}`);
  return cookieParts.join('; ');
}  