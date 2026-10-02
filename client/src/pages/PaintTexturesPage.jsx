import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Paintbrush, ArrowRight, Check } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import Button from '../components/ui/Button';
import SafeImage from '../components/ui/SafeImage';
import { paintServices } from '../data/services';
import { heroImages } from '../data/images';

const filterCategories = ['All', 'Interior', 'Exterior', 'Texture', 'Waterproofing'];

export default function PaintTexturesPage() {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filteredItems = selectedFilter === 'All'
    ? paintServices
    : paintServices.filter((s) => s.category?.toLowerCase() === selectedFilter.toLowerCase());

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative bg-cream py-16 md:py-24 border-b border-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-beige border border-border text-primary text-xs font-semibold uppercase tracking-wider">
              <Paintbrush className="w-3.5 h-3.5" /> Architectural Finishes
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-charcoal font-bold leading-tight">
              Flawless Textures, <br />
              <span className="italic font-normal text-primary">Deep Protective Finishes.</span>
            </h1>
            <p className="text-clay text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans">
              Italian stuccos, metallic lime washes, weather-proof exterior shields, and certified waterproofing.
            </p>
            <div className="pt-2">
              <Link to="/book-consultation">
                <Button variant="primary" size="lg">
                  Book Colour Consultation
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl border-4 border-surface bg-beige">
              <SafeImage
                src={heroImages.paintTextures || heroImages.main}
                alt="RangoliHomes Textured Wall Finish"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filterable Finishes Grid */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Palette & Textures"
            title="Premium Wall Treatments"
            subtitle="Browse specialized texture patterns, moisture-barrier applications, and signature designer coats."
          />

          {/* Filter Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {filterCategories.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-colors ${
                  selectedFilter === filter
                    ? 'bg-charcoal text-cream shadow-sm'
                    : 'bg-beige/60 text-clay hover:bg-beige border border-border/80'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
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
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-serif text-xl font-bold text-charcoal">{item.title}</h3>
                      <span className="text-[10px] uppercase font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">
                        {item.category || 'Specialty'}
                      </span>
                    </div>
                    <p className="text-clay text-sm leading-relaxed mb-4">{item.description}</p>
                  </div>
                  <Link to="/book-consultation" className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1">
                    Get swatch sample <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Surface Guarantee Banner */}
      <section className="py-12 bg-charcoal text-cream text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-3">
          <h3 className="text-2xl font-serif font-bold">Standard 3-Year Anti-Peel Warranty</h3>
          <p className="text-beige/80 text-sm max-w-xl mx-auto">
            Every paint & texture contract includes electronic wall-moisture testing prior to primer application to guarantee bonding.
          </p>
        </div>
      </section>
    </div>
  );
}
