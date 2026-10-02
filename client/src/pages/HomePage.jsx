import React from 'react';
import Hero from '../components/sections/Hero';
import ServicePillars from '../components/sections/ServicePillars';
import FeaturedProjects from '../components/sections/FeaturedProjects';
import WhyChoose from '../components/sections/WhyChoose';
import ProcessSteps from '../components/sections/ProcessSteps';
import ClientMarquee from '../components/sections/ClientMarquee';
import Testimonials from '../components/sections/Testimonials';
import PricingSection from '../components/sections/PricingSection';
import CTASection from '../components/sections/CTASection';
import useSEO from '../hooks/useSEO';

export default function HomePage() {
  useSEO(
    'Turnkey Interiors & Architectural Finishes',
    'RangoliHomes delivers turnkey residential interiors, agile corporate workspaces, and bespoke paint and wall finishes in Bengaluru.'
  );

  return (
    <div className="flex flex-col w-full">
      <Hero />
      <ServicePillars />
      <FeaturedProjects />
      <WhyChoose />
      <ProcessSteps />
      <PricingSection />
      <ClientMarquee />
      <Testimonials />
      <CTASection />
    </div>
  );
}
