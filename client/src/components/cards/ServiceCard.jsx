import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SafeImage from '../ui/SafeImage';

export default function ServiceCard({
  title,
  description,
  image,
  link,
  features = [],
  ctaText = 'Explore Service',
}) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-lg border border-border bg-surface shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-beige">
        <SafeImage
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-2xl font-normal text-charcoal">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-charcoal/70">
          {description}
        </p>

        {features.length > 0 && (
          <ul className="mt-4 space-y-1.5 border-t border-border/60 pt-4 text-xs text-charcoal/80">
            {features.slice(0, 4).map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto pt-6">
          <Link
            to={link}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-[#6A3A6B]"
          >
            <span>{ctaText}</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
