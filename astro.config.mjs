// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import node from '@astrojs/node';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  vite: { plugins: [tailwindcss()], },

  // This enables SSR
  output: 'server',

  adapter: node({
    mode: 'standalone' // or 'middleware'
  }),

  integrations: [react()],
});