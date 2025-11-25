import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Objektverwaltung | Martello Immobilienmanagement',
  description: 'Professionelle Hausverwaltung in Aachen. WEG-Verwaltung, Mietverwaltung und Gewerbeverwaltung aus einer Hand.',
};

const services = [
  {
    title: 'Kaufmännische Verwaltung',
    description: 'Buchhaltung, Nebenkostenabrechnung, Mietinkasso und wirtschaftliche Steuerung Ihrer Immobilie.',
    features: ['Mietenbuchhaltung', 'Nebenkostenabrechnung', 'Mahnwesen', 'Wirtschaftsplan'],
  },
  {
    title: 'Technische Verwaltung',
    description: 'Instandhaltung, Wartung und technische Betreuung für den Werterhalt Ihrer Immobilie.',
    features: ['Wartungsverträge', 'Schadenmanagement', 'Modernisierung', 'Handwerkerkoordination'],
  },
  {
    title: 'Mieterverwaltung',
    description: 'Professionelle Betreuung Ihrer Mieter - von der Vertragsgestaltung bis zur Kommunikation.',
    features: ['Mietverträge', 'Mieterbetreuung', 'Übergaben', 'Konfliktmanagement'],
  },
];

export default function ObjektverwaltungPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-white via-rose-50/20 to-white">
        <div className="container-narrow mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="heading-xl text-gray-900 mb-6">
              <span className="text-[#E63329]">Objektverwaltung</span>
              <br />mit Leidenschaft
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Als erfahrener Immobilienverwalter in Aachen übernehmen wir die komplette
              Betreuung Ihrer Wohn- und Gewerbeimmobilien. Professionell, transparent und persönlich.
            </p>
            <Link href="/kontakt" className="btn-primary">
              Jetzt Angebot anfordern
            </Link>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="bg-white py-12">
        <div className="container-narrow mx-auto px-6 lg:px-8">
          <Image
            src="/images/aachenfuerherovonunterseiten.jpg"
            alt="Aachen Skyline"
            width={1200}
            height={400}
            className="w-full h-64 object-cover rounded-2xl watercolor-shadow"
          />
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-narrow mx-auto px-6 lg:px-8">
          <h2 className="heading-lg text-center text-gray-900 mb-12">
            Unsere <span className="text-[#E63329]">Leistungen</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={service.title} className="bg-white p-8 rounded-2xl watercolor-shadow">
                <div className="w-12 h-12 bg-[#E63329]/10 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-[#E63329] text-xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-[#E63329]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Image */}
      <section className="section-padding bg-white">
        <div className="container-narrow mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Image
              src="/images/kaufmaennischdingsverwaltung.jpg"
              alt="Unser Team bei der Arbeit"
              width={600}
              height={400}
              className="rounded-2xl watercolor-shadow"
            />
            <div>
              <h2 className="heading-lg text-gray-900 mb-6">
                Persönliche <span className="text-[#E63329]">Betreuung</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Bei Martello ist Ihr Objekt keine Nummer. Unser erfahrenes Team
                kennt jede Immobilie persönlich und steht Ihnen als fester
                Ansprechpartner zur Seite.
              </p>
              <Link href="/kontakt" className="btn-secondary">
                Kontakt aufnehmen
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
