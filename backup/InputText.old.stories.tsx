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
  render: (args: InputTextProps) => <InputText {...args} />,
  args: {
    placeholder: 'New Add a name',
  },
};

export const Hover: Story = {
  render: (args: InputTextProps) => <InputText {...args} state="hover" />,
  args: {
    placeholder: 'New Add a name',
  },
};

export const Selected: Story = {
  render: (args: InputTextProps) => {
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
  render: (args: InputTextProps) => {
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
  render: (args: InputTextProps) => {
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
  render: (args: InputTextProps) => <InputText {...args} disabled />,
  args: {
    placeholder: 'New Add a name',
  },
};

export const Error: Story = {
  render: (args: InputTextProps) => <InputText {...args} error />,
  args: {
    placeholder: 'New Add a name',
  },
};

// --- SEARCH VARIANT STORIES ---
export const Search: Story = {
  render: (args: InputTextProps) => {
    const [value, setValue] = useState('');
    return (
      <InputText
        {...args}
        variant="search"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    );
  },
  args: {
    placeholder: 'Search...',
  },
};

export const SearchDisabled: Story = {
  render: (args: InputTextProps) => <InputText {...args} variant="search" disabled />,
  args: {
    placeholder: 'Search...',
  },
};

export const SearchError: Story = {
  render: (args: InputTextProps) => <InputText {...args} variant="search" error />,
  args: {
    placeholder: 'Search...',
  },
};

// --- DROPDOWN VARIANT STORIES ---
export const Dropdown: Story = {
  render: (args: InputTextProps) => {
    const [selected, setSelected] = useState<string | null>(null);
    return (
      <InputText
        {...args}
        variant="dropdown"
        options={['Option A', 'Option B', 'Option C']}
        value={selected || ''}
        onSelectOption={setSelected}
      />
    );
  },
  args: {
    placeholder: 'Select an option',
  },
};

export const DropdownDisabled: Story = {
  render: (args: InputTextProps) => <InputText {...args} variant="dropdown" options={['Option A', 'Option B', 'Option C']} disabled />,
  args: {
    placeholder: 'Select an option',
  },
};

export const DropdownError: Story = {
  render: (args: InputTextProps) => <InputText {...args} variant="dropdown" options={['Option A', 'Option B', 'Option C']} error />,
  args: {
    placeholder: 'Select an option',
  },
};

// --- NUMERIC VARIANT STORIES ---
export const Numeric: Story = {
  render: (args: InputTextProps) => {
    const [value, setValue] = useState('');
    return (
      <InputText
        {...args}
        variant="numeric"
        value={value}
        onChange={e => setValue(e.target.value)}
        min={0}
        max={100}
        step={1}
      />
    );
  },
  args: {
    placeholder: 'Enter a number',
  },
};

export const NumericDisabled: Story = {
  render: (args: InputTextProps) => <InputText {...args} variant="numeric" disabled min={0} max={100} step={1} />,
  args: {
    placeholder: 'Enter a number',
  },
};

export const NumericError: Story = {
  render: (args: InputTextProps) => <InputText {...args} variant="numeric" error min={0} max={100} step={1} />,
  args: {
    placeholder: 'Enter a number',
  },
}; 