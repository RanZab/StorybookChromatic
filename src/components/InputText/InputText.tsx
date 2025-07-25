import React, { useState, useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { InputWrapper, COLORS } from './InputBase';
import ClearIcon from '../../icons/Icon_clear.svg?react';

const StyledTextarea = styled.textarea<{
  $state: string;
  $disabled?: boolean;
  $error?: boolean;
  $minHeight?: number;
  $maxHeight?: number;
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
  max-height: ${({ $maxHeight }) => ($maxHeight !== undefined ? `${$maxHeight}px` : '120px')};
  box-sizing: border-box;
  transition: height 0.2s;
  resize: none;
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

const ClearButton = styled.button`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 2;
  transition: background 0.2s;
  &:hover {
    background: rgba(255,255,255,0.08);
    border-radius: 50%;
  }
  &:focus {
    outline: 2px solid #e5ff00;
    outline-offset: 2px;
  }
`;

export type InputTextProps = {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
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
  minHeight?: number;
  maxHeight?: number;
} & Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange' | 'value' | 'placeholder' | 'disabled'>;

export const InputText: React.FC<InputTextProps> = ({
  value: controlledValue,
  onChange,
  placeholder = 'Add a name',
  disabled = false,
  error = false,
  state,
  'aria-label': ariaLabel,
  onBlur,
  onFocus,
  onClear,
  width,
  height,
  minHeight = 32,
  maxHeight = 120,
  ...rest
}) => {
  const [uncontrolledValue, setUncontrolledValue] = useState('');
  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : uncontrolledValue;
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [textareaHeight, setTextareaHeight] = useState<number>(minHeight);

  // Calculate height: only expand if text width exceeds container
  const calculateHeight = useCallback((text: string) => {
    if (!inputRef.current) return 32;
    if (!text || text.length === 0) return 32;
    const span = document.createElement('span');
    span.style.visibility = 'hidden';
    span.style.position = 'absolute';
    span.style.fontSize = '14px';
    span.style.fontFamily = 'Inter, sans-serif';
    span.style.whiteSpace = 'nowrap';
    span.textContent = text;
    document.body.appendChild(span);
    const textWidth = span.offsetWidth;
    document.body.removeChild(span);
    const textareaWidth = inputRef.current.offsetWidth - 32;
    if (textWidth > textareaWidth) {
      const textarea = inputRef.current;
      const originalHeight = textarea.style.height;
      textarea.style.height = 'auto';
      const scrollHeight = textarea.scrollHeight;
      textarea.style.height = originalHeight;
      return Math.min(scrollHeight, maxHeight);
    }
    return 32;
  }, [maxHeight]);

  useEffect(() => {
    const newHeight = calculateHeight(value || '');
    if (inputRef.current) {
      inputRef.current.style.height = newHeight + 'px';
    }
    setTextareaHeight(newHeight);
  }, [value, minHeight, maxHeight, calculateHeight]);

  let visualState: InputTextProps['state'] = 'default';
  if (disabled) visualState = 'default';
  else if (error) visualState = 'default';
  else if (isFocused && value) visualState = 'selectedFilled';
  else if (isFocused) visualState = 'selected';
  else if (value) visualState = 'filled';
  else visualState = state || 'default';

  const showClear = !disabled && !error && value && isFocused;

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!isControlled) setUncontrolledValue(e.target.value);
    onChange?.(e);
    setTimeout(() => {
      const newHeight = calculateHeight(e.target.value);
      if (inputRef.current) {
        inputRef.current.style.height = newHeight + 'px';
      }
      setTextareaHeight(newHeight);
    }, 0);
  };

  const handleClear = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isControlled) {
      setUncontrolledValue('');
      onChange?.({
        ...({} as React.ChangeEvent<HTMLTextAreaElement>),
        target: { value: '' } as HTMLTextAreaElement,
      });
    } else {
      onChange?.({
        ...({} as React.ChangeEvent<HTMLTextAreaElement>),
        target: { value: '' } as HTMLTextAreaElement,
      });
    }
    onClear?.();
    setTimeout(() => {
      inputRef.current?.focus();
      setTextareaHeight(calculateHeight(''));
    }, 0);
  };

  const handleClearMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <InputWrapper $state={visualState} $disabled={disabled} $error={error} $width={width} $height={height}>
      <StyledTextarea
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
        style={{ height: textareaHeight, paddingLeft: 8, paddingRight: showClear ? 32 : 8 }}
        $minHeight={minHeight}
        $maxHeight={maxHeight}
        {...rest}
      />
      {showClear && (
        <ClearButton
          type="button"
          aria-label="Clear input"
          tabIndex={0}
          onMouseDown={handleClearMouseDown}
          onClick={handleClear}
        >
          <ClearIcon width={16} height={16} />
        </ClearButton>
      )}
    </InputWrapper>
  );
};

export default InputText; 