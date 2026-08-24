"use client";

import Image from "next/image";
import Link from "next/link";
import { useGetLatestNews } from "@/api/queries/news";
import type { ApiResponse } from "@/types";
import type { NewsArticle } from "@/types/news";
import { formatNewsDate } from "@/lib/format-news-date";

const FALLBACK_IMAGE = "/tin-phu-kien.png";

export default function NewsLatestSidebar({
	excludeId,
	initialArticles,
}: {
	excludeId?: number;
	initialArticles?: ApiResponse<NewsArticle[]>;
}) {
	const { data } = useGetLatestNews(
		{
			limit: 5,
			exclude_id: excludeId,
		},
		initialArticles,
	);
	const articles = data?.data ?? [];

	if (articles.length === 0) return null;

	return (
		<aside className="news-latest" aria-label="Bài viết mới nhất">
			<h2>Bài viết mới nhất</h2>
			<ul>
				{articles.map((article) => {
					const image =
						article.thumbnail_url ||
						article.thumbnail ||
						FALLBACK_IMAGE;
					const href = article.external_url || `/tin-tuc/${article.slug}`;
					const isExternal = Boolean(article.external_url);

					return (
						<li key={article.id}>
							<Link
								href={href}
								target={isExternal ? "_blank" : undefined}
								rel={isExternal ? "noopener noreferrer" : undefined}
							>
								<span className="thumb">
									<Image
										src={image}
										alt={article.title}
										width={120}
										height={80}
										unoptimized={Boolean(
											image.startsWith("http"),
										)}
									/>
								</span>
								<span className="info">
									<span className="title">{article.title}</span>
									{article.published_at && (
										<span className="date">
											{formatNewsDate(article.published_at)}
										</span>
									)}
								</span>
							</Link>
						</li>
					);
				})}
			</ul>
		</aside>
	);
}
