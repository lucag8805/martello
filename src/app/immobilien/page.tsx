import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Immobilien | Martello Immobilienmanagement',
  description: 'Immobilien kaufen, verkaufen und mieten in Aachen. Ihr kompetenter Partner für Immobilientransaktionen.',
};

const placeholderProperties = [
  {
    id: 1,
    title: 'Moderne Stadtwohnung',
    location: 'Aachen-Mitte',
    type: 'Miete',
    price: '1.250 €/Monat',
    size: '85 m²',
    rooms: '3 Zimmer',
  },
  {
    id: 2,
    title: 'Familienhaus mit Garten',
    location: 'Aachen-Brand',
    type: 'Kauf',
    price: '425.000 €',
    size: '145 m²',
    rooms: '5 Zimmer',
  },
  {
    id: 3,
    title: 'Bürofläche im Zentrum',
    location: 'Aachen-Innenstadt',
    type: 'Miete',
    price: '12 €/m²',
    size: '120 m²',
    rooms: 'Open Space',
  },
];

export default function ImmobilienPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-white via-rose-50/20 to-white">
        <div className="container-narrow mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="heading-xl text-gray-900 mb-6">
              <span className="text-[#E63329]">Immobilien</span>
              <br />in Aachen
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Ob Kauf, Verkauf oder Vermietung - wir begleiten Sie kompetent durch
              jeden Schritt Ihrer Immobilientransaktion. Mit lokaler Expertise und
              persönlicher Beratung.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/kontakt" className="btn-primary">
                Immobilie anbieten
              </Link>
              <Link href="#objekte" className="btn-secondary">
                Objekte ansehen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="bg-white py-12">
        <div className="container-narrow mx-auto px-6 lg:px-8">
          <Image
            src="/images/lückenfüllerbildfürimmoverwaltung bsp.jpg"
            alt="Immobilien in Aachen"
            width={1200}
            height={400}
            className="w-full h-64 object-cover rounded-2xl watercolor-shadow"
          />
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-white">
        <div className="container-narrow mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Kaufberatung', desc: 'Wir finden Ihre Traumimmobilie und begleiten Sie bis zum Notar.' },
              { title: 'Verkauf', desc: 'Professionelle Vermarktung und Verkauf zum bestmöglichen Preis.' },
              { title: 'Vermietung', desc: 'Von der Mietersuche bis zum Vertragsabschluss - alles aus einer Hand.' },
            ].map((service) => (
              <div key={service.title} className="text-center p-8">
                <h3 className="text-xl font-medium text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Listings */}
      <section id="objekte" className="section-padding bg-gray-50">
        <div className="container-narrow mx-auto px-6 lg:px-8">
          <h2 className="heading-lg text-center text-gray-900 mb-4">
            Aktuelle <span className="text-[#E63329]">Objekte</span>
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Beispielhafte Darstellung - Echte Objekte folgen über onOffice-Anbindung
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {placeholderProperties.map((property) => (
              <div
                key={property.id}
                className="bg-white rounded-2xl overflow-hidden watercolor-shadow hover:shadow-lg transition-shadow"
              >
                {/* Placeholder Image */}
                <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <span className="text-gray-400">Bild folgt</span>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs px-2 py-1 bg-[#E63329]/10 text-[#E63329] rounded-full">
                      {property.type}
                    </span>
                    <span className="text-sm text-gray-500">{property.location}</span>
                  </div>

                  <h3 className="text-lg font-medium text-gray-900 mb-4">{property.title}</h3>

                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <span>{property.size}</span>
                    <span>{property.rooms}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-[#E63329]">{property.price}</span>
                    <Link
                      href="/kontakt"
                      className="text-sm text-gray-600 hover:text-[#E63329] transition-colors"
                    >
                      Anfragen →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 p-8 bg-white rounded-2xl watercolor-shadow">
            <h3 className="text-xl font-medium text-gray-900 mb-4">
              Weitere Objekte finden Sie bald hier
            </h3>
            <p className="text-gray-600 mb-6">
              Die Integration mit onOffice wird derzeit eingerichtet.
              Kontaktieren Sie uns für aktuelle Angebote.
            </p>
            <Link href="/kontakt" className="btn-primary">
              Jetzt kontaktieren
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
