export const SITE_NAME = "TDL — Thiên Đăng Lê";

export const DEFAULT_TITLE = "TDL — Thiên Đăng Lê | Website giới thiệu";

export const DEFAULT_DESCRIPTION =
  "TDL — Thiên Đăng Lê: hệ sinh thái thương mại – công nghệ. Ưu tiên phụ kiện điện thoại; điện gia dụng và mở rộng theo điều kiện sẵn sàng.";

export const DEFAULT_KEYWORDS =
  "TDL, Thiên Đăng Lê, phụ kiện điện thoại, linh kiện điện thoại, điện gia dụng, Tây Nguyên";

export const DEFAULT_OG_IMAGE_PATH = "/logo/Logo_horizontal.png";

export const SEO_REVALIDATE_SECONDS = 60;

export const ROUTES = {
  home: "/",
  products: "/san-pham",
  news: "/tin-tuc",
  article: (slug: string) => `/tin-tuc/${encodeURIComponent(slug)}`,
} as const;

/** Production origin, HTTPS, no trailing slash. */
export function getSiteOrigin(): string {
  const raw =
    process.env.SITE_URL ||
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://thiendangle.com";
  return raw.replace(/\/$/, "");
}
