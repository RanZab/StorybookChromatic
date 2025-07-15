import React from 'react';
import { Button, ButtonHierarchy } from './Button';
import type { Meta, StoryObj } from '@storybook/react';

const hierarchies: ButtonHierarchy[] = ['primary', 'secondary', 'tertiary', 'alternative', 'alert'];

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Interactive Button component matching Figma. All states (hover, focus, active, disabled) are handled by CSS pseudo-classes. Only the hierarchies and variants present in Figma are implemented.'
      },
    },
  },
  argTypes: {
    hierarchy: {
      control: { type: 'select' },
      options: hierarchies,
      description: 'Button visual hierarchy, as defined in Figma.'
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disables the button.'
    },
    children: {
      control: { type: 'text' },
      description: 'Button label text.'
    },
    onClick: { action: 'clicked' },
    className: { table: { disable: true } },
  },
  args: {
    hierarchy: 'primary',
    disabled: false,
    children: 'Button',
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Playground: Story = {
  args: {
    hierarchy: 'primary',
    disabled: false,
    children: 'Button',
  },
}; 