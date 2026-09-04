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
import { PageBreadcrumb } from "@/components/page-breadcrumb";

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
					<PageBreadcrumb items={seo.breadcrumbs ?? []} />
					<h1>Nhịp đập hệ sinh thái TDL.</h1>
					<p>
						Cập nhật liên tục các thông tin chính thức về tiêu chuẩn
						vận hành, sản phẩm chiến lược và những bước tiến mới
						nhất trên hành trình phụng sự của Thiên Đăng Lê.
					</p>
				</div>
			</section>

			<section className="section">
				<div className="wrap">
					<div className="head">
						<div>
							<div className="kicker">Mới nhất</div>
							<h2>Góc nhiền &amp; chuyển động.</h2>
						</div>
						<p>
							Mọi thông tin đều được kiểm chứng dựa trên dữ liệu
							thực tế, bám sát năng lực vận hành và hệ sinh thái
							sản phẩm của Thiên Đăng Lê.
						</p>
					</div>
					<NewsGrid
						initialArticles={articles}
						initialCategories={categories}
					/>
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
