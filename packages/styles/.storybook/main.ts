import { mergeConfig, defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import type { StorybookConfig } from '@storybook/react-vite';
import { resolve } from 'node:path';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx|mdx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  docs: {
    autodocs: true
  },
  async viteFinal(baseConfig) {
    return mergeConfig(baseConfig, defineConfig({
      plugins: [react()],
      resolve: {
        alias: {
          '@deweyou-ui/styles/mixins': resolve(__dirname, '../mixins.scss'),
          '@deweyou-ui/styles/reset.css': resolve(__dirname, '../src/reset.scss'),
          '@deweyou-ui/styles/tokens.css': resolve(__dirname, '../src/tokens.scss')
        }
      }
    }));
  }
};

export default config;
