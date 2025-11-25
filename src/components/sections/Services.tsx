'use client';

import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    title: 'Objektverwaltung',
    description: 'Professionelle Betreuung Ihrer Immobilien mit Expertise und Sorgfalt.',
    image: '/images/kaufmaennischdingsverwaltung.jpg',
    href: '/verwaltung',
  },
  {
    title: 'Immobilien',
    description: 'Vermittlung von Wohn- und Gewerbeimmobilien in Aachen und Umgebung.',
    image: '/images/lückenfüllerbildfürimmoverwaltung bsp.jpg',
    href: '/immobilien',
  },
  {
    title: 'Baumanagement',
    description: 'Kompetente Baubegleitung von der Planung bis zur Fertigstellung.',
    image: '/images/technischeverwaltung.jpg',
    href: '/baumanagement',
  },
];

export default function Services() {
  return (
    <section className="py-24 lg:py-32 bg-[#FAF8F5]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="text-[#D4AF37] text-sm uppercase tracking-[0.3em] mb-4 block">
            Was wir bieten
          </span>
          <h2 className="text-4xl lg:text-5xl font-display text-[#1C1C1C] mb-6">
            Unsere <span className="italic text-[#C41E3A]">Leistungen</span>
          </h2>
          <div className="w-20 h-px bg-[#D4AF37] mx-auto" />
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={service.title}
              href={service.href}
              className="group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <article className="card-premium overflow-hidden h-full">
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-transparent to-transparent opacity-60" />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#C41E3A]/0 group-hover:bg-[#C41E3A]/20 transition-colors duration-500" />
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-display text-[#1C1C1C] mb-3 group-hover:text-[#C41E3A] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-[#666] leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-[#D4AF37] text-sm uppercase tracking-wider">
                    Mehr erfahren
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
