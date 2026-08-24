"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useParams } from "next/navigation";
import type { TableOfContentData } from "@tiptap/extension-table-of-contents";
import { useGetNewsBySlug } from "@/api/queries/news";
import NewsArticleContent from "@/components/NewsArticleContent";
import NewsLatestSidebar from "@/components/NewsLatestSidebar";
import NewsTableOfContents from "@/components/NewsTableOfContents";

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

export default function NewsDetail() {
	const params = useParams<{ slug: string }>();
	const slug = decodeURIComponent(params.slug ?? "");
	const { data, isLoading, isError } = useGetNewsBySlug(slug);
	const article = data?.data;
	const image =
		article?.thumbnail_url || article?.thumbnail || FALLBACK_IMAGE;
	const [tocItems, setTocItems] = useState<TableOfContentData>([]);

	if (isLoading) {
		return (
			<>
				<section className="pagehero">
					<div className="wrap">
						<div className="crumb">
							<Link href="/tin-tuc">TDL / Tin tức</Link>
						</div>
					</div>
				</section>
				<section className="section">
					<div className="wrap news-detail-wrap">
						<p style={{ color: "var(--muted)" }}>
							Đang tải bài viết...
						</p>
					</div>
				</section>
			</>
		);
	}

	if (isError || !article) {
		return (
			<>
				<section className="pagehero">
					<div className="wrap">
						<div className="crumb">
							<Link href="/tin-tuc">TDL / Tin tức</Link>
						</div>
					</div>
				</section>
				<section className="section">
					<div className="wrap news-detail-wrap">
						<div className="news-empty show">
							Không tìm thấy bài viết.
							<div style={{ marginTop: 16 }}>
								<Link className="btn dark" href="/tin-tuc">
									Quay lại tin tức
								</Link>
							</div>
						</div>
					</div>
				</section>
			</>
		);
	}

	return (
		<>
			<section className="pagehero">
				<div className="wrap">
					<div className="crumb">
						<Link href="/tin-tuc">TDL / Tin tức</Link>
						{article.title ? ` / ${article.title}` : ""}
					</div>
				</div>
			</section>
			<section className="section">
				<div className="wrap">
					<div className={`news-detail-wrap${tocItems.length ? " has-toc" : ""}`}>
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
						<NewsLatestSidebar excludeId={article.id} />
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
