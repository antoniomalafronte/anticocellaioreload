/*
 * DESIGN: "Ember Dark" – Navbar trasparente che diventa solida allo scroll
 * Font: Montserrat uppercase per i link, Cormorant Garamond per il logo
 * Colors: gold accent #D4A853, dark background on scroll
 */

import { useState, useEffect } from "react";
import { Menu, X, Flame } from "lucide-react";

const navLinks = [
  { label: "Il Locale", href: "#locale" },
  { label: "Menù", href: "#menu" },
  { label: "Turismo & Gruppi", href: "#turismo" },
  { label: "Contatti", href: "#contatti" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[oklch(0.12_0.003_60/0.97)] backdrop-blur-md shadow-lg shadow-black/40 border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick("#hero"); }}
            className="flex items-center gap-2 group"
          >
            <Flame className="w-5 h-5 text-gold transition-transform duration-200 group-hover:scale-110" style={{ color: "oklch(0.72 0.12 75)" }} />
            <div>
              <div
                className="font-bold leading-none tracking-wide"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.25rem",
                  color: "oklch(0.94 0.01 80)",
                }}
              >
                Antico Cellaio
              </div>
              <div
                className="leading-none tracking-widest"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "0.55rem",
                  fontWeight: 600,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "oklch(0.72 0.12 75)",
                }}
              >
                reload
              </div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="transition-colors duration-200 hover:text-[oklch(0.72_0.12_75)]"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "oklch(0.75 0.01 80)",
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/393492734920?text=Ciao!%20Vorrei%20prenotare%20un%20tavolo%20all'Antico%20Cellaio%20Reload"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs"
              style={{ padding: "0.6rem 1.25rem" }}
            >
              Prenota
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 transition-colors duration-200"
            style={{ color: "oklch(0.94 0.01 80)" }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile menu drawer */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 md:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        {/* Drawer */}
        <div
          className={`absolute top-0 right-0 h-full w-72 flex flex-col pt-20 pb-8 px-6 transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ background: "oklch(0.14 0.004 60)" }}
        >
          <div className="gold-divider mb-8" />
          <nav className="flex flex-col gap-6 flex-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="transition-colors duration-200 hover:text-[oklch(0.72_0.12_75)]"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "oklch(0.75 0.01 80)",
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="https://wa.me/393492734920?text=Ciao!%20Vorrei%20prenotare%20un%20tavolo%20all'Antico%20Cellaio%20Reload"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp pulse-glow text-center"
            onClick={() => setMobileOpen(false)}
          >
            📱 Prenota su WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
