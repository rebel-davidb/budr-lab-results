import { products } from "../data/products";
import { ProductCard } from "./ProductCard";
import patternImage from "../../assets/img_8bcf0bad.png";

export function ProductMatrix() {
  return (
    <section 
      className="py-32 px-4 bg-[#2B827C]" 
      data-section="products"
      style={{
        backgroundImage: `url(${patternImage})`,
        backgroundRepeat: 'repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: '0% 100%'
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#F7E1B9] mb-6 tracking-tight">
            CERTIFICATES OF ANALYSIS
          </h2>
          <p className="text-lg md:text-xl text-[#F7E1B9] max-w-3xl mx-auto leading-relaxed">Every batch of Budr beverages undergoes rigorous third-party laboratory testing. We're committed to complete transparency, providing you with detailed certificates of analysis for peace of mind.</p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, idx) => (
            <ProductCard key={idx} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}