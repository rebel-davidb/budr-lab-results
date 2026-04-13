import { motion } from "motion/react";
import { Product } from "../data/products";
import { FileText } from "lucide-react";
import logoImg from "figma:asset/2ac65b9fde5862ec90aa2d93fe53e15921c6f954.png";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white overflow-hidden border-2 border-[rgb(218,138,103)] hover:border-[rgb(218,138,103)] transition-all duration-300 shadow-lg hover:shadow-xl flex flex-col"
      style={{ borderRadius: '10px' }}
    >
      {/* Logo */}
      <div className="flex justify-center pt-6 pb-4 bg-[#18202c]">
        <img 
          src={logoImg} 
          alt="BUDR" 
          className="h-16 w-auto"
        />
      </div>

      {/* Product Image */}
      <div className="relative overflow-hidden bg-[#F5F5F5] aspect-[3.25/2] md:aspect-[2/3.25] max-h-[350px] md:max-h-none">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-top max-h-[175px] md:object-cover md:max-h-none"
        />
      </div>

      {/* Product Info */}
      <div className="p-8 flex flex-col flex-1">
        <h3 className="text-2xl font-bold text-[#0B0B0B] mb-2 tracking-tight">{product.name}</h3>
        <p className="text-[#666666] mb-8 uppercase text-sm tracking-wide">{product.description}</p>

        {/* Variants */}
        <div className="space-y-3 mt-auto">
          {product.variants.map((variant, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-4 bg-[#F9F9F9] hover:bg-[#F0F0F0] transition-colors border border-[#E5E5E5]"
              style={{ borderRadius: '10px' }}
            >
              <span className="text-[#0B0B0B] font-semibold uppercase text-sm tracking-wide">{variant.dose}</span>
              <a
                href={variant.coaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#4A6B4F] hover:text-[#3A5A3F] transition-colors group"
              >
                <FileText className="w-4 h-4" />
                <span className="uppercase tracking-wide">View COA</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}