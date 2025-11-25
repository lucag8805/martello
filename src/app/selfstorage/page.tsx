import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'HammerBox Selfstorage',
  description: 'HammerBox Selfstorage Aachen - Sichere Lagerräume in bester Lage',
};

const features = [
  { title: '24/7 Zugang', description: 'Rund um die Uhr Zugang zu Ihrer Box' },
  { title: 'Videoüberwachung', description: 'Moderne Sicherheitstechnik' },
  { title: 'Flexible Größen', description: 'Von 1m² bis 50m² verfügbar' },
  { title: 'Klimatisiert', description: 'Optimale Lagerbedingungen' },
];

export default function SelfStoragePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-[#1C1C1C] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/aachenvonobenmithervergehobenerhammerbox.png"
            alt="HammerBox Aachen"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C] via-[#1C1C1C]/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-32">
          <div className="max-w-2xl">
            <div className="inline-block mb-6">
              <span className="text-[#D4AF37] text-sm uppercase tracking-[0.3em] border-b border-[#D4AF37]/30 pb-2">
                Selfstorage Aachen
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display text-white mb-8">
              Hammer<span className="text-[#C41E3A]">Box</span>
            </h1>

            <p className="text-white/70 text-xl mb-10 leading-relaxed">
              Ihr sicherer Lagerraum in bester Lage. HammerBox bietet Ihnen flexible
              Selfstorage-Lösungen für private und gewerbliche Zwecke.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/kontakt" className="btn-premium btn-premium-filled">
                Box anfragen
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a href="tel:+49241169889" className="btn-premium">
                0241 - 16 98 89 0
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-[#FAF8F5]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="text-center p-8 bg-white border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-colors"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-[#C41E3A] flex items-center justify-center">
                  <span className="text-[#D4AF37] text-2xl">◆</span>
                </div>
                <h3 className="text-xl font-display text-[#1C1C1C] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#666] text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About HammerBox */}
      <section className="py-24 bg-[#1C1C1C]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#D4AF37] text-sm uppercase tracking-[0.3em] mb-4 block">
                Über HammerBox
              </span>
              <h2 className="text-4xl font-display text-white mb-8">
                Sicher. Flexibel.
                <span className="block italic text-[#D4AF37]">Unkompliziert.</span>
              </h2>
              <div className="space-y-6 text-white/70 leading-relaxed">
                <p>
                  HammerBox ist Ihre moderne Selfstorage-Lösung in Aachen.
                  Ob Sie temporär Platz für Möbel während eines Umzugs benötigen,
                  saisonale Artikel lagern möchten oder als Unternehmen
                  zusätzlichen Lagerraum brauchen – bei uns finden Sie die
                  passende Lösung.
                </p>
                <p>
                  Unsere Lagerboxen sind sicher, trocken und rund um die Uhr
                  zugänglich. Moderne Sicherheitstechnik und persönlicher
                  Service garantieren Ihnen ein sorgenfreies Lagererlebnis.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="gold-frame">
                <Image
                  src="/images/hammerboxdetailansichtvoninnen.jpg"
                  alt="HammerBox Innenansicht"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#C41E3A]">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-4xl font-display text-white mb-6">
            Brauchen Sie Lagerplatz?
          </h2>
          <p className="text-white/80 mb-10">
            Kontaktieren Sie uns für ein individuelles Angebot.
          </p>
          <Link
            href="/kontakt"
            className="btn-premium bg-white border-white text-[#C41E3A] hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-[#1C1C1C]"
          >
            Jetzt anfragen
          </Link>
        </div>
      </section>
    </>
  );
}
