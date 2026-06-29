/*
 * DESIGN: "Ember Dark – Steak House Contemporanea"
 * Single-page layout con scroll-reveal animations
 * Sezioni: Hero → Locale → Carni → Quote → Menù → Turismo → Contatti → Footer
 */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LocaleSection from "@/components/LocaleSection";
import CarniSection from "@/components/CarniSection";
import QuoteSection from "@/components/QuoteSection";
import MenuSection from "@/components/MenuSection";
import TurismoSection from "@/components/TurismoSection";
import ContattiSection from "@/components/ContattiSection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "oklch(0.12 0.003 60)" }}>
      <Navbar />
      <HeroSection />
      <LocaleSection />
      <CarniSection />
      <QuoteSection />
      <MenuSection />
      <TurismoSection />
      <ContattiSection />
      <Footer />
      <FloatingCTA />
    </div>
  );
}
