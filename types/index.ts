
export interface BaseEntity {
  id: string;
  created_at: string;
  updated_at: string;
}


export interface Enum {
  [key: string]: any;
}

export interface ApiError {
  message: string;
  code: string;
  status: number;
  data: any;
}

export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
  pagination?: PaginationData;
  meta?: PaginationData;
  next_cursor?: string;
  total_quantity?: number;
  total_sold_quantity?: number;
  total_remaining?: number;
}

/** Một dòng lỗi khi import (validation theo row). */
export interface ImportRowError {
  row: number;
  errors: Record<string, string[]>;
  values?: Record<string, unknown>;
}

export interface ImportResponse {
  success: boolean;
  message: string;
  failed: number;
  imported: number;
  updated: number;
  errors?: ImportRowError[];
  error_file_url?: string | null;
}

export interface QueryParams {
  page?: number;
  limit?: number;
  search?: string;
  /** Lọc loại biến động tồn (warehouse / vehicle stock-logs API) */
  type?: string;
  product_id?: string;
  sort?: string;
  sort_by?: string;
  sort_direction?: "asc" | "desc" | "";
  payment_status?: string;
  province_id?: string;
  ward_id?: string;
  filter?: Record<string, string | string[] | undefined>;
  year?: number;
  // quarter?: number;
  customer_id?: string;
  /** Một số API đọc trực tiếp query (không dùng `filters[...]`). */
  sale_order_id?: string;
  payment_method?: string;
  /** Lọc API thanh toán đơn hàng (`pending` / `approved`). */
  approval_status?: string;
  module?: string;
  cursor?: string;
  period_type?: string;
  period_value?: string;
  widget?: string;
  metric?: string;
  axis?: string;
  anchor?: string;
  sale_user_id?: string;
  scope?: string;
  time?: string;
  role?: string;
  /** Hiển thị cả sản phẩm tồn kho = 0 (warehouse / vehicle warehouse stock API). */
  show_all?: boolean | 0 | 1;
  is_shared?: 0 | 1;
} 

export interface PaginationData {
  total: number;
  current_page: number;
  per_page: number;
  last_page: number;
  from: number;
  to: number;
}

export enum AppTab {
  LOGIN = "/",
  USERS = "/users",
  PRODUCTS = "/products",
  CUSTOMERS = "/customers",
  WAREHOUSE = "/warehouse",
  VAT_WAREHOUSE = "/vat-warehouse",
  VEHICLE_WAREHOUSE = "/vehicle-warehouse",
  FORGOT_PASSWORD = "/forgot-password",
  DASHBOARD = "/dashboard",
  CONFIG = "/config",
  CONFIG_DEPENDENT_SELECT = "/config/dependent-select",
  CONFIG_PAYMENT_BANK_ACCOUNTS = "/config/payment-bank-accounts",
  LOGS = "/logs",
  GOOD_RECEIPT = "/good-receipt",
  COMPETITOR_REPORTS = "/competitor-reports",
  COMPETITORS = "/competitors",
  STOCK_TRANSFER = "/stock-transfer",
  SALES_ROUTE = "/sales-route",
  ORDERS = "/order",
  DEFECTIVE_EXCHANGE_VOUCHERS = "/defective-exchange-vouchers",
  PAYMENTS = "/payments",
  CUSTOMER_TIERS = "/customer-tier",
  DEFECTIVE_RETURN_TRANSFERS = "/defective-return-transfers",
  STOCK_TAKES = "/stock-takes",
  SALES_RETURN_VOUCHERS = "/sales-return-vouchers",
  VEHICLE_STOCK_TRANSFER = "/vehicle-stock-transfer",
  SELLABLE_RETURN_TRANSFERS = "/sellable-return-transfers",
  SHARED_ORDERS = "/share-orders",
}

export enum UserRole {
  OWNER = "owner",
  SALE = "sale",
  WAREHOUSE = "warehouse",
}
