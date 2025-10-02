'use client';

import { useState } from 'react';

export default function ProjectCard({ 
  project, 
  index, 
  isVisible, 
  className = "" 
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative bg-black/30 backdrop-blur-sm rounded-2xl border border-[#00abf0]/30 overflow-hidden hover:border-[#00abf0]/60 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-[#00abf0]/20 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        
        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-audiowide ${
            project.status === 'Completed' 
              ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
              : project.status === 'In Progress'
              ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
              : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
          }`}>
            {project.status}
          </span>
        </div>

        {/* Hover Overlay */}
        <div className={`absolute inset-0 bg-[#00abf0]/20 flex items-center justify-center transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="flex space-x-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-[#00abf0] font-audiowide bg-[#00abf0]/10 px-3 py-1 rounded-full">
            {project.category}
          </span>
          <span className="text-sm text-gray-400 font-audiowide">
            {project.year}
          </span>
        </div>

        <h3 className="text-xl font-bold text-white font-audiowide mb-3 group-hover:text-[#00abf0] transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-gray-300 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-2 py-1 bg-[#00abf0]/10 text-[#00abf0] text-xs font-audiowide rounded border border-[#00abf0]/30"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-gray-600/20 text-gray-400 text-xs font-audiowide rounded border border-gray-600/30">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>

        {/* Project Stats */}
        <div className="flex items-center justify-between text-sm text-gray-400">
          <span className="font-audiowide">Duration: {project.duration}</span>
          <span className="font-audiowide">Client: {project.client}</span>
        </div>
      </div>
    </div>
  );
}
