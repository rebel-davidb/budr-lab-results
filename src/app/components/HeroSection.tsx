import { motion, useScroll, useTransform } from "motion/react";
import backgroundImg from "figma:asset/8b36f85385c45beddfb45c115f6b71e49d3df90b.png";
import logoImg from "figma:asset/2ac65b9fde5862ec90aa2d93fe53e15921c6f954.png";

export function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);

  const scrollToProducts = () => {
    const productSection = document.querySelector('section[data-section="products"]');
    if (productSection) {
      productSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1a283c]">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 will-change-transform"
      >
        <img
          src={backgroundImg}
          alt="BUDR Cannabis Beverage"
          className="w-full h-[120vh] object-cover opacity-50"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a283c]/90 via-[#1a283c]/70 to-[#1a283c]"></div>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <img 
            src={logoImg} 
            alt="BUDR" 
            className="h-32 w-auto mx-auto"
          />
        </motion.div>

        <h1 className="text-[3.5em] font-normal mb-8 text-white uppercase" style={{ fontFamily: '"dinosaur", sans-serif' }}>Beverage LAB RESULTS</h1>
        <p className="text-xl md:text-2xl text-[#A3A3A3] mb-12 max-w-2xl mx-auto" style={{ fontFamily: '"arno-pro", sans-serif' }}>
          Transparency you can trust. Every batch third-party tested for quality and safety.
        </p>
        
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.button
          onClick={scrollToProducts}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 cursor-pointer hover:text-white/80 transition-colors"
        >
          <span className="text-white/60 text-sm uppercase tracking-wider" style={{ fontFamily: '"arno-pro", sans-serif' }}>
            Scroll
          </span>
          <svg 
            className="w-6 h-6 text-white/60" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.button>
      </motion.div>
    </section>
  );
}