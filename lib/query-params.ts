import type { WebsiteLatestNewsParams, WebsiteNewsParams } from "@/types/news";
import type { WebsiteProductParams } from "@/types/products";

function toQueryString(
  entries: [string, string | number | boolean | undefined][],
): string {
  const searchParams = new URLSearchParams();

  for (const [key, value] of entries) {
    if (value === undefined || value === "") continue;
    searchParams.set(key, String(value));
  }

  const query = searchParams.toString();
  return query ? `?${query}` : "";
}

export function buildProductQueryString(params: WebsiteProductParams): string {
  return toQueryString([
    ["search", params.search],
    ["category_id", params.category_id],
    ["product_group_id", params.product_group_id],
    ["brand_id", params.brand_id],
    ["sort_by", params.sort_by],
    ["sort_direction", params.sort_direction],
    ["page", params.page],
    ["limit", params.limit],
  ]);
}

export function buildNewsQueryString(params: WebsiteNewsParams): string {
  return toQueryString([
    ["search", params.search],
    ["category_id", params.category_id],
    ["category", params.category],
    ["is_featured", params.is_featured],
    ["page", params.page],
    ["limit", params.limit],
  ]);
}

export function buildLatestNewsQueryString(
  params: WebsiteLatestNewsParams,
): string {
  return toQueryString([
    ["limit", params.limit],
    ["exclude_id", params.exclude_id],
  ]);
}
