import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: './src/index.css',
        reset: './src/reset.css',
      },
      output: {
        assetFileNames: '[name].css',
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
      },
      plugins: [],
    },
  },
});
