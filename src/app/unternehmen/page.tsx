import Image from 'next/image';
import Link from 'next/link';
import { getImagePath } from '@/lib/utils';

export const metadata = {
  title: 'Unternehmen | Martello Immobilienmanagement',
  description: 'Lernen Sie Martello Immobilienmanagement kennen. Ihr lokaler Partner für Immobilien in Aachen.',
};

export default function UnternehmenPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-white via-rose-50/20 to-white">
        <div className="container-narrow mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="heading-xl text-gray-900 mb-6">
              <span className="text-[#E63329]">Jede Immobilie</span>
              <br />hat ihre Geschichte
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Seit unserer Gründung steht Martello für professionelle Immobilienverwaltung
              mit persönlicher Note. Als lokaler Partner kennen wir Aachen und seine
              Menschen - und das macht den Unterschied.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="bg-white py-12">
        <div className="container-narrow mx-auto px-6 lg:px-8">
          <Image
            src={getImagePath("/images/herosectionbild.jpg")}
            alt="Aachen Skyline Illustration"
            width={1200}
            height={400}
            className="w-full h-auto rounded-2xl watercolor-shadow"
          />
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-narrow mx-auto px-6 lg:px-8">
          <h2 className="heading-lg text-center text-gray-900 mb-12">
            Unsere <span className="text-[#E63329]">Werte</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Sicher',
                desc: 'Ihre Immobilie ist bei uns in guten Händen. Transparenz und Zuverlässigkeit sind unser Fundament.',
              },
              {
                title: 'Flexibel',
                desc: 'Individuelle Lösungen statt Schema F. Wir passen uns Ihren Bedürfnissen an.',
              },
              {
                title: 'Erstklassig',
                desc: 'Höchste Qualität in Service und Beratung. Weil Ihre Immobilie es verdient.',
              },
            ].map((value) => (
              <div key={value.title} className="bg-white p-8 rounded-2xl watercolor-shadow text-center">
                <h3 className="text-2xl font-light text-[#E63329] mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container-narrow mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg text-gray-900 mb-6">
                Unser <span className="text-[#E63329]">Team</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Hinter Martello steht ein engagiertes Team aus erfahrenen Immobilienprofis.
                Gemeinsam bringen wir jahrzehntelange Erfahrung und frische Ideen zusammen.
              </p>
              <p className="text-gray-600 mb-8">
                Ob Hausverwaltung, Immobilienverkauf oder Baumanagement - bei uns haben Sie
                immer einen persönlichen Ansprechpartner, der Ihr Anliegen versteht und
                sich darum kümmert.
              </p>
              <Link href="/kontakt" className="btn-primary">
                Lernen Sie uns kennen
              </Link>
            </div>
            <div>
              <Image
                src={getImagePath("/images/kaufmaennischdingsverwaltung.jpg")}
                alt="Das Martello Team"
                width={600}
                height={400}
                className="rounded-2xl watercolor-shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="section-padding bg-gray-50">
        <div className="container-narrow mx-auto px-6 lg:px-8 text-center">
          <h2 className="heading-lg text-gray-900 mb-6">
            Verwurzelt in <span className="text-[#E63329]">Aachen</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Als Aachener Unternehmen kennen wir den lokalen Immobilienmarkt wie unsere
            Westentasche. Diese regionale Expertise kommt Ihnen zugute.
          </p>
          <div className="bg-white p-8 rounded-2xl watercolor-shadow inline-block">
            <p className="text-gray-900 font-medium">Martello Immobilienmanagement</p>
            <p className="text-gray-600">Auf der Hüls 103</p>
            <p className="text-gray-600">52068 Aachen</p>
            <p className="text-[#E63329] mt-4">Tel: 0241 - 169 889 0</p>
          </div>
        </div>
      </section>
    </>
  );
}
