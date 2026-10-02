import React from 'react';
import Hero from '../components/sections/Hero';
import ServicePillars from '../components/sections/ServicePillars';
import FeaturedProjects from '../components/sections/FeaturedProjects';
import WhyChoose from '../components/sections/WhyChoose';
import ProcessSteps from '../components/sections/ProcessSteps';
import ClientMarquee from '../components/sections/ClientMarquee';
import Testimonials from '../components/sections/Testimonials';
import CTASection from '../components/sections/CTASection';

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <ServicePillars />
      <FeaturedProjects />
      <WhyChoose />
      <ProcessSteps />
      <ClientMarquee />
      <Testimonials />
      <CTASection />
    </div>
  );
}
