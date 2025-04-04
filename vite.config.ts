import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@api': '/src/api',
      '@lib': '/src/lib',
      '@hooks': '/src/hooks',
      '@pages': '/src/pages',
      '@utils': '/src/utils',
      '@components': '/src/components',
      '@assets': '/src/assets',
    },
  }
})
