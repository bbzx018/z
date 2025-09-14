import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Make built assets use relative paths so opening dist/index.html works better
  base: './',
})
