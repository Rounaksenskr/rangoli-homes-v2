import React from 'react';
// client/src/components/layout/WhatsAppButton.jsx
import { useLocation } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { siteConfig } from '../../config/site'; // <-- Change to curly braces

export default function WhatsAppButton() {
  // ...
  const location = useLocation();

  // Suppress button on booking workflow to eliminate distraction
  if (location.pathname === '/book-consultation' || location.pathname === '/booking-success') {
    return null;
  }

  const rawNumber = siteConfig.whatsappNumber || siteConfig.phone || '';
  const cleanNumber = rawNumber.replace(/[^0-9]/g, '');
  const message = encodeURIComponent(
    'Hello RangoliHomes, I am interested in your interior and paint services.'
  );
  const waUrl = `https://wa.me/${cleanNumber}?text=${message}`;

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-5 sm:bottom-6 sm:right-6 z-40 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
      aria-label="Chat with RangoliHomes on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-white" />
    </a>
  );
}
