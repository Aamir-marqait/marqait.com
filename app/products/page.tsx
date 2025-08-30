import type { Metadata } from "next";
import AIProductsSection from "@/components/products/ai-products-section";
import ProductsHeroSection from "@/components/products/products-hero-section";

export const metadata: Metadata = {
  title: "AI Marketing Products & Solutions - Marqait AI",
  description: "Explore Marqait's AI marketing products including growth pods, logo generator, and social media post generator. Automate your marketing with advanced AI tools.",
  keywords: "AI marketing products, marketing automation tools, AI logo generator, social media automation, marketing solutions",
  alternates: {
    canonical: "https://www.marqait.com/products"
  },
  openGraph: {
    title: "AI Marketing Products & Solutions - Marqait AI",
    description: "Explore Marqait's AI marketing products including growth pods, logo generator, and social media post generator. Automate your marketing with advanced AI tools.",
    url: "https://www.marqait.com/products",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Marketing Products & Solutions - Marqait AI",
    description: "Explore Marqait's AI marketing products including growth pods, logo generator, and social media post generator. Automate your marketing with advanced AI tools."
  }
};

const Products = () => {
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
