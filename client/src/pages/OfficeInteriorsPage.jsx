import { Link } from 'react-router-dom';
import { Briefcase, ArrowRight, ShieldCheck } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import Button from '../components/ui/Button';
import SafeImage from '../components/ui/SafeImage';
import { officeServices } from '../data/services';
import { heroImages, pageBackdrops } from '../data/images';
import PricingSection from '../components/sections/PricingSection';
import useSEO from '../hooks/useSEO';

export default function OfficeInteriorsPage() {
  useSEO(
    'Corporate Office Interiors',
    'Turnkey corporate fitouts, collaborative workstations, executive boardrooms, and acoustic installations in Bengaluru.'
  );

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative overflow-hidden bg-cream py-16 md:py-24 border-b border-border/60">
        {/* Ambient Architectural Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-70"
          style={{ backgroundImage: `url(${pageBackdrops?.officeInteriors || heroImages.officeInteriors})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/85 to-cream/50 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/60 via-transparent to-cream pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-beige border border-border text-primary text-xs font-semibold uppercase tracking-wider">
              <Briefcase className="w-3.5 h-3.5" /> Corporate Architecture
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-charcoal font-bold leading-tight">
              Ergonomic Workspaces, <br />
              <span className="italic font-normal text-primary">Designed for Performance.</span>
            </h1>
            <p className="text-clay text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans">
              Turnkey corporate solutions—from high-density collaborative benches to acoustic meeting pods and executive suites.
            </p>
            <div className="pt-2">
              <Link to="/book-consultation">
                <Button variant="primary" size="lg">
                  Plan Your Office
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl border-4 border-surface bg-beige">
              <SafeImage
                src={heroImages.officeInteriors || heroImages.main}
                alt="RangoliHomes Modern Corporate Office"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Solutions"
            title="Commercial Infrastructure"
            subtitle="Built to fire-safety, acoustic, and ergonomic standards with zero disruption to active business cycles."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {officeServices.map((item) => (
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
                    Request specs & layout <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Pricing Estimates */}
      <PricingSection
        categoryFilter="Office Interiors"
        badge="Commercial Estimates"
        title="Commercial Fitout Pricing"
        subtitle="Indicative turnkey cost brackets per sq.ft. for acoustic partitions, open workstations, and executive cabins."
      />

      {/* Standards */}
      <section className="py-12 bg-beige/40 border-y border-border">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="p-4">
            <ShieldCheck className="w-6 h-6 text-primary mx-auto mb-2" />
            <h4 className="font-bold text-charcoal text-sm">Acoustic & Fire Rated</h4>
            <p className="text-xs text-clay mt-1">Certified partitions and ceiling tiles</p>
          </div>
          <div className="p-4">
            <ShieldCheck className="w-6 h-6 text-primary mx-auto mb-2" />
            <h4 className="font-bold text-charcoal text-sm">Fast-Track Fitouts</h4>
            <p className="text-xs text-clay mt-1">Parallel offsite modular fabrication</p>
          </div>
          <div className="p-4">
            <ShieldCheck className="w-6 h-6 text-primary mx-auto mb-2" />
            <h4 className="font-bold text-charcoal text-sm">Turnkey HVAC & Electrical</h4>
            <p className="text-xs text-clay mt-1">Single-window MEP engineering</p>
          </div>
        </div>
      </section>
    </div>
  );
}
