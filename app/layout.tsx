import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Providers from "@/components/Providers";
<<<<<<< Updated upstream
import { Inter, Noto_Serif } from "next/font/google";
=======
import BackToTop from "@/components/BackToTop";
>>>>>>> Stashed changes
import "./globals.css";
import { cn } from "@/lib/util";
import { rootLayoutMetadata } from "@/lib/seo/metadata";
import { resolveLandingSeo } from "@/lib/seo/resolvers";

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

export const metadata: Metadata = rootLayoutMetadata(resolveLandingSeo());

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html
			lang="vi"
			suppressHydrationWarning
			className={cn("font-sans", inter.variable)}
		>
			<body className={`${inter.variable} ${notoSerif.variable}`}>
				<a className="skip-link" href="#main-content">
					Bỏ qua nội dung điều hướng
				</a>
				<Providers>
					<Header />
					<main id="main-content">{children}</main>
					<Footer />
					<BackToTop />
				</Providers>
			</body>
		</html>
	);
}
