import React, { forwardRef } from 'react';

const Input = forwardRef(function Input(
  {
    label,
    error,
    helperText,
    id,
    type = 'text',
    isTextArea = false,
    rows = 4,
    required = false,
    className = '',
    ...props
  },
  ref
) {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  const baseClasses = `w-full rounded-md border bg-white px-3.5 py-2 text-sm text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors ${
    error ? 'border-red-500' : 'border-border'
  } ${className}`;

  return (
    <div className="w-full space-y-1.5 text-left">
      {label && (
        <label htmlFor={inputId} className="block text-xs font-medium text-charcoal">
          {label} {required && <span className="text-primary">*</span>}
        </label>
      )}

      {isTextArea ? (
        <textarea
          id={inputId}
          ref={ref}
          rows={rows}
          className={baseClasses}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${inputId}-error` : undefined}
          required={required}
          {...props}
        />
      ) : (
        <input
          id={inputId}
          ref={ref}
          type={type}
          className={baseClasses}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${inputId}-error` : undefined}
          required={required}
          {...props}
        />
      )}

      {error ? (
        <p id={`${inputId}-error`} className="text-xs text-red-600">
          {error}
        </p>
      ) : helperText ? (
        <p className="text-xs text-charcoal/60">{helperText}</p>
      ) : null}
    </div>
  );
});

export default Input;
