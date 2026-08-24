import type { Metadata } from "next";
import { notFound } from "next/navigation";
import NewsDetail from "@/components/NewsDetail";
import {
	fetchAllPublishedNews,
	fetchLatestNews,
	fetchNewsBySlug,
} from "@/api/services/news-server";
import { JsonLdScript } from "@/lib/seo/json-ld-script";
import { seoToMetadata } from "@/lib/seo/metadata";
import { resolveArticleSeo, resolveNotFoundSeo } from "@/lib/seo/resolvers";

export const revalidate = 60;
export const dynamicParams = true;

export async function generateStaticParams() {
	const articles = await fetchAllPublishedNews();
	return articles.map((article) => ({ slug: article.slug }));
}

type TinTucDetailProps = {
	params: Promise<{ slug: string }>;
};

export async function generateMetadata({
	params,
}: TinTucDetailProps): Promise<Metadata> {
	const { slug } = await params;
	const article = await fetchNewsBySlug(decodeURIComponent(slug));

	if (!article) {
		return seoToMetadata(resolveNotFoundSeo());
	}

	return seoToMetadata(resolveArticleSeo(article));
}

export default async function TinTucDetailPage({ params }: TinTucDetailProps) {
	const { slug } = await params;
	const article = await fetchNewsBySlug(decodeURIComponent(slug));

	if (!article) {
		notFound();
	}

	const seo = resolveArticleSeo(article);
	const latest = await fetchLatestNews({
		limit: 5,
		exclude_id: article.id,
	});

	return (
		<>
			<JsonLdScript seo={seo} />
			<NewsDetail article={article} initialLatest={latest} />
		</>
	);
}
