import styled, { css } from 'styled-components';

// Design tokens from Figma
export const COLORS = {
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

export const InputWrapper = styled.div<{
  $state: string;
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

export const IconWrapper = styled.div<{
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

export const DropdownMenu = styled.ul<{
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

export const DropdownOption = styled.li<{
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

export const NumericControls = styled.div`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 2px;
  z-index: 2;
`;

export const NumericButton = styled.button`
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