import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
  ],
  server: {
    // Windows/WSL/OneDrive often miss native filesystem events, breaking HMR.
    // Fall back to polling there so live reload works; leave macOS/Linux native.
    watch: process.platform === 'win32' ? { usePolling: true, interval: 100 } : {},
  },
})
