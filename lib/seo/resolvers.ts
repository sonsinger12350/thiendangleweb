import type { NewsArticle } from "@/types/news";
import type { SeoPayload } from "./types";
import {
  articleBreadcrumbs,
  homeBreadcrumb,
  newsListBreadcrumb,
  productsBreadcrumb,
} from "./breadcrumbs";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_KEYWORDS,
  DEFAULT_OG_IMAGE_HEIGHT,
  DEFAULT_OG_IMAGE_PATH,
  DEFAULT_OG_IMAGE_WIDTH,
  DEFAULT_TITLE,
  OG_SHARE_IMAGE_HEIGHT,
  OG_SHARE_IMAGE_WIDTH,
  ROUTES,
  SITE_NAME,
} from "./site";
import { canonicalUrl, resolveAbsoluteUrl } from "./urls";

function withDefaults(
  partial: Omit<SeoPayload, "siteName" | "htmlLang" | "ogLocale" | "publisherLogo">,
): SeoPayload {
  return {
    siteName: SITE_NAME,
    htmlLang: "vi",
    ogLocale: "vi_VN",
    publisherLogo: resolveAbsoluteUrl("/logo/Logo_symbol.webp"),
    ...partial,
    ogImage: partial.ogImage ?? resolveAbsoluteUrl(DEFAULT_OG_IMAGE_PATH),
    ogImageWidth: partial.ogImageWidth ?? DEFAULT_OG_IMAGE_WIDTH,
    ogImageHeight: partial.ogImageHeight ?? DEFAULT_OG_IMAGE_HEIGHT,
  };
}

export function resolveLandingSeo(): SeoPayload {
  return withDefaults({
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    keywords: DEFAULT_KEYWORDS,
    pageUrl: canonicalUrl(ROUTES.home),
    ogType: "website",
    schemaKind: "landing",
  });
}

export function resolveProductsSeo(): SeoPayload {
  return withDefaults({
    title: "Sản phẩm — Danh mục ưu tiên",
    description:
      "Danh mục ưu tiên giai đoạn đầu của TDL: phụ kiện & linh kiện điện thoại; điện gia dụng đang chuẩn bị.",
    pageUrl: canonicalUrl(ROUTES.products),
    ogType: "website",
    schemaKind: "collection",
    breadcrumbs: [homeBreadcrumb(), productsBreadcrumb()],
  });
}

export function resolveNewsListSeo(): SeoPayload {
  return withDefaults({
    title: "Tin tức",
    description: "Tin tức và cập nhật từ hệ sinh thái TDL — Thiên Đăng Lê.",
    pageUrl: canonicalUrl(ROUTES.news),
    ogType: "website",
    schemaKind: "collection",
    breadcrumbs: [homeBreadcrumb(), newsListBreadcrumb()],
  });
}

export function resolveArticleSeo(article: NewsArticle): SeoPayload {
  const title = article.seo_title?.trim() || article.title;
  const description =
    article.seo_description?.trim() ||
    article.excerpt?.trim() ||
    article.description?.trim() ||
    DEFAULT_DESCRIPTION;
  const customImage = article.thumbnail_url || article.thumbnail;
  const ogImage =
    resolveAbsoluteUrl(customImage) ||
    resolveAbsoluteUrl(DEFAULT_OG_IMAGE_PATH);

  return withDefaults({
    title,
    description,
    keywords: article.seo_keywords?.trim() || undefined,
    pageUrl: canonicalUrl(ROUTES.article(article.slug)),
    ogType: "article",
    ogImage,
    ogImageWidth: customImage ? OG_SHARE_IMAGE_WIDTH : DEFAULT_OG_IMAGE_WIDTH,
    ogImageHeight: customImage ? OG_SHARE_IMAGE_HEIGHT : DEFAULT_OG_IMAGE_HEIGHT,
    schemaKind: "article",
    articleAuthor: article.author?.trim() || SITE_NAME,
    articlePublishedTime: article.published_at ?? undefined,
    articleModifiedTime: article.updated_at ?? article.published_at ?? undefined,
    breadcrumbs: articleBreadcrumbs(article.title, article.slug),
  });
}

export function resolveNotFoundSeo(): SeoPayload {
  return withDefaults({
    title: "Không tìm thấy trang",
    description: DEFAULT_DESCRIPTION,
    pageUrl: canonicalUrl(ROUTES.home),
    ogType: "website",
    schemaKind: "none",
    robots: "noindex, follow",
  });
}
