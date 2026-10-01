import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Home Interiors', path: '/home-interiors' },
  { name: 'Office Interiors', path: '/office-interiors' },
  { name: 'Paint & Textures', path: '/paint-textures' },
  { name: 'Projects', path: '/projects' },
  { name: 'Clients', path: '/clients' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-cream/95 backdrop-blur-md shadow-sm py-3 border-b border-border'
          : 'bg-cream py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <span className="font-serif text-2xl font-bold tracking-tight text-deep-brown group-hover:text-terracotta transition-colors">
            Rangoli<span className="text-terracotta">Homes</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-7">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm tracking-wide font-medium transition-colors relative py-1 ${
                  isActive
                    ? 'text-terracotta'
                    : 'text-deep-brown/80 hover:text-terracotta'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-terracotta rounded-full" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA Action */}
        <div className="hidden lg:flex items-center">
          <Link to="/book-consultation">
            <Button size="sm" variant="primary">
              Book Free Consultation
            </Button>
          </Link>
        </div>

        {/* Mobile Hamburger Trigger */}
        <div className="flex items-center lg:hidden gap-3">
          <Link to="/book-consultation">
            <Button size="sm" variant="primary" className="text-xs px-3 py-1.5">
              Book
            </Button>
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-deep-brown hover:text-terracotta focus:outline-none"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-in Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[calc(100%+1px)] bg-cream border-b border-border shadow-xl px-6 py-6 transition-all">
          <div className="flex flex-col space-y-4">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-base font-medium py-1 transition-colors ${
                    isActive ? 'text-terracotta font-semibold' : 'text-deep-brown/80 hover:text-terracotta'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div className="pt-4 border-t border-border">
              <Link to="/book-consultation" className="w-full block">
                <Button size="md" variant="primary" className="w-full">
                  Book Free Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}