import type { Metadata } from "next";
import Link from "next/link";
import { JsonLdScript } from "@/lib/seo/json-ld-script";
import { seoToMetadata } from "@/lib/seo/metadata";
import { resolveNotFoundSeo } from "@/lib/seo/resolvers";

const seo = resolveNotFoundSeo();

export const metadata: Metadata = seoToMetadata(seo);

export default function NotFound() {
	return (
		<>
			<JsonLdScript seo={seo} />
			<section className="pagehero">
				<div className="wrap">
					<div className="crumb">TDL / 404</div>
					<h1>Không tìm thấy trang.</h1>
					<p>
						Đường dẫn không tồn tại hoặc bài viết đã được gỡ. Quay
						lại trang chủ hoặc danh sách tin tức.
					</p>
				</div>
			</section>
			<section className="section">
				<div className="wrap">
					<div className="actions">
						<Link className="btn dark" href="/">
							Về trang chủ
						</Link>
						<Link className="btn ghost" href="/tin-tuc">
							Xem tin tức
						</Link>
					</div>
				</div>
			</section>
		</>
	);
}
