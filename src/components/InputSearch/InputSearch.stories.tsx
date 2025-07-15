import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { InputSearch, InputSearchProps } from './InputSearch';

const meta: Meta<InputSearchProps> = {
  title: 'Components/InputSearch',
  component: InputSearch,
  parameters: {
    backgrounds: { default: 'dark', values: [{ name: 'dark', value: '#181818' }] },
  },
};
export default meta;

type Story = StoryObj<InputSearchProps>;

export const Default: Story = {
  render: (args: InputSearchProps) => {
    const [value, setValue] = useState('');
    return <InputSearch {...args} value={value} onChange={e => setValue(e.target.value)} />;
  },
  args: {
    placeholder: 'Search...',
  },
};

export const Disabled: Story = {
  render: (args: InputSearchProps) => <InputSearch {...args} disabled />,
  args: {
    placeholder: 'Search...',
  },
};

export const Error: Story = {
  render: (args: InputSearchProps) => <InputSearch {...args} error />,
  args: {
    placeholder: 'Search...',
  },
}; 