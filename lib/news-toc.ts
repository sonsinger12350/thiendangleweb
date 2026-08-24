function slugifyHeading(text: string) {
	return (
		text
			.normalize("NFD")
			.replace(/[\u0300-\u036f]/g, "")
			.toLowerCase()
			.replace(/đ/g, "d")
			.replace(/[^a-z0-9]+/g, "-")
			.replace(/^-+|-+$/g, "") || "muc"
	);
}

/** Keep the page title as the only h1; CMS body headings become h2. */
export function demoteArticleH1(html: string): string {
	return html.replace(/<h1(\b)/gi, "<h2$1").replace(/<\/h1>/gi, "</h2>");
}

export function createHeadingId() {
	const used = new Map<string, number>();

	return (content: string) => {
		const base = slugifyHeading(content);
		const count = (used.get(base) ?? 0) + 1;
		used.set(base, count);
		return count === 1 ? base : `${base}-${count}`;
	};
}
