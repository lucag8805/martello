import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Baumanagement',
  description: 'Professionelles Baumanagement in Aachen - Martello Immobilienmanagement',
};

const process = [
  { step: '01', title: 'Beratung', description: 'Kostenlose Erstberatung und Bedarfsanalyse' },
  { step: '02', title: 'Planung', description: 'Detaillierte Projektplanung und Kalkulation' },
  { step: '03', title: 'Umsetzung', description: 'Professionelle Bauausführung mit laufender Kontrolle' },
  { step: '04', title: 'Übergabe', description: 'Schlüsselfertige Übergabe mit Dokumentation' },
];

const services = [
  {
    title: 'Projektsteuerung',
    items: ['Koordination aller Projektbeteiligten', 'Termin- und Ablaufplanung', 'Kostenkontrolle', 'Qualitätssicherung'],
  },
  {
    title: 'Bauleitung',
    items: ['Überwachung der Bauausführung', 'Koordination der Handwerker', 'Abnahmen und Mängelmanagement', 'Rechnungsprüfung'],
  },
  {
    title: 'Sanierung',
    items: ['Bestandsaufnahme und Analyse', 'Sanierungskonzepte', 'Energetische Modernisierung', 'Denkmalschutzgerechte Sanierung'],
  },
];

export default function BaumanagementPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] bg-[#1C1C1C] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/technischeverwaltung.jpg"
            alt="Baumanagement"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C] via-[#1C1C1C]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-32">
          <span className="text-[#D4AF37] text-sm uppercase tracking-[0.3em] mb-4 block">
            Bauprojekte
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display text-white mb-6 max-w-3xl">
            Baumanagement in Aachen
            <span className="block italic text-[#D4AF37]">
              Professionell. Termingerecht. Kostensicher.
            </span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl mb-10">
            Ob Neubau, Sanierung oder Modernisierung – wir begleiten Ihr Projekt
            von der ersten Idee bis zur schlüsselfertigen Übergabe.
          </p>
          <Link href="/kontakt" className="btn-premium btn-premium-filled">
            Projekt anfragen
          </Link>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-[#FAF8F5]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-[#D4AF37] text-sm uppercase tracking-[0.3em] mb-4 block">
              So arbeiten wir
            </span>
            <h2 className="text-4xl font-display text-[#1C1C1C]">
              Unser <span className="italic text-[#C41E3A]">Prozess</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={item.step} className="relative">
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-[#D4AF37]/30" />
                )}
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-[#1C1C1C] flex items-center justify-center">
                    <span className="text-[#D4AF37] text-2xl font-display">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-display text-[#1C1C1C] mb-2">{item.title}</h3>
                  <p className="text-[#666] text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-[#1C1C1C]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-[#D4AF37] text-sm uppercase tracking-[0.3em] mb-4 block">
              Leistungen
            </span>
            <h2 className="text-4xl font-display text-white">
              Unsere <span className="italic text-[#D4AF37]">Expertise</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-[#2D2D2D] border border-[#D4AF37]/20 p-8 hover:border-[#D4AF37]/50 transition-colors"
              >
                <h3 className="text-xl font-display text-[#D4AF37] mb-6">{service.title}</h3>
                <ul className="space-y-3">
                  {service.items.map((item) => (
                    <li key={item} className="flex gap-3 text-white/70 text-sm">
                      <span className="text-[#D4AF37]">◆</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#C41E3A]">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-4xl font-display text-white mb-6">
            Haben Sie ein Bauprojekt?
          </h2>
          <p className="text-white/80 mb-10">
            Kontaktieren Sie uns für eine unverbindliche Erstberatung.
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
