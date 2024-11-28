// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',  // Set this to your site base, e.g., '/my-vitepress-site/' if hosted in a subfolder
  build: {
    outDir: '.vitepress/dist',  // Ensure output directory matches Vercel's build setup
    emptyOutDir: true,  // Clean the dist folder before building
  },
  server: {
    open: true,  // Optional: Automatically open the browser on dev server startup
  },
});
