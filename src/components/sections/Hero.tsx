'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen bg-[#1C1C1C] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/aachenansichtvonobenmitklickbarerhammerboxuntenrechts.jpg"
          alt="Aachen Stadtansicht"
          fill
          className="object-cover object-center opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1C1C1C] via-transparent to-[#1C1C1C]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full py-32">
          {/* Left Content */}
          <div
            className={`transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="inline-block mb-6">
              <span className="text-[#D4AF37] text-sm uppercase tracking-[0.3em] border-b border-[#D4AF37]/30 pb-2">
                Seit über 20 Jahren in Aachen
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white font-display leading-[1.1] mb-8">
              <span className="block">Immobilien</span>
              <span className="block text-[#D4AF37] italic">mit Charakter</span>
              <span className="block">verwalten.</span>
            </h1>

            <p className="text-white/70 text-lg lg:text-xl max-w-xl mb-10 leading-relaxed">
              Martello steht für exzellente Immobilienverwaltung,
              kompetente Beratung und nachhaltiges Baumanagement
              in der Kaiserstadt Aachen.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/kontakt" className="btn-premium btn-premium-filled">
                Beratung anfragen
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/verwaltung" className="btn-premium">
                Leistungen entdecken
              </Link>
            </div>
          </div>

          {/* Right Content - Board Game */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="relative">
              {/* Gold Frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#D4AF37]/20 to-transparent rounded-lg" />
              <div className="relative bg-[#1C1C1C]/80 backdrop-blur-sm p-4 rounded-lg border border-[#D4AF37]/20">
                <Image
                  src="/images/monopolybrettfuerbewerungsseite.jpg"
                  alt="Martello Immobilien Brettspiel"
                  width={600}
                  height={500}
                  className="w-full h-auto rounded object-contain"
                  style={{ background: 'transparent' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 text-white/50">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#D4AF37] to-transparent animate-pulse" />
        </div>
      </div>

      {/* HammerBox Teaser */}
      <Link
        href="/selfstorage"
        className="absolute bottom-8 right-8 z-20 group hidden lg:block"
      >
        <div className="bg-white/10 backdrop-blur-md border border-[#D4AF37]/30 p-4 rounded-lg transition-all duration-500 group-hover:bg-[#D4AF37]/20 group-hover:scale-105">
          <span className="text-[#D4AF37] text-xs uppercase tracking-widest block mb-2">
            HammerBox
          </span>
          <span className="text-white text-sm">Selfstorage Aachen →</span>
        </div>
      </Link>
    </section>
  );
}
