import React from 'react';
import useSEO from '../hooks/useSEO';

export default function PrivacyPolicyPage() {
  useSEO(
    'Privacy Policy',
    'Privacy Policy for RangoliHomes. Learn how we handle your personal information and project data.'
  );

  return (
    <div className="min-h-screen bg-cream py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">Legal & Compliance</span>
        <h1 className="text-3xl md:text-4xl font-serif text-charcoal font-bold mt-1">Privacy Policy</h1>
        <p className="text-xs text-clay mt-1">Last updated: October 2026 (Editable Template)</p>
      </div>

      <div className="space-y-6 text-clay leading-relaxed text-sm md:text-base bg-surface p-8 sm:p-10 rounded-xl border border-border shadow-sm">
        <section>
          <h2 className="text-lg font-serif font-bold text-charcoal mb-2">1. Information We Collect</h2>
          <p>
            When you request a consultation, submit an inquiry, or subscribe to our newsletter, RangoliHomes collects information including your name, contact phone number, email address, property type, estimated budget, and uploaded floor plan dimensions.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-serif font-bold text-charcoal mb-2">2. How We Use Your Information</h2>
          <p>
            We use collected data solely to:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-xs sm:text-sm">
            <li>Schedule and conduct interior design consultations and studio sessions.</li>
            <li>Prepare custom project estimates, 3D elevation drawings, and BOQ cost brackets.</li>
            <li>Communicate project timeline updates and design milestone reviews.</li>
            <li>Deliver design journals and renovation guides if you subscribed to our newsletter.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-serif font-bold text-charcoal mb-2">3. Data Sharing & Third Parties</h2>
          <p>
            RangoliHomes does not sell, rent, or trade your personal information. Data is shared only with verified operational partners (such as lead architects and structural site supervisors) directly engaged in your project execution.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-serif font-bold text-charcoal mb-2">4. Data Security</h2>
          <p>
            We implement administrative and technical security measures to protect your submitted floor plans and personal details against unauthorized access.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-serif font-bold text-charcoal mb-2">5. Contact Our Privacy Officer</h2>
          <p>
            If you have questions regarding this policy or wish to request data deletion, contact us at <span className="text-primary font-medium">contact@rangolihomes.com</span>.
          </p>
        </section>
      </div>
    </div>
  </div>
  );
}
