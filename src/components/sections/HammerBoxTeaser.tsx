'use client';

import Image from 'next/image';
import Link from 'next/link';
import { getImagePath } from '@/lib/utils';

export default function HammerBoxTeaser() {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-narrow mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-block px-4 py-1 bg-[#E63329]/10 rounded-full mb-6">
              <span className="text-sm font-medium text-[#E63329]">Selfstorage Partner</span>
            </div>

            <h2 className="heading-lg text-gray-900 mb-6">
              <span className="font-serif text-4xl lg:text-5xl font-light">HammerBox</span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Ihr zuverlässiger Partner für Selfstorage in Aachen. Flexible Lagerboxen in
              verschiedenen Größen - sicher, sauber und rund um die Uhr zugänglich.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                'Flexible Mietdauer ab 1 Monat',
                '24/7 Zugang zu Ihrer Box',
                'Videoüberwachung & Alarmsicherung',
                'Verschiedene Größen verfügbar',
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-gray-600">
                  <svg className="w-5 h-5 text-[#E63329] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Link href="/selfstorage" className="btn-primary">
              Mehr über HammerBox
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-2xl overflow-hidden watercolor-shadow">
              <Image
                src={getImagePath("/images/hammerboxdetailansichtvoninnen.jpg")}
                alt="HammerBox Selfstorage - Innenansicht"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#E63329]/5 rounded-full blur-2xl -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-orange-100/50 rounded-full blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
