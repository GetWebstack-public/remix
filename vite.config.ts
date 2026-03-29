import { vitePlugin as remix } from '@remix-run/dev'
import { defineConfig } from 'vite'

export default defineConfig({
  server: { allowedHosts: true },
  plugins: [remix()],
})
