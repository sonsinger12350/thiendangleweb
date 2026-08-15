export const WebsiteProductEndpoints = {
  getAll: (params?: string) => `/website/products${params ?? ""}`,
  getById: (id: string | number) => `/website/products/${id}`,
  filters: () => `/website/products/filters`,
  homepage: () => `/website/products/homepage`,
} as const;

export const WebsiteContactEndpoints = {
  needTypes: () => `/website/contact-inquiries/need-types`,
  submit: () => `/website/contact-inquiries`,
} as const;

export const WebsiteNewsEndpoints = {
  getAll: (params?: string) => `/website/news${params ?? ""}`,
  getBySlug: (slug: string) => `/website/news/${slug}`,
  categories: (params?: string) => `/website/news/categories${params ?? ""}`,
} as const;
