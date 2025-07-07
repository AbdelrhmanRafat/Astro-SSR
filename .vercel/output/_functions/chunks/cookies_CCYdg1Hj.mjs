function setCookie(name, value, options = {}) {
  const cookieParts = [`${name}=${value}`];
  if (options.path) cookieParts.push(`Path=${options.path}`);
  if (options.httpOnly) cookieParts.push(`HttpOnly`);
  if (options.maxAge) cookieParts.push(`Max-Age=${options.maxAge}`);
  if (options.sameSite) cookieParts.push(`SameSite=${options.sameSite}`);
  return cookieParts.join("; ");
}
function getCookie(cookies, name) {
  const cookie = cookies.split(";").map((c) => c.trim()).find((c) => c.startsWith(`${name}=`));
  return cookie ? cookie.split("=")[1] : null;
}
function removeCookie(name, options = {}) {
  const cookieParts = [`${name}=; Expires=Thu, 01 Jan 1970 00:00:00 GMT`];
  if (options.path) cookieParts.push(`Path=${options.path}`);
  return cookieParts.join("; ");
}

export { getCookie as g, removeCookie as r, setCookie as s };
