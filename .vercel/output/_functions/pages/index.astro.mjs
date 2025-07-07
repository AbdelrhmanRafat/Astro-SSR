import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, f as renderTemplate, g as renderComponent, e as renderScript } from '../chunks/astro/server_Z0VxRGOD.mjs';
import 'kleur/colors';
import 'clsx';
import { g as getCookie } from '../chunks/cookies_CCYdg1Hj.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useRef, useState, useEffect } from 'react';
import { $ as $$Layout } from '../chunks/Layout_DnlBvVy5.mjs';
import { a as getAllProducts } from '../chunks/productService_CIyYJVDL.mjs';
import { Agent, fetch } from 'undici';
export { renderers } from '../renderers.mjs';

const $$Astro$3 = createAstro();
const $$Categories = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Categories;
  const AllCategories = Astro2.props.categories;
  return renderTemplate`${maybeRenderHead()}<div class="w-11/12 py-12 mx-auto"> <div class="text-left"> <h1 class="text-2xl font-bold mb-4">Categories</h1> </div> <div class="grid grid-cols-1 gap-6 overflow-auto"> ${AllCategories.map((category) => renderTemplate`<div class="bg-white border-2 border-gray-200 text-center w-[200px]  shadow-md rounded-lg p-4"> <img${addAttribute(category.image, "src")}${addAttribute(category.name, "alt")} class="w-full object-cover rounded-lg"> <h2 class="text-lg font-bold">${category.name}</h2> </div>`)} </div> </div>`;
}, "/Users/macbook/Desktop/Astro/Astro-SSR-main/src/components/Features/Categories/categories.astro", void 0);

const CartPanel = ({ open, onClose }) => {
  const panelRef = useRef(null);
  const [shouldRender, setShouldRender] = useState(open);
  const [animateIn, setAnimateIn] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    if (open) {
      setShouldRender(true);
      requestAnimationFrame(() => setAnimateIn(true));
      const stored = localStorage.getItem("cartItems");
      if (stored) {
        setCartItems(JSON.parse(stored));
      } else {
        setCartItems([]);
      }
    } else {
      setAnimateIn(false);
      const timeout = setTimeout(() => setShouldRender(false), 500);
      return () => clearTimeout(timeout);
    }
  }, [open]);
  useEffect(() => {
    function handleClickOutside(event) {
      if (open && panelRef.current && !panelRef.current.contains(event.target)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, onClose]);
  if (!shouldRender) return null;
  return /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 z-50 flex justify-end", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: `absolute inset-0 bg-black/20 transition-opacity duration-300 ${animateIn ? "opacity-100" : "opacity-0"}`
      }
    ),
    /* @__PURE__ */ jsxs(
      "div",
      {
        ref: panelRef,
        className: `
          relative w-80 max-h-full p-6 shadow-lg bg-white text-black overflow-y-auto
          transform transition-transform duration-500 ease-in-out
          ${animateIn ? "translate-x-0" : "translate-x-full"}
          flex flex-col
        `,
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-4", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold", children: "🛒 Your Cart" }),
            /* @__PURE__ */ jsx("button", { onClick: onClose, className: "text-2xl font-bold", children: "×" })
          ] }),
          cartItems.length === 0 ? /* @__PURE__ */ jsx("p", { className: "text-center text-gray-500", children: "Your cart is empty." }) : /* @__PURE__ */ jsx("ul", { className: "flex flex-col gap-4", children: cartItems.map((item) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-4 border-b pb-2", children: [
            /* @__PURE__ */ jsx("img", { src: item.image, alt: item.title, className: "w-16 h-16 object-cover rounded" }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col flex-grow", children: [
              /* @__PURE__ */ jsx("span", { className: "font-semibold", children: item.title }),
              /* @__PURE__ */ jsxs("span", { className: "text-green-600 font-bold", children: [
                "$",
                item.price.toFixed(2)
              ] })
            ] })
          ] }, item.productId)) })
        ]
      }
    )
  ] });
};

const TTL_MINUTES = 5;
const AddToCartButton = ({
  productId,
  productTitle,
  productImage,
  productPrice
}) => {
  const [cartOpen, setCartOpen] = useState(false);
  const cleanExpiredItems = (items) => {
    const now = Date.now();
    return items.filter((item) => {
      const itemAge = now - item.timestamp;
      return itemAge < TTL_MINUTES * 60 * 1e3;
    });
  };
  const handleAddToCart = () => {
    try {
      const existingCart = JSON.parse(localStorage.getItem("cartItems") || "[]");
      const validItems = cleanExpiredItems(existingCart);
      const newItem = {
        productId,
        title: productTitle,
        image: productImage,
        price: productPrice,
        timestamp: Date.now()
        // Store time of addition
      };
      const updatedCart = [
        ...validItems.filter((item) => item.productId !== productId),
        newItem
      ];
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
      setCartOpen(true);
    } catch (err) {
      console.error("Error adding item to cart:", err);
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: handleAddToCart,
        className: "mt-4 cursor-pointer w-full bg-gradient-to-r from-main to-green-600 text-white py-2 rounded-lg shadow hover:brightness-110 transition-all duration-300",
        children: "Add to Cart"
      }
    ),
    /* @__PURE__ */ jsx(CartPanel, { open: cartOpen, onClose: () => setCartOpen(false) })
  ] });
};

