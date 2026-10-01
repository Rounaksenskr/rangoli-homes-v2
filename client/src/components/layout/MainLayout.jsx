import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import MobileStickyCTA from './MobileStickyCTA';

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-cream text-deep-brown font-sans selection:bg-terracotta selection:text-white pb-14 sm:pb-0">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
      <WhatsAppButton />
      <MobileStickyCTA />
    </div>
  );
}