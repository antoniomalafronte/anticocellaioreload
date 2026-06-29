/*
 * DESIGN: "Ember Dark" – Sezione Contatti & Prenotazioni (Safe Inline Style)
 * Due sedi: Boscotrecase e Torre Annunziata con contrasti forzati
 */

import { useEffect, useRef } from "react";
import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";

const CONTATTI_BACKGROUND = "https://d2xsxph8kpxj0f.cloudfront.net/310519663710527100/BwceywXQF25GTLkSeNPn8N/giardino-esterno-S8PDUYc9W3XdCefG9aXGat.webp";

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

const orari = [
  { giorno: "Lunedì", orario: "18:30 – 00:00" },
  { giorno: "Martedì", orario: "Riposo settimanale", chiuso: true },
  { giorno: "Mercoledì", orario: "18:30 – 01:30" },
  { giorno: "Giovedì", orario: "18:30 – 01:30" },
  { giorno: "Venerdì", orario: "18:30 – 01:30" },
  { giorno: "Sabato", orario: "18:30 – 01:00" },
  { giorno: "Domenica", orario: "12:00 – 01:30" },
];

const sedi = [
  {
    nome: "Sede Principale",
    citta: "Boscotrecase",
    indirizzo: "Via Panoramica 26, 80042 Boscotrecase (NA)",
    tel: "+39 081 191 72 89",
    telHref: "tel:+390811917289",
    wa: "+39 348 095 2422",
    waHref: "https://wa.me/393480952422?text=Ciao!%20Vorrei%20prenotare%20un%20tavolo%20all'Antico%20Cellaio%20Reload%20di%20Boscotrecase",
    maps: "https://maps.google.com/?q=Antico+Cellaio+Boscotrecase",
    note: "Ampio parcheggio · Giardino esterno · Sale eventi",
    primary: true,
  },
  {
    nome: "Seconda Sede",
    citta: "Torre Annunziata",
    indirizzo: "Corso Umberto I (altezza Via Prota), Torre Annunziata (NA)",
    tel: "+39 081 191 72 89",
    telHref: "tel:+390811917289",
    wa: "+39 349 273 49 20",
    waHref: "https://wa.me/393492734920?text=Ciao!%20Vorrei%20prenotare%20un%20tavolo%20all'Antico%20Cellaio%20Reload%20di%20Torre%20Annunziata",
    maps: "https://maps.google.com/?q=Antico+Cellaio+Torre+Annunziata",
    note: "Uscita autostradale Torre Annunziata Nord · Facilmente raggiungibile",
    primary: false,
  },
];

