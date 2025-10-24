/**
 * IndexNow utility for submitting URLs to search engines (Bing, Yandex, etc.)
 * Automatically notifies search engines when content is created or updated
 */

const SITE_URL = 'https://www.marqait.com';

interface IndexNowResponse {
  success: boolean;
  message?: string;
  error?: string;
  submittedUrls?: string[];
}

/**
 * Submit a single URL to IndexNow
 * @param url - The full URL to submit (e.g., 'https://www.marqait.com/ai-tools')
 * @returns Promise with the submission result
 */
export async function submitUrlToIndexNow(url: string): Promise<IndexNowResponse> {
  try {
    const response = await fetch('/api/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        urls: [url],
      }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error submitting URL to IndexNow:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Submit multiple URLs to IndexNow
 * @param urls - Array of full URLs to submit
 * @returns Promise with the submission result
 */
export async function submitUrlsToIndexNow(urls: string[]): Promise<IndexNowResponse> {
  try {
    const response = await fetch('/api/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        urls,
      }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error submitting URLs to IndexNow:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Submit all sitemap URLs to IndexNow
 * Useful for initial indexing or major site updates
 */
export async function submitAllSitemapUrls(): Promise<IndexNowResponse> {
  try {
    // Fetch the sitemap
    const sitemapResponse = await fetch(`${SITE_URL}/sitemap.xml`);
    const sitemapText = await sitemapResponse.text();

    // Extract URLs from sitemap (simple XML parsing)
    const urlMatches = sitemapText.match(/<loc>(.*?)<\/loc>/g);
    if (!urlMatches) {
      return {
        success: false,
        error: 'No URLs found in sitemap',
      };
    }

    const urls = urlMatches.map(match => match.replace(/<\/?loc>/g, ''));

    // Submit in batches of 10000 (IndexNow limit)
    const batchSize = 10000;
    const batches = [];
    for (let i = 0; i < urls.length; i += batchSize) {
      batches.push(urls.slice(i, i + batchSize));
    }

    const results = await Promise.all(
      batches.map(batch => submitUrlsToIndexNow(batch))
    );

    const allSuccessful = results.every(result => result.success);

    return {
      success: allSuccessful,
      message: allSuccessful
        ? `Successfully submitted ${urls.length} URLs to IndexNow`
        : 'Some batches failed to submit',
      submittedUrls: urls,
    };
  } catch (error) {
    console.error('Error submitting sitemap URLs to IndexNow:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Helper to construct full URL from path
 * @param path - The path to convert (e.g., '/ai-tools')
 * @returns Full URL
 */
export function getFullUrl(path: string): string {
  return path.startsWith('http') ? path : `${SITE_URL}${path}`;
}
