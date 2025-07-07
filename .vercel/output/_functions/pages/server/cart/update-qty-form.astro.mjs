import { c as createComponent, a as createAstro, m as maybeRenderHead, f as renderTemplate } from '../../../chunks/astro/server_Z0VxRGOD.mjs';
import 'kleur/colors';
import 'clsx';
import { u as updateProductQty } from '../../../chunks/cart.Service_DtH7yDTm.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
const $$UpdateQtyForm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$UpdateQtyForm;
  const request = Astro2.request;
  const cookies = Astro2.cookies;
  if (request.method === "POST") {
    const formData = await request.formData();
    const productId = formData.get("productId")?.toString() ?? "";
    const count = parseInt(formData.get("count")?.toString() ?? "1");
    const token = cookies.get("token")?.value;
    if (!token) {
      return new Response("Unauthorized", { status: 401 });
    }
    try {
      await updateProductQty(productId, count, token);
      return new Response(null, {
        status: 302,
        headers: {
          Location: "/cart"
        }
      });
    } catch (err) {
      return new Response(`<h1>Update Failed</h1><p>${err.message}</p>`, {
        status: 500,
        headers: { "Content-Type": "text/html" }
      });
    }
  }
  return renderTemplate`<!-- Display error message for non-POST requests -->${maybeRenderHead()}<h1>405 - Method Not Allowed</h1> <p>This page only supports POST requests.</p>`;
}, "/Users/macbook/Desktop/Astro/Astro-SSR-main/src/pages/server/cart/update-qty-form.astro", void 0);

const $$file = "/Users/macbook/Desktop/Astro/Astro-SSR-main/src/pages/server/cart/update-qty-form.astro";
const $$url = "/server/cart/update-qty-form";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$UpdateQtyForm,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
