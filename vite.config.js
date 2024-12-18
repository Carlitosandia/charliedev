import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: { https: true },
  plugins: [react()],
  base: './index.html',
  build: {
    input: {
      app: './index.html', // default
    },
  },
  resolve: {
    alias: {
      './runtimeConfig': './runtimeConfig.browser',
    }
  }
});
