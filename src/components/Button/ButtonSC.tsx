import React, { useRef } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { buttonColors, buttonRadii, buttonFont } from './tokens';

export type ButtonHierarchy = 'primary' | 'secondary' | 'tertiary' | 'alternative' | 'alert';

interface ButtonSCProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  hierarchy: ButtonHierarchy;
  disabled?: boolean;
  children: React.ReactNode;
}

// Ripple animation
const rippleAnimation = keyframes`
  to {
    transform: scale(2.5);
    opacity: 0;
  }
`;

const RippleContainer = styled.span`
  position: absolute;
  inset: 0;
  overflow: hidden;
  border-radius: inherit;
  z-index: 1;
`;

const getButtonStyles = ({ hierarchy, disabled }: { hierarchy: ButtonHierarchy; disabled?: boolean }) => {
  switch (hierarchy) {
    case 'primary':
      return css`
        background: ${disabled ? buttonColors.primary.disabledBg : buttonColors.primary.default};
        color: ${disabled ? buttonColors.primary.disabledText : buttonColors.primary.text};
        border: none;
        &:hover:not(:disabled) {
          background: ${buttonColors.primary.hover};
        }
        &:active:not(:disabled) {
          background: ${buttonColors.primary.active};
        }
        &:focus-visible {
          box-shadow: 0 0 0 2px ${buttonColors.primary.focusRing};
        }
        &:disabled {
          cursor: not-allowed;
        }
      `;
    case 'secondary':
      return css`
        background: ${disabled ? 'transparent' : 'transparent'};
        color: ${disabled ? buttonColors.secondary.disabledText : buttonColors.secondary.text};
        border: 1px solid ${disabled ? buttonColors.secondary.disabledBorder : buttonColors.secondary.border};
        &:hover:not(:disabled) {
          background: ${buttonColors.secondary.hoverBg};
          color: ${buttonColors.secondary.hoverText};
          border-color: ${buttonColors.secondary.hoverBorder};
        }
        &:active:not(:disabled) {
          background: ${buttonColors.secondary.activeBg};
          color: ${buttonColors.secondary.activeText};
          border-color: ${buttonColors.secondary.activeBorder};
        }
        &:focus-visible {
          background: ${buttonColors.secondary.focusBg};
          border-color: ${buttonColors.secondary.border};
          box-shadow: 0 0 0 2px ${buttonColors.secondary.focusRing};
        }
        &:disabled {
          cursor: not-allowed;
        }
      `;
    case 'tertiary':
      return css`
        background: transparent;
        color: ${disabled ? buttonColors.tertiary.disabledText : buttonColors.tertiary.text};
        border: none;
        &:hover:not(:disabled) {
          background: ${buttonColors.tertiary.hoverBg};
          color: ${buttonColors.tertiary.hoverText};
        }
        &:active:not(:disabled) {
          background: ${buttonColors.tertiary.activeBg};
          color: ${buttonColors.tertiary.activeText};
        }
        &:focus-visible {
          box-shadow: 0 0 0 2px ${buttonColors.tertiary.focusRing};
        }
        &:disabled {
          cursor: not-allowed;
        }
      `;
    case 'alternative':
      return css`
        background: ${disabled ? buttonColors.alternative.disabledBg : buttonColors.alternative.default};
        color: ${disabled ? buttonColors.alternative.disabledText : buttonColors.alternative.text};
        border: none;
        &:hover:not(:disabled) {
          background: ${buttonColors.alternative.hover};
        }
        &:active:not(:disabled) {
          background: ${buttonColors.alternative.active};
          color: ${buttonColors.alternative.activeText};
        }
        &:focus-visible {
          box-shadow: 0 0 0 2px ${buttonColors.alternative.focusRing};
        }
        &:disabled {
          cursor: not-allowed;
        }
      `;
    case 'alert':
      return css`
        background: ${disabled ? buttonColors.alert.disabledBg : buttonColors.alert.default};
        color: ${disabled ? buttonColors.alert.disabledText : buttonColors.alert.text};
        border: none;
        &:hover:not(:disabled) {
          background: ${buttonColors.alert.hover};
        }
        &:active:not(:disabled) {
          background: ${buttonColors.alert.active};
        }
        &:focus-visible {
          box-shadow: 0 0 0 2px ${buttonColors.alert.focusRing};
        }
        &:disabled {
          cursor: not-allowed;
        }
      `;
    default:
      return '';
  }
};

const StyledButton = styled.button<ButtonSCProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  height: 32px;
  border-radius: ${buttonRadii.default};
  font-family: ${buttonFont.family};
  font-weight: ${buttonFont.weight};
  font-size: ${buttonFont.size};
  line-height: ${buttonFont.lineHeight};
  white-space: nowrap;
  transition: background 0.1s, color 0.1s, border-color 0.1s, box-shadow 0.1s;
  outline: none;
  overflow: hidden;
  ${props => getButtonStyles(props)}
`;

export const ButtonSC: React.FC<ButtonSCProps> = ({
  hierarchy,
  disabled = false,
  children,
  ...rest
}) => {
  const rippleContainer = useRef<HTMLSpanElement>(null);

  const getRippleColor = () => {
    if (hierarchy === 'primary') {
      return 'rgba(51,51,51,0.15)'; // dark ripple for light background
    }
    return 'rgba(255,255,255,0.3)'; // white ripple for dark backgrounds
  };

  const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    const ripple = document.createElement('span');
    ripple.style.position = 'absolute';
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.background = getRippleColor();
    ripple.style.borderRadius = '50%';
    ripple.style.pointerEvents = 'none';
    ripple.style.transform = 'scale(0)';
    ripple.style.animation = 'ripple-effect 600ms linear';
    rippleContainer.current?.appendChild(ripple);
    ripple.addEventListener('animationend', () => {
      ripple.remove();
    });
  };

  return (
    <StyledButton
      hierarchy={hierarchy}
      disabled={disabled}
      {...rest}
      onClick={e => {
        createRipple(e);
        rest.onClick?.(e);
      }}
    >
      <RippleContainer ref={rippleContainer} />
      <span style={{ position: 'relative', zIndex: 2, width: '100%' }}>{children}</span>
    </StyledButton>
  );
};

// Add global ripple animation keyframes
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  const styleId = 'ripple-effect-keyframes';
  if (!document.getElementById(styleId)) {
    const style = document.createElement('style');
    style.id = styleId;
    style.innerHTML = `@keyframes ripple-effect { to { transform: scale(2.5); opacity: 0; } }`;
    document.head.appendChild(style);
  }
}

export default ButtonSC; 