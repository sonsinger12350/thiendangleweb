"use client";

import Image from "next/image";
import Link from "next/link";
import { useGetLatestNews } from "@/api/queries/news";

const FALLBACK_IMAGE = "/tin-phu-kien.png";

function formatNewsDate(value?: string | null) {
	if (!value) return "";
	const date = new Date(value);
	if (Number.isNaN(date.getTime())) return value;

	return date.toLocaleDateString("vi-VN", {
		day: "2-digit",
		month: "2-digit",
		year: "numeric",
	});
}

export default function NewsLatestSidebar({
	excludeId,
}: {
	excludeId?: number;
}) {
	const { data, isLoading } = useGetLatestNews({
		limit: 5,
		exclude_id: excludeId,
	});
	const articles = data?.data ?? [];

	if (isLoading || articles.length === 0) return null;

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
