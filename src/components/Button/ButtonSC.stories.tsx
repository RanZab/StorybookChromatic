import React from 'react';
import ButtonSC, { ButtonHierarchy } from './ButtonSC';
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
          'ButtonSC component matching Figma. All states (hover, focus, active, disabled) are handled by CSS-in-JS. Only the hierarchies and variants present in Figma are implemented.'
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
    className: { table: { disable: true } },
  },
  args: {
    hierarchy: 'primary',
    disabled: false,
    children: 'ButtonSC',
  },
};
export default meta;

type Story = StoryObj<typeof ButtonSC>;

export const Playground: Story = {
  args: {
    hierarchy: 'primary',
    disabled: false,
    children: 'ButtonSC',
  },
};

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ background: '#010101', padding: 32, minHeight: 120, display: 'flex', gap: 32, alignItems: 'center' }}>
      {hierarchies.map(hierarchy => (
        <ButtonSC key={hierarchy} hierarchy={hierarchy} disabled={args.disabled}>
          {args.children || hierarchy.charAt(0).toUpperCase() + hierarchy.slice(1)}
        </ButtonSC>
      ))}
    </div>
  ),
  args: {
    disabled: false,
    children: 'ButtonSC',
  },
  argTypes: {
    disabled: { control: 'boolean' },
    children: { control: 'text' },
  },
  parameters: {
    docs: {
      description: {
        story: 'All Figma-specified ButtonSC hierarchies for visual regression and QA.'
      }
    }
  }
}; 