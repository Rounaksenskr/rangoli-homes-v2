import React from 'react';
// client/src/components/layout/Footer.jsx

import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { siteConfig } from '../../config/site'; // <-- Change to curly braces
function FacebookIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
    </svg>
  );
}

function InstagramIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
    </svg>
  );
}
export default function Footer() {
  // ... rest of the component remains unchanged
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-beige border-t border-border text-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand & Story */}
          <div className="space-y-4">
            <Link to="/" className="font-serif text-2xl font-bold tracking-tight">
              Rangoli<span className="text-primary">Homes</span>
            </Link>
            <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed">
              Transforming residential and commercial properties into curated, functional sanctuaries. Thoughtful design, transparent delivery.
            </p>
            <div className="flex items-center space-x-3 text-charcoal/70 pt-2">
              {siteConfig.social?.instagram && (
                <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-primary p-1.5 bg-surface rounded-full border border-border" aria-label="Instagram">
                  <InstagramIcon className="w-4 h-4" />
                </a>
              )}
              {siteConfig.social?.facebook && (
                <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-primary p-1.5 bg-surface rounded-full border border-border" aria-label="Facebook">
                  <FacebookIcon className="w-4 h-4" />
                </a>
              )}
              {siteConfig.social?.linkedin && (
                <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary p-1.5 bg-surface rounded-full border border-border" aria-label="LinkedIn">
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Service Links */}
          <div>
            <h4 className="font-serif text-base font-semibold text-charcoal uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-charcoal/80">
              <li>
                <Link to="/home-interiors" className="hover:text-primary transition-colors">Home Interiors</Link>
              </li>
              <li>
                <Link to="/office-interiors" className="hover:text-primary transition-colors">Office Interiors</Link>
              </li>
              <li>
                <Link to="/paint-textures" className="hover:text-primary transition-colors">Paint & Wall Textures</Link>
              </li>
              <li>
                <Link to="/paint-textures" className="hover:text-primary transition-colors">Waterproofing Solutions</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-primary transition-colors">Modular Kitchens</Link>
              </li>
            </ul>
          </div>

          {/* Quick Navigation & Legal */}
          <div>
            <h4 className="font-serif text-base font-semibold text-charcoal uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-charcoal/80">
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-primary transition-colors">Our Projects</Link>
              </li>
              <li>
                <Link to="/clients" className="hover:text-primary transition-colors">Clients</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-serif text-base font-semibold text-charcoal uppercase tracking-wider mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-charcoal/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>
                  {typeof siteConfig.address === 'object' 
                    ? `${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.state}` 
                    : siteConfig.address || 'India'}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-primary">
                  {siteConfig.phone || '+91 XXXXX XXXXX'}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-primary">
                  {siteConfig.email || 'info@rangolihomes.com'}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-primary shrink-0" />
                <span>{siteConfig.businessHours || 'Mon - Sat: 10:00 AM - 6:00 PM'}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-border/80 flex flex-col sm:flex-row items-center justify-between text-xs text-charcoal/60 gap-4">
          <p>© {currentYear} RangoliHomes. All rights reserved.</p>
          <p>Handcrafted Interior & Architectural Design.</p>
        </div>
      </div>
    </footer>
  );
}
