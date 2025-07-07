import { c as createComponent, m as maybeRenderHead, f as renderTemplate, g as renderComponent } from '../chunks/astro/server_Z0VxRGOD.mjs';
import 'kleur/colors';
import 'clsx';
import { g as getTranslation } from '../chunks/translations_DHSzEai8.mjs';
import { $ as $$Layout } from '../chunks/Layout_DnlBvVy5.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$RegisterForm = createComponent(($$result, $$props, $$slots) => {
  const lang = "en";
  return renderTemplate`${maybeRenderHead()}<form method="POST" action="server/auth/signup"> <!-- Full Name Field --> <div class="mb-4"> <label class="block text-sm font-medium text-gray-700 mb-1" for="name" data-translate="auth.fullName"> ${getTranslation("auth.fullName", lang)} </label> <input type="text" name="name" id="name" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none" placeholder="John Doe" required> </div> <!-- Email Field --> <div class="mb-4"> <label class="block text-sm font-medium text-gray-700 mb-1" for="email" data-translate="auth.email"> ${getTranslation("auth.email", lang)} </label> <input type="email" name="email" id="email" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none" placeholder="you@example.com" required> </div> <!-- Password Field --> <div class="mb-4"> <label class="block text-sm font-medium text-gray-700 mb-1" for="password" data-translate="auth.password"> ${getTranslation("auth.password", lang)} </label> <input type="password" name="password" id="password" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none" placeholder="••••••••" required> </div> <!-- Confirm Password Field --> <div class="mb-6"> <label class="block text-sm font-medium text-gray-700 mb-1" for="rePassword" data-translate="auth.confirmPassword"> ${getTranslation("auth.confirmPassword", lang)} </label> <input type="password" name="rePassword" id="rePassword" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none" placeholder="••••••••" required> </div> <!-- Submit Button --> <button type="submit" class="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 rounded-lg transition-all duration-200" data-translate="auth.register"> ${getTranslation("auth.register", lang)} </button> </form>`;
}, "/Users/macbook/Desktop/Astro/Astro-SSR-main/src/components/forms/auth/RegisterForm.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-200 px-4"> <div class="bg-white p-8 sm:p-10 rounded-2xl shadow-xl w-full max-w-md"> <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center">Create an Account</h2> ${renderComponent($$result2, "RegisterForm", $$RegisterForm, {})} <p class="text-sm text-center text-gray-500 mt-6">
Already have an account?
<a href="/signin" class="text-green-600 hover:underline font-medium">Sign In</a> </p> </div> </div> ` })}`;
}, "/Users/macbook/Desktop/Astro/Astro-SSR-main/src/pages/signup/index.astro", void 0);

const $$file = "/Users/macbook/Desktop/Astro/Astro-SSR-main/src/pages/signup/index.astro";
const $$url = "/signup";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
