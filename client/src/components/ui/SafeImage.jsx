import React, { useState } from 'react';
import { ImageOff } from 'lucide-react';

export default function SafeImage({
  src,
  alt = '',
  className = '',
  fallbackSrc,
  loading = 'lazy',
  ...props
}) {
  const [error, setError] = useState(false);

  if (error || !src) {
    if (fallbackSrc && !error) {
      return (
        <img
          src={fallbackSrc}
          alt={alt}
          className={className}
          onError={() => setError(true)}
          loading={loading}
          {...props}
        />
      );
    }
    return (
      <div
        className={`flex flex-col items-center justify-center bg-beige border border-border text-charcoal/40 p-4 ${className}`}
        role="img"
        aria-label={alt || 'Image unavailable'}
      >
        <ImageOff className="w-8 h-8 stroke-1 mb-1" />
        <span className="text-xs">{alt || 'Placeholder'}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
      loading={loading}
      {...props}
    />
  );
}
