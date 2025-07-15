import React, { useState, InputHTMLAttributes, useRef, useEffect, useCallback } from 'react';
import styled, { css } from 'styled-components';
import ClearIcon from '../../icons/Icon_clear.svg?react';
// 1. Import icons for search, dropdown, and numeric
import SearchIcon from '../../icons/Icon_search.svg?react';
import DropdownIcon from '../../icons/Icon_arrow_drop_down.svg?react';
import NumericIcon from '../../icons/Icon_double_arrow.svg?react';

// Design tokens from Figma
const COLORS = {
  defaultBg: '#282828',
  hoverBg: '#333333',
  selectedBg: '#282828',
  filledBg: '#282828',
  disabledBg: '#181818',
  errorBg: '#282828',
  defaultBorder: '#333333',
  hoverBorder: '#333333',
  selectedBorder: '#FFFFFF',
  filledBorder: '#333333',
  disabledBorder: '#404040',
  errorBorder: '#FF3131',
  placeholder: '#BABABA',
  text: '#F0F0F0',
  disabledText: '#5D5D5D',
  errorText: '#F0F0F0',
  selectedPlaceholder: '#8E8E8E',
};

/**
 * InputText component
 *
 * - Fixed height: 32px (per Figma)
 * - Default width: 236px (can be overridden by style, className, or width prop)
 * - Clear button:
 *   - Visible only when input has text and is focused
 *   - Clicking clears the input and keeps focus (returns to selected state)
 *   - For controlled usage, parent must update value in response to onClear or onChange
 *   - For uncontrolled usage, component manages value internally
 */
const InputWrapper = styled.div<{
  $state: InputTextProps['state'];
  $disabled?: boolean;
  $error?: boolean;
  $width?: number | string;
  $height?: number | string;
}>`
  position: relative;
  display: block;
  background: ${({ $state, $disabled, $error }) => {
    if ($disabled) return COLORS.disabledBg;
    if ($error) return COLORS.errorBg;
    if ($state === 'hover') return COLORS.hoverBg;
    if ($state === 'selected' || $state === 'selectedFilled') return COLORS.selectedBg;
    if ($state === 'filled') return COLORS.filledBg;
    return COLORS.defaultBg;
  }};
  border: 1px solid
    ${({ $state, $disabled, $error }) => {
      if ($disabled) return COLORS.disabledBorder;
      if ($error) return COLORS.errorBorder;
      if ($state === 'selected' || $state === 'selectedFilled') return COLORS.selectedBorder;
      if ($state === 'filled') return COLORS.filledBorder;
      return COLORS.defaultBorder;
    }};
  border-radius: 8px;
  padding: 8px;
  transition: background 0.2s, border 0.2s, height 0.2s;
  width: ${({ $width }) => ($width !== undefined ? (typeof $width === 'number' ? `${$width}px` : $width) : '236px')};
  height: ${({ $height }) => ($height !== undefined ? (typeof $height === 'number' ? `${$height}px` : $height) : 'auto')};
  box-sizing: border-box;
`;

const StyledTextarea = styled.textarea<{
  $state: InputTextProps['state'];
  $disabled?: boolean;
  $error?: boolean;
  $height?: number | string;
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
    css`
      cursor: not-allowed;
    `}
`;

const StyledInput = styled.input<{
  $state: InputTextProps['state'];
  $disabled?: boolean;
  $error?: boolean;
  $height?: number | string;
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
    css`
      cursor: not-allowed;
    `}
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

// 3. Add styled-components for icons, dropdown, and numeric controls
const IconWrapper = styled.div<{
  position: 'left' | 'right';
}>`
  position: absolute;
  top: 50%;
  ${({ position }) => (position === 'left' ? 'left: 12px;' : 'right: 12px;')}
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  pointer-events: none;
`;

const DropdownMenu = styled.ul<{
  visible: boolean;
}>`
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  margin: 4px 0 0 0;
  padding: 0;
  background: #282828;
  border: 1px solid #333333;
  border-radius: 8px;
  z-index: 10;
  list-style: none;
  box-shadow: 0 2px 8px rgba(0,0,0,0.12);
  font-family: 'Inter', sans-serif;
`;
const DropdownOption = styled.li<{
  selected: boolean;
}>`
  padding: 8px 16px;
  color: #f0f0f0;
  background: ${({ selected }) => (selected ? '#333333' : 'transparent')};
  cursor: pointer;
  &:hover {
    background: #333333;
  }
  font-family: 'Inter', sans-serif;
  font-size: 14px;
`;

const NumericControls = styled.div`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 2px;
  z-index: 2;
`;
const NumericButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  width: 18px;
  height: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #bababa;
  &:hover {
    color: #f0f0f0;
  }
`;

// 2. Extend InputTextProps
// Refactor prop types for correct typing
export type InputTextBaseProps = {
  value?: string;
  onChange?: (e: React.ChangeEvent<any>) => void;
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
  variant?: 'default' | 'search' | 'dropdown' | 'numeric';
  options?: string[]; // for dropdown
  onSelectOption?: (option: string) => void; // for dropdown
  min?: number; // for numeric
  max?: number; // for numeric
  step?: number; // for numeric
};

