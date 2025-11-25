'use client';

import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    title: 'Objektverwaltung',
    description: 'Professionelle Verwaltung Ihrer Wohn- und Gewerbeimmobilien. Wir kümmern uns um alles - von der Mieterbetreuung bis zur technischen Instandhaltung.',
    image: '/images/kaufmaennischdingsverwaltung.jpg',
    href: '/objektverwaltung',
    features: ['Mietverwaltung', 'WEG-Verwaltung', 'Gewerbeverwaltung'],
  },
  {
    title: 'Immobilien',
    description: 'Ob Kauf, Verkauf oder Vermietung - wir begleiten Sie kompetent durch jeden Schritt Ihrer Immobilientransaktion in der Region Aachen.',
    image: '/images/lückenfüllerbildfürimmoverwaltung bsp.jpg',
    href: '/immobilien',
    features: ['Kaufberatung', 'Verkauf', 'Vermietung'],
  },
  {
    title: 'Baumanagement',
    description: 'Von der Planung bis zur Fertigstellung: Unser erfahrenes Team begleitet Ihr Bauprojekt mit Expertise und Sorgfalt.',
    image: '/images/technischeverwaltung.jpg',
    href: '/baumanagement',
    features: ['Projektsteuerung', 'Baubetreuung', 'Sanierung'],
  },
];

export default function ServicesSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-lg text-gray-900">
            Unsere <span className="text-[#E63329]">Leistungen</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Umfassende Immobiliendienstleistungen aus einer Hand.
            Professionell, persönlich und regional verwurzelt.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={service.title}
              href={service.href}
              className="group bg-white rounded-2xl overflow-hidden watercolor-shadow hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <h3 className="absolute bottom-4 left-6 text-xl font-medium text-white">
                  {service.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-6 flex items-center text-[#E63329] text-sm font-medium group-hover:gap-3 gap-2 transition-all">
                  <span>Mehr erfahren</span>
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
