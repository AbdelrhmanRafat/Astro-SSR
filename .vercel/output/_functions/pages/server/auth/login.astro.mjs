import { c as createComponent, a as createAstro, m as maybeRenderHead, f as renderTemplate } from '../../../chunks/astro/server_Z0VxRGOD.mjs';
import 'kleur/colors';
import 'clsx';
import { s as setCookie } from '../../../chunks/cookies_CCYdg1Hj.mjs';
import { s as signIn } from '../../../chunks/authService_Cfxbj9cG.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Login;
  const request = Astro2.request;
  if (request.method === "POST") {
    const formData = await request.formData();
    const email = formData.get("email")?.toString() ?? "";
    const password = formData.get("password")?.toString() ?? "";
    const response = await signIn({ email, password });
    const data = await response.json();
    if (data.message === "success" && data.token) {
      const cookie = setCookie("token", data.token, {
        path: "/",
        httpOnly: true,
        maxAge: 86400,
        // 24 hours
        sameSite: "Strict"
      });
      return new Response(null, {
        status: 302,
        headers: {
          "Set-Cookie": cookie,
          "Location": "/"
        }
      });
    } else {
      return new Response(
        `<h1>Login Failed</h1><p>${data.message ?? "Invalid email or password"}</p>`,
        { status: 401, headers: { "Content-Type": "text/html" } }
      );
    }
  }
  return renderTemplate`<!-- Display error message for non-POST requests -->${maybeRenderHead()}<h1>405 - Method Not Allowed</h1> <p>This page only supports POST requests for login.</p>`;
}, "/Users/macbook/Desktop/Astro/Astro-SSR-main/src/pages/server/auth/login.astro", void 0);

const $$file = "/Users/macbook/Desktop/Astro/Astro-SSR-main/src/pages/server/auth/login.astro";
const $$url = "/server/auth/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
