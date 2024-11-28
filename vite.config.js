import { defineConfig } from 'vite'
import { vitePress } from 'vitepress'

export default defineConfig({
  plugins: [vitePress()],
  build: {
    outDir: 'dist', // This is important for Vercel
  }
})
