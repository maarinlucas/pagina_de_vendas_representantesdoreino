import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // pasta onde o build será gerado
    sourcemap: true, // Gera mapa de fontes, útil para debug
    minify: 'esbuild', // Usando o esbuild para minificação
  },
})
