import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      // Proxy all requests starting with '/api' to the target backend server
      '/netflix': {
        target: 'https://netflix-clone-6lp0.onrender.com',
        changeOrigin: true,  // Changes the origin of the host header to the target URL
      },
    },
  },
  plugins: [react()],
})
