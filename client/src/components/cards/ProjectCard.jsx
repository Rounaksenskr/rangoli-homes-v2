import React from 'react';
import { MapPin, ArrowUpRight } from 'lucide-react';
import SafeImage from '../ui/SafeImage';

export default function ProjectCard({
  title,
  category,
  location,
  image,
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.();
        }
      }}
      className="group relative cursor-pointer overflow-hidden rounded-lg border border-border bg-beige text-left shadow-sm transition-all duration-300 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <SafeImage
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
      </div>

      <div className="absolute inset-x-0 bottom-0 p-5 text-white">
        <div className="flex items-center justify-between gap-2">
          <span className="rounded bg-surface/20 px-2 py-0.5 text-xs font-medium tracking-wide backdrop-blur-md">
            {category}
          </span>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary">
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>

        <h3 className="mt-2 font-serif text-xl font-normal leading-snug">
          {title}
        </h3>

        {location && (
          <p className="mt-1 flex items-center gap-1 text-xs text-white/80">
            <MapPin className="h-3.5 w-3.5 text-primary" />
            <span>{location}</span>
          </p>
        )}
      </div>
    </div>
  );
}
