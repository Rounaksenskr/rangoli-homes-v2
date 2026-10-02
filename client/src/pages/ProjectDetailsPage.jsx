import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Tag, ArrowRight, Sparkles } from 'lucide-react';
import SafeImage from '../components/ui/SafeImage';
import Button from '../components/ui/Button';
import { projects } from '../data/projects';
import useSEO from '../hooks/useSEO';

export default function ProjectDetailsPage() {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  useSEO(
    project ? `${project.title} - Portfolio Showcase` : 'Project Details',
    project ? project.description : 'Explore completed architecture and interior design projects by RangoliHomes.'
  );

  if (!project) {
    return (
      <div className="py-24 max-w-3xl mx-auto px-4 text-center space-y-4">
        <h1 className="font-serif text-3xl font-bold text-charcoal">Project Not Found</h1>
        <p className="text-sm text-clay">The project you are looking for does not exist or may have been archived.</p>
        <div className="pt-2">
          <Link to="/projects">
            <Button variant="primary" size="md">
              <ArrowLeft className="w-4 h-4 mr-1.5" /> Back to All Projects
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const allImages = [
    project.image,
    ...(project.gallery || []).filter((img) => img !== project.image),
  ];

  return (
    <div className="py-12 md:py-20 bg-cream min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline uppercase tracking-wider"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Portfolio
          </Link>
        </div>

        {/* Project Header Info */}
        <div className="relative overflow-hidden bg-surface rounded-2xl border border-border p-6 sm:p-10 shadow-sm mb-10">
          <div 
            className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-10"
            style={{ backgroundImage: `url(${project.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/95 to-surface/85 pointer-events-none" />
          
          <div className="relative z-10">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5">
                <Tag className="w-3 h-3" /> {project.category}
              </span>
              {project.location && (
                <span className="text-xs text-clay inline-flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-primary" /> {project.location}
                </span>
              )}
            </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-charcoal mb-4">
            {project.title}
          </h1>

          <p className="text-clay text-sm sm:text-base leading-relaxed max-w-3xl">
            {project.description}
          </p>
        </div>
      </div>

        {/* Main Showcase Image */}
        <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-lg border border-border mb-8 bg-beige">
          <SafeImage
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>

        {/* Gallery Grid if more images exist */}
        {allImages.length > 1 && (
          <div className="mb-12">
            <h3 className="font-serif text-2xl font-bold text-charcoal mb-4">
              Project Gallery
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {allImages.slice(1).map((img, idx) => (
                <div key={idx} className="aspect-[4/3] rounded-xl overflow-hidden border border-border shadow-sm bg-beige">
                  <SafeImage
                    src={img}
                    alt={`${project.title} angle ${idx + 2}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Call To Action Box */}
        <div className="bg-gradient-to-br from-surface to-beige/40 rounded-2xl border border-primary/20 p-8 sm:p-12 text-center max-w-3xl mx-auto shadow-soft">
          <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
            <Sparkles className="w-6 h-6" />
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal mb-2">
            Inspired by this project?
          </h2>
          <p className="text-xs sm:text-sm text-clay max-w-lg mx-auto mb-6 leading-relaxed">
            Schedule a session with our design directors to plan a similar custom aesthetic tailored to your floor dimensions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={`/book-consultation?service=${encodeURIComponent(project.category)}`}>
              <Button variant="primary" size="lg">
                Schedule Consultation
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </Link>
            <Link to="/projects">
              <Button variant="outline" size="lg">
                Explore More Spaces
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
