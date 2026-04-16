import { HeroSection } from "./components/HeroSection";
import { ProductMatrix } from "./components/ProductMatrix";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";
import { AgeGate } from "./components/AgeGate";
import { useEffect } from "react";
import faviconImage from "../assets/img_6606f61f.png";

export default function App() {
  useEffect(() => {
    // Set the favicon
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'icon';
    link.href = faviconImage;
    document.getElementsByTagName('head')[0].appendChild(link);
  }, []);

  return (
    <>
      <AgeGate />
      <div className="min-h-screen bg-[#1a283c]">
        <HeroSection />
        <ProductMatrix />
        <CTASection />
        <Footer />
      </div>
    </>
  );
}