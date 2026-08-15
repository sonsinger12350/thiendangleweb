export interface SelectOption {
  id: number;
  type?: string;
  value?: string;
  label: string;
}

export interface Product {
  id: number;
  sku: string;
  name: string;
  description?: string | null;
  brand_id?: number | null;
  category_id?: number | null;
  product_group_id?: number | null;
  price: string | number;
  status: string;
  status_label: string;
  thumbnail: string | null;
  brand?: SelectOption | null;
  category?: SelectOption | null;
  product_group?: SelectOption | null;
}

export interface ProductFilters {
  categories: SelectOption[];
  product_groups: SelectOption[];
}

export interface HomepageProduct {
  id: number;
  product_id: number;
  sort_order: number;
  description?: string | null;
  product: Product;
}

export interface WebsiteProductParams {
  search?: string;
  category_id?: number;
  product_group_id?: number;
  brand_id?: number;
  sort_by?: string;
  sort_direction?: "asc" | "desc";
  page?: number;
  limit?: number;
}
