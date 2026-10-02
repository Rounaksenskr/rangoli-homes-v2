import { useEffect } from 'react';
import { X, MapPin, Tag } from 'lucide-react';
import SafeImage from '../ui/SafeImage';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

export default function Lightbox({ project, onClose }) {
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/80 backdrop-blur-sm animate-fade-in">
      <div className="relative bg-surface rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-border shadow-2xl p-6 sm:p-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-clay hover:text-charcoal rounded-full hover:bg-beige/60 transition-colors"
          aria-label="Close Preview"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content */}
        <div className="space-y-6">
          <div className="aspect-[16/9] w-full rounded-lg overflow-hidden bg-beige">
            <SafeImage
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-4">
            <div>
              <span className="text-xs uppercase font-bold text-primary tracking-wider">
                {project.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-charcoal mt-1">
                {project.title}
              </h2>
            </div>
            {project.location && (
              <div className="flex items-center gap-1.5 text-xs text-clay">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span>{project.location}</span>
              </div>
            )}
          </div>

          <p className="text-clay text-sm sm:text-base leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4 text-primary" />
              <span className="text-xs text-clay">Style: Modern Warm Minimalist</span>
            </div>
            <Link to="/book-consultation" onClick={onClose}>
              <Button variant="primary" size="md">
                Plan Similar Space
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
