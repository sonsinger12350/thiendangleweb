"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { TableOfContentData } from "@tiptap/extension-table-of-contents";
import type { ApiResponse } from "@/types";
import type { NewsArticle } from "@/types/news";
import NewsArticleContent from "@/components/NewsArticleContent";
import NewsLatestSidebar from "@/components/NewsLatestSidebar";
import NewsTableOfContents from "@/components/NewsTableOfContents";
import { PageBreadcrumb } from "@/components/page-breadcrumb";
import { formatNewsDate } from "@/lib/format-news-date";
import { articleBreadcrumbs } from "@/lib/seo/breadcrumbs";

const FALLBACK_IMAGE = "/tin-phu-kien.png";

export default function NewsDetail({
	article,
	initialLatest,
}: {
	article: NewsArticle;
	initialLatest?: ApiResponse<NewsArticle[]>;
}) {
	const image = article.thumbnail_url || article.thumbnail || FALLBACK_IMAGE;
	const [tocItems, setTocItems] = useState<TableOfContentData>([]);

	return (
		<>
			<section className="pagehero">
				<div className="wrap wrap-article">
					<PageBreadcrumb
						items={articleBreadcrumbs(article.title, article.slug)}
					/>
				</div>
			</section>
			<section className="section">
				<div className="wrap wrap-article">
					<div
						className={`news-detail-wrap${tocItems.length ? " has-toc" : ""}`}
					>
						<NewsTableOfContents items={tocItems} />
						<article className="news-detail">
							<div className="meta">
								{article.published_at && (
									<span>
										{formatNewsDate(article.published_at)}
									</span>
								)}
								{article.category?.name && (
									<>
										<span>·</span>
										<span>{article.category.name}</span>
									</>
								)}
							</div>
							<h1 className="text-4xl font-bold">
								{article.title}
							</h1>
							{article.excerpt && (
								<p className="lead">{article.excerpt}</p>
							)}
							<div className="thumb">
								<Image
									src={image}
									alt={article.title}
									width={1200}
									height={675}
									priority
									unoptimized={Boolean(
										image.startsWith("http"),
									)}
								/>
							</div>
							{article.content && (
								<NewsArticleContent
									html={article.content}
									onTocUpdate={setTocItems}
								/>
							)}
							{article.external_url && (
								<p>
									<Link
										className="more"
										href={article.external_url}
										target="_blank"
										rel="noopener noreferrer"
									>
										Xem nguồn gốc →
									</Link>
								</p>
							)}
						</article>
						<NewsLatestSidebar
							excludeId={article.id}
							initialArticles={initialLatest}
						/>
					</div>
					<div className="cta" style={{ marginTop: 42 }}>
						<div>
							<div className="kicker">Theo dõi cập nhật</div>
							<h2>
								Nhận thông tin danh mục và hợp tác phân phối từ
								TDL.
							</h2>
						</div>
						<Link className="btn dark" href="/#lien-he">
							Liên hệ ngay
						</Link>
					</div>
				</div>
			</section>
		</>
	);
}
