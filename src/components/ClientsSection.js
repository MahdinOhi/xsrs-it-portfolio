export default function ClientsSection() {
  return (
    <section className="relative z-10 py-16 sm:py-20 lg:py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-[#ff6600]/10 rounded-full mb-6 border border-[#ff6600]/30">
            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#ff6600]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-audiowide mb-4">
            Our <span className="text-[#ff6600]">Clients</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 font-audiowide max-w-2xl mx-auto">
            Trusted by leading companies worldwide
          </p>
        </div>

        {/* Clients Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
            {/* Client 1 */}
            <div className="group relative bg-black/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[#ff6600]/30 hover:border-[#ff6600]/60 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#ff6600]/20">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#ff6600]/10 rounded-full mb-4 border border-[#ff6600]/30 group-hover:bg-[#ff6600]/20 transition-colors duration-300">
                  <svg className="w-8 h-8 text-[#ff6600]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white font-audiowide mb-2 group-hover:text-[#ff6600] transition-colors duration-300">
                  TechCorp
                </h3>
                <p className="text-gray-300 text-sm font-audiowide">
                  Technology Solutions
                </p>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-[#ff6600]/5 scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
            </div>

            {/* Client 2 */}
            <div className="group relative bg-black/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[#ff6600]/30 hover:border-[#ff6600]/60 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#ff6600]/20">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#ff6600]/10 rounded-full mb-4 border border-[#ff6600]/30 group-hover:bg-[#ff6600]/20 transition-colors duration-300">
                  <svg className="w-8 h-8 text-[#ff6600]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white font-audiowide mb-2 group-hover:text-[#ff6600] transition-colors duration-300">
                  InnovateLab
                </h3>
                <p className="text-gray-300 text-sm font-audiowide">
                  Innovation Hub
                </p>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-[#ff6600]/5 scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
            </div>

            {/* Client 3 */}
            <div className="group relative bg-black/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[#ff6600]/30 hover:border-[#ff6600]/60 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#ff6600]/20">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#ff6600]/10 rounded-full mb-4 border border-[#ff6600]/30 group-hover:bg-[#ff6600]/20 transition-colors duration-300">
                  <svg className="w-8 h-8 text-[#ff6600]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white font-audiowide mb-2 group-hover:text-[#ff6600] transition-colors duration-300">
                  DigitalPro
                </h3>
                <p className="text-gray-300 text-sm font-audiowide">
                  Digital Agency
                </p>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-[#ff6600]/5 scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
            </div>

            {/* Client 4 */}
            <div className="group relative bg-black/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[#ff6600]/30 hover:border-[#ff6600]/60 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#ff6600]/20">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#ff6600]/10 rounded-full mb-4 border border-[#ff6600]/30 group-hover:bg-[#ff6600]/20 transition-colors duration-300">
                  <svg className="w-8 h-8 text-[#ff6600]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white font-audiowide mb-2 group-hover:text-[#ff6600] transition-colors duration-300">
                  CloudTech
                </h3>
                <p className="text-gray-300 text-sm font-audiowide">
                  Cloud Solutions
                </p>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-[#ff6600]/5 scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
            </div>

            {/* Client 5 */}
            <div className="group relative bg-black/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[#ff6600]/30 hover:border-[#ff6600]/60 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#ff6600]/20">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#ff6600]/10 rounded-full mb-4 border border-[#ff6600]/30 group-hover:bg-[#ff6600]/20 transition-colors duration-300">
                  <svg className="w-8 h-8 text-[#ff6600]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white font-audiowide mb-2 group-hover:text-[#ff6600] transition-colors duration-300">
                  FinanceApp
                </h3>
                <p className="text-gray-300 text-sm font-audiowide">
                  Financial Services
                </p>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-[#ff6600]/5 scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
