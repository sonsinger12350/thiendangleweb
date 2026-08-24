"use client";

import Heading from "@tiptap/extension-heading";

export const HeadingWithTocId = Heading.extend({
	addAttributes() {
		return {
			...this.parent?.(),
			id: {
				default: null,
				parseHTML: (element) => element.getAttribute("id"),
				renderHTML: (attributes) =>
					attributes.id ? { id: attributes.id } : {},
			},
			"data-toc-id": {
				default: null,
				parseHTML: (element) => element.getAttribute("data-toc-id"),
				renderHTML: (attributes) =>
					attributes["data-toc-id"]
						? { "data-toc-id": attributes["data-toc-id"] }
						: {},
			},
		};
	},
});
