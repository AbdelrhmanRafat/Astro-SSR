import { c as createComponent, a as createAstro } from '../../../chunks/astro/server_Z0VxRGOD.mjs';
import 'kleur/colors';
import 'clsx';
import { a as addProductToCart } from '../../../chunks/cart.Service_DtH7yDTm.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
const $$AddProductForm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AddProductForm;
  const request = Astro2.request;
  const cookies = Astro2.cookies;
  if (request.method === "POST") {
    const formData = await request.formData();
    const productId = formData.get("productId")?.toString() ?? "";
    const returnUrl = formData.get("returnUrl")?.toString() ?? "/";
    const token = cookies.get("token")?.value;
    if (!token) {
      return new Response("Unauthorized", { status: 401 });
    }
    if (!productId) {
      return new Response("Bad Request: Missing productId", { status: 400 });
    }
    try {
      await addProductToCart(productId, token);
      return new Response(null, {
        status: 302,
        headers: {
          Location: `${returnUrl}${returnUrl.includes("?") ? "&" : "?"}added=1`
        }
      });
    } catch (err) {
      return new Response(null, {
        status: 302,
        headers: {
          Location: `${returnUrl}${returnUrl.includes("?") ? "&" : "?"}error=${encodeURIComponent(err.message)}`
        }
      });
    }
  }
  return new Response("Method Not Allowed", {
    status: 405,
    headers: { "Allow": "POST" }
  });
}, "/Users/macbook/Desktop/Astro/Astro-SSR-main/src/pages/server/cart/add-product-form.astro", void 0);

const $$file = "/Users/macbook/Desktop/Astro/Astro-SSR-main/src/pages/server/cart/add-product-form.astro";
const $$url = "/server/cart/add-product-form";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AddProductForm,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
