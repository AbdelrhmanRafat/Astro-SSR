// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import node from '@astrojs/node';
import vercel from '@astrojs/vercel/serverless'; // Import Vercel adapter

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  vite: { plugins: [tailwindcss()], },

  // This enables SSR
  output: 'server',
  
  adapter: vercel({
    // Optional: Specify additional Vercel adapter options here
    // analytics: true,
  }),


  integrations: [react()],
});