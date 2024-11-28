// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/', // Adjust this if your site is hosted at a subpath, e.g., '/my-vitepress-site/'
  build: {
    outDir: '.vitepress/dist', // The folder where VitePress will output the static files
    emptyOutDir: true, // Clean the dist folder before building
  },
  server: {
    open: true, // Automatically open the preview in the browser
  },
});
