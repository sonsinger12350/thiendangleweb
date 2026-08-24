import type { SeoPayload } from "./types";
import { getSiteOrigin } from "./site";

type JsonLdNode = Record<string, unknown>;

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
      url: seo.publisherLogo ?? `${origin}/logo/Logo_symbol.png`,
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

    if (seo.ogImage) article.image = seo.ogImage;
    if (seo.articlePublishedTime) article.datePublished = seo.articlePublishedTime;
    if (seo.articleModifiedTime || seo.articlePublishedTime) {
      article.dateModified =
        seo.articleModifiedTime ?? seo.articlePublishedTime;
    }

    graph.push(website, organization, article);
  }

  return { "@context": "https://schema.org", "@graph": graph };
}
