import React from 'react';

export default function SectionHeader({
  tagline,
  title,
  description,
  align = 'center',
  className = '',
}) {
  const alignment = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  }[align] || 'text-center items-center';

  return (
    <div className={`flex flex-col ${alignment} max-w-2xl mx-auto mb-10 ${className}`}>
      {tagline && (
        <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
          {tagline}
        </span>
      )}
      {title && (
        <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-normal leading-tight">
          {title}
        </h2>
      )}
      {description && (
        <p className="mt-3 text-sm sm:text-base text-charcoal/70 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
