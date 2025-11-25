import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Immobilien',
  description: 'Immobilien in Aachen kaufen und mieten - Martello Immobilienmanagement',
};

export default function ImmobilienPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] bg-[#1C1C1C] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/lückenfüllerbildfürimmoverwaltung bsp.jpg"
            alt="Immobilien"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C] via-[#1C1C1C]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-32">
          <span className="text-[#D4AF37] text-sm uppercase tracking-[0.3em] mb-4 block">
            Kauf & Miete
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display text-white mb-6 max-w-3xl">
            Immobilien in Aachen
            <span className="block italic text-[#D4AF37]">
              Ihr neues Zuhause wartet
            </span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl">
            Entdecken Sie unser Portfolio an erstklassigen Wohn- und
            Gewerbeimmobilien in Aachen und Umgebung.
          </p>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-24 bg-[#FAF8F5]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-display text-[#1C1C1C] mb-8">
              Kompetente <span className="italic text-[#C41E3A]">Immobilienvermittlung</span>
            </h2>
            <p className="text-[#666] leading-relaxed mb-8">
              Als erfahrener Immobilienmakler in Aachen unterstützen wir Sie bei
              der Suche nach Ihrer Traumimmobilie oder dem optimalen Käufer für
              Ihr Objekt. Mit fundierter Marktkenntnis und persönlicher Beratung
              begleiten wir Sie durch den gesamten Prozess.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/kontakt" className="btn-premium btn-premium-filled">
                Immobilie anfragen
              </Link>
              <Link href="/kontakt" className="btn-premium">
                Immobilie verkaufen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-[#1C1C1C]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-[#D4AF37] text-sm uppercase tracking-[0.3em] mb-4 block">
              Unsere Leistungen
            </span>
            <h2 className="text-4xl font-display text-white">
              Was wir <span className="italic text-[#D4AF37]">bieten</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Vermietung',
                description: 'Professionelle Vermittlung von Mietobjekten für Privat und Gewerbe.',
              },
              {
                title: 'Verkauf',
                description: 'Marktgerechte Bewertung und erfolgreiche Vermarktung Ihrer Immobilie.',
              },
              {
                title: 'Beratung',
                description: 'Individuelle Beratung zu allen Fragen rund um Immobilien.',
              },
            ].map((service) => (
              <div
                key={service.title}
                className="bg-[#2D2D2D] border border-[#D4AF37]/20 p-10 text-center hover:border-[#D4AF37]/50 transition-colors"
              >
                <div className="w-16 h-16 mx-auto mb-6 border border-[#D4AF37] flex items-center justify-center">
                  <span className="text-[#D4AF37] text-2xl">◆</span>
                </div>
                <h3 className="text-xl font-display text-white mb-4">{service.title}</h3>
                <p className="text-white/60">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#C41E3A]">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-4xl font-display text-white mb-6">
            Auf der Suche nach Ihrer Traumimmobilie?
          </h2>
          <p className="text-white/80 mb-10">
            Kontaktieren Sie uns – wir finden die perfekte Immobilie für Sie.
          </p>
          <Link
            href="/kontakt"
            className="btn-premium bg-white border-white text-[#C41E3A] hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-[#1C1C1C]"
          >
            Jetzt Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </>
  );
}
