import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@deweyou-ui/react';

const meta: Meta<typeof Button> = {
  title: 'DeweyUI/Button',
  component: Button,
  args: {
    children: 'Click me',
    variant: 'primary',
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