const $$Astro$2 = createAstro();
const $$ProductCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ProductCard;
  const { product } = Astro2.props;
  const cookies = Astro2.request.headers.get("cookie") || "";
  getCookie(cookies, "token");
  return renderTemplate`${maybeRenderHead()}<div class="col"> <div class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col group p-4 h-[430px]"> <!-- Image with Wishlist Icon --> <div class="relative overflow-hidden rounded-xl"> <img${addAttribute(product.imageCover, "src")}${addAttribute(product.title, "alt")} class="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"> </div> <!-- Category --> <h5 class="mt-3 text-sm text-gray-500 uppercase tracking-wide"> ${product.category.name} </h5> <!-- Title --> <p class="mt-1 text-lg font-semibold text-gray-800 hover:text-main transition-colors duration-200"> <a${addAttribute("/Products/" + product._id, "href")}>${product.title}</a> </p> <!-- Filler to push content to bottom --> <div class="flex-grow"></div> <!-- Price & Rating --> <div class="flex justify-between items-center mt-4"> <h5 class="text-lg font-bold text-gray-900"> ${product.price} <span class="text-green-600 text-sm font-medium">$</span> </h5> <div class="flex items-center space-x-1"> <span class="text-yellow-500 font-bold">${product.ratingsAverage}</span> <i class="fa-solid fa-star text-yellow-400"></i> </div> </div> <!-- Add to Cart Button --> ${renderComponent($$result, "AddToCartButton", AddToCartButton, { "productId": product._id, "productTitle": product.title, "productImage": product.imageCover, "productPrice": product.price, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/macbook/Desktop/Astro/Astro-SSR-main/src/components/forms/Cart/AddToCart", "client:component-export": "default" })} </div> </div> ${renderScript($$result, "/Users/macbook/Desktop/Astro/Astro-SSR-main/src/components/Features/Products/ProductCard.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/macbook/Desktop/Astro/Astro-SSR-main/src/components/Features/Products/ProductCard.astro", void 0);

const $$Astro$1 = createAstro();
const $$AllProducts = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AllProducts;
  const { products } = Astro2.props;
  const currentPage = products.metadata.currentPage;
  const totalPages = products.metadata.numberOfPages;
  return renderTemplate`${maybeRenderHead()}<div class="w-11/12 py-12 mx-auto"> <div class="text-center"> <div class="row grid grid-cols-2 md:grid-cols-4 gap-3 py-3 overflow-auto"> ${products.data.map((product) => renderTemplate`${renderComponent($$result, "ProductCard", $$ProductCard, { "product": product })}`)} </div> <!-- Pagination info --> <div class="text-sm text-gray-600 my-2">
Page ${currentPage} of ${totalPages} </div> <!-- Pagination buttons --> <div class="flex justify-center items-center gap-3 my-3 p-2"> <!-- Previous Button --> <a${addAttribute(currentPage === 1 ? "#" : `?page=${currentPage - 1}`, "href")}${addAttribute(`btn bg-green-600 py-2 px-3 rounded text-white transition-opacity duration-200 ${currentPage === 1 ? "opacity-50 pointer-events-none cursor-not-allowed" : ""}`, "class")}>
Prev
</a> <!-- Next Button --> <a${addAttribute(currentPage === totalPages ? "#" : `?page=${currentPage + 1}`, "href")}${addAttribute(`btn bg-green-600 py-2 px-3 rounded text-white transition-opacity duration-200 ${currentPage === totalPages ? "opacity-50 pointer-events-none cursor-not-allowed" : ""}`, "class")}>
Next
</a> </div> </div> </div>`;
}, "/Users/macbook/Desktop/Astro/Astro-SSR-main/src/components/Features/Products/allProducts.astro", void 0);

const API_BASE = "https://ecommerce.routemisr.com/";
const agent = new Agent({
  connect: {
    rejectUnauthorized: false
  }
});
async function getAllCategories() {
  const res = await fetch(`${API_BASE}api/v1/categories`, {
    dispatcher: agent
  });
  return res.json();
}

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const page = parseInt(Astro2.url.searchParams.get("page") || "1");
  const products = await getAllProducts(page);
  const categories = await getAllCategories();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Categories", $$Categories, { "categories": categories.data })} ${renderComponent($$result2, "AllProducts", $$AllProducts, { "products": products })} ` })}`;
}, "/Users/macbook/Desktop/Astro/Astro-SSR-main/src/pages/index.astro", void 0);

const $$file = "/Users/macbook/Desktop/Astro/Astro-SSR-main/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
