import Link from 'next/link';

export default function CTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#C41E3A]" />

      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[800px] mx-auto px-6 text-center">
        <span className="text-white/60 text-sm uppercase tracking-[0.3em] mb-4 block">
          Lassen Sie uns sprechen
        </span>

        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-display text-white mb-8 leading-tight">
          Bereit für Ihre <br />
          <span className="italic text-[#D4AF37]">Immobilienziele?</span>
        </h2>

        <p className="text-white/80 text-lg mb-12 max-w-xl mx-auto">
          Kontaktieren Sie uns für eine unverbindliche Erstberatung.
          Gemeinsam finden wir die beste Lösung für Ihr Anliegen.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/kontakt"
            className="btn-premium bg-white border-white text-[#C41E3A] hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-[#1C1C1C]"
          >
            Jetzt Kontakt aufnehmen
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <a
            href="tel:+49241169889"
            className="btn-premium border-white/30 text-white hover:bg-white hover:text-[#C41E3A]"
          >
            0241 - 16 98 89 0
          </a>
        </div>
      </div>
    </section>
  );
}
