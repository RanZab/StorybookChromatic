import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { InputWrapper, IconWrapper, DropdownMenu, DropdownOption, COLORS } from '../InputText/InputBase';
import DropdownIcon from '../../icons/Icon_arrow_drop_down.svg?react';

const StyledInput = styled.input<{
  $state: string;
  $disabled?: boolean;
  $error?: boolean;
}>`
  background: transparent;
  border: none;
  outline: none;
  color: ${({ $disabled, $error }) => {
    if ($disabled) return COLORS.disabledText;
    if ($error) return COLORS.errorText;
    return COLORS.text;
  }};
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  width: 100%;
  min-height: 32px;
  height: 32px !important;
  box-sizing: border-box;
  transition: height 0.2s;
  white-space: pre-wrap;
  word-wrap: break-word;
  overflow: hidden;
  vertical-align: top;
  text-align: left;
  display: block;
  padding: 6px 8px;
  &::placeholder {
    color: ${({ $state, $disabled }) => {
      if ($disabled) return COLORS.disabledText;
      if ($state === 'selected') return COLORS.selectedPlaceholder;
      return COLORS.placeholder;
    }};
    opacity: 1;
  }
  ${({ $disabled }) =>
    $disabled &&
    `cursor: not-allowed;`}
`;

export type InputDropdownProps = {
  value?: string;
  options?: string[];
  onSelectOption?: (option: string) => void;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  state?: 'default' | 'hover' | 'selected' | 'selectedFilled' | 'filled';
  'aria-label'?: string;
  onBlur?: () => void;
  onFocus?: () => void;
  width?: number | string;
  height?: number | string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value' | 'placeholder' | 'disabled'>;

export const InputDropdown: React.FC<InputDropdownProps> = ({
  value,
  options = ['Option A', 'Option B', 'Option C'],
  onSelectOption,
  placeholder = 'Select an option',
  disabled = false,
  error = false,
  state,
  'aria-label': ariaLabel,
  onBlur,
  onFocus,
  width,
  height,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(value || null);
  const inputRef = useRef<HTMLInputElement>(null);

  let visualState: InputDropdownProps['state'] = 'default';
  if (disabled) visualState = 'default';
  else if (error) visualState = 'default';
  else if (isFocused && selectedOption) visualState = 'selectedFilled';
  else if (isFocused) visualState = 'selected';
  else if (selectedOption) visualState = 'filled';
  else visualState = state || 'default';

  const handleDropdownSelect = (option: string) => {
    setSelectedOption(option);
    setDropdownOpen(false);
    onSelectOption?.(option);
  };

  return (
    <InputWrapper $state={visualState} $disabled={disabled} $error={error} $width={width} $height={height}>
      <StyledInput
        ref={inputRef}
        $state={visualState}
        $disabled={disabled}
        $error={error}
        type="text"
        value={selectedOption || ''}
        readOnly
        placeholder={placeholder}
        disabled={disabled}
        aria-label={ariaLabel || placeholder}
        onFocus={(e: React.FocusEvent<HTMLInputElement>) => {
          setIsFocused(true);
          setDropdownOpen(true);
          onFocus?.();
        }}
        onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
          setIsFocused(false);
          setTimeout(() => setDropdownOpen(false), 100); // allow click
          onBlur?.();
        }}
        style={{ paddingLeft: 8, paddingRight: 32, height: 32 }}
        {...rest}
      />
      <IconWrapper position="right">
        <DropdownIcon width={16} height={16} />
      </IconWrapper>
      <DropdownMenu visible={dropdownOpen}>
        {options.map(option => (
          <DropdownOption
            key={option}
            selected={selectedOption === option}
            onMouseDown={() => handleDropdownSelect(option)}
          >
            {option}
          </DropdownOption>
        ))}
      </DropdownMenu>
    </InputWrapper>
  );
};

export default InputDropdown; 