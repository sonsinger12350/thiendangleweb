import type { SeoBreadcrumbItem, SeoPayload } from "./types";
import { getSiteOrigin } from "./site";

type JsonLdNode = Record<string, unknown>;

function buildBreadcrumbList(
  pageUrl: string,
  breadcrumbs: SeoBreadcrumbItem[],
): JsonLdNode {
  return {
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}

export function buildJsonLd(seo: SeoPayload): {
  "@context": string;
  "@graph": JsonLdNode[];
} {
  if (seo.schemaKind === "none") {
    return { "@context": "https://schema.org", "@graph": [] };
  }

  const origin = getSiteOrigin();
  const organizationId = `${origin}/#organization`;
  const websiteId = `${origin}/#website`;

  const organization: JsonLdNode = {
    "@type": "Organization",
    "@id": organizationId,
    name: seo.siteName,
    url: origin,
    logo: {
      "@type": "ImageObject",
      url: seo.publisherLogo ?? `${origin}/logo/Logo_symbol.webp`,
    },
    email: "info@thiendangle.com",
  };

  const website: JsonLdNode = {
    "@type": "WebSite",
    "@id": websiteId,
    name: seo.siteName,
    url: origin,
    inLanguage: seo.htmlLang ?? "vi",
    publisher: { "@id": organizationId },
  };

  const graph: JsonLdNode[] = [];

  if (seo.schemaKind === "landing") {
    graph.push(website, organization);
  }

  if (seo.schemaKind === "collection") {
    graph.push(website, {
      "@type": "CollectionPage",
      "@id": `${seo.pageUrl}#collection`,
      name: seo.title,
      description: seo.description,
      url: seo.pageUrl,
      isPartOf: { "@id": websiteId },
    });
  }

  if (seo.schemaKind === "article") {
    const image =
      seo.ogImage && seo.ogImageWidth && seo.ogImageHeight
        ? {
            "@type": "ImageObject",
            url: seo.ogImage,
            width: seo.ogImageWidth,
            height: seo.ogImageHeight,
          }
        : seo.ogImage;

    const article: JsonLdNode = {
      "@type": "BlogPosting",
      "@id": `${seo.pageUrl}#article`,
      headline: seo.title,
      description: seo.description,
      url: seo.pageUrl,
      mainEntityOfPage: seo.pageUrl,
      inLanguage: seo.htmlLang ?? "vi",
      author: {
        "@type": "Organization",
        name: seo.articleAuthor ?? seo.siteName,
      },
      publisher: { "@id": organizationId },
    };

    if (image) article.image = image;
    if (seo.articlePublishedTime) article.datePublished = seo.articlePublishedTime;
    if (seo.articleModifiedTime || seo.articlePublishedTime) {
      article.dateModified =
        seo.articleModifiedTime ?? seo.articlePublishedTime;
    }

    graph.push(website, organization, article);
  }

  if (seo.breadcrumbs && seo.breadcrumbs.length >= 2) {
    graph.push(buildBreadcrumbList(seo.pageUrl, seo.breadcrumbs));
  }

  return { "@context": "https://schema.org", "@graph": graph };
}
