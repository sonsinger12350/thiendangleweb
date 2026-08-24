import type { SeoBreadcrumbItem } from "./types";
import { ROUTES } from "./site";
import { canonicalUrl } from "./urls";

export function seoBreadcrumb(
  name: string,
  path: string,
): SeoBreadcrumbItem {
  return {
    name,
    path,
    url: canonicalUrl(path),
  };
}

export function homeBreadcrumb(): SeoBreadcrumbItem {
  return seoBreadcrumb("TDL", ROUTES.home);
}

export function newsListBreadcrumb(): SeoBreadcrumbItem {
  return seoBreadcrumb("Tin tức", ROUTES.news);
}

export function productsBreadcrumb(): SeoBreadcrumbItem {
  return seoBreadcrumb("Sản phẩm", ROUTES.products);
}

export function articleBreadcrumbs(
  title: string,
  slug: string,
): SeoBreadcrumbItem[] {
  return [
    homeBreadcrumb(),
    newsListBreadcrumb(),
    seoBreadcrumb(title, ROUTES.article(slug)),
  ];
}
