import { defineConfig } from 'vite';

export default defineConfig({
  base: '/docs/', // Adjust if hosted on a subpath (e.g., '/docs/')
  build: {
    outDir: '.vitepress/dist',
    emptyOutDir: true,
  },
});