export type InputTextProps =
  | (InputTextBaseProps & Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, keyof InputTextBaseProps>)
  | (InputTextBaseProps & Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof InputTextBaseProps>);

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
  variant = 'default',
  options = ['Option A', 'Option B', 'Option C'],
  onSelectOption,
  min,
  max,
  step = 1,
  ...rest
}) => {
  const [uncontrolledValue, setUncontrolledValue] = useState('');
  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : uncontrolledValue;
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<any>(null);
  const [textareaHeight, setTextareaHeight] = useState<number>(minHeight);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [numericValue, setNumericValue] = useState<number | ''>('');

  // Calculate height: only expand if text width exceeds container
  const calculateHeight = useCallback((text: string) => {
    if (!inputRef.current) return 32;
    if (!text || text.length === 0) return 32;

    // Create a temporary span to measure text width
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

    // Get textarea width minus padding
    const textareaWidth = inputRef.current.offsetWidth - 32; // 16px padding each side

    // Only expand if text width exceeds container width
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

  // Adjust height on value change
  useEffect(() => {
    const newHeight = calculateHeight(value || '');
    if (inputRef.current) {
      inputRef.current.style.height = newHeight + 'px';
      console.log('Setting new height to:', newHeight);
      console.log('Current scrollHeight:', inputRef.current.scrollHeight);
    }
    setTextareaHeight(newHeight);
  }, [value, minHeight, maxHeight, calculateHeight]);

  // Determine state
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
        console.log('Setting new height to:', newHeight);
        console.log('Current scrollHeight:', inputRef.current.scrollHeight);
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

  // Dropdown logic
  const handleDropdownSelect = (option: string) => {
    setSelectedOption(option);
    setDropdownOpen(false);
    onSelectOption?.(option);
  };

  // Numeric logic
  const handleNumericChange = (val: number) => {
    if (min !== undefined && val < min) return;
    if (max !== undefined && val > max) return;
    setNumericValue(val);
    onChange?.({
      ...({} as React.ChangeEvent<HTMLTextAreaElement>),
      target: { value: String(val) } as HTMLTextAreaElement,
    });
  };

  return (
    <InputWrapper $state={visualState} $disabled={disabled} $error={error} $width={width} $height={height} style={rest.style} className={rest.className}>
      {/* Icon left for search/numeric */}
      {variant === 'search' && (
        <IconWrapper position="left">
          <SearchIcon width={16} height={16} />
        </IconWrapper>
      )}
      {variant === 'numeric' && (
        <IconWrapper position="left">
          <NumericIcon width={16} height={16} />
        </IconWrapper>
      )}
      {/* Main input/textarea */}
      {variant === 'dropdown' ? (
        <StyledInput
          type="text"
          value={selectedOption || ''}
          readOnly
          placeholder={placeholder}
          disabled={disabled}
          aria-label={ariaLabel || placeholder}
          onFocus={e => {
            setIsFocused(true);
            setDropdownOpen(true);
            onFocus?.();
          }}
          onBlur={e => {
            setIsFocused(false);
            setTimeout(() => setDropdownOpen(false), 100); // allow click
            onBlur?.();
          }}
          $state={visualState}
          $disabled={disabled}
          $error={error}
          $minHeight={minHeight}
          $maxHeight={maxHeight}
          style={{ height: textareaHeight, paddingRight: 40 }}
          {...(rest as React.InputHTMLAttributes<HTMLInputElement>)}
        />
      ) : variant === 'numeric' ? (
        <StyledInput
          type="number"
          value={isControlled ? controlledValue : numericValue}
          onChange={e => {
            const val = e.target.value === '' ? '' : Number(e.target.value);
            setNumericValue(val);
            if (!isControlled) setUncontrolledValue(String(val));
            onChange?.({
              ...({} as React.ChangeEvent<HTMLInputElement>),
              target: { value: String(val) } as HTMLInputElement,
            });
          }}
          min={min}
          max={max}
          step={step}
          placeholder={placeholder}
          disabled={disabled}
          aria-label={ariaLabel || placeholder}
          onFocus={e => {
            setIsFocused(true);
            onFocus?.();
          }}
          onBlur={e => {
            setIsFocused(false);
            onBlur?.();
          }}
          $state={visualState}
          $disabled={disabled}
          $error={error}
          $minHeight={minHeight}
          $maxHeight={maxHeight}
          style={{ height: textareaHeight, paddingLeft: 40, paddingRight: 40 }}
          {...(rest as React.InputHTMLAttributes<HTMLInputElement>)}
        />
      ) : (
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
          onFocus={e => {
            setIsFocused(true);
            onFocus?.();
          }}
          onBlur={e => {
            setIsFocused(false);
            onBlur?.();
          }}
          $minHeight={minHeight}
          $maxHeight={maxHeight}
          style={{
            height: textareaHeight,
            paddingLeft: ((variant as string) === 'search' || (variant as string) === 'numeric') ? 40 : 16,
            paddingRight: showClear ? 40 : 16
          }}
          {...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      )}
      {/* Icon right for dropdown */}
      {variant === 'dropdown' && (
        <IconWrapper position="right">
          <DropdownIcon width={16} height={16} />
        </IconWrapper>
      )}
      {/* Numeric controls */}
      {variant === 'numeric' && (
        <NumericControls>
          <NumericButton type="button" aria-label="Increment" onClick={() => handleNumericChange((numericValue === '' ? 0 : Number(numericValue)) + (step || 1))}>
            <NumericIcon width={16} height={8} style={{ transform: 'rotate(180deg)' }} />
          </NumericButton>
          <NumericButton type="button" aria-label="Decrement" onClick={() => handleNumericChange((numericValue === '' ? 0 : Number(numericValue)) - (step || 1))}>
            <NumericIcon width={16} height={8} />
          </NumericButton>
        </NumericControls>
      )}
      {/* Dropdown menu */}
      {variant === 'dropdown' && (
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
      )}
      {/* Clear button (for search and default) */}
      {(variant === 'search' || variant === 'default') && showClear && (
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