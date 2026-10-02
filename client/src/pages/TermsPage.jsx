import React from 'react';
import useSEO from '../hooks/useSEO';

export default function TermsPage() {
  useSEO(
    'Terms of Service',
    'Terms of Service for RangoliHomes interior architecture and contracting solutions.'
  );

  return (
    <div className="min-h-screen bg-cream py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">Agreement & Guidelines</span>
        <h1 className="text-3xl md:text-4xl font-serif text-charcoal font-bold mt-1">Terms of Service</h1>
        <p className="text-xs text-clay mt-1">Last updated: October 2026 (Editable Template)</p>
      </div>

      <div className="space-y-6 text-clay leading-relaxed text-sm md:text-base bg-surface p-8 sm:p-10 rounded-xl border border-border shadow-sm">
        <section>
          <h2 className="text-lg font-serif font-bold text-charcoal mb-2">1. Scope of Consultation</h2>
          <p>
            Initial consultations (whether held at our design studio or virtually via video call) provide conceptual guidance, layout assessments, and budget brackets. Preliminary discussions do not constitute binding architectural construction commitments until a formal project agreement is signed.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-serif font-bold text-charcoal mb-2">2. Quotations & Pricing Estimates</h2>
          <p>
            All price brackets displayed across our digital channels (including per-square-foot baseline estimates) are indicative. Final quotations are prepared following comprehensive physical site measurement, structural moisture evaluations, and definitive material selections.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-serif font-bold text-charcoal mb-2">3. Intellectual Property</h2>
          <p>
            All bespoke design layouts, 3D renderings, elevations, architectural drawings, and finish palettes created by the RangoliHomes design team remain the intellectual property of RangoliHomes unless explicitly transferred via written contract.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-serif font-bold text-charcoal mb-2">4. Project Timelines & Handover</h2>
          <p>
            Milestone handover timelines are established individually for each contracted scope of work. Commencement of fabrication is contingent upon confirmed site readiness, power availability, and approved initial design sign-offs.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-serif font-bold text-charcoal mb-2">5. Governing Law</h2>
          <p>
            These terms are governed in accordance with the laws of India. Any disputes arising in connection with services rendered shall be subject to the exclusive jurisdiction of the courts of Bengaluru, Karnataka.
          </p>
        </section>
      </div>
    </div>
  </div>
  );
}
