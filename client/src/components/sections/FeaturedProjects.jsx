import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import ProjectCard from '../cards/ProjectCard';
import Button from '../ui/Button';
import Lightbox from '../projects/Lightbox';
import { projects } from '../../data/projects';

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 6);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="py-16 md:py-24 bg-cream border-t border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Portfolio"
          title="Featured Transformations"
          subtitle="A selection of recent turnkey residences, corporate suites, and bespoke architectural finishes."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((project) => (
            <ProjectCard 
              key={project.id} 
              {...project} 
              onClick={() => setSelectedProject(project)} 
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/projects">
            <Button variant="outline" size="lg">
              View All Completed Projects
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
        </div>
      </div>
      
      {selectedProject && (
        <Lightbox 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
}
