'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const useCanonicalURL = (baseURL = 'https://www.marqait.com') => {
  const pathname = usePathname();

  useEffect(() => {
    const cleanPath = pathname.replace(/\/$/, '') || '';
    
    const canonicalURL = `${baseURL}${cleanPath}`;

    const existingCanonical = document.querySelector('link[rel="canonical"]');
    if (existingCanonical) {
      existingCanonical.setAttribute('href', canonicalURL);
    } else {
      const link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', canonicalURL);
      document.head.appendChild(link);
    }
  }, [pathname, baseURL]);
};

export default useCanonicalURL;