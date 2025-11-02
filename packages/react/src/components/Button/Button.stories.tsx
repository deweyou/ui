import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@deweyou-ui/react';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Primary button',
  },
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Solid: Story = {
  args: {
    variant: 'solid',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline button',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost button',
  },
};

export const Sizes: Story = {
  render: args => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Button {...args} size="sm">
        Small
      </Button>
      <Button {...args} size="md">
        Medium
      </Button>
      <Button {...args} size="lg">
        Large
      </Button>
    </div>
  ),
  args: {
    children: undefined,
  },
};
