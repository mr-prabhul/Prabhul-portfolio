import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base:"/Prabhul_portfolio",
  server: {
    allowedHosts: [
      '.trycloudflare.com'
    ]
  }
})
