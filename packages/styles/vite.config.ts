import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  build: {
    outDir: 'lib',
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'src/index.css'),
        light: resolve(__dirname, 'src/light.css'),
        dark: resolve(__dirname, 'src/dark.css'),
        reset: resolve(__dirname, 'src/reset.css'),
      },
      output: {
        assetFileNames: '[name].[ext]',
      },
    },
  },
})
