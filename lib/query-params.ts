import type { WebsiteProductParams } from "@/types/products";

export function buildProductQueryString(params: WebsiteProductParams): string {
  const searchParams = new URLSearchParams();

  const entries: [string, string | number | undefined][] = [
    ["search", params.search],
    ["category_id", params.category_id],
    ["product_group_id", params.product_group_id],
    ["brand_id", params.brand_id],
    ["sort_by", params.sort_by],
    ["sort_direction", params.sort_direction],
    ["page", params.page],
    ["limit", params.limit],
  ];

  for (const [key, value] of entries) {
    if (value === undefined || value === "") continue;
    searchParams.set(key, String(value));
  }

  const query = searchParams.toString();
  return query ? `?${query}` : "";
}
