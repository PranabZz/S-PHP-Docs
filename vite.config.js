import { defineConfig } from 'vite';

export default defineConfig({
  base: '/', // Adjust for sub-path if needed
  build: {
    outDir: '.vitepress/dist', // Vercel expects the built static files here
    emptyOutDir: true, // Clean the dist folder before building
    assetsDir: 'assets', // Specify assets directory if needed
  },
  server: {
    open: true, // Automatically open the preview in the browser (optional for production)
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
});
