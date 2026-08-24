"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { useGetNews, useGetNewsCategories } from "@/api/queries/news";
import type { ApiResponse } from "@/types";
import type { NewsArticle, NewsCategory } from "@/types/news";
import { formatNewsDate } from "@/lib/format-news-date";
import { NEWS_PAGE_SIZE } from "@/lib/pagination";

const FALLBACK_IMAGE = "/tin-phu-kien.png";
const PAGE_SIZE = NEWS_PAGE_SIZE;

function flattenCategories(categories: NewsCategory[]): NewsCategory[] {
	return categories.flatMap((category) => [
		category,
		...flattenCategories(category.children ?? []),
	]);
}

function articleHref(slug: string, externalUrl?: string | null) {
	if (externalUrl) return externalUrl;
	return `/tin-tuc/${slug}`;
}

type NewsGridProps = {
	initialArticles?: ApiResponse<NewsArticle[]>;
	initialCategories?: ApiResponse<NewsCategory[]>;
};

export default function NewsGrid({
	initialArticles,
	initialCategories,
}: NewsGridProps) {
	const [activeCat, setActiveCat] = useState<number | "all">("all");
	const [page, setPage] = useState(1);

	const { data: categoriesRes } = useGetNewsCategories(initialCategories);
	const categories = useMemo(
		() => flattenCategories(categoriesRes?.data ?? []),
		[categoriesRes?.data],
	);

	const queryParams = useMemo(
		() => ({
			page,
			limit: PAGE_SIZE,
			category_id: activeCat === "all" ? undefined : activeCat,
		}),
		[activeCat, page],
	);

	const { data: newsRes, isLoading, isError } = useGetNews(
		queryParams,
		page === 1 && activeCat === "all" ? initialArticles : undefined,
	);
	const articles = newsRes?.data ?? [];
	const pagination = newsRes?.pagination ?? newsRes?.meta;
	const lastPage = Math.max(1, pagination?.last_page ?? 1);
	const showPagination = !isError && lastPage > 1;

	function selectCategory(id: number | "all") {
		setActiveCat(id);
		setPage(1);
	}

	return (
		<>
			<div className="news-cats" role="tablist" aria-label="Danh mục bài viết">
				<button
					type="button"
					className={activeCat === "all" ? "active" : ""}
					role="tab"
					aria-selected={activeCat === "all"}
					onClick={() => selectCategory("all")}
				>
					Tất cả
				</button>
				{categories.map((cat) => (
					<button
						key={cat.id}
						type="button"
						className={activeCat === cat.id ? "active" : ""}
						role="tab"
						aria-selected={activeCat === cat.id}
						onClick={() => selectCategory(cat.id)}
					>
						{cat.name}
					</button>
				))}
			</div>
			<div className="news-grid">
				{isLoading && articles.length === 0 && (
					<div className="news-empty show">Đang tải tin tức...</div>
				)}
				{articles.map((article) => {
					const image = article.thumbnail_url || article.thumbnail || FALLBACK_IMAGE;
					const href = articleHref(article.slug, article.external_url);
					const isExternal = Boolean(article.external_url);

					return (
						<Link
							key={article.id}
							href={href}
							className={`news-card${article.is_featured ? " news-featured" : ""}`}
							target={isExternal ? "_blank" : undefined}
							rel={isExternal ? "noopener noreferrer" : undefined}
						>
							<div className="thumb">
								<Image
									src={image}
									alt={article.title}
									width={800}
									height={450}
									loading="lazy"
									unoptimized={Boolean(image.startsWith("http"))}
								/>
							</div>
							<div className="body">
								<div className="meta">
									{article.published_at && (
										<span>{formatNewsDate(article.published_at, " / ")}</span>
									)}
									{article.category?.name && (
										<>
											<span>·</span>
											<span>{article.category.name}</span>
										</>
									)}
								</div>
								<h3>{article.title}</h3>
								{article.excerpt && <p>{article.excerpt}</p>}
								<span className="more">
									{isExternal ? "Xem thêm →" : "Đọc thêm →"}
								</span>
							</div>
						</Link>
					);
				})}
				<div
					className={`news-empty${!isLoading && !isError && articles.length === 0 ? " show" : ""}`}
				>
					Không có bài viết trong danh mục này.
				</div>
			</div>
			{showPagination && (
				<nav className="pagination" aria-label="Phân trang tin tức">
					<button
						type="button"
						className="pagination-nav"
						aria-label="Trang trước"
						disabled={page <= 1 || isLoading}
						onClick={() => setPage((current) => Math.max(1, current - 1))}
					>
						&lt;
					</button>
					<span className="pagination-ellipsis">
						{page} / {lastPage}
					</span>
					<button
						type="button"
						className="pagination-nav"
						aria-label="Trang sau"
						disabled={page >= lastPage || isLoading}
						onClick={() => setPage((current) => Math.min(lastPage, current + 1))}
					>
						&gt;
					</button>
				</nav>
			)}
		</>
	);
}
