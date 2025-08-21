"use client";

import AIProductsSection from "@/components/products/ai-products-section";
import ProductsHeroSection from "@/components/products/products-hero-section";
import { useSEO } from "@/utils/seo";

const Products = () => {
  useSEO({
    canonical: "https://www.marqait.com/products",
  });

  return (
    <div className="min-h-screen bg-[#05000A] w-full overflow-x-hidden">
      <div className="w-full max-w-none">
        <ProductsHeroSection />
        <AIProductsSection />
      </div>
    </div>
  );
};

export default Products;
