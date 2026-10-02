import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import useSEO from '../hooks/useSEO';

export default function NotFoundPage() {
  useSEO('404 Page Not Found', 'The requested page could not be found on RangoliHomes.');

  return (
    <div className="relative overflow-hidden min-h-[70vh] flex flex-col items-center justify-center text-center px-4 bg-cream">
      <div 
        className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: `url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80)` }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center">
        <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">404 Error</span>
      <h1 className="text-4xl md:text-5xl font-serif text-charcoal font-bold mb-4">Page Not Found</h1>
      <p className="text-clay max-w-md mb-8">
        The page you are looking for doesn't exist or has been moved.
      </p>
        <Link to="/">
          <Button variant="primary">Return Home</Button>
        </Link>
      </div>
    </div>
  );
}
