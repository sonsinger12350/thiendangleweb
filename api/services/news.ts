import { ApiResponse } from "@/types";
import { NewsArticle, NewsCategory, WebsiteNewsParams } from "@/types/news";
import { buildNewsQueryString } from "@/lib/query-params";
import axiosClient from "../axiosClient";
import { WebsiteNewsEndpoints } from "../endpoints";

export default class NewsService {
  static async getArticles(
    params: WebsiteNewsParams = {},
  ): Promise<ApiResponse<NewsArticle[]>> {
    const query = buildNewsQueryString(params);
    const { data: res } = await axiosClient.get<ApiResponse<NewsArticle[]>>(
      WebsiteNewsEndpoints.getAll(query),
    );
    return res;
  }

  static async getArticleBySlug(
    slug: string,
  ): Promise<ApiResponse<NewsArticle>> {
    const { data: res } = await axiosClient.get<ApiResponse<NewsArticle>>(
      WebsiteNewsEndpoints.getBySlug(slug),
    );
    return res;
  }

  static async getCategories(): Promise<ApiResponse<NewsCategory[]>> {
    const { data: res } = await axiosClient.get<ApiResponse<NewsCategory[]>>(
      WebsiteNewsEndpoints.categories(),
    );
    return res;
  }
}
