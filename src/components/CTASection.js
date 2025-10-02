'use client';

import Link from 'next/link';

export default function CTASection({ 
  title = "Ready to Start Your Project?",
  subtitle = "Let&apos;s discuss how we can help bring your ideas to life with our expert development services.",
  primaryButtonText = "Get Started",
  primaryButtonLink = "/#contact",
  secondaryButtonText = "View Our Work",
  secondaryButtonLink = "/portfolio",
  className = ""
}) {
  return (
    <section className={`relative z-10 py-16 md:py-20 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-white font-audiowide">
            {title}
          </h2>
          <p className="text-lg text-gray-300 font-audiowide">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={primaryButtonLink}
              className="px-8 py-4 bg-[#00abf0] text-white font-audiowide rounded-lg hover:bg-[#00abf0]/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#00abf0]/30"
            >
              {primaryButtonText}
            </Link>
            <Link
              href={secondaryButtonLink}
              className="px-8 py-4 border border-[#00abf0] text-[#00abf0] font-audiowide rounded-lg hover:bg-[#00abf0] hover:text-white transition-all duration-300 hover:scale-105"
            >
              {secondaryButtonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
