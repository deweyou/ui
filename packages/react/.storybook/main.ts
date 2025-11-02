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
          '@deweyou-ui/react': resolve(__dirname, '../src/index.ts'),
          '@deweyou-ui/styles/mixins': resolve(__dirname, '../../styles/mixins.scss'),
          '@deweyou-ui/styles/reset.css': resolve(__dirname, '../../styles/src/reset.scss'),
          '@deweyou-ui/styles/tokens.css': resolve(__dirname, '../../styles/src/tokens.scss')
        }
      }
    }));
  }
};

export default config;
