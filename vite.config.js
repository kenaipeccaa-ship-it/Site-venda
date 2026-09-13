import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // `base: './'` deixa o build pronto para ser aberto a partir de qualquer
  // subdiretório (útil para hospedar a demonstração em pastas/preview links).
  base: './',
})
