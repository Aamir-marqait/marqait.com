import { NextRequest, NextResponse } from 'next/server';

const INDEXNOW_KEY = '6d1b46064e2a42ccac1f5a1004bb5250';
const SITE_URL = 'https://www.marqait.com';

export async function POST(request: NextRequest) {
  try {
    const { urls } = await request.json();

    if (!urls || !Array.isArray(urls) || urls.length === 0) {
      return NextResponse.json(
        { error: 'URLs array is required' },
        { status: 400 }
      );
    }

    // IndexNow API endpoint (Bing)
    const indexNowUrl = 'https://api.indexnow.org/indexnow';

    const response = await fetch(indexNowUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        host: 'www.marqait.com',
        key: INDEXNOW_KEY,
        keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
        urlList: urls,
      }),
    });

    if (response.ok) {
      return NextResponse.json({
        success: true,
        message: 'URLs submitted to IndexNow successfully',
        submittedUrls: urls,
      });
    } else {
      const errorText = await response.text();
      return NextResponse.json(
        {
          error: 'Failed to submit to IndexNow',
          details: errorText,
          status: response.status,
        },
        { status: response.status }
      );
    }
  } catch (error) {
    console.error('IndexNow submission error:', error);
    return NextResponse.json(
      {
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

// GET endpoint to verify the API is working
export async function GET() {
  return NextResponse.json({
    message: 'IndexNow API endpoint is active',
    keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
  });
}
