import type { MetadataRoute } from "next";
import { fetchAllPublishedNews } from "@/api/services/news-server";
import { ROUTES, getSiteOrigin } from "@/lib/seo/site";
import { canonicalUrl } from "@/lib/seo/urls";

export const revalidate = 60;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const origin = getSiteOrigin();
	const now = new Date();

	const staticPages: MetadataRoute.Sitemap = [
		{
			url: origin,
			lastModified: now,
			changeFrequency: "weekly",
			priority: 1,
		},
		{
			url: canonicalUrl("/san-pham"),
			lastModified: now,
			changeFrequency: "weekly",
			priority: 0.8,
		},
		{
			url: canonicalUrl("/tin-tuc"),
			lastModified: now,
			changeFrequency: "daily",
			priority: 0.8,
		},
		{
			url: canonicalUrl("/dong-hanh-hung-thinh"),
			lastModified: now,
			changeFrequency: "monthly",
			priority: 0.8,
		},
	];

	const articles = await fetchAllPublishedNews();
	const articlePages: MetadataRoute.Sitemap = articles.map((article) => ({
		url: canonicalUrl(ROUTES.article(article.slug)),
		lastModified: article.updated_at || article.published_at || now,
		changeFrequency: "weekly",
		priority: 0.6,
	}));

	return [...staticPages, ...articlePages];
}
