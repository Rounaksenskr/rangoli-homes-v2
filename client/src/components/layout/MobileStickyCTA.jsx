import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PhoneCall, Calendar } from 'lucide-react';
import { siteConfig } from '../../config/site'; 

export default function MobileStickyCTA() {
  const location = useLocation();

  if (location.pathname === '/book-consultation') {
    return null;
  }

  return (
    <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-surface/95 backdrop-blur-md border-t border-border px-4 py-2.5 flex items-center gap-3">
      <a
        href={`tel:${siteConfig.phone}`}
        className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-md border border-border bg-cream text-xs font-semibold text-charcoal active:bg-beige"
      >
        <PhoneCall className="w-3.5 h-3.5 text-primary" />
        <span>Call Now</span>
      </a>

      <Link
        to="/book-consultation"
        className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-md bg-[#814882] text-white text-xs font-semibold shadow-sm active:bg-[#6A3A6B]"
      >
        <Calendar className="w-3.5 h-3.5" />
        <span>Book Consult</span>
      </Link>
    </div>
  );
}
