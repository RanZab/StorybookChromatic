import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { InputWrapper, IconWrapper as BaseIconWrapper, COLORS } from '../InputText/InputBase';
import SearchIcon from '../../icons/Icon_search.svg?react';
import ClearIcon from '../../icons/Icon_clear.svg?react';

const IconWrapper = styled(BaseIconWrapper)`
  left: 8px !important;
`;

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
  padding: 6px 16px;
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

export type InputSearchProps = {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  state?: 'default' | 'hover' | 'selected' | 'selectedFilled' | 'filled';
  'aria-label'?: string;
  onBlur?: () => void;
  onFocus?: () => void;
  onClear?: () => void;
  width?: number | string;
  height?: number | string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value' | 'placeholder' | 'disabled'>;

export const InputSearch: React.FC<InputSearchProps> = ({
  value: controlledValue,
  onChange,
  placeholder = 'Search...',
  disabled = false,
  error = false,
  state,
  'aria-label': ariaLabel,
  onBlur,
  onFocus,
  onClear,
  width,
  height,
  ...rest
}) => {
  const [uncontrolledValue, setUncontrolledValue] = useState('');
  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : uncontrolledValue;
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  let visualState: InputSearchProps['state'] = 'default';
  if (disabled) visualState = 'default';
  else if (error) visualState = 'default';
  else if (isFocused && value) visualState = 'selectedFilled';
  else if (isFocused) visualState = 'selected';
  else if (value) visualState = 'filled';
  else visualState = state || 'default';

  const showClear = !disabled && !error && value && isFocused;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) setUncontrolledValue(e.target.value);
    onChange?.(e);
  };

  const handleClear = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isControlled) {
      setUncontrolledValue('');
      onChange?.({
        ...({} as React.ChangeEvent<HTMLInputElement>),
        target: { value: '' } as HTMLInputElement,
      });
    } else {
      onChange?.({
        ...({} as React.ChangeEvent<HTMLInputElement>),
        target: { value: '' } as HTMLInputElement,
      });
    }
    onClear?.();
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  const handleClearMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <InputWrapper $state={visualState} $disabled={disabled} $error={error} $width={width} $height={height}>
      <IconWrapper position="left">
        <SearchIcon width={16} height={16} />
      </IconWrapper>
      <StyledInput
        ref={inputRef}
        $state={visualState}
        $disabled={disabled}
        $error={error}
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
        disabled={disabled}
        aria-label={ariaLabel || placeholder}
        onFocus={() => {
          setIsFocused(true);
          onFocus?.();
        }}
        onBlur={() => {
          setIsFocused(false);
          onBlur?.();
        }}
        style={{ paddingLeft: 24, paddingRight: showClear ? 40 : 8, height: 32 }}
        {...rest}
      />
      {showClear && (
        <button
          type="button"
          aria-label="Clear input"
          tabIndex={0}
          onMouseDown={handleClearMouseDown}
          onClick={handleClear}
          style={{
            position: 'absolute',
            right: 8,
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'none',
            border: 'none',
            padding: 0,
            margin: 0,
            width: 18,
            height: 18,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 2,
          }}
        >
          <ClearIcon width={16} height={16} />
        </button>
      )}
    </InputWrapper>
  );
};

export default InputSearch; 