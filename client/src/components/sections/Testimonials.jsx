import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import TestimonialCard from '../cards/TestimonialCard';
import { testimonials } from '../../data/testimonials';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Reviews"
          title="Words From Space Owners"
          subtitle="Feedback from clients who trusted RangoliHomes with their residential and commercial spaces."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((item) => (
            <TestimonialCard key={item.id} testimonial={item} />
          ))}
        </div>
      </div>
    </section>
  );
}