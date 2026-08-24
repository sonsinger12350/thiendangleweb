"use client";

import type { TableOfContentDataItem } from "@tiptap/extension-table-of-contents";

export default function NewsTableOfContents({
	items,
}: {
	items: TableOfContentDataItem[];
}) {
	if (items.length === 0) return null;

	return (
		<aside className="news-toc" aria-label="Mục lục bài viết">
			<h2>Mục lục</h2>
			<nav>
				<ol>
					{items.map((item) => (
						<li
							key={item.id}
							className={`level-${item.originalLevel}${item.isActive ? " active" : ""}${item.isScrolledOver ? " scrolled" : ""}`}
						>
							<a
								href={`#${item.id}`}
								onClick={(event) => {
									event.preventDefault();
									document
										.getElementById(item.id)
										?.scrollIntoView({
											behavior: "smooth",
											block: "start",
										});
								}}
							>
								{item.textContent}
							</a>
						</li>
					))}
				</ol>
			</nav>
		</aside>
	);
}
