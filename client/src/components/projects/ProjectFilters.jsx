export default function ProjectFilters({ categories, activeCategory, onSelectCategory }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelectCategory(cat)}
          className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-colors ${
            activeCategory.toLowerCase() === cat.toLowerCase()
              ? 'bg-charcoal text-cream shadow-sm'
              : 'bg-beige/60 text-clay hover:bg-beige border border-border/80'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
