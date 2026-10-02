import React from 'react';
import SafeImage from '../ui/SafeImage';
import { clients } from '../../data/clients';

export default function ClientMarquee() {
  return (
    <section className="py-12 bg-surface border-y border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-clay">Trusted by Residential Communities & Enterprises</span>
      </div>
      <div className="flex items-center gap-12 overflow-x-auto no-scrollbar py-2 px-4 max-w-6xl mx-auto justify-center flex-wrap">
        {clients.map((client) => (
          <div key={client.id} className="flex items-center gap-2 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all">
            <SafeImage src={client.logo} alt={client.name} className="h-7 w-auto object-contain" />
            <span className="text-xs font-medium text-clay">{client.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
