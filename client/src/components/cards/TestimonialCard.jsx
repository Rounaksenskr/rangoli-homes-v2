import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function TestimonialCard({
  name,
  location,
  service,
  review,
  rating = 5,
}) {
  return (
    <div className="relative flex h-full flex-col justify-between rounded-lg border border-border bg-surface p-6 shadow-sm">
      <Quote className="absolute right-5 top-5 h-8 w-8 text-border/60" aria-hidden="true" />
      
      <div>
        <div className="flex items-center gap-1 text-primary">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < rating ? 'fill-primary text-primary' : 'text-border'
              }`}
            />
          ))}
        </div>

        <p className="mt-4 text-sm leading-relaxed italic text-charcoal/80">
          "{review}"
        </p>
      </div>

      <div className="mt-6 border-t border-border/60 pt-4">
        <h4 className="font-serif text-base font-semibold text-charcoal">
          {name}
        </h4>
        <div className="flex flex-wrap items-center gap-1.5 text-xs text-charcoal/60">
          {location && <span>{location}</span>}
          {location && service && <span>•</span>}
          {service && <span className="font-medium text-clay">{service}</span>}
        </div>
      </div>
    </div>
  );
}
