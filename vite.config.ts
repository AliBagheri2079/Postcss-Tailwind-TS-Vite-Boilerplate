// vite.config.ts
import { resolve } from 'path'
import { defineConfig } from 'vite'

// @see https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    //* create alias src folder path with `@` 
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  }
})
