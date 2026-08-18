import type { Metadata } from "next";
import { Inter, Noto_Serif } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Providers from "@/components/Providers";
import "./globals.css";
import { cn } from "@/lib/util";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin", "vietnamese"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const notoSerif = Noto_Serif({
	variable: "--font-noto-serif",
	subsets: ["latin"],
	weight: ["400", "700"],
});

export const metadata: Metadata = {
	title: {
		default: "TDL — Thiên Đăng Lê | Website giới thiệu",
		template: "%s | TDL — Thiên Đăng Lê",
	},
	icons: {
		icon: "/logo/favicon.png",
		apple: "/logo/favicon.png",
	},
	description:
		"TDL — Thiên Đăng Lê: hệ sinh thái thương mại – công nghệ. Ưu tiên phụ kiện điện thoại; điện gia dụng và mở rộng theo điều kiện sẵn sàng.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html
			lang="vi"
			suppressHydrationWarning
			className={cn("font-sans", inter.variable)}
		>
			<body className={`${inter.variable} ${notoSerif.variable}`}>
				<Providers>
					<Header />
					<main>{children}</main>
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
