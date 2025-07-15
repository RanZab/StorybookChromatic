import React from 'react';

export type ButtonHierarchy = 'primary' | 'secondary' | 'tertiary' | 'alternative' | 'alert';

interface ButtonProps {
  hierarchy: ButtonHierarchy;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

// Base classes: shape, font, spacing, remove default border, no outline except custom focus
const baseClasses = [
  'flex items-center justify-center',
  'px-4 py-2 h-8 rounded-lg',
  'font-bold text-[14px] leading-[1.4] whitespace-nowrap font-["Inter",sans-serif]',
  'border-none', // Remove browser default border
  'focus-visible:outline-none', // Remove default outline
  'transition-colors duration-100', // Smooth state transitions
].join(' ');

const hierarchyClasses: Record<ButtonHierarchy, string> = {
  primary: [
    'bg-[#e5ff00] text-[#333333]',
    'hover:bg-[#f4ff99]',
    'active:bg-[#c2ff00]',
    'focus:shadow-[0_0_0_2px_rgba(229,255,0,0.4)]',
    'disabled:bg-[#3f3f2b] disabled:text-[#8e8e8e] disabled:cursor-not-allowed',
  ].join(' '),
  secondary: [
    'bg-transparent text-[#e5ff00] border border-[#e5ff00]',
    'hover:bg-[#333333] hover:text-[#f4ff99] hover:border-[#f4ff99]',
    'active:bg-[#282828] active:text-[#c2ff00] active:border-[#c2ff00]',
    'focus:bg-[#010101] focus:border-[#e5ff00] focus:shadow-[0_0_0_2px_rgba(229,255,0,0.4)]',
    'disabled:bg-transparent disabled:border-[#3f3f2b] disabled:text-[#3f3f2b] disabled:cursor-not-allowed',
  ].join(' '),
  tertiary: [
    'bg-transparent text-[#e5ff00]',
    'hover:bg-[#333333] hover:text-[#f4ff99]',
    'active:bg-[#282828] active:text-[#c2ff00]',
    'focus:shadow-[0_0_0_2px_rgba(229,255,0,0.4)]',
    'disabled:bg-transparent disabled:text-[#3f3f2b] disabled:cursor-not-allowed',
  ].join(' '),
  alternative: [
    'bg-[#282828] text-[#f0f0f0]',
    'hover:bg-[#333333]',
    'active:bg-[#282828] active:text-[#c2ff00]',
    'focus:shadow-[0_0_0_2px_rgba(229,255,0,0.4)]',
    'disabled:bg-[#181818] disabled:text-[#3f3f2b] disabled:cursor-not-allowed',
  ].join(' '),
  alert: [
    'bg-[#ff3131] text-[#f0f0f0]',
    'hover:bg-[#ff6161]',
    'active:bg-[#b72c2c]',
    'focus:shadow-[0_0_0_2px_#f0f0f0]',
    'disabled:bg-[#8e1616] disabled:text-[#bababa] disabled:cursor-not-allowed',
  ].join(' '),
};

export const Button: React.FC<ButtonProps> = ({
  hierarchy,
  disabled = false,
  children,
  onClick,
  className = '',
}) => {
  const classes = [
    baseClasses,
    hierarchyClasses[hierarchy],
    className,
  ].join(' ');
  return (
    <button
      className={classes}
      disabled={disabled}
      aria-disabled={disabled}
      type="button"
      onClick={disabled ? undefined : onClick}
      tabIndex={0}
    >
      {children}
    </button>
  );
};

export default Button; 