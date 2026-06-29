/*
 * DESIGN: "Ember Dark" – Hero Section (Premium Optimized)
 * Full-screen hero con immagine brace, overlay scuro profondo, testo centrato
 * CTA principale: Prenota su WhatsApp (Gold Luxury Integration)
 */

import { useEffect, useState } from "react";
import { ChevronDown, Phone } from "lucide-react";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663710527100/BwceywXQF25GTLkSeNPn8N/hero-brace-69YLskpPk6wADx3ptaNMKu.webp";

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToNext = () => {
    const el = document.querySelector("#locale");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Background image con leggero zoom in d'atmosfera */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10000ms] scale-105"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      />

      {/* Multi-layer overlay cinematografico (Usa la nuova sfumatura del foglio stile) */}
      <div className="absolute inset-0 img-overlay" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,oklch(0.12_0.003_60_/_60%)_100%)]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Pre-heading label */}
        <div
          className={`transition-all duration-1000 transform ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: "100ms" }}
        >
          <span className="section-label bg-charcoal/30 backdrop-blur-sm px-4 py-1.5 rounded-full border border-gold/10">
            Boscotrecase · Torre Annunziata
          </span>
        </div>

        {/* Main title */}
        <div
          className={`mt-6 transition-all duration-1000 transform ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ transitionDelay: "300ms" }}
        >
          <h1 className="display-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-warm-white tracking-wide">
            Antico Cellaio
            <br />
            <span className="text-gold italic font-normal font-serif block mt-1">
              reload
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <div
          className={`mt-4 transition-all duration-1000 transform ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ transitionDelay: "450ms" }}
        >
          <p className="font-sans text-xs sm:text-sm font-medium tracking-[0.4em] uppercase text-warm-white/70">
            Steak House · Braceria
          </p>
        </div>

        {/* Gold divider premium */}
        <div
          className={`transition-all duration-1000 transform ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ transitionDelay: "550ms" }}
        >
          <div className="gold-divider" />
        </div>

        {/* Payoff */}
        <div
          className={`mt-2 transition-all duration-1000 transform ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ transitionDelay: "650ms" }}
        >
          <p className="font-serif text-lg sm:text-xl md:text-2xl font-light italic text-warm-white/80 max-w-2xl leading-relaxed text-balance">
            Carni pregiate cotte alla brace di quercia e faggio,<br />
            <span className="text-gold/90">ai piedi del Vesuvio.</span>
          </p>
        </div>

        {/* CTA buttons */}
        <div
          className={`mt-12 flex flex-col sm:flex-row gap-5 justify-center items-center w-full sm:w-auto transition-all duration-1000 transform ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ transitionDelay: "800ms" }}
        >
          <a
            href="https://wa.me/393492734920?text=Ciao!%20Vorrei%20prenotare%20un%20tavolo%20all'Antico%20Cellaio%20Reload"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full sm:w-auto justify-center shadow-[0_0_30px_oklch(0.72_0.12_75_/_10%)] hover:shadow-[0_0_30px_oklch(0.72_0.12_75_/_25%)]"
          >
            <svg className="w-4 h-4 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Prenota un Tavolo
          </a>
          <a
            href="tel:+390811917289"
            className="btn-outline group w-full sm:w-auto justify-center"
          >
            <Phone className="w-4 h-4 text-gold/80 transition-colors group-hover:text-gold" />
            081 191 72 89
          </a>
        </div>

        {/* Feature badges (Ridisegnati come micro-card eleganti) */}
        <div
          className={`mt-16 grid grid-cols-2 md:flex md:flex-wrap justify-center gap-4 transition-all duration-1000 transform ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ transitionDelay: "950ms" }}
        >
          {[
            { icon: "🔥", label: "Qualità Italiana" },
            { icon: "🥩", label: "Filiera Corta" },
            { icon: "🍷", label: "Cantina Vini" },
            { icon: "🚌", label: "Ampio Parcheggio (Anche per autobus)" },
          ].map((badge) => (
            <div
              key={badge.label}
              className="flex items-center justify-center gap-3 bg-charcoal/20 backdrop-blur-[2px] border border-warm-white/5 rounded px-5 py-2.5 min-w-[150px] md:min-w-0"
            >
              <span className="text-base filter drop-shadow">{badge.icon}</span>
              <span className="font-sans text-[0.68rem] font-semibold tracking-wider uppercase text-warm-white/70 whitespace-nowrap">
                {badge.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator dorato */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-gold transition-all duration-300 hover:text-warm-white hover:scale-110"
        aria-label="Scorri verso il basso"
      >
        <ChevronDown className="w-7 h-7 animate-bounce" />
      </button>
    </section>
  );
}