/*
 * DESIGN: "Ember Dark" – Sezione Turismo & Gruppi
 * Background con immagine giardino, overlay scuro
 * Card con vantaggi per gruppi turistici
 */

import { useEffect, useRef } from "react";
import { Bus, Users, MapPin, CalendarCheck } from "lucide-react";

const GIARDINO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663710527100/BwceywXQF25GTLkSeNPn8N/giardino-esterno-S8PDUYc9W3XdCefG9aXGat.webp";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

const vantaggi = [
  {
    icon: Bus,
    title: "Parcheggio Autobus",
    desc: "Ampio parcheggio che accoglie autobus, pullman e roulotte. Accesso facilitato per gruppi organizzati.",
  },
  {
    icon: Users,
    title: "200+ Posti a Sedere",
    desc: "Sale interne capienti e giardino esterno per accogliere grandi gruppi in comfort.",
  },
  {
    icon: CalendarCheck,
    title: "Menù Personalizzato",
    desc: "Offriamo menù dedicati per gruppi turistici, scolastici e aziendali, con prezzi concordati.",
  },
  {
    icon: MapPin,
    title: "Posizione Strategica",
    desc: "Ai piedi del Vesuvio, vicino a Pompei, Sorrento e Napoli. Punto di ristoro ideale per i tour.",
  },
];

const attrazioni = [
  { name: "Pompei", dist: "8 km", icon: "🏛️" },
  { name: "Vesuvio", dist: "3 km", icon: "🌋" },
  { name: "Sorrento", dist: "35 km", icon: "🌊" },
  { name: "Napoli", dist: "25 km", icon: "🏙️" },
  { name: "Ercolano", dist: "12 km", icon: "🏺" },
  { name: "Costiera Amalfitana", dist: "50 km", icon: "🛶" },
];

export default function TurismoSection() {
  const ref1 = useReveal();
  const ref2 = useReveal();
  const ref3 = useReveal();

  return (
    <section
      id="turismo"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${GIARDINO_IMAGE})` }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "oklch(0 0 0 / 0.82)" }}
      />

      <div className="relative z-10 container">
        {/* Header */}
        <div ref={ref1} className="reveal text-center mb-16">
          <span className="section-label">Turismo & Gruppi</span>
          <h2
            className="display-heading mt-3"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              color: "oklch(0.94 0.01 80)",
            }}
          >
            Il Punto di Ristoro
            <br />
            <span style={{ color: "oklch(0.72 0.12 75)", fontStyle: "italic" }}>
              della Campania
            </span>
          </h2>
          <div className="gold-divider mx-auto mt-6" />
          <p
            className="mt-6 max-w-2xl mx-auto"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.15rem",
              fontStyle: "italic",
              color: "oklch(0.75 0.01 80)",
              lineHeight: 1.7,
            }}
          >
            Situato ai piedi del Parco Nazionale del Vesuvio, l'Antico Cellaio Reload è
            il punto di ristoro ideale per i gruppi turistici in visita alle meraviglie
            della Campania.
          </p>
        </div>

        {/* Vantaggi grid */}
        <div ref={ref2} className="reveal stagger-children grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {vantaggi.map((v) => {
            const Icon = v.icon;
            return (
              <div
                key={v.title}
                className="p-6 text-center transition-all duration-250 hover:border-[oklch(0.72_0.12_75/0.4)]"
                style={{
                  background: "oklch(0.14 0.004 60 / 0.9)",
                  border: "1px solid oklch(1 0 0 / 12%)",
                  borderRadius: "2px",
                  backdropFilter: "blur(8px)",
                }}
              >
                <div
                  className="w-12 h-12 mx-auto mb-4 flex items-center justify-center"
                  style={{
                    background: "oklch(0.72 0.12 75 / 0.1)",
                    border: "1px solid oklch(0.72 0.12 75 / 0.3)",
                    borderRadius: "2px",
                  }}
                >
                  <Icon className="w-5 h-5" style={{ color: "oklch(0.72 0.12 75)" }} />
                </div>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.15rem",
                    fontWeight: 600,
                    color: "oklch(0.94 0.01 80)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {v.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "0.78rem",
                    fontWeight: 300,
                    color: "oklch(0.60 0.008 80)",
                    lineHeight: 1.7,
                  }}
                >
                  {v.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Attrazioni vicine */}
        <div ref={ref3} className="reveal">
          <h3
            className="text-center mb-8"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "oklch(0.72 0.12 75)",
            }}
          >
            Attrazioni nelle Vicinanze
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {attrazioni.map((a) => (
              <div
                key={a.name}
                className="text-center p-4"
                style={{
                  background: "oklch(0.14 0.004 60 / 0.8)",
                  border: "1px solid oklch(1 0 0 / 10%)",
                  borderRadius: "2px",
                  backdropFilter: "blur(8px)",
                }}
              >
                <div className="text-2xl mb-2">{a.icon}</div>
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "oklch(0.94 0.01 80)",
                  }}
                >
                  {a.name}
                </div>
                <div
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "0.65rem",
                    fontWeight: 600,
                    color: "oklch(0.72 0.12 75)",
                    marginTop: "0.25rem",
                  }}
                >
                  {a.dist}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA per agenzie */}
        <div className="text-center mt-12">
          <a
            href="https://wa.me/393492734920?text=Ciao!%20Sono%20un'agenzia%20turistica%20e%20vorrei%20informazioni%20per%20gruppi%20all'Antico%20Cellaio%20Reload"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Contatta per Gruppi Turistici
          </a>
        </div>
      </div>
    </section>
  );
}
