import ProjectCard from '../cards/ProjectCard';

export default function ProjectGrid({ projects, onSelectProject }) {
  if (!projects || projects.length === 0) {
    return (
      <div className="py-16 text-center text-clay text-sm">
        No projects found for the selected category.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((item) => (
        <div key={item.id} onClick={() => onSelectProject(item)} className="cursor-pointer">
          <ProjectCard project={item} />
        </div>
      ))}
    </div>
  );
}
