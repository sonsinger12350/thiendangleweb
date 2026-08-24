import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { queryKeys } from "../queryClient";
import ProductService from "../services/products";
import type { ApiResponse } from "@/types";
import type {
  Product,
  ProductFilters,
  WebsiteProductParams,
} from "@/types/products";

export const useGetProducts = (
  params: WebsiteProductParams = {},
  initialData?: ApiResponse<Product[]>,
) => {
  return useQuery({
    queryKey: [...queryKeys.products.all, params],
    queryFn: () => ProductService.getProducts(params),
    placeholderData: keepPreviousData,
    ...(initialData ? { initialData } : {}),
  });
};

export const useGetProductById = (id: string | number) => {
  return useQuery({
    queryKey: queryKeys.products.product(String(id)),
    queryFn: () => ProductService.getProductById(id),
    enabled: Boolean(id),
  });
};

export const useGetProductFilters = (
  initialData?: ApiResponse<ProductFilters>,
) => {
  return useQuery({
    queryKey: queryKeys.products.filters,
    queryFn: () => ProductService.getFilters(),
    ...(initialData ? { initialData } : {}),
  });
};

export const useGetHomepageProducts = () => {
  return useQuery({
    queryKey: queryKeys.products.homepage,
    queryFn: () => ProductService.getHomepageProducts(),
  });
};
