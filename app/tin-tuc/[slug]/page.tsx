import type { Metadata } from "next";
import Link from "next/link";
import NewsDetail from "@/components/NewsDetail";

export const metadata: Metadata = {
	title: "Chi tiết tin tức",
	description: "Bài viết từ hệ sinh thái TDL — Thiên Đăng Lê.",
};

export default function TinTucDetailPage() {
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
					<NewsDetail />
				</div>
			</section>
		</>
	);
}
