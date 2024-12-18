import { defineConfig } from 'vite';

export default defineConfig({
  base: '/', // Adjust if hosted on a subpath (e.g., '/docs/')
  build: {
    outDir: '.vitepress/dist',
    emptyOutDir: true,
  },
});
