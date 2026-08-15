import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { queryKeys } from "../queryClient";
import NewsService from "../services/news";
import type { WebsiteNewsParams } from "@/types/news";

export const useGetNews = (params: WebsiteNewsParams = {}) => {
  return useQuery({
    queryKey: [...queryKeys.news.all, params],
    queryFn: () => NewsService.getArticles(params),
    placeholderData: keepPreviousData,
  });
};

export const useGetNewsBySlug = (slug: string) => {
  return useQuery({
    queryKey: queryKeys.news.article(slug),
    queryFn: () => NewsService.getArticleBySlug(slug),
    enabled: Boolean(slug),
  });
};

export const useGetNewsCategories = () => {
  return useQuery({
    queryKey: queryKeys.news.categories,
    queryFn: () => NewsService.getCategories(),
  });
};
