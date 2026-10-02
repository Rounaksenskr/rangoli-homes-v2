import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import SectionHeader from '../components/ui/SectionHeader';
import ProjectFilters from '../components/projects/ProjectFilters';
import ProjectGrid from '../components/projects/ProjectGrid';
import Lightbox from '../components/projects/Lightbox';
import { projects } from '../data/projects';
import { pageBackdrops } from '../data/images';
import useSEO from '../hooks/useSEO';

const CATEGORIES = [
  'All',
  'Home Interiors',
  'Modular Kitchens',
  'Bedrooms',
  'Office Interiors',
  'Paint & Textures'
];

export default function ProjectsPage() {
  useSEO(
    'Projects Portfolio',
    'Browse executed residential homes, modular kitchens, corporate suites, and wall texture projects in Bengaluru.'
  );

  const [searchParams, setSearchParams] = useSearchParams();
  const currentCategory = searchParams.get('category') || 'All';
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects = useMemo(() => {
    if (currentCategory.toLowerCase() === 'all') return projects;
    return projects.filter(
      (p) => p.category?.toLowerCase() === currentCategory.toLowerCase()
    );
  }, [currentCategory]);

  const handleSelectCategory = (cat) => {
    if (cat.toLowerCase() === 'all') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category: cat });
    }
  };

  return (
    <div className="bg-cream min-h-screen flex flex-col">
      {/* Portfolio Hero Banner */}
      <section className="relative overflow-hidden py-20 md:py-28 border-b border-border/60 bg-cream">
        <div 
          className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-75"
          style={{ backgroundImage: `url(${pageBackdrops?.projects || "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80"})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/70 via-cream/45 to-cream pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Portfolio"
            title="Executed Spaces & Finishes"
            subtitle="Explore our completed projects across luxury residential homes, dynamic corporate offices, and wall textures."
          />
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1 w-full">
        <ProjectFilters
          categories={CATEGORIES}
          activeCategory={currentCategory}
          onSelectCategory={handleSelectCategory}
        />

        <ProjectGrid
          projects={filteredProjects}
          onSelectProject={setActiveProject}
        />

        {activeProject && (
          <Lightbox
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        )}
      </div>
    </div>
  );
}
