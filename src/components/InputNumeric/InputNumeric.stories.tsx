import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { InputNumeric, InputNumericProps } from './InputNumeric';

const meta: Meta<InputNumericProps> = {
  title: 'Components/InputNumeric',
  component: InputNumeric,
  parameters: {
    backgrounds: { default: 'dark', values: [{ name: 'dark', value: '#181818' }] },
  },
};
export default meta;

type Story = StoryObj<InputNumericProps>;

export const Default: Story = {
  render: (args: InputNumericProps) => {
    const [value, setValue] = useState('');
    return <InputNumeric {...args} value={value} onChange={e => setValue(e.target.value)} min={0} max={100} step={1} />;
  },
  args: {
    placeholder: 'Enter a number',
  },
};

export const Disabled: Story = {
  render: (args: InputNumericProps) => <InputNumeric {...args} disabled min={0} max={100} step={1} />,
  args: {
    placeholder: 'Enter a number',
  },
};

export const Error: Story = {
  render: (args: InputNumericProps) => <InputNumeric {...args} error min={0} max={100} step={1} />,
  args: {
    placeholder: 'Enter a number',
  },
}; 