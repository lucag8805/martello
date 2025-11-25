import Link from 'next/link';

const footerLinks = {
  services: [
    { name: 'Objektverwaltung', href: '/verwaltung' },
    { name: 'Immobilien', href: '/immobilien' },
    { name: 'Baumanagement', href: '/baumanagement' },
    { name: 'Selfstorage', href: '/selfstorage' },
  ],
  company: [
    { name: 'Unternehmen', href: '/unternehmen' },
    { name: 'Kontakt', href: '/kontakt' },
    { name: 'Impressum', href: '/impressum' },
    { name: 'Datenschutz', href: '/datenschutz' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-white">
      {/* Main Footer */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#C41E3A] flex items-center justify-center">
                <span className="text-white font-bold text-xl">m</span>
              </div>
              <div>
                <div className="text-xl tracking-wide">martello</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37]">
                  Immobilienmanagement
                </div>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Ihr kompetenter Partner für Immobilienverwaltung,
              Maklerdienstleistungen und Baumanagement in Aachen.
            </p>
            <div className="flex gap-4">
              {['facebook', 'instagram', 'linkedin'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#1C1C1C] transition-all duration-300"
                >
                  <span className="text-xs uppercase">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[#D4AF37] text-sm uppercase tracking-[0.2em] mb-6">
              Leistungen
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-[#D4AF37] transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[#D4AF37] text-sm uppercase tracking-[0.2em] mb-6">
              Unternehmen
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-[#D4AF37] transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#D4AF37] text-sm uppercase tracking-[0.2em] mb-6">
              Kontakt
            </h4>
            <address className="not-italic text-white/60 text-sm space-y-3">
              <p>
                Martello Immobilienmanagement
                <br />
                GmbH & Co. KG
              </p>
              <p>
                Auf der Hüls 103
                <br />
                52080 Aachen
              </p>
              <p>
                <a
                  href="tel:+49241169889"
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  0241 - 16 98 89 0
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@martello.de"
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  info@martello.de
                </a>
              </p>
            </address>
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-[#D4AF37] text-xs uppercase tracking-wider mb-2">
                Öffnungszeiten
              </p>
              <p className="text-white/60 text-sm">Mo - Fr: 8:00 - 17:00 Uhr</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} Martello Immobilienmanagement. Alle Rechte vorbehalten.
            </p>
            <div className="flex items-center gap-2 text-white/40 text-sm">
              <span>Crafted with</span>
              <span className="text-[#D4AF37]">♦</span>
              <span>in Aachen</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
