import React from 'react';
import { Loader2 } from 'lucide-react';

const VARIANTS = {
  primary: 'bg-[#814882] text-white hover:bg-[#6A3A6B] active:bg-[#6A3A6B] shadow-sm',
  secondary: 'bg-clay text-white hover:bg-[#785F4C] active:bg-[#665040]',
  outline: 'border border-border text-charcoal bg-transparent hover:bg-beige active:bg-[#DFDFDF]',
  ghost: 'text-charcoal hover:bg-beige/60 active:bg-beige',
};

const SIZES = {
  sm: 'px-3 py-1.5 text-xs font-medium rounded',
  md: 'px-5 py-2.5 text-sm font-medium rounded-md',
  lg: 'px-6 py-3 text-base font-semibold rounded-md',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled = false,
  className = '',
  type = 'button',
  ...props
}) {
  const baseClasses = 'inline-flex items-center justify-center transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  const variantClasses = VARIANTS[variant] || VARIANTS.primary;
  const sizeClasses = SIZES[size] || SIZES.md;

  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`}
      {...props}
    >
      {isLoading && (
        <Loader2 className="w-4 h-4 mr-2 animate-spin" aria-hidden="true" />
      )}
      {children}
    </button>
  );
}
