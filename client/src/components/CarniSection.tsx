/*
 * DESIGN: "Ember Dark" – Sezione Carni Pregiate (Formula Sfondo Sbloccata)
 * Ripristino dello sfondo fotografico ad alto contrasto ereditato dalla sezione Locale
 */

import { useEffect, useRef } from "react";

const BISTECCA_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663710527100/BwceywXQF25GTLkSeNPn8N/bistecca-chianina-7XYgaWaJpGGWFNE2Tu5G6r.webp";
const CARNI_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663710527100/BwceywXQF25GTLkSeNPn8N/selezione-carni-nqfrsVU4Ym3QG9Kn3nePeR.webp";

const razze = [
  { name: "Chianina", origin: "Toscana / Umbria", desc: "La razza italiana per eccellenza. Carne magra, tenera e dal sapore delicato." },
  { name: "Marchigiana", origin: "Marche", desc: "Eccellente marezzatura, sapore intenso e consistenza perfetta alla brace." },
  { name: "Angus Americano", origin: "USA / Scozia", desc: "Marezzatura naturale, morbidezza straordinaria e gusto ricco e burroso." },
  { name: "Wagyu", origin: "Giappone", desc: "Il massimo della qualità mondiale. Marezzatura A5, si scioglie letteralmente in bocca." },
  { name: "Pezzata Rossa", origin: "Italia", desc: "Razza italiana a duplice attitudine, carne equilibrata tra grasso e magro." },
];

export default function CarniSection() {
  return (
    <section id="carni" className="relative py-24 md:py-32 overflow-hidden" style={{ borderTop: "1px solid oklch(0.94 0.01 80 / 5%)" }}>
      
      {/* Formula Magica dello Sfondo (Copiata e adattata con CARNI_IMAGE) */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${CARNI_IMAGE})`, filter: "blur(2px)" }} />
      <div className="absolute inset-0" style={{ background: "oklch(0.12 0.003 60 / 0.94)" }} />

      <div className="container relative z-10">
        
        {/* Header di sezione */}
        <div className="text-center mb-20">
          <span style={{ color: "oklch(0.72 0.12 75)", letterSpacing: "0.2em", textTransform: "uppercase", fontSize: "0.75rem", fontWeight: 600 }}>La Selezione</span>
          <h2 className="display-heading mt-3" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "oklch(0.94 0.01 80)", fontFamily: "'Cormorant Garamond', serif" }}>
            Carni di
            <span style={{ color: "oklch(0.72 0.12 75)", fontStyle: "italic" }}> Eccellenza</span>
          </h2>
          <div className="gold-divider mx-auto mt-6" style={{ width: "60px", height: "2px", background: "linear-gradient(90deg, transparent, oklch(0.72 0.12 75), transparent)" }} />
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Griglia Immagini (Sinistra su Desktop) */}
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 overflow-hidden rounded-lg border border-white/5 shadow-2xl">
                <img
                  src={CARNI_IMAGE}
                  alt="Selezione carni pregiate Antico Cellaio Reload"
                  className="w-full h-72 object-cover filter brightness-90"
                  loading="lazy"
                />
              </div>
              <div className="overflow-hidden rounded-lg border border-white/5 shadow-xl">
                <img
                  src={BISTECCA_IMAGE}
                  alt="Bistecca alla brace Antico Cellaio Reload"
                  className="w-full h-48 object-cover filter brightness-90"
                  loading="lazy"
                />
              </div>
              
              {/* Badge 5+ Razze forzato con stile visibile */}
              <div 
                className="flex flex-col justify-center items-center p-6 h-48 text-center rounded-lg"
                style={{
                  background: "oklch(0.16 0.005 60 / 0.85)",
                  border: "1px solid oklch(0.72 0.12 75 / 0.3)",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.4)"
                }}
              >
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "3.5rem", fontWeight: 700, color: "oklch(0.72 0.12 75)" }}>
                  5+
                </span>
                <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.68rem", fontWeight: 600, tracking: "0.15em", textTransform: "uppercase", color: "oklch(0.94 0.01 80 / 60%)", marginTop: "0.5rem" }}>
                  Razze Pregiate
                </span>
              </div>
            </div>
          </div>

          {/* Lista Razze (Destra su Desktop) */}
          <div className="order-1 lg:order-2">
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.3rem", fontWeight: 300, fontStyle: "italic", lineHeight: 1.7, color: "oklch(0.88 0.01 80)", marginBottom: "2.5rem" }}>
              Selezioniamo personalmente ogni taglio dai migliori produttori italiani e internazionali,
              garantendo freschezza e qualità in ogni piatto.
            </p>
            
            <div className="space-y-4">
              {razze.map((razza, i) => (
                <div
                  key={razza.name}
                  className="flex gap-5 p-5 rounded-lg transition-all"
                  style={{ 
                    background: "oklch(0.15 0.004 60 / 0.95)",
                    border: "1px solid oklch(1 0 0 / 8%)",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.3)"
                  }}
                >
                  {/* Numero seriale d'oro della razza */}
                  <div 
                    className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded font-serif text-base font-bold"
                    style={{
                      background: "oklch(0.12 0.003 60)",
                      border: "1px solid oklch(0.72 0.12 75 / 0.2)",
                      color: "oklch(0.72 0.12 75)"
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.25rem", color: "oklch(0.94 0.01 80)", fontWeight: 600 }}>
                        {razza.name}
                      </h3>
                      <span 
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: "0.62rem",
                          fontWeight: 600,
                          letterSpacing: "0.05em",
                          textTransform: "uppercase",
                          color: "oklch(0.72 0.12 75)",
                          background: "oklch(0.72 0.12 75 / 0.08)",
                          padding: "2px 8px",
                          borderRadius: "4px",
                          border: "1px solid oklch(0.72 0.12 75 / 0.15)"
                        }}
                      >
                        {razza.origin}
                      </span>
                    </div>
                    <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.8rem", fontWeight: 300, color: "oklch(0.68 0.008 80)", lineHeight: 1.6, marginTop: "0.5rem" }}>
                      {razza.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}