import { defineConfig } from 'vite';

export default defineConfig({
  base: '/', // Change this to the subpath if your app is not at the root
  build: {
    outDir: '.vitepress/dist', // Ensure this matches your build command output directory
    emptyOutDir: true,
  },
  server: {
    open: true,
  },
});
