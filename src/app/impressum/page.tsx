export const metadata = {
  title: 'Impressum | Martello Immobilienmanagement',
  description: 'Impressum der Martello Immobilienmanagement.',
};

export default function ImpressumPage() {
  return (
    <section className="pt-32 pb-20">
      <div className="container-narrow mx-auto px-6 lg:px-8">
        <h1 className="heading-lg text-gray-900 mb-12">Impressum</h1>

        <div className="prose prose-gray max-w-none">
          <h2 className="text-xl font-medium text-gray-900 mb-4">Angaben gemäß § 5 TMG</h2>
          <p className="text-gray-600 mb-6">
            Martello Immobilienmanagement GmbH<br />
            Auf der Hüls 103<br />
            52068 Aachen
          </p>

          <h2 className="text-xl font-medium text-gray-900 mb-4 mt-8">Kontakt</h2>
          <p className="text-gray-600 mb-6">
            Telefon: 0241 - 169 889 0<br />
            E-Mail: info@martello.de
          </p>

          <h2 className="text-xl font-medium text-gray-900 mb-4 mt-8">Vertreten durch</h2>
          <p className="text-gray-600 mb-6">
            [Name des Geschäftsführers]
          </p>

          <h2 className="text-xl font-medium text-gray-900 mb-4 mt-8">Registereintrag</h2>
          <p className="text-gray-600 mb-6">
            Eintragung im Handelsregister.<br />
            Registergericht: Amtsgericht Aachen<br />
            Registernummer: HRB [Nummer]
          </p>

          <h2 className="text-xl font-medium text-gray-900 mb-4 mt-8">Umsatzsteuer-ID</h2>
          <p className="text-gray-600 mb-6">
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
            DE [Nummer]
          </p>

          <h2 className="text-xl font-medium text-gray-900 mb-4 mt-8">Aufsichtsbehörde</h2>
          <p className="text-gray-600 mb-6">
            Zuständige Aufsichtsbehörde: IHK Aachen<br />
            Erlaubnis nach § 34c GewO
          </p>

          <h2 className="text-xl font-medium text-gray-900 mb-4 mt-8">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
          <p className="text-gray-600 mb-6">
            Berufsbezeichnung: Immobilienmakler / Hausverwalter<br />
            Zuständige Kammer: IHK Aachen<br />
            Verliehen in: Deutschland
          </p>

          <h2 className="text-xl font-medium text-gray-900 mb-4 mt-8">Streitschlichtung</h2>
          <p className="text-gray-600 mb-6">
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-[#E63329] hover:underline ml-1">
              https://ec.europa.eu/consumers/odr/
            </a>
          </p>
          <p className="text-gray-600 mb-6">
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>

          <h2 className="text-xl font-medium text-gray-900 mb-4 mt-8">Haftung für Inhalte</h2>
          <p className="text-gray-600 mb-6">
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
            allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
            zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>
          <p className="text-gray-600 mb-6">
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
            Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt
            der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
            Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </p>

          <h2 className="text-xl font-medium text-gray-900 mb-4 mt-8">Haftung für Links</h2>
          <p className="text-gray-600 mb-6">
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
            Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
          </p>

          <h2 className="text-xl font-medium text-gray-900 mb-4 mt-8">Urheberrecht</h2>
          <p className="text-gray-600 mb-6">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
            deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung
            außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen
            Autors bzw. Erstellers.
          </p>
        </div>
      </div>
    </section>
  );
}
