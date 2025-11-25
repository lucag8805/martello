'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from '../ui/Logo';

const navigation = [
  { name: 'Home', href: '/', active: true },
  { name: 'Objektverwaltung', href: '/objektverwaltung' },
  { name: 'Immobilien', href: '/immobilien' },
  { name: 'Baumanagement', href: '/baumanagement' },
  { name: 'Unternehmen', href: '/unternehmen' },
  { name: 'Selfstorage', href: '/selfstorage', highlight: true },
  { name: 'Kontakt', href: '/kontakt' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
      <nav className="container-narrow mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Logo size="md" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  px-4 py-2 text-sm font-medium transition-colors duration-200
                  ${item.active
                    ? 'text-[#E63329]'
                    : item.highlight
                      ? 'text-[#E63329] hover:text-[#C42920]'
                      : 'text-gray-700 hover:text-[#E63329]'
                  }
                `}
              >
                {item.name.toUpperCase()}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#E63329] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Menu öffnen</span>
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4">
            <div className="flex flex-col space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-200
                    ${item.active
                      ? 'text-[#E63329] bg-red-50'
                      : item.highlight
                        ? 'text-[#E63329] hover:bg-red-50'
                        : 'text-gray-700 hover:text-[#E63329] hover:bg-gray-50'
                    }
                  `}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name.toUpperCase()}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Subtle bottom border */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
    </header>
  );
}
