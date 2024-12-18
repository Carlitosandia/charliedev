import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Asegura rutas desde la raíz
  build: {
    outDir: 'dist', // Salida del build
  },
});
