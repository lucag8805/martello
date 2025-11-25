import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Unternehmen',
  description: 'Über Martello Immobilienmanagement - Ihr Partner in Aachen seit über 20 Jahren',
};

const values = [
  {
    title: 'Zuverlässigkeit',
    description: 'Auf uns können Sie sich verlassen. Wir halten, was wir versprechen.',
  },
  {
    title: 'Kompetenz',
    description: 'Unser erfahrenes Team verfügt über umfassendes Fachwissen.',
  },
  {
    title: 'Transparenz',
    description: 'Wir kommunizieren offen und halten Sie stets auf dem Laufenden.',
  },
];

const stats = [
  { value: '20+', label: 'Jahre Erfahrung' },
  { value: '500+', label: 'Verwaltete Einheiten' },
  { value: '98%', label: 'Kundenzufriedenheit' },
  { value: '50+', label: 'Partner im Netzwerk' },
];

export default function UnternehmenPage() {
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
          <div className="absolute inset-0 bg-gradient-to-b from-[#1C1C1C] to-[#1C1C1C]/90" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-32 text-center">
          <span className="text-[#D4AF37] text-sm uppercase tracking-[0.3em] mb-4 block">
            Über uns
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display text-white mb-6">
            Martello
            <span className="block italic text-[#D4AF37]">Immobilienmanagement</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Ihr kompetenter Partner für Immobilienverwaltung, Maklerdienstleistungen
            und Baumanagement in der Kaiserstadt Aachen.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#C41E3A]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl lg:text-5xl font-display text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white/80 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-[#FAF8F5]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="gold-frame">
                <Image
                  src="/images/kaufmaennischdingsverwaltung.jpg"
                  alt="Martello Team"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div>
              <span className="text-[#D4AF37] text-sm uppercase tracking-[0.3em] mb-4 block">
                Unsere Geschichte
              </span>
              <h2 className="text-3xl lg:text-4xl font-display text-[#1C1C1C] mb-8">
                Tradition trifft
                <span className="block italic text-[#C41E3A]">moderne Expertise</span>
              </h2>
              <div className="space-y-6 text-[#666] leading-relaxed">
                <p>
                  Seit über zwei Jahrzehnten ist Martello Immobilienmanagement
                  Ihr verlässlicher Partner in Aachen. Was als kleine
                  Hausverwaltung begann, ist heute ein umfassendes
                  Immobilienunternehmen mit breitem Leistungsspektrum.
                </p>
                <p>
                  Wir verbinden traditionelle Werte wie Zuverlässigkeit und
                  persönlichen Service mit modernem Know-how und innovativen
                  Lösungen. Unsere tiefe Verwurzelung in der Region und unser
                  umfangreiches Netzwerk machen uns zum idealen Partner für
                  alle Immobilienbelange.
                </p>
                <p>
                  Unser engagiertes Team betreut jedes Objekt mit der Sorgfalt
                  und Aufmerksamkeit, die es verdient – als wäre es unser eigenes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#1C1C1C]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-[#D4AF37] text-sm uppercase tracking-[0.3em] mb-4 block">
              Wofür wir stehen
            </span>
            <h2 className="text-4xl font-display text-white">
              Unsere <span className="italic text-[#D4AF37]">Werte</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-[#2D2D2D] border border-[#D4AF37]/20 p-10 text-center hover:border-[#D4AF37]/50 transition-colors"
              >
                <div className="w-16 h-16 mx-auto mb-6 border border-[#D4AF37] flex items-center justify-center">
                  <span className="text-[#D4AF37] text-2xl">◆</span>
                </div>
                <h3 className="text-xl font-display text-white mb-4">{value.title}</h3>
                <p className="text-white/60">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#C41E3A]">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-4xl font-display text-white mb-6">
            Lernen Sie uns kennen
          </h2>
          <p className="text-white/80 mb-10">
            Wir freuen uns auf ein persönliches Gespräch mit Ihnen.
          </p>
          <Link
            href="/kontakt"
            className="btn-premium bg-white border-white text-[#C41E3A] hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-[#1C1C1C]"
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </>
  );
}
