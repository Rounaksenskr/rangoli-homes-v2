import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import MobileStickyCTA from './MobileStickyCTA';
import DoorIntro from '../intro/DoorIntro';
import InquiryModal from '../enquiry/InquiryModal';

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-cream text-charcoal font-sans selection:bg-primary selection:text-white pb-14 sm:pb-0">
      <DoorIntro />
      <InquiryModal />
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
      <WhatsAppButton />
      <MobileStickyCTA />
    </div>
  );
}
