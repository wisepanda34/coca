import { defineConfig } from 'vite'
import eslintPlugin from 'vite-plugin-eslint2'

export default defineConfig({
  plugins: [eslintPlugin()]
})
