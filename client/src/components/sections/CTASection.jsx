import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, PhoneCall } from 'lucide-react';
import Button from '../ui/Button';
import { siteConfig } from '../../config/site';

export default function CTASection() {
  return (
    <section className="py-16 md:py-20 bg-charcoal text-cream relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <span className="text-xs font-semibold uppercase tracking-widest text-primary-light">Ready To Begin?</span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight">
          Bring Clarity and Elegance to Your Next Interior Project.
        </h2>
        <p className="text-beige/80 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-sans">
          Schedule an in-person or virtual consultation with our design directors. We review site blueprints, material preferences, and accurate timelines.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link to="/book-consultation" className="w-full sm:w-auto">
            <Button variant="primary" size="lg" className="w-full sm:w-auto bg-primary text-white hover:bg-primary/90 border-transparent">
              <Calendar className="w-4 h-4 mr-1" />
              Book Free Consultation
            </Button>
          </Link>
          <a href={`tel:${siteConfig.phone}`} className="w-full sm:w-auto">
            <Button variant="outline" size="lg" className="w-full sm:w-auto border-cream/30 text-cream hover:bg-cream/10">
              <PhoneCall className="w-4 h-4 mr-1" />
              Call Directly
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
