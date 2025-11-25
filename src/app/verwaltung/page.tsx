import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Objektverwaltung',
  description: 'Professionelle Objektverwaltung in Aachen - Martello Immobilienmanagement',
};

const services = [
  {
    title: 'Mietverhältnis',
    items: [
      'Verwaltung und Überwachung der Mietzahlungen',
      'Konsequentes Mahnwesen bei Rückständen',
      'Bonitätsprüfung neuer Mieterinteressenten',
      'Abschluss rechtssicherer Mietverträge',
      'Verwaltung der Mietkautionen',
    ],
  },
  {
    title: 'Technische Verwaltung',
    items: [
      'Regelmäßige Haus- und Objektbegehungen',
      'Koordination von Handwerkern',
      'Überwachung von Instandsetzungsarbeiten',
      'Wartungsverträge für Heizanlagen',
      'Prüfung der Verkehrssicherungspflichten',
    ],
  },
  {
    title: 'Kaufmännische Verwaltung',
    items: [
      'Erstellung der Betriebskostenabrechnungen',
      'Rechnungskontrolle und Lastschrift-Überwachung',
      'Durchführung von Mieterhöhungen',
      'Abwicklung von Mietminderungen',
      'Erstellung von Zwischenabrechnungen',
    ],
  },
];

export default function VerwaltungPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] bg-[#1C1C1C] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/aachenfuerherovonunterseiten.jpg"
            alt="Aachen"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C] via-[#1C1C1C]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-32">
          <span className="text-[#D4AF37] text-sm uppercase tracking-[0.3em] mb-4 block">
            Unsere Expertise
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display text-white mb-6 max-w-3xl">
            Objektverwaltung in Aachen
            <span className="block italic text-[#D4AF37]">
              Einfach. Zuverlässig. Professionell.
            </span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl">
            Eine verantwortungsvolle Immobilienverwaltung entlastet Sie von nahezu
            allen Verpflichtungen und stellt den dauerhaften Werterhalt Ihres
            Eigentums sicher.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-[#FAF8F5]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-display text-[#1C1C1C] mb-8">
                Mietverwaltung Aachen:
                <span className="block italic text-[#C41E3A]">
                  Martello kümmert sich um Ihr Eigentum
                </span>
              </h2>
              <div className="space-y-6 text-[#666] leading-relaxed">
                <p>
                  „Irgendetwas ist immer." Wenn Sie Eigentümer von vermieteten
                  Mehrparteienhäusern oder Wohnungen, von Büro- und Praxisräumen
                  oder anderen Gewerbeobjekten sind, wissen Sie genau, was damit gemeint ist.
                </p>
                <p>
                  Von der tropfenden Dachrinne über Verstöße gegen die Hausordnung
                  bis hin zur Betriebskostenabrechnung – die sorgfältige Betreuung
                  Ihres Mieterstamms erfordert ein effektives und verantwortungsvolles Management.
                </p>
                <p>
                  Mit unserer Mietverwaltung in Aachen bieten wir Ihnen eine Full-Service-
                  Dienstleistung an. Wir sorgen dafür, dass alle täglichen Aufgaben mit der
                  nötigen Sorgfalt ausgeführt werden.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="gold-frame">
                <Image
                  src="/images/kaufmaennischdingsverwaltung.jpg"
                  alt="Objektverwaltung"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-[#1C1C1C]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-[#D4AF37] text-sm uppercase tracking-[0.3em] mb-4 block">
              Leistungen
            </span>
            <h2 className="text-4xl font-display text-white">
              Unser <span className="italic text-[#D4AF37]">Leistungsspektrum</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-[#2D2D2D] border border-[#D4AF37]/20 p-8 hover:border-[#D4AF37]/50 transition-colors duration-300"
              >
                <h3 className="text-xl font-display text-[#D4AF37] mb-6">
                  {service.title}
                </h3>
                <ul className="space-y-3">
                  {service.items.map((item) => (
                    <li key={item} className="flex gap-3 text-white/70 text-sm">
                      <span className="text-[#D4AF37] mt-1">◆</span>
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
            Interesse an unserer Verwaltung?
          </h2>
          <p className="text-white/80 mb-10">
            Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch.
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
