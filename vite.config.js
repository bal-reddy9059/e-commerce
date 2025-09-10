import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Deploy1/',   // ✅ important for assets & routes
  plugins: [react()],
})
