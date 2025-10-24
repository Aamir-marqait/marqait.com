/**
 * One-time script to submit all sitemap URLs to IndexNow
 * Run this with: node scripts/submit-all-urls.js
 */

const SITE_URL = 'https://www.marqait.com';
const API_KEY = '6d1b46064e2a42ccac1f5a1004bb5250';

async function submitAllSitemapUrls() {
  try {
    console.log('🔍 Fetching sitemap from', `${SITE_URL}/sitemap.xml`);

    // Fetch the sitemap
    const sitemapResponse = await fetch(`${SITE_URL}/sitemap.xml`);
    if (!sitemapResponse.ok) {
      throw new Error(`Failed to fetch sitemap: ${sitemapResponse.statusText}`);
    }

    const sitemapText = await sitemapResponse.text();

    // Extract URLs from sitemap
    const urlMatches = sitemapText.match(/<loc>(.*?)<\/loc>/g);
    if (!urlMatches) {
      throw new Error('No URLs found in sitemap');
    }

    const urls = urlMatches.map(match => match.replace(/<\/?loc>/g, ''));
    console.log(`📋 Found ${urls.length} URLs in sitemap`);
    console.log('URLs to submit:', urls);

    // Submit to IndexNow API
    console.log('\n🚀 Submitting to IndexNow...');

    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        host: 'www.marqait.com',
        key: API_KEY,
        keyLocation: `${SITE_URL}/${API_KEY}.txt`,
        urlList: urls,
      }),
    });

    const statusCode = response.status;
    console.log(`\n📊 Response Status: ${statusCode}`);

    if (statusCode === 200) {
      console.log('✅ SUCCESS! All URLs submitted to IndexNow');
      console.log(`✅ Submitted ${urls.length} URLs to Bing, Yandex, and other search engines`);
    } else if (statusCode === 202) {
      console.log('✅ ACCEPTED! URLs are being processed');
      console.log(`✅ Submitted ${urls.length} URLs to Bing, Yandex, and other search engines`);
    } else {
      const responseText = await response.text();
      console.log('⚠️  Response:', responseText);
      console.log('Status code indicates:', getStatusMessage(statusCode));
    }

    return {
      success: statusCode === 200 || statusCode === 202,
      submittedUrls: urls,
      statusCode,
    };
  } catch (error) {
    console.error('❌ Error submitting sitemap URLs to IndexNow:', error);
    return {
      success: false,
      error: error.message,
    };
  }
}

function getStatusMessage(statusCode) {
  const messages = {
    200: 'OK - URL submitted successfully',
    202: 'Accepted - URL received and will be processed',
    400: 'Bad request - Invalid format',
    403: 'Forbidden - Key validation failed',
    422: 'Unprocessable Entity - URLs not valid',
    429: 'Too Many Requests - Rate limit exceeded',
  };
  return messages[statusCode] || `Unknown status code: ${statusCode}`;
}

// Run the submission
console.log('🎯 Starting IndexNow submission for all sitemap URLs...\n');
submitAllSitemapUrls()
  .then(result => {
    console.log('\n✨ Done!');
    if (result.success) {
      console.log('\n📌 Next Steps:');
      console.log('1. Check Bing Webmaster Tools for IndexNow logs');
      console.log('2. Monitor indexing progress over the next few days');
      console.log('3. Remember to submit URLs individually when you update content');
    }
    process.exit(result.success ? 0 : 1);
  })
  .catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
