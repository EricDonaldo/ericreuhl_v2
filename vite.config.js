import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/ericreuhl_v2/',
  plugins: [
    tailwindcss(),
  ],
})