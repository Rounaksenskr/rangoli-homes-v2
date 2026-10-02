import { useState, useEffect } from 'react';
import useReducedMotion from '../../hooks/useReducedMotion';

const STORAGE_KEY = 'rangoli_intro_seen';

export default function DoorIntro({ onDone }) {
  const prefersReduced = useReducedMotion();
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const completeIntro = () => {
    sessionStorage.setItem(STORAGE_KEY, 'true');
    setIsVisible(false);
    if (onDone) onDone();
  };

  useEffect(() => {
    // Skip if previously shown in this session or if reduced motion is preferred
    if (sessionStorage.getItem(STORAGE_KEY) === 'true' || prefersReduced) {
      completeIntro();
      return;
    }

    // Trigger door opening after initial presentation
    const openTimer = setTimeout(() => {
      setIsOpen(true);
    }, 700);

    // Remove from DOM when opening animation completes
    const removeTimer = setTimeout(() => {
      completeIntro();
    }, 2200);

    return () => {
      clearTimeout(openTimer);
      clearTimeout(removeTimer);
    };
  }, [prefersReduced]);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 z-50 pointer-events-auto overflow-hidden"
      role="region" 
      aria-label="Welcome Introduction"
    >
      {/* Skip Button */}
      <button
        onClick={completeIntro}
        className="absolute top-6 right-6 z-50 px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-cream/80 hover:text-cream bg-charcoal/40 hover:bg-charcoal/60 backdrop-blur-md rounded-full border border-cream/20 transition-all cursor-pointer"
      >
        Skip
      </button>

      {/* Center Brand Identity */}
      <div 
        className={`absolute inset-0 z-40 flex flex-col items-center justify-center pointer-events-none transition-opacity duration-700 ${
          isOpen ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
        }`}
      >
        <div className="w-16 h-16 rounded-full bg-primary text-cream flex items-center justify-center shadow-2xl mb-3 border-2 border-cream/20">
          <span className="font-serif font-bold text-2xl">R</span>
        </div>
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-cream tracking-wide">
          Rangoli<span className="text-primary font-normal">Homes</span>
        </h2>
        <p className="text-xs uppercase tracking-widest text-beige/70 mt-1">Interiors & Finishes</p>
      </div>

      {/* Left Panel */}
      <div
        className={`absolute top-0 left-0 w-1/2 h-full bg-[#1F1B18] border-r border-[#2B2623] transition-transform duration-1000 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          isOpen ? '-translate-x-full' : 'translate-x-0'
        }`}
      />

      {/* Right Panel */}
      <div
        className={`absolute top-0 right-0 w-1/2 h-full bg-[#1F1B18] border-l border-[#2B2623] transition-transform duration-1000 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          isOpen ? 'translate-x-full' : 'translate-x-0'
        }`}
      />
    </div>
  );
}
