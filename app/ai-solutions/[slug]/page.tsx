// app/ai-solutions/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import { getAISolution, getAllAISolutionSlugs } from "../../../lib/sanity";
import AISolutionPageClient from "./AISolutionPageClient";
import { 
  generateFAQStructuredData, 
  generateServiceStructuredData, 
  generateBreadcrumbStructuredData,
  extractFAQsFromContent 
} from "../../../utils/structuredData";

interface AISolutionPageProps {
  params: {
    slug: string;
  };
}

// Generate metadata for SEO
export async function generateMetadata({ params }: AISolutionPageProps): Promise<Metadata> {
  const solution = await getAISolution(params.slug);

  if (!solution) {
    return {
      title: 'Page Not Found',
      description: 'The requested page could not be found.',
    };
  }

  return {
    title: solution.seoTitle,
    description: solution.seoDescription,
    keywords: solution.seoKeywords,
    alternates: {
      canonical: solution.canonicalUrl
    },
    openGraph: {
      title: solution.seoTitle,
      description: solution.seoDescription,
      url: solution.canonicalUrl,
      type: "website",
      images: solution.heroSection?.heroImage ? [
        {
          url: solution.heroSection.heroImage.asset.url,
          width: 1200,
          height: 630,
          alt: solution.heroSection.heroImage.alt || solution.title,
        }
      ] : []
    },
    twitter: {
      card: "summary_large_image",
      title: solution.seoTitle,
      description: solution.seoDescription,
      images: solution.heroSection?.heroImage ? [solution.heroSection.heroImage.asset.url] : []
    }
  };
}

// Generate static params for all AI solutions at build time
export async function generateStaticParams() {
  const slugs = await getAllAISolutionSlugs();
  
  return slugs.map((slug: string) => ({
    slug: slug,
  }));
}

export default async function AISolutionPage({ params }: AISolutionPageProps) {
  const solution = await getAISolution(params.slug);

  if (!solution) {
    notFound();
  }

  // Extract FAQs for structured data
  const faqs = extractFAQsFromContent(solution.contentSections || []);

  return (
    <>
      {/* Structured Data Scripts */}
      {faqs.length > 0 && (
        <Script 
          id="faq-structured-data" 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateFAQStructuredData(faqs))
          }}
        />
      )}
      
      <Script 
        id="service-structured-data" 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateServiceStructuredData(solution))
        }}
      />
      
      <Script 
        id="breadcrumb-structured-data" 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbStructuredData(solution))
        }}
      />

      <AISolutionPageClient solution={solution} />
    </>
  );
}

// Enable ISR (Incremental Static Regeneration)
export const revalidate = 3600; // Revalidate every hour