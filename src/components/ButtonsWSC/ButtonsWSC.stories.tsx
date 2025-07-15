import React from 'react';
import { Button, ButtonHierarchy, ButtonState } from '../Button/Button';
import type { Meta, StoryObj } from '@storybook/react';

const hierarchies: ButtonHierarchy[] = ['primary', 'secondary', 'tertiary', 'alternative', 'alert'];
const states: ButtonState[] = ['default', 'hover', 'active', 'focused', 'pressed', 'disabled'];

const meta: Meta = {
  title: 'ButtonsWSC/AllVariants',
  parameters: {
    docs: {
      description: {
        component: 'Test grid of all Figma button types and states using the Button component.'
      },
    },
  },
};
export default meta;

type Story = StoryObj;

export const AllButtonsWSC: Story = {
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
}; 