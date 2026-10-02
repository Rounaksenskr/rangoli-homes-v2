import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

export default function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 bg-cream">
      <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">404 Error</span>
      <h1 className="text-4xl md:text-5xl font-serif text-charcoal font-bold mb-4">Page Not Found</h1>
      <p className="text-clay max-w-md mb-8">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link to="/">
        <Button variant="primary">Return Home</Button>
      </Link>
    </div>
  );
}
