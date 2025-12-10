import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: './src/index.scss',
        reset: './src/reset.scss',
        tokens: './src/tokens/index.scss',
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
