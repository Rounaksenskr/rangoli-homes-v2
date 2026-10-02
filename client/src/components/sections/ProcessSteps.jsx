import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import { processSteps } from '../../data/process';

export default function ProcessSteps() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-cream border-t border-border/60">
      <div 
        className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: `url(https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1920&q=80)` }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Execution"
          title="How Your Journey Unfolds"
          subtitle="From your initial brief to site delivery, our 5-step framework keeps timelines and specifications transparent."
        />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {processSteps.map((step, idx) => (
            <div key={step.id || idx} className="relative bg-surface p-6 rounded-lg border border-border text-center md:text-left">
              <span className="text-xs font-bold text-primary tracking-wider uppercase">Step 0{idx + 1}</span>
              <h3 className="font-serif text-base font-bold text-charcoal mt-2 mb-2">{step.title}</h3>
              <p className="text-clay text-xs leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
