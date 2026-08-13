export const WebsiteProductEndpoints = {
  getAll: (params?: string) => `/website/products${params ?? ""}`,
  getById: (id: string | number) => `/website/products/${id}`,
  filters: () => `/website/products/filters`,
} as const;

export const WebsiteContactEndpoints = {
  needTypes: () => `/website/contact-inquiries/need-types`,
  submit: () => `/website/contact-inquiries`,
} as const;
