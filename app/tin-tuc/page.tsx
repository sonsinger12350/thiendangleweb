import type { Metadata } from "next";
import Link from "next/link";
import NewsGrid from "@/components/NewsGrid";
import {
	fetchNewsArticles,
	fetchNewsCategories,
} from "@/api/services/news-server";
import { JsonLdScript } from "@/lib/seo/json-ld-script";
import { seoToMetadata } from "@/lib/seo/metadata";
import { resolveNewsListSeo } from "@/lib/seo/resolvers";
import { NEWS_PAGE_SIZE } from "@/lib/pagination";

export const revalidate = 60;

const seo = resolveNewsListSeo();

export const metadata: Metadata = seoToMetadata(seo);

export default async function TinTucPage() {
	const [articles, categories] = await Promise.all([
		fetchNewsArticles({ page: 1, limit: NEWS_PAGE_SIZE }),
		fetchNewsCategories(),
	]);

	return (
		<>
			<JsonLdScript seo={seo} />
			<section className="pagehero">
				<div className="wrap">
					<div className="crumb">TDL / Tin tức</div>
					<h1>Tin tức &amp; cập nhật từ hệ sinh thái TDL.</h1>
					<p>
						Thông tin chính thức về danh mục ưu tiên giai đoạn đầu, chuẩn vận hành và định hướng phát triển
						của Thiên Đăng Lê.
					</p>
				</div>
			</section>

			<section className="section">
				<div className="wrap">
					<div className="head">
						<div>
							<div className="kicker">Mới nhất</div>
							<h2>Bài viết &amp; thông báo.</h2>
						</div>
						<p>
							Nội dung ưu tiên tính kiểm chứng, gắn với năng lực vận hành và danh mục sản phẩm thực tế.
						</p>
					</div>
					<NewsGrid
						initialArticles={articles}
						initialCategories={categories}
					/>
					<div className="cta" style={{ marginTop: 42 }}>
						<div>
							<div className="kicker">Theo dõi cập nhật</div>
							<h2>Nhận thông tin danh mục và hợp tác phân phối từ TDL.</h2>
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
