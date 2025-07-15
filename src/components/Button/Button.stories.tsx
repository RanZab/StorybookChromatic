import React from 'react';
import { Button, ButtonHierarchy, ButtonState } from './Button';
import type { Meta, StoryObj } from '@storybook/react';

const hierarchies: ButtonHierarchy[] = ['primary', 'secondary', 'tertiary', 'alternative', 'alert'];
const states: ButtonState[] = ['default', 'hover', 'active', 'focused', 'pressed', 'disabled'];

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Button component matching Figma. Only the states and variants present in Figma are implemented. No loading, selected, or icon states. Sizing, color, and typography are pixel-perfect to Figma.'
      },
    },
  },
  argTypes: {
    hierarchy: {
      control: { type: 'select' },
      options: hierarchies,
      description: 'Button visual hierarchy, as defined in Figma.'
    },
    state: {
      control: { type: 'select' },
      options: states,
      description: 'Button state, as defined in Figma.'
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
    state: 'default',
    children: 'Button',
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Playground: Story = {
  args: {
    hierarchy: 'primary',
    state: 'default',
    children: 'Button',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      {hierarchies.map((hierarchy) => (
        <div key={hierarchy} style={{ display: 'flex', flexDirection: 'row', gap: 16, alignItems: 'center' }}>
          <div style={{ width: 120, color: '#f0f0f0', fontWeight: 700, fontFamily: 'Inter, sans-serif', textTransform: 'capitalize' }}>{hierarchy}</div>
          {states.map((state) => (
            <Button key={state} hierarchy={hierarchy} state={state}>
              Button
            </Button>
          ))}
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All Figma-specified button hierarchies and states, for visual regression and QA.'
      }
    }
  }
}; 