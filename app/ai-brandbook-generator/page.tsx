import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free AI Brandbook Generator - Marqait AI",
  description:
    "Create professional brand guidelines and brandbooks instantly with AI. Generate comprehensive brand identity documents including logos, colors, fonts, and visual guidelines.",
  keywords:
    "AI brandbook generator, brand guidelines generator, brand identity creation, AI branding tools, logo design, brand colors, visual identity",
  alternates: {
    canonical: "https://www.marqait.com/ai-brandbook-generator",
  },
  openGraph: {
    title: "Free AI Brandbook Generator - Marqait AI",
    description:
      "Create professional brand guidelines and brandbooks instantly with AI. Generate comprehensive brand identity documents including logos, colors, fonts, and visual guidelines.",
    url: "https://www.marqait.com/ai-brandbook-generator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free AI Brandbook Generator - Marqait AI",
    description:
      "Create professional brand guidelines and brandbooks instantly with AI. Generate comprehensive brand identity documents including logos, colors, fonts, and visual guidelines.",
  },
};

export default function AISocialMediaPostGenerator() {
  return (
    <div className="min-h-screen bg-[#05000A] w-full overflow-x-hidden"></div>
  );
}
