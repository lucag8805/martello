import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const playfair = Playfair_Display({
  variable: '--font-display',
  subsets: ['latin'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-body',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Martello Immobilienmanagement | Aachen',
    template: '%s | Martello Immobilienmanagement',
  },
  description:
    'Martello Immobilienmanagement - Ihr kompetenter Partner für Objektverwaltung, Immobilienvermittlung und Baumanagement in Aachen.',
  keywords: [
    'Immobilienverwaltung',
    'Aachen',
    'Objektverwaltung',
    'Baumanagement',
    'Immobilien',
    'Martello',
  ],
  authors: [{ name: 'Martello Immobilienmanagement' }],
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    siteName: 'Martello Immobilienmanagement',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
