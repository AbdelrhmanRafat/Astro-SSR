// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import vercel from '@astrojs/vercel'; // Import Vercel adapter
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  vite: { plugins: [tailwindcss()], },

  // This enables SSR
  output: 'server',
  
  adapter: vercel({}),


  integrations: [react()],
});