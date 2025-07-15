import React from 'react';
import { ButtonSC, ButtonHierarchy } from './ButtonSC';
import type { Meta, StoryObj } from '@storybook/react';

const hierarchies: ButtonHierarchy[] = ['primary', 'secondary', 'tertiary', 'alternative', 'alert'];

const meta: Meta<typeof ButtonSC> = {
  title: 'Components/ButtonSC',
  component: ButtonSC,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Styled-components Button component matching Figma. All states (hover, focus, active, disabled) are handled by CSS-in-JS. Only the hierarchies and variants present in Figma are implemented.'
      },
    },
    backgrounds: {
      default: 'neutral900',
      values: [
        { name: 'neutral900', value: '#010101' },
        { name: 'white', value: '#fff' },
      ],
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
  },
  args: {
    hierarchy: 'primary',
    disabled: false,
    children: 'Button',
  },
};
export default meta;

type Story = StoryObj<typeof ButtonSC>;

export const Playground: Story = {
  args: {
    hierarchy: 'primary',
    disabled: false,
    children: 'Button',
  },
};

// Showcase all ButtonSC variants side by side
export const AllVariants: StoryObj = {
  render: (args: { disabled?: boolean }) => (
    <div style={{ background: '#010101', padding: 32, minHeight: 120, display: 'flex', gap: 32, alignItems: 'center' }}>
      {hierarchies.map(hierarchy => (
        <div key={hierarchy} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <ButtonSC hierarchy={hierarchy} disabled={args.disabled}>
            {hierarchy.charAt(0).toUpperCase() + hierarchy.slice(1)}
          </ButtonSC>
        </div>
      ))}
    </div>
  ),
  args: {
    disabled: false,
  },
  argTypes: {
    disabled: { control: 'boolean' },
  },
}; 