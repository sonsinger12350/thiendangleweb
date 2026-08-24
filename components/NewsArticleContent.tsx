"use client";

import { useEffect, useRef } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import {
	TableOfContents,
	getHierarchicalIndexes,
	type TableOfContentData,
} from "@tiptap/extension-table-of-contents";
import { HeadingWithTocId } from "@/lib/tiptap-heading";
import { createHeadingId, demoteArticleH1 } from "@/lib/news-toc";

export default function NewsArticleContent({
	html,
	onTocUpdate,
}: {
	html: string;
	onTocUpdate: (items: TableOfContentData) => void;
}) {
	const htmlToRender = demoteArticleH1(html);
	const onTocUpdateRef = useRef(onTocUpdate);
	onTocUpdateRef.current = onTocUpdate;

	const editor = useEditor({
		immediatelyRender: false,
		editable: false,
		extensions: [
			StarterKit.configure({
				heading: false,
			}),
			HeadingWithTocId,
			Image.configure({
				inline: false,
			}),
			TableOfContents.configure({
				anchorTypes: ["heading"],
				getIndex: getHierarchicalIndexes,
				getId: createHeadingId(),
				scrollParent: () => window,
				onUpdate: (anchors) => {
					onTocUpdateRef.current(anchors);
				},
			}),
		],
		content: htmlToRender,
	});

	useEffect(() => {
		if (!editor) return;
		editor.commands.setContent(htmlToRender || "");
	}, [editor, htmlToRender]);

	useEffect(() => {
		return () => onTocUpdateRef.current([]);
	}, []);

	if (!editor) {
		return (
			<div
				className="news-content"
				dangerouslySetInnerHTML={{ __html: htmlToRender }}
			/>
		);
	}

	return <EditorContent editor={editor} className="news-content" />;
}
