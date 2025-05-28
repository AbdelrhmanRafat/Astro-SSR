// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
// import node from '@astrojs/node'; // Comment out or remove this line
import vercel from '@astrojs/vercel/serverless'; // Import Vercel adapter
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  vite: { plugins: [tailwindcss()], },

  // This enables SSR
  output: 'server',

  // Replace the node adapter with the Vercel adapter
  adapter: vercel({
    // Optional: Specify additional Vercel adapter options here
    // analytics: true,
  }),

  integrations: [react()],
});