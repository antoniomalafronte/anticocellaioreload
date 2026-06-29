/*
 * DESIGN: "Ember Dark" – Sezione Il Locale & La Filiera (Safe Inline Style)
 */

import { useEffect, useRef } from "react";

const SALA_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663710527100/BwceywXQF25GTLkSeNPn8N/sala-interna-YWG9nyiwaxLLyZK6TPbR9B.webp";
const GIARDINO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663710527100/BwceywXQF25GTLkSeNPn8N/giardino-esterno-S8PDUYc9W3XdCefG9aXGat.webp";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

const features = [
  { icon: "🔥", title: "Brace di Quercia e Faggio", desc: "Ogni taglio viene cotto lentamente su brace viva di quercia e faggio, per un aroma unico." },
  { icon: "🥩", title: "Filiera Corta", desc: "Selezioniamo direttamente dai produttori: Chianina, Marchigiana, Angus, Wagyu." },
  { icon: "🌿", title: "Qualità Italiana", desc: "Materie prime di altissima qualità, preparate con cura e rispetto per la tradizione." },
  { icon: "🍷", title: "Cantina & Birre", desc: "Una vasta cantina di vini italiani e un'ampia selezione di birre artigianali." },
];

export default function LocaleSection() {
  const ref1 = useReveal();
  const ref2 = useReveal();
  const ref3 = useReveal();
  const ref4 = useReveal();

  return (
    <section id="locale" className="relative py-24 md:py-32 overflow-hidden">
      {/* Formula Magica dello Sfondo (Copiata da Turismo) */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${GIARDINO_IMAGE})`, filter: "blur(2px)" }} />
      <div className="absolute inset-0" style={{ background: "oklch(0.12 0.003 60 / 0.94)" }} />

      <div className="relative z-10 container">
        {/* Section header */}
        <div ref={ref1} className="reveal text-center mb-16">
          <span className="section-label" style={{ color: "oklch(0.72 0.12 75)", letterSpacing: "0.2em", textTransform: "uppercase", fontSize: "0.75rem", fontWeight: 600 }}>Il Locale & La Filiera</span>
          <h2 className="display-heading mt-3" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "oklch(0.94 0.01 80)", fontFamily: "'Cormorant Garamond', serif" }}>
            Tradizione e Stile <span style={{ color: "oklch(0.72 0.12 75)", fontStyle: "italic" }}>Contemporaneo</span>
          </h2>
          <div className="gold-divider mx-auto mt-6" style={{ width: "60px", height: "2px", background: "linear-gradient(90deg, transparent, oklch(0.72 0.12 75), transparent)" }} />
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <div ref={ref2} className="reveal">
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.1rem, 2vw, 1.35rem)", fontWeight: 400, lineHeight: 1.8, color: "oklch(0.88 0.01 80)" }}>
              Con la nuova gestione, l'Antico Cellaio diventa un luogo in cui la tradizione si unisce ad uno stile contemporaneo. Il risultato è una cucina fatta di materie prime di alta qualità.
            </p>
            <p className="mt-6" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.85rem", fontWeight: 300, lineHeight: 1.9, color: "oklch(0.70 0.008 80)" }}>
              I rivestimenti in legno, le mura con laterizi e pietra lavica, gli oggetti in rame e vintage fanno da cornice a serate indimenticabili nel nostro incantevole <strong style={{ color: "oklch(0.72 0.12 75)" }}>giardino</strong> o nelle sale interne.
            </p>
          </div>

          {/* Griglia immagini */}
          <div ref={ref3} className="reveal grid grid-cols-2 gap-4">
            <div className="col-span-2 overflow-hidden rounded-lg border border-white/5">
              <img src={SALA_IMAGE} alt="Sala" className="w-full h-60 object-cover" />
            </div>
            <div className="overflow-hidden rounded-lg border border-white/5">
              <img src={GIARDINO_IMAGE} alt="Giardino" className="w-full h-40 object-cover" />
            </div>
            <div className="flex flex-col justify-center items-center p-4 rounded-lg" style={{ background: "oklch(0.16 0.004 60 / 0.85)", border: "1px solid oklch(0.72 0.12 75 / 0.3)" }}>
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.5rem", fontWeight: 700, color: "oklch(0.72 0.12 75)" }}>200+</span>
              <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.65rem", fontWeight: 600, color: "oklch(0.60 0.008 80)", tracking: "0.1em" }}>POSTI A SEDERE</span>
            </div>
          </div>
        </div>

        {/* 4 Cards */}
        <div ref={ref4} className="reveal grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="p-6 rounded-lg transition-all" style={{ background: "oklch(0.15 0.004 60 / 0.95)", border: "1px solid oklch(1 0 0 / 8%)" }}>
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", fontWeight: 600, color: "oklch(0.94 0.01 80)", marginBottom: "0.5rem" }}>{f.title}</h3>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.8rem", fontWeight: 300, color: "oklch(0.65 0.008 80)", lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}