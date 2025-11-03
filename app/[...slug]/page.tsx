// app/[[...slug]]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDynamicPageByPath, getAllDynamicPaths } from "../../lib/sanity";
import DynamicPageClient from "./DynamicPageClient";

type RouteParams = { slug?: string[] };

export async function generateMetadata(
  { params }: { params: Promise<RouteParams> }
): Promise<Metadata> {
  const { slug } = await params;
  const path = slug ? slug.join('/') : '';
  const page = await getDynamicPageByPath(path);

  if (!page) {
    return {
      title: "Page Not Found",
      description: "The requested page could not be found.",
    };
  }

  const canonicalUrl = `https://www.marqait.com/${path}`;

  return {
    title: page.seoTitle,
    description: page.seoDescription,
    keywords: page.seoKeywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: page.seoTitle,
      description: page.seoDescription,
      url: canonicalUrl,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: page.seoTitle,
      description: page.seoDescription,
    },
  };
}

export async function generateStaticParams() {
  const paths = await getAllDynamicPaths();
  return paths.map((path: string) => ({
    slug: path.split('/'),
  }));
}

export default async function DynamicPage(
  { params }: { params: Promise<RouteParams> }
) {
  const { slug } = await params;
  const path = slug ? slug.join('/') : '';
  const page = await getDynamicPageByPath(path);

  if (!page) {
    notFound();
  }

  return <DynamicPageClient page={page} />;
}

export const revalidate = 3600;