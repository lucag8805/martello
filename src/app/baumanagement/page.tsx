import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Baumanagement | Martello Immobilienmanagement',
  description: 'Professionelles Baumanagement in Aachen. Von der Planung bis zur Fertigstellung - Ihr Partner für Bauprojekte.',
};

export default function BaumanagementPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-white via-rose-50/20 to-white">
        <div className="container-narrow mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="heading-xl text-gray-900 mb-6">
                <span className="text-[#E63329]">Baumanagement</span>
                <br />aus einer Hand
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Von der ersten Idee bis zur Schlüsselübergabe: Unser erfahrenes Team
                begleitet Ihr Bauprojekt mit Expertise, Sorgfalt und Leidenschaft.
              </p>
              <Link href="/kontakt" className="btn-primary">
                Projekt besprechen
              </Link>
            </div>
            <div>
              <Image
                src="/images/technischeverwaltung.jpg"
                alt="Baumanagement"
                width={600}
                height={400}
                className="rounded-2xl watercolor-shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-narrow mx-auto px-6 lg:px-8">
          <h2 className="heading-lg text-center text-gray-900 mb-12">
            Unsere <span className="text-[#E63329]">Bauleistungen</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Projektsteuerung',
                desc: 'Koordination aller Gewerke, Terminplanung und Kostenkontrolle für einen reibungslosen Bauablauf.',
                icon: '📋',
              },
              {
                title: 'Baubetreuung',
                desc: 'Qualitätssicherung vor Ort, Bauüberwachung und regelmäßige Dokumentation des Fortschritts.',
                icon: '🏗️',
              },
              {
                title: 'Sanierung',
                desc: 'Fachgerechte Sanierung von Bestandsimmobilien unter Berücksichtigung von Denkmalschutz und Energieeffizienz.',
                icon: '🔧',
              },
              {
                title: 'Architektenleistungen',
                desc: 'Entwurf, Planung und Genehmigungsverfahren in Zusammenarbeit mit erfahrenen Architekten.',
                icon: '📐',
              },
            ].map((service) => (
              <div key={service.title} className="bg-white p-8 rounded-2xl watercolor-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-white">
        <div className="container-narrow mx-auto px-6 lg:px-8">
          <h2 className="heading-lg text-center text-gray-900 mb-12">
            Unser <span className="text-[#E63329]">Prozess</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Beratung', desc: 'Erstgespräch und Bedarfsanalyse' },
              { step: '02', title: 'Planung', desc: 'Konzept, Kostenplan und Timeline' },
              { step: '03', title: 'Umsetzung', desc: 'Koordination und Bauüberwachung' },
              { step: '04', title: 'Übergabe', desc: 'Abnahme und Dokumentation' },
            ].map((phase) => (
              <div key={phase.step} className="text-center">
                <div className="w-16 h-16 mx-auto bg-[#E63329] text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  {phase.step}
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">{phase.title}</h3>
                <p className="text-sm text-gray-600">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-narrow mx-auto px-6 lg:px-8 text-center">
          <h2 className="heading-md text-gray-900 mb-6">
            Bereit für Ihr Bauprojekt?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Kontaktieren Sie uns für ein unverbindliches Erstgespräch.
            Gemeinsam bringen wir Ihr Projekt zum Erfolg.
          </p>
          <Link href="/kontakt" className="btn-primary">
            Jetzt Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </>
  );
}
