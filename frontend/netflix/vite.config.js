import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "./", // Add this line to fix asset paths
  server: {
    proxy: {
      '/netflix': {
        target: 'https://netflix-clone-6lp0.onrender.com',
        changeOrigin: true,
      },
    },
  },
  plugins: [react()],
})
