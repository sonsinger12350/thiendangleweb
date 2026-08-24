"use client";

import { TableCell, TableHeader } from "@tiptap/extension-table";

const backgroundColor = {
	backgroundColor: {
		default: null,
		parseHTML: (element: HTMLElement) =>
			element.style.backgroundColor || null,
		renderHTML: (attributes: { backgroundColor?: string | null }) =>
			attributes.backgroundColor
				? { style: `background-color: ${attributes.backgroundColor}` }
				: {},
	},
};

export const TableCellWithStyle = TableCell.extend({
	addAttributes() {
		return {
			...this.parent?.(),
			...backgroundColor,
		};
	},
});

export const TableHeaderWithStyle = TableHeader.extend({
	addAttributes() {
		return {
			...this.parent?.(),
			...backgroundColor,
		};
	},
});
