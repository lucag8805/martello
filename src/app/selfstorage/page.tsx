import Image from 'next/image';
import Link from 'next/link';
import { getImagePath } from '@/lib/utils';

export const metadata = {
  title: 'HammerBox Selfstorage | Martello',
  description: 'Ihr Selfstorage Partner in Aachen. Flexible Lagerboxen, 24/7 Zugang, höchste Sicherheit.',
};

const storageOptions = [
  { size: '2-4 m²', description: 'Ideal für Kartons und Kleinmöbel', price: 'ab 49€/Monat' },
  { size: '5-8 m²', description: 'Für eine kleine Wohnung', price: 'ab 89€/Monat' },
  { size: '9-15 m²', description: 'Für größere Haushalte', price: 'ab 149€/Monat' },
  { size: '16+ m²', description: 'Gewerbliche Nutzung', price: 'auf Anfrage' },
];

export default function SelfStoragePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden">
        <div className="container-narrow mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-1 bg-[#E63329]/10 rounded-full mb-6">
                <span className="text-sm font-medium text-[#E63329]">Selfstorage Partner</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-serif font-light text-gray-900 mb-6">
                HammerBox
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Flexibler Lagerraum in Aachen - sicher, sauber und jederzeit zugänglich.
                Ob Umzug, Renovierung oder Platzmangel: Bei uns finden Sie die passende Lösung.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/kontakt" className="btn-primary">
                  Jetzt anfragen
                </Link>
                <a href="tel:02411698890" className="btn-secondary">
                  0241 - 169 889 0
                </a>
              </div>
            </div>

            <div className="relative">
              <Image
                src={getImagePath("/images/hammerboxdetailansichtvoninnen.jpg")}
                alt="HammerBox Selfstorage Innenansicht"
                width={600}
                height={450}
                className="rounded-2xl watercolor-shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-white">
        <div className="container-narrow mx-auto px-6 lg:px-8">
          <h2 className="heading-lg text-center text-gray-900 mb-12">
            Ihre Vorteile bei <span className="text-[#E63329]">HammerBox</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🔐', title: '24/7 Zugang', desc: 'Rund um die Uhr Zugang zu Ihrer Box' },
              { icon: '📹', title: 'Videoüberwacht', desc: 'Komplette Videoüberwachung der Anlage' },
              { icon: '📅', title: 'Flexible Laufzeit', desc: 'Mietdauer ab 1 Monat möglich' },
              { icon: '🏢', title: 'Beste Lage', desc: 'Zentral in Aachen gelegen' },
            ].map((feature) => (
              <div key={feature.title} className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Storage Options */}
      <section className="section-padding bg-gray-50">
        <div className="container-narrow mx-auto px-6 lg:px-8">
          <h2 className="heading-lg text-center text-gray-900 mb-4">
            Unsere Lagergrößen
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Von der kleinen Box bis zur Gewerbefläche - wir haben die passende Größe für Sie.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {storageOptions.map((option) => (
              <div
                key={option.size}
                className="bg-white p-6 rounded-2xl watercolor-shadow hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl font-light text-[#E63329] mb-2">{option.size}</div>
                <p className="text-gray-600 text-sm mb-4">{option.description}</p>
                <div className="text-lg font-medium text-gray-900">{option.price}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/kontakt" className="btn-primary">
              Unverbindlich anfragen
            </Link>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="section-padding bg-white">
        <div className="container-narrow mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src={getImagePath("/images/aachenvonobenmithervergehobenerhammerbox.jpg")}
                alt="HammerBox Standort in Aachen"
                width={600}
                height={400}
                className="rounded-2xl watercolor-shadow"
              />
            </div>
            <div>
              <h2 className="heading-lg text-gray-900 mb-6">
                Zentral in <span className="text-[#E63329]">Aachen</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Unsere HammerBox-Anlage befindet sich in bester Lage in Aachen.
                Einfach erreichbar und mit großzügigen Anliefermöglichkeiten.
              </p>
              <div className="space-y-4 text-gray-600">
                <p><strong>Adresse:</strong> Auf der Hüls 103, 52068 Aachen</p>
                <p><strong>Telefon:</strong> 0241 - 169 889 0</p>
                <p><strong>E-Mail:</strong> hammerbox@martello.de</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
