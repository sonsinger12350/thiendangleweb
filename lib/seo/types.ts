export type SchemaKind = "landing" | "article" | "collection" | "page" | "none";

export interface SeoBreadcrumbItem {
  name: string;
  /** Absolute canonical URL for JSON-LD `item`. */
  url: string;
  /** Site path for the visible crumb, e.g. `/tin-tuc`. */
  path: string;
}

export interface SeoPayload {
  title: string;
  description: string;
  keywords?: string;
  siteName: string;
  pageUrl: string;
  ogImage?: string;
  ogImageWidth?: number;
  ogImageHeight?: number;
  ogType?: "website" | "article";
  ogLocale?: string;
  htmlLang?: "vi" | "en";
  robots?: string;
  schemaKind: SchemaKind;
  articleAuthor?: string;
  articlePublishedTime?: string;
  articleModifiedTime?: string;
  publisherLogo?: string;
  breadcrumbs?: SeoBreadcrumbItem[];
}