export default function ContattiSection() {
  const ref1 = useReveal();
  const ref2 = useReveal();
  const ref3 = useReveal();

  return (
    <section id="contatti" className="relative py-24 md:py-32 overflow-hidden">
      {/* Formula Magica dello Sfondo Sbloccato */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${CONTATTI_BACKGROUND})`, filter: "blur(2px)" }} />
      <div className="absolute inset-0" style={{ background: "oklch(0.12 0.003 60 / 0.94)" }} />

      <div className="relative z-10 container">
        {/* Header */}
        <div ref={ref1} className="reveal text-center mb-16">
          <span style={{ color: "oklch(0.72 0.12 75)", letterSpacing: "0.2em", textTransform: "uppercase", fontSize: "0.75rem", fontWeight: 600 }}>Contatti & Prenotazioni</span>
          <h2
            className="display-heading mt-3"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              color: "oklch(0.94 0.01 80)",
              fontFamily: "'Cormorant Garamond', serif"
            }}
          >
            Vieni a
            <span style={{ color: "oklch(0.72 0.12 75)", fontStyle: "italic" }}> Trovarci</span>
          </h2>
          <div className="gold-divider mx-auto mt-6" style={{ width: "60px", height: "2px", background: "linear-gradient(90deg, transparent, oklch(0.72 0.12 75), transparent)" }} />
          <p
            className="mt-4"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.2rem",
              fontStyle: "italic",
              color: "oklch(0.78 0.01 80)",
            }}
          >
            Due sedi per servirti al meglio nella zona vesuviana
          </p>
        </div>

        {/* Sedi Grid */}
        <div ref={ref2} className="reveal grid md:grid-cols-2 gap-8 mb-16">
          {sedi.map((sede) => (
            <div
              key={sede.citta}
              className="p-8 rounded-lg"
              style={{
                background: "oklch(0.15 0.004 60 / 0.96)",
                border: `1px solid ${sede.primary ? "oklch(0.72 0.12 75 / 0.5)" : "oklch(1 0 0 / 8%)"}`,
                boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
              }}
            >
              {sede.primary && (
                <div
                  className="inline-block mb-4"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "0.6rem",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "oklch(0.72 0.12 75)",
                    background: "oklch(0.72 0.12 75 / 0.15)",
                    padding: "4px 10px",
                    borderRadius: "4px",
                    border: "1px solid oklch(0.72 0.12 75 / 0.2)"
                  }}
                >
                  ★ Sede Principale
                </div>
              )}
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.8rem",
                  fontWeight: 600,
                  color: "oklch(0.94 0.01 80)",
                  marginBottom: "0.25rem",
                }}
              >
                {sede.citta}
              </h3>
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "oklch(0.72 0.12 75)",
                  marginBottom: "1.75rem",
                }}
              >
                {sede.nome}
              </p>

              {/* Info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: "oklch(0.72 0.12 75)" }} />
                  <span
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "0.85rem",
                      fontWeight: 300,
                      color: "oklch(0.80 0.008 80)",
                      lineHeight: 1.6,
                    }}
                  >
                    {sede.indirizzo}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 flex-shrink-0" style={{ color: "oklch(0.72 0.12 75)" }} />
                  <a
                    href={sede.telHref}
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      color: "oklch(0.94 0.01 80)",
                    }}
                    className="hover:text-[oklch(0.72_0.12_75)] transition-colors"
                  >
                    {sede.tel}
                  </a>
                </div>
                <div
                  className="pl-7"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "0.75rem",
                    color: "oklch(0.60 0.008 80)",
                    fontStyle: "italic",
                    lineHeight: 1.5
                  }}
                >
                  {sede.note}
                </div>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={sede.waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-md text-xs font-bold tracking-wider uppercase transition-all"
                  style={{
                    background: "linear-gradient(135deg, oklch(0.77 0.11 75), oklch(0.67 0.13 75))",
                    color: "oklch(0.12 0.003 60)"
                  }}
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Prenota
                </a>
                <a
                  href={sede.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-md text-xs font-semibold tracking-wider uppercase transition-all"
                  style={{
                    border: "1px solid oklch(0.94 0.01 80 / 20%)",
                    color: "oklch(0.94 0.01 80)",
                    background: "rgba(255,255,255,0.02)"
                  }}
                >
                  <ExternalLink className="w-4 h-4" />
                  Google Maps
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Orari */}
        <div ref={ref3} className="reveal max-w-xl mx-auto">
          <div
            className="p-8 rounded-lg"
            style={{
              background: "oklch(0.15 0.004 60 / 0.96)",
              border: "1px solid oklch(1 0 0 / 8%)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-5 h-5" style={{ color: "oklch(0.72 0.12 75)" }} />
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.6rem",
                  fontWeight: 600,
                  color: "oklch(0.94 0.01 80)",
                }}
              >
                Orari di Apertura
              </h3>
            </div>
            <div className="space-y-2">
              {orari.map((o) => (
                <div
                  key={o.giorno}
                  className="flex justify-between items-center py-2.5"
                  style={{
                    borderBottom: "1px solid oklch(1 0 0 / 6%)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "0.85rem",
                      fontWeight: 500,
                      color: o.chiuso ? "oklch(0.50 0.008 80)" : "oklch(0.85 0.01 80)",
                    }}
                  >
                    {o.giorno}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "0.85rem",
                      fontWeight: o.chiuso ? 400 : 600,
                      color: o.chiuso ? "oklch(0.50 0.008 80)" : "oklch(0.72 0.12 75)",
                      fontStyle: o.chiuso ? "italic" : "normal",
                    }}
                  >
                    {o.orario}
                  </span>
                </div>
              ))}
            </div>

            {/* Email */}
            <div className="mt-6 pt-4 flex items-center gap-3 border-t border-white/5">
              <Mail className="w-4 h-4 flex-shrink-0" style={{ color: "oklch(0.72 0.12 75)" }} />
              <a
                href="mailto:info@anticocellaioreload.it"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "0.85rem",
                  color: "oklch(0.75 0.008 80)",
                }}
                className="hover:text-[oklch(0.72_0.12_75)] transition-colors"
              >
                info@anticocellaioreload.it
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}