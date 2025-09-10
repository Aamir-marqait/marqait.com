// types/sanity.ts
export interface SanityImage {
  asset: {
    _id: string;
    url: string;
  };
  alt?: string;
}

export interface AISolutionHeroSection {
  mainHeading: {
    line1: string;
    line2?: string;
  };
  description: string;
  ctaButton?: {
    text: string;
    link: string;
  };
  heroImage?: SanityImage;
}

export interface TextImageSection {
  _type: 'textImageSection';
  sectionType: 'textLeft' | 'imageLeft';
  heading?: {
    normalText?: string;
    gradientText?: string;
  };
  content?: string[];
  image?: SanityImage;
}

export interface GridSection {
  _type: 'gridSection';
  heading?: string;
  description?: string;
  gridItems?: {
    title: string;
    description: string;
    image?: SanityImage;
  }[];
}

export interface FeaturesSection {
  _type: 'featuresSection';
  heading?: {
    normalText?: string;
    gradientText?: string;
  };
  description?: string;
  features?: {
    icon: string;
    title: string;
    description: string;
  }[];
}

export interface ProcessSection {
  _type: 'processSection';
  heading?: string;
  description?: string;
  processSteps?: {
    stepNumber: string;
    title: string;
    description: string;
  }[];
  processImage?: SanityImage;
}

export interface BenefitsSection {
  _type: 'benefitsSection';
  heading?: string;
  leftBenefits?: {
    title: string;
    description: string;
  }[];
  rightBenefits?: {
    title: string;
    description: string;
  }[];
  centerImage?: SanityImage;
}

export interface FAQSection {
  _type: 'faqSection';
  heading?: {
    normalText?: string;
    gradientText?: string;
  };
  description?: string;
  faqs?: {
    question: string;
    answer: string;
  }[];
}

export interface CTASection {
  _type: 'ctaSection';
  heading?: {
    normalText?: string;
    gradientText?: string;
  };
  ctaImage?: SanityImage;
}

export type ContentSection = 
  | TextImageSection 
  | GridSection 
  | FeaturesSection 
  | ProcessSection 
  | BenefitsSection 
  | FAQSection 
  | CTASection;

export interface AISolution {
  title: string;
  slug: string;
  seoTitle: string;
  seoDescription: string;
  seoKeywords?: string;
  canonicalUrl?: string;
  heroSection: AISolutionHeroSection;
  contentSections?: ContentSection[];
}