// utils/structuredData.ts
import { AISolution } from '../types/sanity';

// Generate FAQ structured data
export function generateFAQStructuredData(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

// Generate Service structured data
export function generateServiceStructuredData(solution: AISolution) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": solution.seoTitle,
    "description": solution.seoDescription,
    "provider": {
      "@type": "Organization",
      "name": "Marqait",
      "url": "https://www.marqait.com"
    },
    "url": solution.canonicalUrl,
    "serviceType": "AI Solutions",
    "areaServed": "Worldwide"
  };
}

// Generate BreadcrumbList structured data
export function generateBreadcrumbStructuredData(solution: AISolution) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.marqait.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "AI Solutions",
        "item": "https://www.marqait.com/ai-solutions"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": solution.title,
        "item": solution.canonicalUrl
      }
    ]
  };
}

// Extract all FAQs from content sections
export function extractFAQsFromContent(contentSections: any[]) {
  const allFAQs: { question: string; answer: string }[] = [];
  
  contentSections?.forEach(section => {
    if (section._type === 'faqSection' && section.faqs) {
      allFAQs.push(...section.faqs);
    }
  });
  
  return allFAQs;
}