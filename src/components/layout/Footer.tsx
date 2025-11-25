'use client';

import Link from 'next/link';
import Logo from '../ui/Logo';

const footerLinks = {
  services: [
    { name: 'Objektverwaltung', href: '/objektverwaltung' },
    { name: 'Immobilien', href: '/immobilien' },
    { name: 'Baumanagement', href: '/baumanagement' },
    { name: 'Selfstorage', href: '/selfstorage' },
  ],
  company: [
    { name: 'Unternehmen', href: '/unternehmen' },
    { name: 'Karriere', href: '/karriere' },
    { name: 'Kontakt', href: '/kontakt' },
  ],
  legal: [
    { name: 'Impressum', href: '/impressum' },
    { name: 'Datenschutz', href: '/datenschutz' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container-narrow mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Contact */}
          <div className="lg:col-span-1">
            <Logo size="md" />
            <div className="mt-6 space-y-3 text-sm text-gray-600">
              <p>Auf der Hüls 103</p>
              <p>52068 Aachen</p>
              <p className="pt-2">
                <a href="tel:02411698890" className="hover:text-[#E63329] transition-colors">
                  Tel: 0241 - 169 889 0
                </a>
              </p>
              <p>
                <a href="mailto:info@martello.de" className="hover:text-[#E63329] transition-colors">
                  info@martello.de
                </a>
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Leistungen
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-[#E63329] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Unternehmen
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-[#E63329] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Rechtliches
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-[#E63329] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Martello Immobilienmanagement. Alle Rechte vorbehalten.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-xs text-gray-400">
                Sicher. Flexibel. Erstklassig.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
