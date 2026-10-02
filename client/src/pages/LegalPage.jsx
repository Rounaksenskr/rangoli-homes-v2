import React from 'react';

export default function LegalPage() {
  return (
    <div className="py-16 md:py-24 max-w-4xl mx-auto px-4 sm:px-6">
      <h1 className="text-3xl md:text-4xl font-serif text-charcoal font-bold mb-6">Terms & Privacy Policy</h1>
      <div className="space-y-6 text-clay leading-relaxed text-sm md:text-base bg-white p-8 rounded-lg border border-border">
        <section>
          <h2 className="text-lg font-serif font-bold text-charcoal mb-2">1. Privacy Policy</h2>
          <p>RangoliHomes respects your privacy. Any personal information gathered via our inquiry or booking forms (such as name, phone number, and email address) is collected strictly to deliver design consultations and project quotations.</p>
        </section>
        <section>
          <h2 className="text-lg font-serif font-bold text-charcoal mb-2">2. Terms of Service</h2>
          <p>All designs, sketches, plans, and estimates provided by RangoliHomes are preliminary until formal contract execution. Service availability is subject to physical site inspection and location viability.</p>
        </section>
      </div>
    </div>
  );
}
