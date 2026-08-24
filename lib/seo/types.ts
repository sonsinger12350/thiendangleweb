export type SchemaKind = "landing" | "article" | "collection" | "none";

export interface SeoPayload {
  title: string;
  description: string;
  keywords?: string;
  siteName: string;
  pageUrl: string;
  ogImage?: string;
  ogType?: "website" | "article";
  ogLocale?: string;
  htmlLang?: "vi" | "en";
  robots?: string;
  schemaKind: SchemaKind;
  articleAuthor?: string;
  articlePublishedTime?: string;
  articleModifiedTime?: string;
  publisherLogo?: string;
}
