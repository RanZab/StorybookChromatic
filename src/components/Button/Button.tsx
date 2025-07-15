import React from 'react';

export type ButtonHierarchy = 'primary' | 'secondary' | 'tertiary' | 'alternative' | 'alert';
export type ButtonState = 'default' | 'hover' | 'active' | 'focused' | 'pressed' | 'disabled';

interface ButtonProps {
  hierarchy: ButtonHierarchy;
  state: ButtonState;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const baseClasses = 'flex items-center justify-center px-4 py-2 h-8 rounded-lg font-bold text-[14px] leading-[1.4] whitespace-nowrap font-["Inter",sans-serif]';

const hierarchyStyles: Record<ButtonHierarchy, string> = {
  primary: 'bg-[#e5ff00] text-[#333333]',
  secondary: 'bg-transparent text-[#e5ff00] border border-[#e5ff00]',
  tertiary: 'bg-transparent text-[#e5ff00]',
  alternative: 'bg-[#282828] text-[#f0f0f0]',
  alert: 'bg-[#ff3131] text-[#f0f0f0]',
};

const stateStyles: Record<ButtonHierarchy, Record<ButtonState, string>> = {
  primary: {
    default: '',
    hover: 'bg-[#f4ff99]',
    active: 'bg-[#c2ff00]',
    focused: 'shadow-[0_0_0_2px_rgba(229,255,0,0.4)]',
    pressed: '',
    disabled: 'bg-[#3f3f2b] text-[#8e8e8e] cursor-not-allowed',
  },
  secondary: {
    default: '',
    hover: 'bg-[#333333] text-[#f4ff99] border-[#f4ff99]',
    active: 'bg-[#282828] text-[#c2ff00] border-[#c2ff00]',
    focused: 'bg-[#010101] border-[#e5ff00] shadow-[0_0_0_2px_rgba(229,255,0,0.4)]',
    pressed: '',
    disabled: 'bg-transparent border-[#3f3f2b] text-[#3f3f2b] cursor-not-allowed',
  },
  tertiary: {
    default: '',
    hover: 'bg-[#333333] text-[#f4ff99]',
    active: 'bg-[#282828] text-[#c2ff00]',
    focused: 'shadow-[0_0_0_2px_rgba(229,255,0,0.4)]',
    pressed: '',
    disabled: 'bg-transparent text-[#3f3f2b] cursor-not-allowed',
  },
  alternative: {
    default: '',
    hover: 'bg-[#333333]',
    active: 'bg-[#282828]',
    focused: 'shadow-[0_0_0_2px_rgba(229,255,0,0.4)]',
    pressed: '',
    disabled: 'bg-[#181818] text-[#3f3f2b] cursor-not-allowed',
  },
  alert: {
    default: '',
    hover: 'bg-[#ff6161]',
    active: 'bg-[#b72c2c]',
    focused: 'shadow-[0_0_0_2px_#f0f0f0]',
    pressed: '',
    disabled: 'bg-[#8e1616] text-[#bababa] cursor-not-allowed',
  },
};

export const Button: React.FC<ButtonProps> = ({
  hierarchy,
  state,
  children,
  onClick,
  className = '',
}) => {
  const classes = [
    baseClasses,
    hierarchyStyles[hierarchy],
    stateStyles[hierarchy][state],
    className,
  ].join(' ');
  return (
    <button
      className={classes}
      disabled={state === 'disabled'}
      tabIndex={state === 'disabled' ? -1 : 0}
      onClick={state === 'disabled' ? undefined : onClick}
      aria-disabled={state === 'disabled'}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button; 