import type { ApiResponse } from "@/types";
import type {
  NewsArticle,
  NewsCategory,
  WebsiteLatestNewsParams,
  WebsiteNewsParams,
} from "@/types/news";
import { SITEMAP_PAGE_SIZE } from "@/lib/pagination";
import {
  buildLatestNewsQueryString,
  buildNewsQueryString,
} from "@/lib/query-params";
import { WebsiteNewsEndpoints } from "../endpoints";
import { ServerApiError, serverGetApi } from "../server-fetch";

function emptyList(): ApiResponse<NewsArticle[]> {
  return { data: [], message: "", success: false };
}

export function isPublishedArticle(article: NewsArticle): boolean {
  if (!article.status) return true;
  return article.status === "published";
}

export async function fetchNewsArticles(
  params: WebsiteNewsParams = {},
): Promise<ApiResponse<NewsArticle[]>> {
  try {
    const query = buildNewsQueryString(params);
    return await serverGetApi<NewsArticle[]>(
      WebsiteNewsEndpoints.getAll(query),
      { tags: ["news"] },
    );
  } catch (error) {
    console.error("fetchNewsArticles", error);
    return emptyList();
  }
}

export async function fetchNewsCategories(): Promise<ApiResponse<NewsCategory[]>> {
  try {
    return await serverGetApi<NewsCategory[]>(WebsiteNewsEndpoints.categories(), {
      tags: ["news"],
    });
  } catch (error) {
    console.error("fetchNewsCategories", error);
    return { data: [], message: "", success: false };
  }
}

export async function fetchLatestNews(
  params: WebsiteLatestNewsParams = {},
): Promise<ApiResponse<NewsArticle[]>> {
  try {
    const query = buildLatestNewsQueryString(params);
    return await serverGetApi<NewsArticle[]>(
      WebsiteNewsEndpoints.latest(query),
      { tags: ["news"] },
    );
  } catch (error) {
    console.error("fetchLatestNews", error);
    return emptyList();
  }
}

export async function fetchNewsBySlug(
  slug: string,
): Promise<NewsArticle | null> {
  try {
    const res = await serverGetApi<NewsArticle>(
      WebsiteNewsEndpoints.getBySlug(encodeURIComponent(slug)),
      { tags: ["news", `news:${slug}`] },
    );
    const article = res.data;
    if (!article || res.success === false) return null;
    if (!isPublishedArticle(article)) return null;
    return article;
  } catch (error) {
    if (error instanceof ServerApiError && error.status === 404) return null;
    console.error("fetchNewsBySlug", error);
    return null;
  }
}

export async function fetchAllPublishedNews(): Promise<NewsArticle[]> {
  const articles: NewsArticle[] = [];
  let page = 1;
  let lastPage = 1;

  do {
    const res = await fetchNewsArticles({ page, limit: SITEMAP_PAGE_SIZE });
    articles.push(...(res.data ?? []));
    lastPage = Math.max(1, res.pagination?.last_page ?? res.meta?.last_page ?? 1);
    page += 1;
  } while (page <= lastPage && page <= 50);

  return articles.filter(isPublishedArticle);
}
