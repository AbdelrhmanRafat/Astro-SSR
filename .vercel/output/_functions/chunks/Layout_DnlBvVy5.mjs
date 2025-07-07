import { c as createComponent, a as createAstro, b as addAttribute, r as renderHead, d as renderSlot, e as renderScript, f as renderTemplate } from './astro/server_Z0VxRGOD.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="ar" dir="rtl" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Astro Basics</title>${renderHead()}</head> <body data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])}  ${renderScript($$result, "/Users/macbook/Desktop/Astro/Astro-SSR-main/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")}</body></html>`;
}, "/Users/macbook/Desktop/Astro/Astro-SSR-main/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
