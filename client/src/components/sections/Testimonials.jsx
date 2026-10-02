import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import TestimonialCard from '../cards/TestimonialCard';
import { testimonials } from '../../data/testimonials';

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-cream border-t border-border/60">
      <div 
        className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: `url(https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1920&q=80)` }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Reviews"
          title="Words From Space Owners"
          subtitle="Feedback from clients who trusted RangoliHomes with their residential and commercial spaces."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((item) => (
            <TestimonialCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
