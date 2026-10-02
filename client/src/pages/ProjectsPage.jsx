import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import SectionHeader from '../components/ui/SectionHeader';
import ProjectFilters from '../components/projects/ProjectFilters';
import ProjectGrid from '../components/projects/ProjectGrid';
import Lightbox from '../components/projects/Lightbox';
import { projects } from '../data/projects';

const CATEGORIES = ['All', 'Home Interiors', 'Office Interiors', 'Paint & Textures'];

export default function ProjectsPage() {
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
    <div className="py-16 md:py-24 bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Portfolio"
          title="Executed Spaces & Finishes"
          subtitle="Explore our completed projects across luxury residential homes, dynamic corporate offices, and wall textures."
        />

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
