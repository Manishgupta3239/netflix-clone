import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      // Proxy all requests starting with '/api' to the target backend server
      '/netflix': {
        target: 'http://localhost:3000/',
        changeOrigin: true,  // Changes the origin of the host header to the target URL
      },
    },
  },
  plugins: [react()],
})
