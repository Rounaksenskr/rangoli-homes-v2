import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Sparkles, Clock } from 'lucide-react';
import Button from '../ui/Button';
import SafeImage from '../ui/SafeImage';
import { heroImages } from '../../data/images';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream pt-8 pb-16 md:pt-16 md:pb-24 border-b border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-beige border border-border/80 text-clay text-xs tracking-wider uppercase font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span>Thoughtful Design & Quality Craftsmanship</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-charcoal font-bold tracking-tight leading-[1.15]">
              Designing Spaces <br className="hidden sm:inline" />
              <span className="italic font-normal text-primary">You Love Living In.</span>
            </h1>

            <p className="text-clay text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans">
              Premium residential interiors, high-productivity office environments, and specialized paint finishes executed with precision.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link to="/book-consultation" className="w-full sm:w-auto">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Book Free Consultation
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/projects" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Explore Portfolio
                </Button>
              </Link>
            </div>

            <div className="pt-6 border-t border-border/80 grid grid-cols-3 gap-4 text-center lg:text-left">
              <div className="flex flex-col sm:flex-row items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-charcoal">10-Year Warranty</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-2">
                <Clock className="w-4 h-4 text-primary shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-charcoal">45-Day Handover</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-charcoal">Transparent Pricing</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl border-4 border-surface bg-beige">
                <SafeImage
                  src={heroImages.main}
                  alt="Modern warm interior living space by RangoliHomes"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-surface p-4 rounded-lg shadow-xl border border-border hidden sm:block max-w-[210px]">
                <p className="text-xs uppercase tracking-wider text-clay font-bold mb-1">Standard Guarantee</p>
                <p className="text-xs text-charcoal font-serif italic">100% on-time execution without hidden cost variations.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
