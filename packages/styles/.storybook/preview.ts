import type { Preview } from '@storybook/react';
import '@deweyou-ui/styles/reset.css';
import '@deweyou-ui/styles/tokens.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
};

export default preview;
