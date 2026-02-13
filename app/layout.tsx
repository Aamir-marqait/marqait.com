import type { Metadata } from "next";
import { Roboto, Sora, Inter, Work_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Marqait AI | All-in-One Marketing Automation Platform",
  description:
    "Automate marketing tasks with Marqait — an AI-powered marketing automation platform to design, launch Ads campaigns, and more. Alternate of agency",
  keywords:
    "AI, growth platform, business automation, marqait, artificial intelligence",
  authors: [{ name: "MARQAIT" }],
  robots: "index, follow",
  openGraph: {
    title: "Marqait AI | All-in-One Marketing Automation Platform",
    description:
      "Automate marketing tasks with Marqait — an AI-powered marketing automation platform to design, launch ad campaigns, and more. The smarter alternative to agencies.",
    type: "website",
    url: "https://www.marqait.com/",
    images: [
      {
        url: "https://marqait.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Marqait AI Marketing Automation Platform",
      },
    ],
    siteName: "Marqait AI",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marqait AI | All-in-One Marketing Automation Platform",
    description:
      "Automate marketing tasks with Marqait — an AI-powered marketing automation platform to design, launch Ads campaigns, and more. Alternate of agency",
    images: ["https://marqait.com/logo.png"],
    site: "@marqait",
    creator: "@marqait",
  },
  other: {
    "google-site-verification": "QuAPM_tGjjCbDjftUBKt-cr5wD5DQILYO8GkZkj6SUA",
    "yandex-verification": "613dd56c06bdbdda",
    "theme-color": "#8C45FF",
    "msapplication-TileColor": "#8C45FF",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}

        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PGC7VTP2');`}
        </Script>

        <meta name="yandex-verification" content="613dd56c06bdbdda" />
        <meta name="msvalidate.01" content="B96B69100C98341E199F2E25F48CEC25" />
        <link rel="icon" type="image/png" sizes="32x32" href="/meta-logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/meta-logo.png" />
        <link rel="shortcut icon" href="/meta-logo.png" />
        <meta name="revisit-after" content="7 days" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />

        {/* TruIntel — single script handles everything */}
        <Script
          src="https://api.truintel.ai/api/v1/traffic/tracker.js"
          data-brand-id="b9610a8c-99b3-4bcf-b03b-6462aa3a4b85"
          strategy="afterInteractive"
        />
        <Script
          id="truintel-tracker"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.TruIntel = window.TruIntel || {};
              window.TruIntel.brandId = 'b9610a8c-99b3-4bcf-b03b-6462aa3a4b85';
              window.TruIntel.apiUrl = 'https://api.truintel.ai/api/v1';
              var s = document.createElement('script');
              s.async = true;
              s.src = window.TruIntel.apiUrl + '/traffic/tracker.js';
              document.head.appendChild(s);
            `,
          }}
        />

        {/* Structured Data for Organization */}
        <Script id="structured-data-org" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Marqait",
            alternateName: "Marqait AI",
            description:
              "Marqait is AI-powered marketing automation platform. It provides marketing automation services to automate email campaigns, social media posts, content creation, intelligent campaign generation, and more.",
            url: "https://www.marqait.com/",
            logo: "https://www.marqait.com/logo.png",
            keywords: [
              "AI marketing",
              "marketing automation",
              "content automation",
              "automated lead generation",
            ],
            email: "hello@marqait.com",
            foundingDate: "2025-04-23",
            founders: [
              {
                "@type": "Person",
                name: "Mohammed Aamir",
              },
            ],
            sameAs: [
              "https://www.instagram.com/marqait.ai/",
              "https://www.youtube.com/@MarqaitAI",
              "https://www.linkedin.com/company/marqait-ai/",
              "https://x.com/marqait_ai",
            ],
          })}
        </Script>

        {/* Structured Data for WebPage */}
        <Script id="structured-data-webpage" type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@id": "https://www.marqait.com/#webpage",
            "@type": "WebPage",
            url: "https://www.marqait.com/",
            name: "Marqait",
          })}
        </Script>
      </head>

      <body
        className={`${roboto.variable} ${sora.variable} ${inter.variable} ${workSans.variable} antialiased font-inter`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PGC7VTP2"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-F9REM2WQ5H"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-F9REM2WQ5H');
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}
