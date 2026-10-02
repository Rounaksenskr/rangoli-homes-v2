import React from 'react';

export default function SectionHeader({
  tagline,
  badge,
  title,
  description,
  subtitle,
  align = 'center',
  className = '',
}) {
  const alignment = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  }[align] || 'text-center items-center';

  const finalTagline = tagline || badge;
  const finalDescription = description || subtitle;

  return (
    <div className={`flex flex-col ${alignment} max-w-2xl mx-auto mb-10 ${className}`}>
      {finalTagline && (
        <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
          {finalTagline}
        </span>
      )}
      {title && (
        <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-normal leading-tight">
          {title}
        </h2>
      )}
      {finalDescription && (
        <p className="mt-3 text-sm sm:text-base text-charcoal/70 leading-relaxed">
          {finalDescription}
        </p>
      )}
    </div>
  );
}
