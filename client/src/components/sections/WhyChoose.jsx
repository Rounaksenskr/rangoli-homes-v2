import React from 'react';
import { CheckCircle2, Shield, Clock, Users, Palette, Headset } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import { whyChooseReasons } from '../../data/whyChoose';

const iconMap = {
  designers: Users,
  materials: Shield,
  process: CheckCircle2,
  timely: Clock,
  workmanship: Palette,
  support: Headset,
};

export default function WhyChoose() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-surface border-t border-border/60">
      <div 
        className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: `url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80)` }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="The Difference"
          title="Why Work With RangoliHomes"
          subtitle="We eliminate the typical uncertainty of interior contracting through process rigor, verified materials, and dedicated execution teams."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseReasons.map((item) => {
            const Icon = iconMap[item.icon] || CheckCircle2;
            return (
              <div 
                key={item.id} 
                className="p-6 rounded-lg bg-cream/50 border border-border hover:border-primary/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-md bg-beige flex items-center justify-center text-primary mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-charcoal mb-2">{item.title}</h3>
                <p className="text-clay text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
