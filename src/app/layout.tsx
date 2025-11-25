import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Martello Immobilienmanagement | Aachen",
  description: "Professionelle Immobilienverwaltung, Immobilienverkauf und Baumanagement in Aachen. Sicher. Flexibel. Erstklassig.",
  keywords: "Immobilien, Aachen, Verwaltung, Hausverwaltung, WEG, Baumanagement, Selfstorage, HammerBox",
  authors: [{ name: "Martello Immobilienmanagement" }],
  openGraph: {
    title: "Martello Immobilienmanagement | Aachen",
    description: "Professionelle Immobilienverwaltung, Immobilienverkauf und Baumanagement in Aachen.",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
