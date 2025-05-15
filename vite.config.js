import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: { https: true },
  plugins: [react()],
  base: './',  // CORRECTO: rutas relativas
  build: {
    input: {
      app: './index.html', // está bien aquí
    },
  },
  resolve: {
    alias: {
      './runtimeConfig': './runtimeConfig.browser',
    }
  }
});

