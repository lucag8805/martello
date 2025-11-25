import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <section className="py-24 lg:py-32 bg-[#1C1C1C] text-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-8 -left-8 w-32 h-32 border border-[#D4AF37]/30" />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#D4AF37]/10" />

              {/* Main Image */}
              <div className="relative gold-frame">
                <Image
                  src="/images/aachenfuerherovonunterseiten.jpg"
                  alt="Aachen"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Stats Overlay */}
              <div className="absolute -bottom-6 -right-6 bg-[#C41E3A] p-8 hidden lg:block">
                <div className="text-5xl font-display text-white mb-2">20+</div>
                <div className="text-sm uppercase tracking-widest text-white/80">
                  Jahre Erfahrung
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="text-[#D4AF37] text-sm uppercase tracking-[0.3em] mb-4 block">
              Über uns
            </span>
            <h2 className="text-4xl lg:text-5xl font-display mb-8 leading-tight">
              Tradition trifft <br />
              <span className="italic text-[#D4AF37]">moderne Expertise</span>
            </h2>

            <div className="space-y-6 text-white/70 leading-relaxed mb-10">
              <p>
                Seit über zwei Jahrzehnten ist Martello Immobilienmanagement
                Ihr verlässlicher Partner in der Kaiserstadt Aachen. Wir verbinden
                traditionelle Werte mit modernem Know-how.
              </p>
              <p>
                Unser erfahrenes Team betreut Immobilien mit der Sorgfalt und
                Aufmerksamkeit, die sie verdienen. Ob Objektverwaltung,
                Immobilienvermittlung oder Baumanagement – wir stehen für
                Qualität und Zuverlässigkeit.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              {[
                { number: '500+', label: 'Verwaltete Einheiten' },
                { number: '98%', label: 'Kundenzufriedenheit' },
              ].map((stat) => (
                <div key={stat.label} className="border-l-2 border-[#D4AF37] pl-4">
                  <div className="text-3xl font-display text-white">{stat.number}</div>
                  <div className="text-sm text-white/60 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <Link href="/unternehmen" className="btn-premium">
              Mehr über uns
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
