import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { InputText, InputTextProps } from './InputText';

const meta: Meta<InputTextProps> = {
  title: 'Components/InputText',
  component: InputText,
  parameters: {
    backgrounds: { default: 'dark', values: [{ name: 'dark', value: '#181818' }] },
  },
};
export default meta;

type Story = StoryObj<InputTextProps>;

export const Default: Story = {
  render: (args) => <InputText {...args} />,
  args: {
    placeholder: 'New Add a name',
  },
};

export const Hover: Story = {
  render: (args) => <InputText {...args} state="hover" />,
  args: {
    placeholder: 'New Add a name',
  },
};

export const Selected: Story = {
  render: (args) => {
    const [value, setValue] = useState('');
    return (
      <InputText
        {...args}
        value={value}
        onChange={e => setValue(e.target.value)}
        state="selected"
      />
    );
  },
  args: {
    placeholder: 'New Add a name',
  },
};

export const SelectedFilled: Story = {
  render: (args) => {
    const [value, setValue] = useState('Filled value');
    return (
      <InputText
        {...args}
        value={value}
        onChange={e => setValue(e.target.value)}
        state="selectedFilled"
      />
    );
  },
  args: {
    placeholder: 'New Add a name',
  },
};

export const Filled: Story = {
  render: (args) => {
    const [value, setValue] = useState('Filled value');
    return (
      <InputText
        {...args}
        value={value}
        onChange={e => setValue(e.target.value)}
        state="filled"
      />
    );
  },
  args: {
    placeholder: 'New Add a name',
  },
};

export const Disabled: Story = {
  render: (args) => <InputText {...args} disabled />,
  args: {
    placeholder: 'New Add a name',
  },
};

export const Error: Story = {
  render: (args) => <InputText {...args} error />,
  args: {
    placeholder: 'New Add a name',
  },
}; 