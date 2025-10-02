'use client';

export default function SectionHeader({ 
  icon, 
  title, 
  subtitle, 
  accentColor = "text-[#00abf0]",
  className = ""
}) {
  return (
    <div className={`text-center mb-12 sm:mb-16 ${className}`}>
      {icon && (
        <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-[#00abf0]/10 rounded-full mb-6 border border-[#00abf0]/30">
          {icon}
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-audiowide mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg sm:text-xl text-gray-300 font-audiowide max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
