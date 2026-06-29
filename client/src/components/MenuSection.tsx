/*
 * DESIGN: "Ember Dark" – Menù Interattivo Completo (Formula Sfondo Sbloccata)
 * Ripristino dello sfondo fotografico con velo OKLCH per la massima coerenza visiva
 */

import { useState } from "react";

const CARNI_BACKGROUND = "https://d2xsxph8kpxj0f.cloudfront.net/310519663710527100/BwceywXQF25GTLkSeNPn8N/selezione-carni-nqfrsVU4Ym3QG9Kn3nePeR.webp";

const menuData = {
  carni: {
    label: "Carni alla Brace",
    icon: "🥩",
    description: "Tagli pregiati selezionati dalla filiera corta, cotti su brace di quercia e faggio",
    items: [
      { name: "Bistecca di Chianina", desc: "Taglio al coltello, al sangue o media cottura. Minimo 600g.", price: "al kg", highlight: true },
      { name: "T-Bone Marchigiana", desc: "Il classico taglio con filetto e controfiletto, sapore intenso.", price: "al kg" },
      { name: "Ribeye Angus Americano", desc: "Marezzatura eccellente, morbidezza e gusto inconfondibile.", price: "al kg" },
      { name: "Wagyu A5", desc: "Il re delle carni. Marezzatura massima, si scioglie in bocca.", price: "al kg", highlight: true },
      { name: "Pezzata Rossa", desc: "Razza italiana di pregio, equilibrio perfetto tra grasso e magro.", price: "al kg" },
      { name: "Costata al Forno", desc: "Cottura lenta al forno con erbe aromatiche e brace finale.", price: "al kg" },
      { name: "Tagliata con Rucola", desc: "Controfiletto tagliato sottile, rucola, grana e pomodorini.", price: "€18" },
      { name: "Hamburger Artigianale", desc: "200g di carne macinata fresca, bun artigianale, salse della casa.", price: "€14" },
    ],
  },
  panini: {
    label: "Panini & Burger",
    icon: "🍔",
    description: "Panini artigianali con ingredienti freschi e carni selezionate",
    items: [
      { name: "Cellaio Burger", desc: "Doppio hamburger, cheddar, bacon croccante, cipolla caramellata.", price: "€16", highlight: true },
      { name: "Vesuvio Burger", desc: "Hamburger, provola affumicata, friarielli, salsa piccante.", price: "€15" },
      { name: "Chianina Sandwich", desc: "Tagliata di Chianina, rucola, parmigiano, salsa al tartufo.", price: "€17", highlight: true },
      { name: "Pulled Pork", desc: "Maiale cotto 12 ore, coleslaw, salsa BBQ della casa.", price: "€14" },
      { name: "Chicken Crispy", desc: "Pollo croccante, lattuga, pomodoro, maionese al limone.", price: "€13" },
      { name: "Veggie Deluxe", desc: "Burger di legumi, avocado, pomodoro secco, hummus.", price: "€12" },
    ],
  },
  sfizi: {
    label: "Sfizi & Antipasti",
    icon: "🍟",
    description: "Stuzzichini e antipasti per iniziare nel modo giusto",
    items: [
      { name: "Tagliere Misto", desc: "Salumi e formaggi campani selezionati, miele e conffetture.", price: "€18", highlight: true },
      { name: "Nachos con Guacamole", desc: "Nachos croccanti, guacamole fresco, salsa piccante, panna acida.", price: "€10" },
      { name: "Onion Rings", desc: "Anelli di cipolla in pastella croccante, salsa ranch.", price: "€8" },
      { name: "Alette di Pollo BBQ", desc: "Alette marinate 24h, glassate con salsa BBQ della casa.", price: "€12" },
      { name: "Bruschette Miste", desc: "Tre bruschette: pomodoro fresco, lardo e miele, 'nduja e provola.", price: "€9" },
      { name: "Patatine Fritte", desc: "Patatine artigianali con sale grosso e rosmarino.", price: "€6" },
      { name: "Supplì al Telefono", desc: "Supplì di riso con ragù napoletano e fior di latte.", price: "€8" },
      { name: "Mozzarella in Carrozza", desc: "Classico napoletano, mozzarella di bufala campana.", price: "€9" },
    ],
  },
  cantina: {
    label: "Cantina & Bevande",
    icon: "🍷",
    description: "Selezione di vini italiani e birre artigianali alla spina",
    items: [
      { name: "Aglianico del Vesuvio DOC", desc: "Vino rosso campano, strutturato e prima scelta con le carni.", price: "€22/bt", highlight: true },
      { name: "Lacryma Christi Rosso", desc: "Vino vulcanico dal Vesuvio, elegante e minerale.", price: "€20/bt", highlight: true },
      { name: "Greco di Tufo DOCG", desc: "Bianco campano di grande personalità, fresco e aromatico.", price: "€22/bt" },
      { name: "Fiano di Avellino DOCG", desc: "Bianco strutturato, note di miele e frutta esotica.", price: "€24/bt" },
      { name: "Birra Artigianale Alla Spina", desc: "Selezione rotante di birre artigianali italiane.", price: "€5/pinta" },
      { name: "Birra Moretti", desc: "La classica italiana, sempre fresca alla spina.", price: "€4/pinta" },
      { name: "Acqua Minerale", desc: "Naturale o frizzante, 75cl.", price: "€2" },
      { name: "Bibite", desc: "Coca-Cola, Fanta, Sprite, succhi di frutta.", price: "€3" },
    ],
  },
};

