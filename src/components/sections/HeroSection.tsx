'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-rose-50/30 to-white">
      {/* Subtle watercolor background effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-96 h-96 bg-rose-100 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-orange-50 rounded-full blur-3xl" />
      </div>

      <div className="container-narrow mx-auto px-6 lg:px-8 pt-24 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="stagger-children">
            <h1 className="heading-xl text-gray-900">
              <span className="text-[#E63329] italic font-light">Starte deine</span>
              <br />
              <span className="text-[#E63329] italic font-light">Zukunft.</span>
              <br />
              <span className="text-gray-800">Mit uns in der</span>
              <br />
              <span className="text-gray-800">Immobilienwelt.</span>
            </h1>

            <p className="mt-8 text-lg text-gray-600 max-w-md leading-relaxed">
              Martello Immobilienmanagement steht für professionelle Verwaltung,
              kompetente Beratung und erstklassigen Service in der Region Aachen.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/kontakt" className="btn-primary">
                Jetzt Kontakt aufnehmen
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/immobilien" className="btn-secondary">
                Immobilien entdecken
              </Link>
            </div>
          </div>

          {/* Right Content - Monopoly Board Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#E63329]/5 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-orange-100/50 rounded-full blur-2xl" />

              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden watercolor-shadow">
                <Image
                  src="/images/monopolybrettfuerbewerungsseite.jpg"
                  alt="Martello Immobilien - Starte deine Zukunft"
                  width={600}
                  height={500}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
