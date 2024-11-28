// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',  // Adjust if your site is hosted at a subpath
  build: {
    outDir: '.vitepress/dist',  // The directory VitePress outputs to
    emptyOutDir: true,          // Clears the dist folder before build
  },
  server: {
    open: true,  // Opens the site automatically after build (optional)
  },
});
