'use client';

import { useEffect } from 'react';

interface SEOConfig {
  title?: string;
  description?: string;
  canonical?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
}

export const useSEO = (config: SEOConfig) => {
  useEffect(() => {
    // Set page title
    if (config.title) {
      document.title = config.title;
    }

    // Set meta description
    if (config.description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', config.description);
    }

    // Set canonical URL
    if (config.canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', config.canonical);
    }

    // Set keywords
    if (config.keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', config.keywords);
    }

    // Set Open Graph image
    if (config.ogImage) {
      let ogImageMeta = document.querySelector('meta[property="og:image"]');
      if (!ogImageMeta) {
        ogImageMeta = document.createElement('meta');
        ogImageMeta.setAttribute('property', 'og:image');
        document.head.appendChild(ogImageMeta);
      }
      ogImageMeta.setAttribute('content', config.ogImage);
    }

    // Set Open Graph type
    if (config.ogType) {
      let ogTypeMeta = document.querySelector('meta[property="og:type"]');
      if (!ogTypeMeta) {
        ogTypeMeta = document.createElement('meta');
        ogTypeMeta.setAttribute('property', 'og:type');
        document.head.appendChild(ogTypeMeta);
      }
      ogTypeMeta.setAttribute('content', config.ogType);
    }

    // Set Twitter Card
    if (config.twitterCard) {
      let twitterCardMeta = document.querySelector('meta[name="twitter:card"]');
      if (!twitterCardMeta) {
        twitterCardMeta = document.createElement('meta');
        twitterCardMeta.setAttribute('name', 'twitter:card');
        document.head.appendChild(twitterCardMeta);
      }
      twitterCardMeta.setAttribute('content', config.twitterCard);
    }
  }, [config]);
};