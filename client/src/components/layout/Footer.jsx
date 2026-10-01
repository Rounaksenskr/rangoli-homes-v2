import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Linkedin } from 'lucide-react';
import siteConfig from '../../config/site';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-beige border-t border-border text-deep-brown">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand & Story */}
          <div className="space-y-4">
            <Link to="/" className="font-serif text-2xl font-bold tracking-tight">
              Rangoli<span className="text-terracotta">Homes</span>
            </Link>
            <p className="text-xs sm:text-sm text-deep-brown/70 leading-relaxed">
              Transforming residential and commercial properties into curated, functional sanctuaries. Thoughtful design, transparent delivery.
            </p>
            <div className="flex items-center space-x-3 text-deep-brown/70 pt-2">
              {siteConfig.social?.instagram && (
                <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-terracotta p-1.5 bg-surface rounded-full border border-border" aria-label="Instagram">
                  <Instagram className="w-4 h-4" />
                </a>
              )}
              {siteConfig.social?.facebook && (
                <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-terracotta p-1.5 bg-surface rounded-full border border-border" aria-label="Facebook">
                  <Facebook className="w-4 h-4" />
                </a>
              )}
              {siteConfig.social?.linkedin && (
                <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-terracotta p-1.5 bg-surface rounded-full border border-border" aria-label="LinkedIn">
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Service Links */}
          <div>
            <h4 className="font-serif text-base font-semibold text-deep-brown uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-deep-brown/80">
              <li>
                <Link to="/home-interiors" className="hover:text-terracotta transition-colors">Home Interiors</Link>
              </li>
              <li>
                <Link to="/office-interiors" className="hover:text-terracotta transition-colors">Office Interiors</Link>
              </li>
              <li>
                <Link to="/paint-textures" className="hover:text-terracotta transition-colors">Paint & Wall Textures</Link>
              </li>
              <li>
                <Link to="/paint-textures" className="hover:text-terracotta transition-colors">Waterproofing Solutions</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-terracotta transition-colors">Modular Kitchens</Link>
              </li>
            </ul>
          </div>

          {/* Quick Navigation & Legal */}
          <div>
            <h4 className="font-serif text-base font-semibold text-deep-brown uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-deep-brown/80">
              <li>
                <Link to="/about" className="hover:text-terracotta transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-terracotta transition-colors">Our Projects</Link>
              </li>
              <li>
                <Link to="/clients" className="hover:text-terracotta transition-colors">Clients</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-terracotta transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-terracotta transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-terracotta transition-colors">Terms of Service</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-serif text-base font-semibold text-deep-brown uppercase tracking-wider mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-deep-brown/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
                <span>{siteConfig.address || 'India'}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-terracotta shrink-0" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-terracotta">
                  {siteConfig.phone || '+91 XXXXX XXXXX'}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-terracotta shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-terracotta">
                  {siteConfig.email || 'info@rangolihomes.com'}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-terracotta shrink-0" />
                <span>{siteConfig.hours || 'Mon - Sat: 10:00 AM - 6:00 PM'}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-border/80 flex flex-col sm:flex-row items-center justify-between text-xs text-deep-brown/60 gap-4">
          <p>© {currentYear} RangoliHomes. All rights reserved.</p>
          <p>Handcrafted Interior & Architectural Design.</p>
        </div>
      </div>
    </footer>
  );
}