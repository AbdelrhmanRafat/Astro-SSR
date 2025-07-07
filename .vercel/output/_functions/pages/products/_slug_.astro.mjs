import { c as createComponent, a as createAstro, g as renderComponent, f as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_Z0VxRGOD.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_DnlBvVy5.mjs';
import { g as getProductById } from '../../chunks/productService_CIyYJVDL.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
export { renderers } from '../../renderers.mjs';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const transitionInterval = 3e3;
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  useEffect(() => {
    if (images && images.length > 1) {
      const timer = setInterval(() => {
        goToNext();
      }, transitionInterval);
      return () => clearInterval(timer);
    }
    return () => {
    };
  }, [images, currentIndex, transitionInterval]);
  if (!images || images.length === 0) {
    return /* @__PURE__ */ jsx("div", { className: "text-center text-gray-500", children: "No images available." });
  }
  return /* @__PURE__ */ jsxs("div", { className: "relative w-full overflow-hidden rounded-lg shadow-xl", children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        src: images[currentIndex],
        alt: "Product Image",
        className: "w-full h-96 object-cover transition-opacity duration-300 ease-in-out opacity-100"
      },
      currentIndex
    ),
    images.length > 1 && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: goToPrevious,
          className: "absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-3 rounded-full opacity-80 hover:opacity-100 transition-all duration-300 z-10",
          "aria-label": "Previous image",
          children: "❮"
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: goToNext,
          className: "absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-3 rounded-full opacity-80 hover:opacity-100 transition-all duration-300 z-10",
          "aria-label": "Next image",
          children: "❯"
        }
      )
    ] }),
    images.length > 1 && /* @__PURE__ */ jsx("div", { className: "absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10", children: images.map((_, index) => /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => setCurrentIndex(index),
        className: `w-3 h-3 rounded-full ${index === currentIndex ? "bg-white" : "bg-gray-500 bg-opacity-50"} transition-colors duration-300`,
        "aria-label": `Go to image ${index + 1}`
      },
      index
    )) })
  ] });
};

const $$Astro = createAstro();
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  let product = null;
  let errorMessage = null;
  if (slug) {
    try {
      product = await getProductById(slug);
    } catch (error) {
      console.error("Error fetching product:", error);
      errorMessage = error.message || "Failed to load product details.";
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": product ? product.data.title : "Product Details" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto p-4"> ${product ? renderTemplate`<div class="grid grid-cols-1 md:grid-cols-2 gap-8">  <div> ${product.data.images && product.data.images.length > 0 ? renderTemplate`${renderComponent($$result2, "ImageCarousel", ImageCarousel, { "images": product.data.images, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/macbook/Desktop/Astro/Astro-SSR-main/src/components/ui/ImageCarousel", "client:component-export": "default" })}` : renderTemplate`<img${addAttribute(product.data.imageCover, "src")}${addAttribute(product.data.title, "alt")} class="w-full h-auto rounded-lg shadow-lg">`} </div>  <div> <h1 class="text-3xl font-bold text-gray-800 mb-2">${product.data.title}</h1> <p class="text-xl text-main font-semibold mb-4">${product.data.price} EGP</p> <div class="flex items-center mb-4"> <span class="text-yellow-500 font-bold mr-2">${product.data.ratingsAverage}</span>  <span class="text-gray-600 text-sm">(${product.data.ratingsQuantity} ratings)</span> </div> <h2 class="text-lg font-semibold text-gray-700 mb-2">Description</h2> <p class="text-gray-600 leading-relaxed">${product.data.description}</p>       </div> </div>` : errorMessage ? renderTemplate`<div class="text-center text-red-600 text-lg">${errorMessage}</div>` : renderTemplate`<div class="text-center text-gray-600 text-lg">Loading product details...</div>`} </div> ` })}`;
}, "/Users/macbook/Desktop/Astro/Astro-SSR-main/src/pages/Products/[slug].astro", void 0);

const $$file = "/Users/macbook/Desktop/Astro/Astro-SSR-main/src/pages/Products/[slug].astro";
const $$url = "/Products/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
