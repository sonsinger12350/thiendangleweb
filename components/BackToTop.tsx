"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		function onScroll() {
			setVisible(window.scrollY > 400);
		}

		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}

	return (
		<button
			type="button"
			className={`back-to-top${visible ? " is-visible" : ""}`}
			aria-label="Lên đầu trang"
			onClick={scrollToTop}
		>
			<svg
				width="18"
				height="18"
				viewBox="0 0 16 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				aria-hidden
			>
				<path
					d="M4 10l4-4 4 4"
					stroke="currentColor"
					strokeWidth="1.6"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		</button>
	);
}
