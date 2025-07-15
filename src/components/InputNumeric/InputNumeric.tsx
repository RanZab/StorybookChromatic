import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { InputWrapper, IconWrapper, NumericControls, NumericButton, COLORS } from '../InputText/InputBase';
import NumericArrowUpIcon from '../../icons/Icon_numeric_arrowup.svg?react';
import NumericArrowDownIcon from '../../icons/Icon_numeric_arrowdown.svg?react';

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
  /* Hide browser number input spinners */
  /* Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  /* Firefox */
  &[type='number'] {
    -moz-appearance: textfield;
  }
`;

export type InputNumericProps = {
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  state?: 'default' | 'hover' | 'selected' | 'selectedFilled' | 'filled';
  'aria-label'?: string;
  onBlur?: () => void;
  onFocus?: () => void;
  min?: number;
  max?: number;
  step?: number;
  width?: number | string;
  height?: number | string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value' | 'placeholder' | 'disabled'>;

export const InputNumeric: React.FC<InputNumericProps> = ({
  value: controlledValue,
  onChange,
  placeholder = 'Enter a number',
  disabled = false,
  error = false,
  state,
  'aria-label': ariaLabel,
  onBlur,
  onFocus,
  min,
  max,
  step = 1,
  width,
  height,
  ...rest
}) => {
  const [uncontrolledValue, setUncontrolledValue] = useState<string | number>('');
  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : uncontrolledValue;
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  let visualState: InputNumericProps['state'] = 'default';
  if (disabled) visualState = 'default';
  else if (error) visualState = 'default';
  else if (isFocused && value) visualState = 'selectedFilled';
  else if (isFocused) visualState = 'selected';
  else if (value) visualState = 'filled';
  else visualState = state || 'default';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value === '' ? '' : Number(e.target.value);
    if (!isControlled) setUncontrolledValue(val);
    onChange?.(e);
  };

  const handleNumericChange = (val: number) => {
    if (min !== undefined && val < min) return;
    if (max !== undefined && val > max) return;
    if (!isControlled) setUncontrolledValue(val);
    onChange?.({
      ...({} as React.ChangeEvent<HTMLInputElement>),
      target: { value: String(val) } as HTMLInputElement,
    });
  };

  return (
    <InputWrapper $state={visualState} $disabled={disabled} $error={error} $width={width} $height={height}>
      <IconWrapper position="left">
        <NumericArrowUpIcon width={16} height={16} style={{ opacity: 0 }} />
      </IconWrapper>
      <StyledInput
        ref={inputRef}
        $state={visualState}
        $disabled={disabled}
        $error={error}
        type="number"
        value={value}
        onChange={handleInputChange}
        min={min}
        max={max}
        step={step}
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
        style={{ paddingLeft: 8, paddingRight: 8, height: 32 }}
        {...rest}
      />
      <NumericControls>
        <NumericButton type="button" aria-label="Increment" onClick={() => handleNumericChange((value === '' ? 0 : Number(value)) + (step || 1))}>
          <NumericArrowUpIcon width={16} height={8} />
        </NumericButton>
        <NumericButton type="button" aria-label="Decrement" onClick={() => handleNumericChange((value === '' ? 0 : Number(value)) - (step || 1))}>
          <NumericArrowDownIcon width={16} height={8} />
        </NumericButton>
      </NumericControls>
    </InputWrapper>
  );
};

export default InputNumeric; 