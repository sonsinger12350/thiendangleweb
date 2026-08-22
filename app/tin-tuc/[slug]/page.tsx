import type { Metadata } from "next";
import NewsDetail from "@/components/NewsDetail";

export const metadata: Metadata = {
	title: "Chi tiết tin tức",
	description: "Bài viết từ hệ sinh thái TDL — Thiên Đăng Lê.",
};

export default function TinTucDetailPage() {
	return <NewsDetail />;
}
