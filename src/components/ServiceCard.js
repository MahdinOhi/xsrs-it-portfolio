'use client';

import { useState } from 'react';

export default function ServiceCard({ 
  service, 
  index,
  className = "" 
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative bg-black/20 backdrop-blur-sm rounded-2xl border border-[#00abf0]/20 p-6 sm:p-8 hover:border-[#00abf0]/50 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-[#00abf0]/20 ${
        className
      }`}
      style={{ transitionDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Service Icon */}
      <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-[#00abf0]/10 rounded-2xl mb-6 border border-[#00abf0]/30 group-hover:bg-[#00abf0]/20 transition-colors duration-300">
        {service.icon}
      </div>

      {/* Service Content */}
      <div className="space-y-4">
        <h3 className="text-xl sm:text-2xl font-bold text-white font-audiowide group-hover:text-[#00abf0] transition-colors duration-300">
          {service.title}
        </h3>
        
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          {service.description}
        </p>

        {/* Service Categories */}
        <div className="space-y-3">
          {/* Programming Languages */}
          {service.programming && (
            <div>
              <h4 className="text-xs font-bold text-[#00abf0] font-audiowide mb-2">Programming:</h4>
              <div className="flex flex-wrap gap-1">
                {service.programming.map((lang, index) => (
                  <span key={index} className="px-2 py-1 bg-[#00abf0]/10 text-[#00abf0] text-xs font-audiowide rounded border border-[#00abf0]/30">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Frameworks */}
          {service.frameworks && (
            <div>
              <h4 className="text-xs font-bold text-[#00abf0] font-audiowide mb-2">Frameworks:</h4>
              <div className="flex flex-wrap gap-1">
                {service.frameworks.map((framework, index) => (
                  <span key={index} className="px-2 py-1 bg-[#00abf0]/10 text-[#00abf0] text-xs font-audiowide rounded border border-[#00abf0]/30">
                    {framework}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Databases */}
          {service.databases && (
            <div>
              <h4 className="text-xs font-bold text-[#00abf0] font-audiowide mb-2">Databases:</h4>
              <div className="flex flex-wrap gap-1">
                {service.databases.map((db, index) => (
                  <span key={index} className="px-2 py-1 bg-[#00abf0]/10 text-[#00abf0] text-xs font-audiowide rounded border border-[#00abf0]/30">
                    {db}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Cloud */}
          {service.cloud && (
            <div>
              <h4 className="text-xs font-bold text-[#00abf0] font-audiowide mb-2">Cloud:</h4>
              <div className="flex flex-wrap gap-1">
                {service.cloud.map((cloud, index) => (
                  <span key={index} className="px-2 py-1 bg-[#00abf0]/10 text-[#00abf0] text-xs font-audiowide rounded border border-[#00abf0]/30">
                    {cloud}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Frontend */}
          {service.frontend && (
            <div>
              <h4 className="text-xs font-bold text-[#00abf0] font-audiowide mb-2">Frontend:</h4>
              <div className="flex flex-wrap gap-1">
                {service.frontend.map((tech, index) => (
                  <span key={index} className="px-2 py-1 bg-[#00abf0]/10 text-[#00abf0] text-xs font-audiowide rounded border border-[#00abf0]/30">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Backend */}
          {service.backend && (
            <div>
              <h4 className="text-xs font-bold text-[#00abf0] font-audiowide mb-2">Backend:</h4>
              <div className="flex flex-wrap gap-1">
                {service.backend.map((tech, index) => (
                  <span key={index} className="px-2 py-1 bg-[#00abf0]/10 text-[#00abf0] text-xs font-audiowide rounded border border-[#00abf0]/30">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* CMS */}
          {service.cms && (
            <div>
              <h4 className="text-xs font-bold text-[#00abf0] font-audiowide mb-2">CMS:</h4>
              <div className="flex flex-wrap gap-1">
                {service.cms.map((cms, index) => (
                  <span key={index} className="px-2 py-1 bg-[#00abf0]/10 text-[#00abf0] text-xs font-audiowide rounded border border-[#00abf0]/30">
                    {cms}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Hosting & Security */}
          {service.hosting && (
            <div>
              <h4 className="text-xs font-bold text-[#00abf0] font-audiowide mb-2">Hosting & Security:</h4>
              <div className="flex flex-wrap gap-1">
                {service.hosting.map((host, index) => (
                  <span key={index} className="px-2 py-1 bg-[#00abf0]/10 text-[#00abf0] text-xs font-audiowide rounded border border-[#00abf0]/30">
                    {host}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Native */}
          {service.native && (
            <div>
              <h4 className="text-xs font-bold text-[#00abf0] font-audiowide mb-2">Native:</h4>
              <div className="flex flex-wrap gap-1">
                {service.native.map((tech, index) => (
                  <span key={index} className="px-2 py-1 bg-[#00abf0]/10 text-[#00abf0] text-xs font-audiowide rounded border border-[#00abf0]/30">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Cross-platform */}
          {service.crossPlatform && (
            <div>
              <h4 className="text-xs font-bold text-[#00abf0] font-audiowide mb-2">Cross-platform:</h4>
              <div className="flex flex-wrap gap-1">
                {service.crossPlatform.map((tech, index) => (
                  <span key={index} className="px-2 py-1 bg-[#00abf0]/10 text-[#00abf0] text-xs font-audiowide rounded border border-[#00abf0]/30">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* APIs & Integrations */}
          {service.apis && (
            <div>
              <h4 className="text-xs font-bold text-[#00abf0] font-audiowide mb-2">APIs & Integrations:</h4>
              <div className="flex flex-wrap gap-1">
                {service.apis.map((api, index) => (
                  <span key={index} className="px-2 py-1 bg-[#00abf0]/10 text-[#00abf0] text-xs font-audiowide rounded border border-[#00abf0]/30">
                    {api}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Testing */}
          {service.testing && (
            <div>
              <h4 className="text-xs font-bold text-[#00abf0] font-audiowide mb-2">Testing:</h4>
              <div className="flex flex-wrap gap-1">
                {service.testing.map((test, index) => (
                  <span key={index} className="px-2 py-1 bg-[#00abf0]/10 text-[#00abf0] text-xs font-audiowide rounded border border-[#00abf0]/30">
                    {test}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* On-page */}
          {service.onPage && (
            <div>
              <h4 className="text-xs font-bold text-[#00abf0] font-audiowide mb-2">On-page:</h4>
              <div className="flex flex-wrap gap-1">
                {service.onPage.map((item, index) => (
                  <span key={index} className="px-2 py-1 bg-[#00abf0]/10 text-[#00abf0] text-xs font-audiowide rounded border border-[#00abf0]/30">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Off-page */}
          {service.offPage && (
            <div>
              <h4 className="text-xs font-bold text-[#00abf0] font-audiowide mb-2">Off-page:</h4>
              <div className="flex flex-wrap gap-1">
                {service.offPage.map((item, index) => (
                  <span key={index} className="px-2 py-1 bg-[#00abf0]/10 text-[#00abf0] text-xs font-audiowide rounded border border-[#00abf0]/30">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Tools */}
          {service.tools && (
            <div>
              <h4 className="text-xs font-bold text-[#00abf0] font-audiowide mb-2">Tools:</h4>
              <div className="flex flex-wrap gap-1">
                {service.tools.map((tool, index) => (
                  <span key={index} className="px-2 py-1 bg-[#00abf0]/10 text-[#00abf0] text-xs font-audiowide rounded border border-[#00abf0]/30">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Technical SEO */}
          {service.technical && (
            <div>
              <h4 className="text-xs font-bold text-[#00abf0] font-audiowide mb-2">Technical SEO:</h4>
              <div className="flex flex-wrap gap-1">
                {service.technical.map((tech, index) => (
                  <span key={index} className="px-2 py-1 bg-[#00abf0]/10 text-[#00abf0] text-xs font-audiowide rounded border border-[#00abf0]/30">
                {tech}
              </span>
            ))}
              </div>
            </div>
          )}

          {/* Methods */}
          {service.methods && (
            <div>
              <h4 className="text-xs font-bold text-[#00abf0] font-audiowide mb-2">Methods:</h4>
              <div className="flex flex-wrap gap-1">
                {service.methods.map((method, index) => (
                  <span key={index} className="px-2 py-1 bg-[#00abf0]/10 text-[#00abf0] text-xs font-audiowide rounded border border-[#00abf0]/30">
                    {method}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Design Systems */}
          {service.designSystems && (
            <div>
              <h4 className="text-xs font-bold text-[#00abf0] font-audiowide mb-2">Design Systems:</h4>
              <div className="flex flex-wrap gap-1">
                {service.designSystems.map((system, index) => (
                  <span key={index} className="px-2 py-1 bg-[#00abf0]/10 text-[#00abf0] text-xs font-audiowide rounded border border-[#00abf0]/30">
                    {system}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Approach */}
          {service.approach && (
            <div>
              <h4 className="text-xs font-bold text-[#00abf0] font-audiowide mb-2">Approach:</h4>
              <div className="flex flex-wrap gap-1">
                {service.approach.map((approach, index) => (
                  <span key={index} className="px-2 py-1 bg-[#00abf0]/10 text-[#00abf0] text-xs font-audiowide rounded border border-[#00abf0]/30">
                    {approach}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Editing */}
          {service.editing && (
            <div>
              <h4 className="text-xs font-bold text-[#00abf0] font-audiowide mb-2">Editing:</h4>
              <div className="flex flex-wrap gap-1">
                {service.editing.map((edit, index) => (
                  <span key={index} className="px-2 py-1 bg-[#00abf0]/10 text-[#00abf0] text-xs font-audiowide rounded border border-[#00abf0]/30">
                    {edit}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Motion Graphics */}
          {service.motionGraphics && (
            <div>
              <h4 className="text-xs font-bold text-[#00abf0] font-audiowide mb-2">Motion Graphics:</h4>
              <div className="flex flex-wrap gap-1">
                {service.motionGraphics.map((motion, index) => (
                  <span key={index} className="px-2 py-1 bg-[#00abf0]/10 text-[#00abf0] text-xs font-audiowide rounded border border-[#00abf0]/30">
                    {motion}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Types */}
          {service.types && (
            <div>
              <h4 className="text-xs font-bold text-[#00abf0] font-audiowide mb-2">Types:</h4>
              <div className="flex flex-wrap gap-1">
                {service.types.map((type, index) => (
                  <span key={index} className="px-2 py-1 bg-[#00abf0]/10 text-[#00abf0] text-xs font-audiowide rounded border border-[#00abf0]/30">
                    {type}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Add-ons */}
          {service.addons && (
            <div>
              <h4 className="text-xs font-bold text-[#00abf0] font-audiowide mb-2">Add-ons:</h4>
              <div className="flex flex-wrap gap-1">
                {service.addons.map((addon, index) => (
                  <span key={index} className="px-2 py-1 bg-[#00abf0]/10 text-[#00abf0] text-xs font-audiowide rounded border border-[#00abf0]/30">
                    {addon}
              </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Tags */}
        {service.tags && (
          <div className="pt-2">
            <h4 className="text-xs font-bold text-[#00abf0] font-audiowide mb-2">Tags:</h4>
            <div className="flex flex-wrap gap-1">
              {service.tags.map((tag, index) => (
                <span key={index} className="px-2 py-1 bg-gray-600/20 text-gray-400 text-xs font-audiowide rounded border border-gray-600/30">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Get Started Button */}
        <div className="pt-4">
          <button className="w-full px-4 py-2 bg-[#00abf0] text-black font-bold rounded-lg shadow-lg hover:shadow-[#00abf0]/50 transition-all duration-300 font-audiowide text-sm hover:scale-105 border-2 border-[#00abf0] hover:bg-transparent hover:text-[#00abf0] relative overflow-hidden group">
            <div className="absolute inset-0 bg-[#00abf0]/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <span className="relative z-10">Get Started</span>
          </button>
        </div>

        {/* Hover Effect Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br from-[#00abf0]/5 to-transparent rounded-2xl transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}></div>
      </div>
    </div>
  );
}
