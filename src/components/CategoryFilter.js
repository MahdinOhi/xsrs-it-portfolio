'use client';

export default function CategoryFilter({ 
  categories, 
  selectedCategory, 
  onCategoryChange,
  className = ""
}) {
  return (
    <section className={`relative z-10 pb-8 md:pb-12 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`px-6 py-3 rounded-full font-audiowide text-sm transition-all duration-300 hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-[#00abf0] text-white shadow-lg shadow-[#00abf0]/30'
                  : 'bg-black/30 text-gray-300 border border-[#00abf0]/30 hover:border-[#00abf0]/60 hover:bg-[#00abf0]/10'
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
