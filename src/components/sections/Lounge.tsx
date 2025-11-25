import Image from 'next/image';
import Link from 'next/link';

export default function Lounge() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-[#FAF8F5] to-[#F5F0EB]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div>
            <span className="text-[#D4AF37] text-sm uppercase tracking-[0.3em] mb-4 block">
              Exklusiv
            </span>
            <h2 className="text-4xl lg:text-5xl font-display text-[#1C1C1C] mb-6 leading-tight">
              Martello Lounge <br />
              <span className="italic text-[#C41E3A]">Aachen</span>
            </h2>

            <div className="w-20 h-px bg-[#D4AF37] mb-8" />

            <div className="space-y-6 text-[#666] leading-relaxed mb-10">
              <p className="text-xl font-display text-[#1C1C1C]">
                Suchen Sie eine geeignete Location für Ihren Hochzeitsempfang,
                Ihr Seminar oder Ihre Abendveranstaltung?
              </p>
              <p>
                In der Martello-Lounge können Sie stilvoll besondere private oder
                gewerbliche Events mit besonderem Charakter ausrichten. Der
                beeindruckende Blick auf Dom und Rathaus durch eine großzügige
                Fensterfront ist einzigartig.
              </p>
            </div>

            {/* Contact Box */}
            <div className="bg-white border border-[#D4AF37]/20 p-8 mb-8">
              <h4 className="text-sm uppercase tracking-widest text-[#D4AF37] mb-4">
                Anfragen & Buchung
              </h4>
              <div className="space-y-2 text-[#1C1C1C]">
                <p className="font-medium">Dorn Catering & Events</p>
                <p className="text-sm text-[#666]">by DPB Event Management GmbH & Co. KG</p>
                <p className="mt-4">
                  <a href="tel:+492419199697" className="text-[#C41E3A] hover:text-[#D4AF37] transition-colors">
                    +49 241 – 919 969 77
                  </a>
                </p>
                <p>
                  <a href="mailto:info@dpb-event.de" className="text-[#C41E3A] hover:text-[#D4AF37] transition-colors">
                    info@dpb-event.de
                  </a>
                </p>
              </div>
            </div>

            <Link href="/kontakt" className="btn-premium btn-premium-filled">
              Anfrage senden
            </Link>
          </div>

          {/* Image Side */}
          <div className="relative">
            <div className="relative">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 border border-[#D4AF37]/30" />

              <Image
                src="/images/herosectionbild.jpg"
                alt="Martello Lounge Aachen"
                width={600}
                height={500}
                className="w-full h-auto object-cover relative z-10"
              />

              {/* Floating Badge */}
              <div className="absolute top-8 right-8 bg-[#1C1C1C] text-white px-6 py-4 z-20">
                <div className="text-[#D4AF37] text-xs uppercase tracking-widest mb-1">
                  Premium
                </div>
                <div className="text-lg font-display">Location</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
