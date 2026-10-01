import React from 'react';
import { CheckCircle2, Shield, Clock, Users, Palette, Headset } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import { whyChooseUs } from '../../data/whyChoose';

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
    <section className="py-16 md:py-24 bg-surface border-t border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="The Difference"
          title="Why Work With RangoliHomes"
          subtitle="We eliminate the typical uncertainty of interior contracting through process rigor, verified materials, and dedicated execution teams."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUs.map((item) => {
            const Icon = iconMap[item.icon] || CheckCircle2;
            return (
              <div 
                key={item.id} 
                className="p-6 rounded-lg bg-cream/50 border border-border hover:border-terracotta/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-md bg-beige flex items-center justify-center text-terracotta mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-deep-brown mb-2">{item.title}</h3>
                <p className="text-clay text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}