import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import ServiceCard from '../cards/ServiceCard';
import { servicePillars } from '../../data/services';

export default function ServicePillars() {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Disciplines"
          title="End-to-End Interior & Finishing Pillars"
          subtitle="Explore our three specialized verticals tailored for residential, commercial, and architectural decorative needs."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicePillars.map((pillar) => (
            <ServiceCard key={pillar.id} service={pillar} />
          ))}
        </div>
      </div>
    </section>
  );
}