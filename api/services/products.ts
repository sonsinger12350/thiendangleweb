import { ApiResponse } from "@/types";
import {
  HomepageProduct,
  Product,
  ProductFilters,
  WebsiteProductParams,
} from "@/types/products";
import { buildProductQueryString } from "@/lib/query-params";
import axiosClient from "../axiosClient";
import { WebsiteProductEndpoints } from "../endpoints";

export default class ProductService {
  static async getProducts(
    params: WebsiteProductParams = {}
  ): Promise<ApiResponse<Product[]>> {
    const query = buildProductQueryString(params);
    const { data: res } = await axiosClient.get<ApiResponse<Product[]>>(
      WebsiteProductEndpoints.getAll(query)
    );
    return res;
  }

  static async getProductById(id: string | number): Promise<ApiResponse<Product>> {
    const { data: res } = await axiosClient.get<ApiResponse<Product>>(
      WebsiteProductEndpoints.getById(id)
    );
    return res;
  }

  static async getFilters(): Promise<ApiResponse<ProductFilters>> {
    const { data: res } = await axiosClient.get<ApiResponse<ProductFilters>>(
      WebsiteProductEndpoints.filters()
    );
    return res;
  }

  static async getHomepageProducts(): Promise<ApiResponse<HomepageProduct[]>> {
    const { data: res } = await axiosClient.get<ApiResponse<HomepageProduct[]>>(
      WebsiteProductEndpoints.homepage()
    );
    return res;
  }
}
