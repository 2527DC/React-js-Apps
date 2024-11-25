import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/React-js/VG17%20SERVICES/',  // Set the base path for GitHub Pages
  plugins: [react()],
})
