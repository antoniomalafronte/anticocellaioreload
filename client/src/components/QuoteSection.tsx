/*
 * DESIGN: "Ember Dark" – Sezione Quote / Manifesto
 * Testo grande centrato su sfondo scuro con accent dorato
 */

import { useEffect, useRef } from "react";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function QuoteSection() {
  const ref = useReveal();

  return (
    <section
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ background: "oklch(0.16 0.004 60)" }}
    >
      {/* Decorative large number */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(12rem, 30vw, 22rem)",
          fontWeight: 700,
          color: "oklch(0.72 0.12 75 / 0.04)",
          lineHeight: 1,
          userSelect: "none",
        }}
        aria-hidden="true"
      >
        ACR
      </div>

      <div ref={ref} className="reveal relative z-10 container text-center max-w-3xl mx-auto">
        <div className="gold-divider mx-auto mb-8" />
        <blockquote>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)",
              fontWeight: 400,
              fontStyle: "italic",
              color: "oklch(0.88 0.01 80)",
              lineHeight: 1.5,
            }}
          >
            "Le migliori carni, cotte lentamente su brace viva di quercia e faggio,
            servite con un mix segreto di aromi e spezie sapientemente preparate
            dai nostri Chef."
          </p>
        </blockquote>
        <div className="gold-divider mx-auto mt-8" />
        <p
          className="mt-6"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "0.7rem",
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "oklch(0.55 0.008 80)",
          }}
        >
          La Cucina dell'Antico Cellaio Reload
        </p>
      </div>
    </section>
  );
}
