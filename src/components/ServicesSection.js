export default function ServicesSection() {
  return (
    <section className="relative z-10 py-16 sm:py-20 lg:py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-[#ff6600]/10 rounded-full mb-6 border border-[#ff6600]/30">
            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#ff6600]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-[var(--font-press-start-2p)] mb-4">
            Our <span className="text-[#ff6600]">Services</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 font-[var(--font-press-start-2p)] max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Software Development */}
          <div className="group relative bg-black/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[#ff6600]/30 hover:border-[#ff6600]/60 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#ff6600]/20">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#ff6600]/10 rounded-full mb-4 border border-[#ff6600]/30 group-hover:bg-[#ff6600]/20 transition-colors duration-300">
                <svg className="w-8 h-8 text-[#ff6600]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white font-[var(--font-press-start-2p)] mb-3 group-hover:text-[#ff6600] transition-colors duration-300">
                Software Development
              </h3>
              <p className="text-gray-300 text-sm font-[var(--font-press-start-2p)] leading-relaxed">
                Custom software solutions built with cutting-edge technology
              </p>
            </div>
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 rounded-2xl bg-[#ff6600]/5 scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
          </div>

          {/* App Development */}
          <div className="group relative bg-black/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[#ff6600]/30 hover:border-[#ff6600]/60 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#ff6600]/20">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#ff6600]/10 rounded-full mb-4 border border-[#ff6600]/30 group-hover:bg-[#ff6600]/20 transition-colors duration-300">
                <svg className="w-8 h-8 text-[#ff6600]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white font-[var(--font-press-start-2p)] mb-3 group-hover:text-[#ff6600] transition-colors duration-300">
                App Development
              </h3>
              <p className="text-gray-300 text-sm font-[var(--font-press-start-2p)] leading-relaxed">
                Native and cross-platform mobile applications
              </p>
            </div>
            <div className="absolute inset-0 rounded-2xl bg-[#ff6600]/5 scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
          </div>

          {/* Website Development */}
          <div className="group relative bg-black/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[#ff6600]/30 hover:border-[#ff6600]/60 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#ff6600]/20">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#ff6600]/10 rounded-full mb-4 border border-[#ff6600]/30 group-hover:bg-[#ff6600]/20 transition-colors duration-300">
                <svg className="w-8 h-8 text-[#ff6600]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white font-[var(--font-press-start-2p)] mb-3 group-hover:text-[#ff6600] transition-colors duration-300">
                Website Development
              </h3>
              <p className="text-gray-300 text-sm font-[var(--font-press-start-2p)] leading-relaxed">
                Responsive and modern web solutions
              </p>
            </div>
            <div className="absolute inset-0 rounded-2xl bg-[#ff6600]/5 scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
          </div>

          {/* SEO */}
          <div className="group relative bg-black/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[#ff6600]/30 hover:border-[#ff6600]/60 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#ff6600]/20">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#ff6600]/10 rounded-full mb-4 border border-[#ff6600]/30 group-hover:bg-[#ff6600]/20 transition-colors duration-300">
                <svg className="w-8 h-8 text-[#ff6600]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white font-[var(--font-press-start-2p)] mb-3 group-hover:text-[#ff6600] transition-colors duration-300">
                SEO
              </h3>
              <p className="text-gray-300 text-sm font-[var(--font-press-start-2p)] leading-relaxed">
                Search engine optimization for better visibility
              </p>
            </div>
            <div className="absolute inset-0 rounded-2xl bg-[#ff6600]/5 scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
          </div>

          {/* UI/UX */}
          <div className="group relative bg-black/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[#ff6600]/30 hover:border-[#ff6600]/60 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#ff6600]/20">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#ff6600]/10 rounded-full mb-4 border border-[#ff6600]/30 group-hover:bg-[#ff6600]/20 transition-colors duration-300">
                <svg className="w-8 h-8 text-[#ff6600]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white font-[var(--font-press-start-2p)] mb-3 group-hover:text-[#ff6600] transition-colors duration-300">
                UI/UX Design
              </h3>
              <p className="text-gray-300 text-sm font-[var(--font-press-start-2p)] leading-relaxed">
                User-centered design for optimal experience
              </p>
            </div>
            <div className="absolute inset-0 rounded-2xl bg-[#ff6600]/5 scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
          </div>

          {/* Graphics Designing */}
          <div className="group relative bg-black/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[#ff6600]/30 hover:border-[#ff6600]/60 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#ff6600]/20">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#ff6600]/10 rounded-full mb-4 border border-[#ff6600]/30 group-hover:bg-[#ff6600]/20 transition-colors duration-300">
                <svg className="w-8 h-8 text-[#ff6600]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white font-[var(--font-press-start-2p)] mb-3 group-hover:text-[#ff6600] transition-colors duration-300">
                Graphics Designing
              </h3>
              <p className="text-gray-300 text-sm font-[var(--font-press-start-2p)] leading-relaxed">
                Creative visual solutions and branding
              </p>
            </div>
            <div className="absolute inset-0 rounded-2xl bg-[#ff6600]/5 scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
          </div>

          {/* Production Shoot */}
          <div className="group relative bg-black/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[#ff6600]/30 hover:border-[#ff6600]/60 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#ff6600]/20">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#ff6600]/10 rounded-full mb-4 border border-[#ff6600]/30 group-hover:bg-[#ff6600]/20 transition-colors duration-300">
                <svg className="w-8 h-8 text-[#ff6600]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white font-[var(--font-press-start-2p)] mb-3 group-hover:text-[#ff6600] transition-colors duration-300">
                Production Shoot
              </h3>
              <p className="text-gray-300 text-sm font-[var(--font-press-start-2p)] leading-relaxed">
                Professional photography and videography
              </p>
            </div>
            <div className="absolute inset-0 rounded-2xl bg-[#ff6600]/5 scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
          </div>

          {/* Additional Service Card for Grid Balance */}
          <div className="group relative bg-black/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[#ff6600]/30 hover:border-[#ff6600]/60 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#ff6600]/20">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#ff6600]/10 rounded-full mb-4 border border-[#ff6600]/30 group-hover:bg-[#ff6600]/20 transition-colors duration-300">
                <svg className="w-8 h-8 text-[#ff6600]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white font-[var(--font-press-start-2p)] mb-3 group-hover:text-[#ff6600] transition-colors duration-300">
                Digital Marketing
              </h3>
              <p className="text-gray-300 text-sm font-[var(--font-press-start-2p)] leading-relaxed">
                Strategic online marketing solutions
              </p>
            </div>
            <div className="absolute inset-0 rounded-2xl bg-[#ff6600]/5 scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