type MenuCategory = keyof typeof menuData;

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState<MenuCategory>("carni");
  const category = menuData[activeTab];

  return (
    <section 
      id="menu" 
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ 
        borderTop: "1px solid oklch(0.94 0.01 80 / 5%)"
      }}
    >
      {/* Formula Magica dello Sfondo: Trasparenza fotografica profonda senza blocchi */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${CARNI_BACKGROUND})`, filter: "blur(2px)" }} />
      <div className="absolute inset-0" style={{ background: "oklch(0.12 0.003 60 / 0.94)" }} />

      <div className="relative z-10 container">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span style={{ color: "oklch(0.72 0.12 75)", letterSpacing: "0.2em", textTransform: "uppercase", fontSize: "0.75rem", fontWeight: 600 }}>Il Menù</span>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "oklch(0.94 0.01 80)", marginTop: "12px" }}>
            Le Nostre <span style={{ color: "oklch(0.72 0.12 75)", fontStyle: "italic" }}>Specialità</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-xs font-light" style={{ fontFamily: "'Montserrat', sans-serif", color: "oklch(0.65 0.008 80)", letterSpacing: "0.05em" }}>
            Prezzi indicativi. Per il menù completo e aggiornato contattaci su WhatsApp.
          </p>
        </div>

        {/* Tab Selector Buttons */}
        <div 
          className="flex flex-wrap justify-center gap-2 mb-10 max-w-2xl mx-auto p-2 rounded-lg" 
          style={{ background: "oklch(0.16 0.004 60 / 0.85)", border: "1px solid rgba(255,255,255,0.04)" }}
        >
          {(Object.keys(menuData) as MenuCategory[]).map((key) => {
            const cat = menuData[key];
            const isActive = activeTab === key;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className="px-4 py-2.5 rounded text-xs font-semibold tracking-wider uppercase"
                style={{
                  background: isActive ? "oklch(0.72 0.12 75)" : "transparent",
                  color: isActive ? "oklch(0.12 0.003 60)" : "oklch(0.75 0.01 80)",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.2s ease"
                }}
              >
                {cat.icon} {cat.label}
              </button>
            );
          })}
        </div>

        {/* Descrizione Categoria */}
        <div className="text-center mb-10">
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", fontStyle: "italic", color: "oklch(0.72 0.12 75)" }}>
            {category.description}
          </p>
        </div>

        {/* Items Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" style={{ display: "grid" }}>
          {category.items.map((item) => (
            <div
              key={item.name}
              className="p-6 rounded-lg flex flex-col justify-between"
              style={{
                background: "oklch(0.15 0.004 60 / 0.95)",
                border: item.highlight ? "1px solid oklch(0.72 0.12 75 / 0.5)" : "1px solid oklch(1 0 0 / 8%)",
                boxShadow: "0 10px 25px rgba(0,0,0,0.4)"
              }}
            >
              <div>
                <div className="flex justify-between items-start gap-2">
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.25rem", color: "oklch(0.94 0.01 80)", fontWeight: 600 }}>
                    {item.name}
                  </h3>
                  {item.highlight && (
                    <span style={{ fontSize: "0.55rem", fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: "oklch(0.72 0.12 75)", background: "oklch(0.72 0.12 75 / 0.1)", padding: "2px 6px", borderRadius: "2px", textTransform: "uppercase" }}>
                      ★ Top
                    </span>
                  )}
                </div>
                <p className="mt-3 text-xs font-light" style={{ color: "oklch(0.68 0.008 80)", fontFamily: "'Montserrat', sans-serif", lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
              <div className="mt-5 font-bold text-sm tracking-wide" style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Montserrat', sans-serif" }}>
                {item.price}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="https://wa.me/393492734920?text=Ciao!%20Vorrei%20informazioni%20sul%20men%C3%B9%20dell'Antico%20Cellaio%20Reload"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md text-xs font-bold tracking-widest uppercase transition-all"
            style={{
              border: "1px solid oklch(0.94 0.01 80 / 20%)",
              color: "oklch(0.94 0.01 80)",
              background: "rgba(255,255,255,0.02)"
            }}
          >
            Richiedi il Menù Completo
          </a>
        </div>
      </div>
    </section>
  );
}