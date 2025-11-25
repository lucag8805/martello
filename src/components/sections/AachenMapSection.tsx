'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AachenMapSection() {
  const [isHammerBoxHovered, setIsHammerBoxHovered] = useState(false);

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-rose-100 to-transparent" />
      </div>

      <div className="container-narrow mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="heading-lg text-gray-900">
            Verwurzelt in <span className="text-[#E63329]">Aachen</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Als lokaler Partner kennen wir den Aachener Immobilienmarkt wie unsere Westentasche.
            Entdecken Sie unsere Standorte und Services.
          </p>
        </div>

        {/* Interactive Map Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Base Map Image */}
          <div className="relative">
            <Image
              src={isHammerBoxHovered
                ? "/images/aachenvonobenmithervergehobenerhammerbox.jpg"
                : "/images/aachenansichtvonobenmitklickbarerhammerboxuntenrechts.jpg"
              }
              alt="Aachen Stadtansicht mit Martello Standorten"
              width={1200}
              height={800}
              className="w-full h-auto rounded-2xl watercolor-shadow transition-all duration-500"
              priority
            />

            {/* HammerBox Clickable Area - positioned bottom right */}
            <Link
              href="/selfstorage"
              className="absolute bottom-[8%] right-[5%] w-[25%] h-[30%] cursor-pointer group"
              onMouseEnter={() => setIsHammerBoxHovered(true)}
              onMouseLeave={() => setIsHammerBoxHovered(false)}
            >
              {/* Invisible hover area */}
              <div className="absolute inset-0 rounded-lg transition-all duration-300">
                {/* Pulse effect on hover */}
                {isHammerBoxHovered && (
                  <div className="absolute inset-0 rounded-lg border-2 border-[#E63329] animate-pulse" />
                )}
              </div>

              {/* Tooltip */}
              <div
                className={`
                  absolute -top-16 left-1/2 -translate-x-1/2
                  bg-white px-4 py-2 rounded-lg shadow-lg
                  transition-all duration-300 whitespace-nowrap
                  ${isHammerBoxHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
                `}
              >
                <span className="text-sm font-medium text-gray-900">HammerBox Selfstorage</span>
                <span className="block text-xs text-[#E63329]">Klicken für mehr Info →</span>
                {/* Tooltip arrow */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 shadow-lg" />
              </div>
            </Link>
          </div>

          {/* Legend */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#E63329]" />
              <span className="text-gray-600">Martello Hauptsitz</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-[#E63329]/60" />
              <span className="text-gray-600">HammerBox Selfstorage</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <span className="italic">Weitere Standorte folgen...</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
