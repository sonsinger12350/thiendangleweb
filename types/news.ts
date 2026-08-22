export interface NewsCategory {
  id: number;
  name: string;
  slug: string;
  parent_id?: number | null;
  sort_order?: number;
  is_active?: boolean;
  description?: string | null;
  children?: NewsCategory[];
}

export interface NewsArticle {
  id: number;
  title: string;
  slug: string;
  category_id?: number | null;
  category?: NewsCategory | null;
  excerpt?: string | null;
  content?: string | null;
  thumbnail?: string | null;
  thumbnail_url?: string | null;
  external_url?: string | null;
  is_featured?: boolean;
  status?: string;
  published_at?: string | null;
  description?: string | null;
}

export interface WebsiteNewsParams {
  search?: string;
  category_id?: number;
  category?: string;
  is_featured?: boolean | 0 | 1;
  page?: number;
  limit?: number;
}

export interface WebsiteLatestNewsParams {
  limit?: number;
  exclude_id?: number;
}
