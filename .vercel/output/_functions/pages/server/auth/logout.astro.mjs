import { c as createComponent } from '../../../chunks/astro/server_Z0VxRGOD.mjs';
import 'kleur/colors';
import 'clsx';
import { r as removeCookie } from '../../../chunks/cookies_CCYdg1Hj.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Logout = createComponent(($$result, $$props, $$slots) => {
  const cookie = removeCookie("token", { path: "/" });
  return new Response(null, {
    status: 302,
    headers: {
      "Set-Cookie": cookie,
      "Location": "/"
    }
  });
}, "/Users/macbook/Desktop/Astro/Astro-SSR-main/src/pages/server/auth/logout.astro", void 0);

const $$file = "/Users/macbook/Desktop/Astro/Astro-SSR-main/src/pages/server/auth/logout.astro";
const $$url = "/server/auth/logout";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Logout,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
