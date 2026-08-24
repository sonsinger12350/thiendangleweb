import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { queryKeys } from "../queryClient";
import NewsService from "../services/news";
import type { ApiResponse } from "@/types";
import type { NewsArticle, NewsCategory, WebsiteNewsParams, WebsiteLatestNewsParams } from "@/types/news";

export const useGetNews = (
  params: WebsiteNewsParams = {},
  initialData?: ApiResponse<NewsArticle[]>,
) => {
  return useQuery({
    queryKey: [...queryKeys.news.all, params],
    queryFn: () => NewsService.getArticles(params),
    placeholderData: keepPreviousData,
    ...(initialData ? { initialData } : {}),
  });
};

export const useGetNewsCategories = (
  initialData?: ApiResponse<NewsCategory[]>,
) => {
  return useQuery({
    queryKey: queryKeys.news.categories,
    queryFn: () => NewsService.getCategories(),
    ...(initialData ? { initialData } : {}),
  });
};

export const useGetLatestNews = (
  params: WebsiteLatestNewsParams = {},
  initialData?: ApiResponse<NewsArticle[]>,
) => {
  return useQuery({
    queryKey: [...queryKeys.news.latest, params],
    queryFn: () => NewsService.getLatest(params),
    ...(initialData ? { initialData } : {}),
  });
};
