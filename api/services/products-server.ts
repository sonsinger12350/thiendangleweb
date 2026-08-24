import type { ApiResponse } from "@/types";
import type { Product, ProductFilters, WebsiteProductParams } from "@/types/products";
import { buildProductQueryString } from "@/lib/query-params";
import { WebsiteProductEndpoints } from "../endpoints";
import { serverGetApi } from "../server-fetch";

export async function fetchProducts(
  params: WebsiteProductParams = {},
): Promise<ApiResponse<Product[]>> {
  try {
    const query = buildProductQueryString(params);
    return await serverGetApi<Product[]>(WebsiteProductEndpoints.getAll(query), {
      tags: ["products"],
    });
  } catch (error) {
    console.error("fetchProducts", error);
    return { data: [], message: "", success: false };
  }
}

export async function fetchProductFilters(): Promise<ApiResponse<ProductFilters>> {
  try {
    return await serverGetApi<ProductFilters>(WebsiteProductEndpoints.filters(), {
      tags: ["products"],
    });
  } catch (error) {
    console.error("fetchProductFilters", error);
    return {
      data: { categories: [], product_groups: [] },
      message: "",
      success: false,
    };
  }
}
