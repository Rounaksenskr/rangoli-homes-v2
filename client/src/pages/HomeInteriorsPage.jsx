import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import Button from '../components/ui/Button';
import SafeImage from '../components/ui/SafeImage';
import { homeServices } from '../data/services';
import { processSteps } from '../data/process';
import { heroImages, pageBackdrops } from '../data/images';

import PricingSection from '../components/sections/PricingSection';
import useSEO from '../hooks/useSEO';

export default function HomeInteriorsPage() {
  useSEO(
    'Residential Home Interiors',
    'Custom modular kitchens, wardrobe systems, and bespoke interior renovations for apartments and villas in Bengaluru.'
  );

  return (
    <div className="flex flex-col w-full">
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-cream py-16 md:py-24 border-b border-border/60">
        {/* Ambient Architectural Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-70"
          style={{ backgroundImage: `url(${pageBackdrops?.homeInteriors || heroImages.homeInteriors})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/85 to-cream/50 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/60 via-transparent to-cream pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-beige border border-border text-primary text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> Residential Craftsmanship
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-charcoal font-bold leading-tight">
              Bespoke Living Spaces, <br />
              <span className="italic font-normal text-primary">Engineered for Comfort.</span>
            </h1>
            <p className="text-clay text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans">
              From modular kitchens with European hardware to ergonomic wardrobe systems and complete flat makeovers.
            </p>
            <div className="pt-2">
              <Link to="/book-consultation">
                <Button variant="primary" size="lg">
                  Book Free Consultation
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl border-4 border-surface bg-beige">
              <SafeImage
                src={heroImages.homeInteriors || heroImages.main}
                alt="RangoliHomes Luxury Living Room"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Categories"
            title="Complete Residential Solutions"
            subtitle="Tailored woodwork, factory-finished cabinetry, and space-saving layouts designed for modern living."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {homeServices.map((item) => (
              <div
                key={item.id}
                className="bg-cream/40 rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="aspect-[16/10] overflow-hidden bg-beige">
                  <SafeImage
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-charcoal mb-2">{item.title}</h3>
                    <p className="text-clay text-sm leading-relaxed mb-4">{item.description}</p>
                  </div>
                  <Link to="/book-consultation" className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1">
                    Consult on this service <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section for Residential */}
      <PricingSection
        categoryFilter={['Home Interiors', 'Modular Kitchens']}
        badge="Residential Cost Estimates"
        title="Transparent Residential Pricing"
        subtitle="Upfront cost guidelines for modular woodwork, turnkey home finishing, and custom kitchens."
      />

      {/* Process Section */}
      <section className="py-16 bg-cream border-t border-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Workflow"
            title="Execution Timeline"
            subtitle="Predictable delivery phases backed by guaranteed handover timelines."
          />
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {processSteps.map((step, idx) => (
              <div key={step.id || idx} className="bg-surface p-6 rounded-lg border border-border">
                <span className="text-xs font-bold text-primary tracking-wider uppercase">0{idx + 1}</span>
                <h4 className="font-serif text-base font-bold text-charcoal mt-2 mb-1">{step.title}</h4>
                <p className="text-clay text-xs leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-beige/60 text-center border-t border-border">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <h2 className="text-3xl font-serif font-bold text-charcoal">Have a floor plan ready?</h2>
          <p className="text-clay text-sm sm:text-base leading-relaxed">
            Upload your dimensions or meet our interior designers for a 3D elevation walkthrough and upfront estimate.
          </p>
          <div className="pt-2">
            <Link to="/book-consultation">
              <Button variant="primary" size="lg">Schedule Consultation</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
