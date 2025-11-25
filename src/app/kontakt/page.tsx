import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Kontakt | Martello Immobilienmanagement',
  description: 'Kontaktieren Sie Martello Immobilienmanagement in Aachen. Wir sind für Sie da.',
};

export default function KontaktPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-white via-rose-50/20 to-white">
        <div className="container-narrow mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl text-gray-900 mb-6">
              <span className="text-[#E63329]">Kontakt</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Haben Sie Fragen oder möchten Sie uns kennenlernen?
              Wir freuen uns auf Ihre Nachricht.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-white">
        <div className="container-narrow mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h2 className="text-2xl font-medium text-gray-900 mb-6">
                Schreiben Sie uns
              </h2>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#E63329]/20 focus:border-[#E63329] transition-colors"
                      placeholder="Ihr Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#E63329]/20 focus:border-[#E63329] transition-colors"
                      placeholder="ihre@email.de"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#E63329]/20 focus:border-[#E63329] transition-colors"
                    placeholder="0241 - ..."
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Betreff *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#E63329]/20 focus:border-[#E63329] transition-colors"
                  >
                    <option value="">Bitte wählen...</option>
                    <option value="verwaltung">Objektverwaltung</option>
                    <option value="immobilien">Immobilien kaufen/verkaufen</option>
                    <option value="baumanagement">Baumanagement</option>
                    <option value="hammerbox">HammerBox Selfstorage</option>
                    <option value="sonstiges">Sonstiges</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Ihre Nachricht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#E63329]/20 focus:border-[#E63329] transition-colors resize-none"
                    placeholder="Wie können wir Ihnen helfen?"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    name="privacy"
                    required
                    className="mt-1 w-4 h-4 text-[#E63329] border-gray-300 rounded focus:ring-[#E63329]"
                  />
                  <label htmlFor="privacy" className="text-sm text-gray-600">
                    Ich habe die <Link href="/datenschutz" className="text-[#E63329] hover:underline">Datenschutzerklärung</Link> zur Kenntnis genommen. *
                  </label>
                </div>

                <p className="text-xs text-gray-500">
                  Ihre Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet
                  und nicht an Dritte weitergegeben.
                </p>

                <button
                  type="submit"
                  className="btn-primary w-full justify-center"
                >
                  Nachricht senden
                </button>

                <p className="text-xs text-gray-500 text-center">
                  * Pflichtfelder
                </p>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-medium text-gray-900 mb-6">
                So erreichen Sie uns
              </h2>

              <div className="space-y-8">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#E63329]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#E63329]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Adresse</h3>
                    <p className="text-gray-600">Auf der Hüls 103</p>
                    <p className="text-gray-600">52068 Aachen</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#E63329]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#E63329]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Telefon</h3>
                    <a href="tel:02411698890" className="text-[#E63329] hover:underline">
                      0241 - 169 889 0
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#E63329]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#E63329]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">E-Mail</h3>
                    <a href="mailto:info@martello.de" className="text-[#E63329] hover:underline">
                      info@martello.de
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#E63329]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#E63329]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Öffnungszeiten</h3>
                    <p className="text-gray-600">Mo - Fr: 9:00 - 17:00 Uhr</p>
                    <p className="text-gray-600">Sa - So: geschlossen</p>
                  </div>
                </div>
              </div>

              {/* Aachen Image */}
              <div className="mt-8">
                <Image
                  src="/images/aachenfuerherovonunterseiten.jpg"
                  alt="Aachen Stadtansicht"
                  width={600}
                  height={300}
                  className="w-full h-64 object-cover rounded-2xl watercolor-shadow"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
