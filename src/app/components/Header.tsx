import { motion } from "motion/react";
import logoImg from "../../assets/img_6243992d.png";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a283c]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img 
            src={logoImg} 
            alt="BUDR" 
            className="h-10 w-auto"
            style={{ filter: 'brightness(0) invert(1) contrast(2)' }}
          />
        </motion.div>
        
        <motion.nav
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden md:flex items-center gap-8"
        >
          <a href="#products" className="text-white/70 hover:text-white transition-colors uppercase text-sm tracking-wider">
            Products
          </a>
          <a href="#lab-results" className="text-white/70 hover:text-white transition-colors uppercase text-sm tracking-wider">
            Lab Results
          </a>
          <a href="#about" className="text-white/70 hover:text-white transition-colors uppercase text-sm tracking-wider">
            About
          </a>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#4A6B4F] text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-[#5A7B5F] transition-colors uppercase tracking-wider"
          >
            Shop Now
          </motion.button>
        </motion.nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}