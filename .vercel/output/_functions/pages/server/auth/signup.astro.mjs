import { c as createComponent, a as createAstro } from '../../../chunks/astro/server_Z0VxRGOD.mjs';
import 'kleur/colors';
import 'clsx';
import { a as signUp } from '../../../chunks/authService_Cfxbj9cG.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
const $$Signup = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Signup;
  const request = Astro2.request;
  if (request.method === "POST") {
    const formData = await request.formData();
    const name = formData.get("name")?.toString() ?? "";
    const email = formData.get("email")?.toString() ?? "";
    const password = formData.get("password")?.toString() ?? "";
    const rePassword = formData.get("rePassword")?.toString() ?? "";
    if (password !== rePassword) {
      return new Response(
        `<h1>Registration Failed</h1><p>Passwords do not match.</p>`,
        { status: 400, headers: { "Content-Type": "text/html" } }
      );
    }
    const response = await signUp({ name, email, password, rePassword });
    const data = await response.json();
    if (data.message === "success") {
      return new Response(null, {
        status: 302,
        headers: {
          "Location": "/signin"
        }
      });
    } else {
      return new Response(
        `<h1>Registration Failed</h1><p>${data.message ?? "Error occurred during registration."}</p>`,
        { status: 400, headers: { "Content-Type": "text/html" } }
      );
    }
  }
  return new Response(
    `<h1>405 - Method Not Allowed</h1><p>This page only supports POST requests for registration.</p>`,
    { status: 405, headers: { "Content-Type": "text/html" } }
  );
}, "/Users/macbook/Desktop/Astro/Astro-SSR-main/src/pages/server/auth/signup.astro", void 0);

const $$file = "/Users/macbook/Desktop/Astro/Astro-SSR-main/src/pages/server/auth/signup.astro";
const $$url = "/server/auth/signup";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Signup,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
