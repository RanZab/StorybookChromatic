import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { InputDropdown, InputDropdownProps } from './InputDropdown';

const meta: Meta<InputDropdownProps> = {
  title: 'Components/InputDropdown',
  component: InputDropdown,
  parameters: {
    backgrounds: { default: 'dark', values: [{ name: 'dark', value: '#181818' }] },
  },
};
export default meta;

type Story = StoryObj<InputDropdownProps>;

export const Default: Story = {
  render: (args: InputDropdownProps) => {
    const [selected, setSelected] = useState<string | null>(null);
    return <InputDropdown {...args} value={selected || ''} onSelectOption={setSelected} options={['Option A', 'Option B', 'Option C']} />;
  },
  args: {
    placeholder: 'Select an option',
  },
};

export const Disabled: Story = {
  render: (args: InputDropdownProps) => <InputDropdown {...args} disabled options={['Option A', 'Option B', 'Option C']} />,
  args: {
    placeholder: 'Select an option',
  },
};

export const Error: Story = {
  render: (args: InputDropdownProps) => <InputDropdown {...args} error options={['Option A', 'Option B', 'Option C']} />,
  args: {
    placeholder: 'Select an option',
  },
}; 