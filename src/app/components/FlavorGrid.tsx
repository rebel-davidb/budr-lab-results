import { motion } from "motion/react";
import { products } from "../data/products";

export function FlavorGrid() {
  return (
    <section className="py-32 px-4 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            OUR FLAVORS
          </h2>
          <p className="text-lg md:text-xl text-[#A3A3A3]">
            Explore our complete range of THC-infused seltzers
          </p>
        </div>

        {/* Flavors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="group cursor-pointer"
            >
              <div className="relative rounded-xl overflow-hidden mb-6 aspect-square border border-white/10">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a283c]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                {product.name}
              </h3>
              <p className="text-sm text-[#A3A3A3] uppercase tracking-wide">{product.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[#0B0B0B] px-12 py-5 rounded-lg text-base font-semibold hover:bg-[#F5F5F5] transition-colors uppercase tracking-wider"
          >
            Shop All Flavors
          </motion.button>
        </div>
      </div>
    </section>
  );
}