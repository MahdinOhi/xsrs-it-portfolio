'use client';

export default function StatsSection({ 
  stats, 
  isVisible, 
  className = "" 
}) {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-700 delay-300 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    } ${className}`}>
      {stats.map((stat, index) => (
        <div key={index} className="text-center space-y-2">
          <div className="text-3xl font-bold text-[#00abf0] font-audiowide">
            {stat.value}
          </div>
          <div className="text-sm text-gray-300 font-audiowide">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
