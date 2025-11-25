'use client';

import { Metadata } from 'next';
import Image from 'next/image';
import { useState } from 'react';

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    vorname: '',
    name: '',
    email: '',
    telefon: '',
    betreff: '',
    nachricht: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] bg-[#1C1C1C] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/herosectionbild.jpg"
            alt="Aachen Landmarks"
            fill
            className="object-cover object-top opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1C1C1C] to-[#1C1C1C]/90" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-32 text-center">
          <span className="text-[#D4AF37] text-sm uppercase tracking-[0.3em] mb-4 block">
            Sprechen Sie mit uns
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display text-white mb-6">
            <span className="italic text-[#D4AF37]">Kontakt</span>
          </h1>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-[#FAF8F5]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-display text-[#1C1C1C] mb-8">
                Schreiben Sie uns
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm uppercase tracking-wider text-[#666] mb-2">
                      Vorname *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.vorname}
                      onChange={(e) => setFormData({ ...formData, vorname: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-[#D4AF37]/20 focus:border-[#D4AF37] outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm uppercase tracking-wider text-[#666] mb-2">
                      Nachname *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-[#D4AF37]/20 focus:border-[#D4AF37] outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm uppercase tracking-wider text-[#666] mb-2">
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-[#D4AF37]/20 focus:border-[#D4AF37] outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm uppercase tracking-wider text-[#666] mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      value={formData.telefon}
                      onChange={(e) => setFormData({ ...formData, telefon: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-[#D4AF37]/20 focus:border-[#D4AF37] outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm uppercase tracking-wider text-[#666] mb-2">
                    Betreff
                  </label>
                  <select
                    value={formData.betreff}
                    onChange={(e) => setFormData({ ...formData, betreff: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-[#D4AF37]/20 focus:border-[#D4AF37] outline-none transition-colors"
                  >
                    <option value="">Bitte wählen...</option>
                    <option value="verwaltung">Objektverwaltung</option>
                    <option value="immobilien">Immobilienanfrage</option>
                    <option value="baumanagement">Baumanagement</option>
                    <option value="selfstorage">HammerBox / Selfstorage</option>
                    <option value="sonstiges">Sonstiges</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm uppercase tracking-wider text-[#666] mb-2">
                    Nachricht *
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={formData.nachricht}
                    onChange={(e) => setFormData({ ...formData, nachricht: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-[#D4AF37]/20 focus:border-[#D4AF37] outline-none transition-colors resize-none"
                  />
                </div>

                <button type="submit" className="btn-premium btn-premium-filled">
                  Nachricht senden
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <div className="bg-[#1C1C1C] p-10 mb-8">
                <h3 className="text-xl font-display text-[#D4AF37] mb-6">Kontaktdaten</h3>
                <div className="space-y-4 text-white/80">
                  <p className="font-display text-white text-lg">
                    Martello Immobilienmanagement<br />
                    GmbH & Co. KG
                  </p>
                  <p>
                    Auf der Hüls 103<br />
                    52080 Aachen
                  </p>
                  <p>
                    <a href="tel:+49241169889" className="text-[#D4AF37] hover:text-white transition-colors">
                      0241 - 16 98 89 0
                    </a>
                  </p>
                  <p>
                    <a href="mailto:info@martello.de" className="text-[#D4AF37] hover:text-white transition-colors">
                      info@martello.de
                    </a>
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t border-white/10">
                  <h4 className="text-sm uppercase tracking-widest text-[#D4AF37] mb-3">
                    Öffnungszeiten
                  </h4>
                  <p className="text-white/80">
                    Montag bis Freitag<br />
                    8:00 - 17:00 Uhr
                  </p>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="relative h-80 bg-[#2D2D2D] border border-[#D4AF37]/20">
                <Image
                  src="/images/aachenansichtvonobenmitklickbarerhammerboxuntenrechts.jpg"
                  alt="Standort Aachen"
                  fill
                  className="object-cover opacity-50"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <a
                    href="https://maps.google.com/?q=Auf+der+Hüls+103,+52080+Aachen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-premium"
                  >
                    In Google Maps öffnen
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
