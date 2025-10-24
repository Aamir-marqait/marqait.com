# IndexNow Implementation Guide

IndexNow has been successfully implemented for your Marqait website! This allows instant indexing notifications to Bing, Yandex, and other supported search engines.

## What's Been Set Up

1. **API Key File**: `/public/6d1b46064e2a42ccac1f5a1004bb5250.txt`
   - This file verifies your ownership of the domain
   - Accessible at: https://www.marqait.com/6d1b46064e2a42ccac1f5a1004bb5250.txt

2. **API Route**: `/app/api/indexnow/route.ts`
   - Endpoint: `/api/indexnow`
   - Handles URL submissions to IndexNow

3. **Utility Functions**: `/utils/indexnow.ts`
   - Helper functions to easily submit URLs from anywhere in your app

4. **robots.txt Updated**:
   - Added IndexNow key reference for search engine verification

## How to Use

### Method 1: Submit a Single URL

```typescript
import { submitUrlToIndexNow, getFullUrl } from '@/utils/indexnow';

// After creating or updating a page
const result = await submitUrlToIndexNow(
  getFullUrl('/ai-tools')
);

console.log(result.success); // true if successful
```

### Method 2: Submit Multiple URLs

```typescript
import { submitUrlsToIndexNow } from '@/utils/indexnow';

const urls = [
  'https://www.marqait.com/ai-tools',
  'https://www.marqait.com/ai-blog',
  'https://www.marqait.com/contact',
];

const result = await submitUrlsToIndexNow(urls);
```

### Method 3: Submit All Sitemap URLs

```typescript
import { submitAllSitemapUrls } from '@/utils/indexnow';

// Submit all URLs from your sitemap at once
const result = await submitAllSitemapUrls();
```

### Method 4: Direct API Call

```bash
# POST request to your API
curl -X POST https://www.marqait.com/api/indexnow \
  -H "Content-Type: application/json" \
  -d '{
    "urls": [
      "https://www.marqait.com/ai-tools",
      "https://www.marqait.com/ai-blog"
    ]
  }'
```

## When to Use IndexNow

Use IndexNow to notify search engines when:

1. **New Content Created**: Blog posts, new pages, products
2. **Content Updated**: Edited pages, updated information
3. **Content Deleted**: Pages removed (submit the URL that was deleted)
4. **Mass Updates**: Use `submitAllSitemapUrls()` after site restructuring

## Example Integration in Your App

### For Dynamic Content (e.g., Blog Posts)

```typescript
// In your blog post creation/update handler
async function createBlogPost(postData) {
  // Save the post to your database
  const post = await savePost(postData);

  // Notify search engines immediately
  await submitUrlToIndexNow(
    `https://www.marqait.com/ai-blog/${post.slug}`
  );

  return post;
}
```

### For Server Actions (Next.js)

```typescript
'use server'

import { submitUrlToIndexNow } from '@/utils/indexnow';

export async function updatePageAction(pageSlug: string) {
  // Your update logic here

  // Notify search engines
  const indexResult = await submitUrlToIndexNow(
    `https://www.marqait.com/${pageSlug}`
  );

  return { success: true, indexed: indexResult.success };
}
```

## Testing the Implementation

### 1. Verify Key File is Accessible

```bash
curl https://www.marqait.com/6d1b46064e2a42ccac1f5a1004bb5250.txt
# Should return: 6d1b46064e2a42ccac1f5a1004bb5250
```

### 2. Test the API Endpoint

```bash
# GET request to verify it's working
curl https://www.marqait.com/api/indexnow

# POST request to submit a URL
curl -X POST https://www.marqait.com/api/indexnow \
  -H "Content-Type: application/json" \
  -d '{"urls": ["https://www.marqait.com/"]}'
```

### 3. Monitor in Bing Webmaster Tools

1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Add your site if not already added
3. Navigate to "Sitemaps & Index" > "IndexNow"
4. You'll see logs of submitted URLs

## Supported Search Engines

IndexNow is supported by:
- **Bing** (Microsoft)
- **Yandex** (Russia)
- **Seznam** (Czech Republic)
- **Naver** (South Korea)
- And more joining the protocol

Note: Google does not support IndexNow yet. Continue using Google Search Console for Google indexing.

## Best Practices

1. **Don't Spam**: Only submit URLs when content actually changes
2. **Batch Submissions**: Group multiple URLs in one request when possible
3. **Error Handling**: Check the response and handle errors gracefully
4. **Reasonable Limits**: Don't submit the same URL multiple times in a short period
5. **Valid URLs**: Ensure all URLs are absolute and properly formatted

## Troubleshooting

### "Invalid key" error
- Verify the key file is accessible at the exact URL specified
- Ensure the key in the file matches the key used in API calls

### "Host mismatch" error
- Ensure the host in the API request matches your domain exactly
- Use `www.marqait.com` consistently

### No indexing happening
- Check Bing Webmaster Tools for submission logs
- Verify your site is added to Bing Webmaster Tools
- IndexNow is a notification, not a guarantee of indexing

## Next Steps

1. **Integrate with Content Management**: Add IndexNow calls to your content creation/update workflows
2. **Monitor Results**: Check Bing Webmaster Tools regularly to see IndexNow activity
3. **Initial Submission**: Run `submitAllSitemapUrls()` once to submit all existing pages
4. **Automate**: Consider adding IndexNow submissions to your build/deploy process

## Resources

- [IndexNow Documentation](https://www.indexnow.org/documentation)
- [Bing Webmaster Tools](https://www.bing.com/webmasters)
- [IndexNow API Specification](https://www.indexnow.org/documentation#api-specification)
