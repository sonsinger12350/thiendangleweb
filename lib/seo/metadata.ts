import type { Metadata } from "next";
import type { SeoPayload } from "./types";
import { SITE_NAME, getSiteOrigin } from "./site";

function parseRobots(robots?: string): Metadata["robots"] {
  if (!robots) return { index: true, follow: true };

  const lower = robots.toLowerCase();
  return {
    index: !lower.includes("noindex"),
    follow: !lower.includes("nofollow"),
  };
}

export function seoToMetadata(seo: SeoPayload): Metadata {
  const images = seo.ogImage
    ? [
        {
          url: seo.ogImage,
          alt: seo.title,
          width: seo.ogImageWidth,
          height: seo.ogImageHeight,
        },
      ]
    : undefined;

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    robots: parseRobots(seo.robots),
    alternates: {
      canonical: seo.pageUrl,
    },
    openGraph: {
      type: seo.ogType ?? "website",
      locale: seo.ogLocale ?? "vi_VN",
      siteName: seo.siteName,
      url: seo.pageUrl,
      title: seo.title,
      description: seo.description,
      images,
      ...(seo.ogType === "article"
        ? {
            publishedTime: seo.articlePublishedTime,
            modifiedTime:
              seo.articleModifiedTime ?? seo.articlePublishedTime,
            authors: seo.articleAuthor ? [seo.articleAuthor] : [seo.siteName],
          }
        : {}),
    },
    twitter: {
      card: seo.ogImage ? "summary_large_image" : "summary",
      title: seo.title,
      description: seo.description,
      images: seo.ogImage ? [seo.ogImage] : undefined,
    },
  };
}

export function rootLayoutMetadata(landing: SeoPayload): Metadata {
  return {
    metadataBase: new URL(getSiteOrigin()),
    ...seoToMetadata(landing),
    title: {
      default: landing.title,
      template: `%s | ${SITE_NAME}`,
    },
    icons: {
      icon: "/logo/favicon.png",
      apple: "/logo/favicon.png",
    },
  };
}
