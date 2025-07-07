import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, f as renderTemplate, g as renderComponent, F as Fragment, e as renderScript } from '../chunks/astro/server_Z0VxRGOD.mjs';
import 'kleur/colors';
/* empty css                                 */
import { $ as $$Layout } from '../chunks/Layout_DnlBvVy5.mjs';
import { g as getLoggedUserCart } from '../chunks/cart.Service_DtH7yDTm.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import 'react';
import 'clsx';
export { renderers } from '../renderers.mjs';

const CartQuantityControls = ({ productId, count }) => {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mt-3 sm:mt-0", children: [
    /* @__PURE__ */ jsxs("form", { method: "POST", action: "/server/cart/update-qty-form", children: [
      /* @__PURE__ */ jsx("input", { type: "hidden", name: "productId", value: productId }),
      /* @__PURE__ */ jsx("input", { type: "hidden", name: "count", value: count + 1 }),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          className: "qty-plus cursor-pointer bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-lg",
          children: "+"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("span", { className: "text-lg", id: `count-${productId}`, children: count }),
    /* @__PURE__ */ jsxs("form", { method: "POST", action: "/server/cart/update-qty-form", children: [
      /* @__PURE__ */ jsx("input", { type: "hidden", name: "productId", value: productId }),
      /* @__PURE__ */ jsx("input", { type: "hidden", name: "count", value: count > 1 ? count - 1 : 1 }),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          className: "qty-minus cursor-pointer bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-lg disabled:opacity-50",
          disabled: count <= 1,
          children: "-"
        }
      )
    ] })
  ] });
};

const $$Astro$3 = createAstro();
const $$RemoveFromCartForm = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$RemoveFromCartForm;
  const { productId } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<form method="POST" action="/server/cart/delete-fromCart-form"> <input type="hidden" name="productId"${addAttribute(productId, "value")}> <button type="submit" class="cursor-pointer text-red-600 mt-2 text-sm font-medium flex items-center gap-1 hover:underline">
Remove
</button> </form>`;
}, "/Users/macbook/Desktop/Astro/Astro-SSR-main/src/components/forms/Cart/RemoveFromCartForm.astro", void 0);

const $$Astro$2 = createAstro();
const $$CartItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CartItem;
  const { product } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="grid grid-cols-12 gap-4 items-center">  <div class="col-span-2 sm:col-span-1"> <img${addAttribute(product.product.imageCover, "src")}${addAttribute(product.product.title, "alt")} class="w-full rounded-md"> </div>  <div class="col-span-10 sm:col-span-11"> <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center">  <div> <h4 class="text-lg font-semibold text-gray-800"> ${product.product.title} </h4> <p class="text-main text-sm mt-1">
Price: ${product.price} EGP
</p> ${renderComponent($$result, "RemoveFromCartForm", $$RemoveFromCartForm, { "productId": product.product._id })} </div>  ${renderComponent($$result, "CartQuantityControls", CartQuantityControls, { "productId": product.product._id, "count": product.count })} </div> </div> </div>`;
}, "/Users/macbook/Desktop/Astro/Astro-SSR-main/src/components/Features/Cart/CartItem.astro", void 0);

const $$Astro$1 = createAstro();
const $$Cart = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Cart;
  const { cart, products } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-gray-100 p-6 rounded-2xl shadow-md"> <h2 class="text-2xl font-bold mb-2 text-gray-800">Cart</h2> <p class="text-main text-lg mb-4">
Total Price: <span class="font-semibold">${cart.totalCartPrice} EGP</span> </p>  <div class="space-y-6"> ${products.map((product, index) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "CartItem", $$CartItem, { "product": product })} ${index !== products.length - 1 && renderTemplate`<div class="col-span-12 border-t pt-4"></div>`}` })}`)} </div> </div>  <a${addAttribute(`/address/${cart._id}`, "href")} class="block mt-6 text-center bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition">
Place Order
</a>`;
}, "/Users/macbook/Desktop/Astro/Astro-SSR-main/src/components/Features/Cart/Cart.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  let cart = null;
  let products = [];
  let bGetCartItems = false;
  const token = Astro2.cookies.get("token")?.value;
  if (token) {
    try {
      const cartData = await getLoggedUserCart(token);
      cart = cartData.data;
      products = cartData.data.products || [];
      bGetCartItems = true;
    } catch (err) {
      bGetCartItems = false;
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-6 py-12"> ${bGetCartItems ? renderTemplate`${renderComponent($$result2, "Cart", $$Cart, { "cart": cart, "products": products })}` : renderTemplate`<div class="flex flex-col items-center justify-center text-center gap-6 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-3xl shadow-md p-10"> <div class="bg-green-100 dark:bg-green-900 p-4 rounded-full"> <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-green-600 dark:text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3h2l.4 2M7 13h14l-1.5 7.5a1 1 0 01-1 .5H7a1 1 0 01-1-.5L3 6h18M16 5a4 4 0 00-8 0"></path> </svg> </div> <h2 class="text-3xl font-bold text-gray-800 dark:text-white">Your cart is empty</h2> <p class="text-gray-500 dark:text-gray-400 max-w-md">You haven’t added anything to your cart yet. Sign in to view saved items or start shopping now.</p> <a href="/signin" class="inline-block px-6 py-3 bg-green-600 text-white font-medium rounded-lg shadow hover:bg-green-700 transition">
Sign In to Your Account
</a> </div>`} </div> ` })} ${renderScript($$result, "/Users/macbook/Desktop/Astro/Astro-SSR-main/src/pages/cart/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/macbook/Desktop/Astro/Astro-SSR-main/src/pages/cart/index.astro", void 0);

const $$file = "/Users/macbook/Desktop/Astro/Astro-SSR-main/src/pages/cart/index.astro";
const $$url = "/cart";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
