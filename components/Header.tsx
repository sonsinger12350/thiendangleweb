"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
	const pathname = usePathname();
	const [menuOpen, setMenuOpen] = useState(false);

	const navLinks = [
		{ href: "/#trang-chu", label: "Trang chủ", active: pathname === "/" },
		{ href: "/#gioi-thieu", label: "Giới thiệu", active: false },
		{
			href: "/san-pham",
			label: "Sản phẩm",
			active: pathname === "/san-pham",
		},
		{ href: "/tin-tuc", label: "Tin tức", active: pathname === "/tin-tuc" },
	];

	return (
		<header>
			<div className="wrap nav">
				<Link
					className="brand"
					href="/#trang-chu"
					onClick={() => setMenuOpen(false)}
				>
					<Image
						src="/Logo_symbol.png"
						alt="Logo TDL"
						width={54}
						height={54}
					/>
					{/* <Image
						src="/logo.png"
						alt="Logo TDL"
						width={54}
						height={54}
					/> */}
					<span>
						TDL — THIÊN ĐĂNG LÊ
						<small>Kiến tạo trật tự an tâm</small>
					</span>
				</Link>
				<nav
					className="links"
					style={
						menuOpen
							? {
									display: "flex",
									position: "absolute",
									top: "82px",
									left: 0,
									right: 0,
									padding: "22px",
									background: "white",
									flexDirection: "column",
									boxShadow: "0 18px 40px rgba(0,0,0,.12)",
								}
							: undefined
					}
				>
					{navLinks.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className={link.active ? "active" : ""}
							onClick={() => setMenuOpen(false)}
						>
							{link.label}
						</Link>
					))}
					<Link
						className="pill"
						href="/#lien-he"
						onClick={() => setMenuOpen(false)}
					>
						Liên hệ
					</Link>
				</nav>
				<button
					className="menu"
					aria-label="Mở menu"
					type="button"
					onClick={() => setMenuOpen((open) => !open)}
				>
					☰
				</button>
			</div>
		</header>
	);
}
