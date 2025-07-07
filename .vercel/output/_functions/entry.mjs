import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_L6DWpxrS.mjs';
import { manifest } from './manifest_BgeRhGgR.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/cart.astro.mjs');
const _page2 = () => import('./pages/products/_slug_.astro.mjs');
const _page3 = () => import('./pages/server/auth/login.astro.mjs');
const _page4 = () => import('./pages/server/auth/logout.astro.mjs');
const _page5 = () => import('./pages/server/auth/signup.astro.mjs');
const _page6 = () => import('./pages/server/cart/add-product-form.astro.mjs');
const _page7 = () => import('./pages/server/cart/delete-fromcart-form.astro.mjs');
const _page8 = () => import('./pages/server/cart/update-qty-form.astro.mjs');
const _page9 = () => import('./pages/shimmerloading.astro.mjs');
const _page10 = () => import('./pages/signin.astro.mjs');
const _page11 = () => import('./pages/signup.astro.mjs');
const _page12 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/cart/index.astro", _page1],
    ["src/pages/Products/[slug].astro", _page2],
    ["src/pages/server/auth/login.astro", _page3],
    ["src/pages/server/auth/logout.astro", _page4],
    ["src/pages/server/auth/signup.astro", _page5],
    ["src/pages/server/cart/add-product-form.astro", _page6],
    ["src/pages/server/cart/delete-fromCart-form.astro", _page7],
    ["src/pages/server/cart/update-qty-form.astro", _page8],
    ["src/pages/ShimmerLoading/index.astro", _page9],
    ["src/pages/signin/index.astro", _page10],
    ["src/pages/signup/index.astro", _page11],
    ["src/pages/index.astro", _page12]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "bdda0896-a2e5-4af6-b0b2-91ddc23d68e9",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
