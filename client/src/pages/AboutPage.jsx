import { ShieldCheck, Compass, HeartHandshake, Eye } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import SafeImage from '../components/ui/SafeImage';
import { heroImages, pageBackdrops } from '../data/images';
import useSEO from '../hooks/useSEO';

export default function AboutPage() {
  useSEO(
    'About Us',
    'Learn about RangoliHomes—our design philosophy, craftsmanship values, and transparent turnkey execution in Bengaluru.'
  );

  return (
    <div className="flex flex-col w-full bg-cream">
      {/* Story Hero Banner */}
      <section className="relative overflow-hidden py-20 md:py-28 border-b border-border/60 bg-cream">
        <div 
          className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-70"
          style={{ backgroundImage: `url(${pageBackdrops?.about || heroImages.about})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/85 to-cream/50 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/60 via-transparent to-cream pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase font-bold text-primary tracking-wider">Our Story</span>
              <h1 className="text-4xl sm:text-5xl font-serif text-charcoal font-bold leading-tight">
                Thoughtful Design, <br />
                <span className="italic font-normal text-primary">Grounded in Integrity.</span>
              </h1>
              <p className="text-clay text-sm sm:text-base leading-relaxed">
                RangoliHomes was founded to eliminate the uncertainty common in interior contracting. We combine European modular manufacturing standards with skilled craftsmanship, delivering homes and work spaces with zero hidden variations.
              </p>
              <p className="text-clay text-sm sm:text-base leading-relaxed">
                Whether fitting a modular kitchen, transforming a corporate workspace, or applying specialized wall textures, every project receives end-to-end supervision.
              </p>
            </div>
            <div className="lg:col-span-6">
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl border-4 border-surface bg-beige">
                <SafeImage
                  src={heroImages.about || heroImages.main}
                  alt="RangoliHomes Design Studio"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-16 bg-surface border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Philosophy"
            title="Core Guiding Principles"
            subtitle="How we maintain reliability across all phases of interior architecture."
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-lg bg-cream/40 border border-border text-center">
              <Compass className="w-6 h-6 text-primary mx-auto mb-3" />
              <h3 className="font-serif font-bold text-charcoal mb-1">Functional First</h3>
              <p className="text-xs text-clay leading-relaxed">Aesthetic flair built upon functional workflows and ergonomic requirements.</p>
            </div>
            <div className="p-6 rounded-lg bg-cream/40 border border-border text-center">
              <ShieldCheck className="w-6 h-6 text-primary mx-auto mb-3" />
              <h3 className="font-serif font-bold text-charcoal mb-1">Authentic Materials</h3>
              <p className="text-xs text-clay leading-relaxed">100% factory-pressed BWR ply, anti-scratch finishes, and certified fixtures.</p>
            </div>
            <div className="p-6 rounded-lg bg-cream/40 border border-border text-center">
              <Eye className="w-6 h-6 text-primary mx-auto mb-3" />
              <h3 className="font-serif font-bold text-charcoal mb-1">Transparent Pricing</h3>
              <p className="text-xs text-clay leading-relaxed">Itemized scope sheets without unexpected mid-project cost escalations.</p>
            </div>
            <div className="p-6 rounded-lg bg-cream/40 border border-border text-center">
              <HeartHandshake className="w-6 h-6 text-primary mx-auto mb-3" />
              <h3 className="font-serif font-bold text-charcoal mb-1">Post-Handover Care</h3>
              <p className="text-xs text-clay leading-relaxed">Dedicated warranty audits and prompt resolution on all hardware adjustments.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
