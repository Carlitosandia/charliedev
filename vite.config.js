import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: false, // Desactiva la minificación
  },
  base: '/', // Asegura que las rutas sean desde la raíz
});
