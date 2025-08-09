import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// If your repo name is not the root (i.e. username.github.io), set base to '/<repo-name>/' before deploying.
// Example: base: '/portfolio/'
export default defineConfig({
  plugins: [react()],
  // base: '/<repo-name>/'
})
