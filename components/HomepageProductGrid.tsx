"use client";

import Image from "next/image";
import { useGetHomepageProducts } from "@/api/queries/products";
import type { Product } from "@/types/products";

const FALLBACK_IMAGE = "/tin-phu-kien.png";

const FALLBACK_PRODUCTS = [
	{
		src: "/cuong-luc-iphone.png",
		alt: "Cường lực điện thoại",
		tag: "Bảo vệ màn hình",
		title: "Cường lực điện thoại",
		description:
			"Kính cường lực các dòng điện thoại phổ biến — độ trong cao, viền ôm sát, chống xước và dễ lắp đặt.",
		meta: ["điện thoại", "Bán sỉ", "Luân chuyển nhanh"],
	},
	{
		src: "/bo-sac-iphone.png",
		alt: "Bộ sạc điện thoại",
		tag: "Sạc & cáp",
		title: "Bộ sạc điện thoại",
		description:
			"Củ sạc, cáp và bộ sạc đồng bộ. Ưu tiên hàng ổn định nguồn, đóng gói gọn, dễ đối soát tồn kho.",
		meta: ["USB-C / Lightning", "Đại lý", "Bảo hành rõ"],
	},
	{
		src: "/pin-iphone.png",
		alt: "Pin điện thoại",
		tag: "Linh kiện",
		title: "Pin điện thoại",
		description:
			"Pin thay thế theo từng đời máy. Tập trung hàng có nguồn gốc rõ và quy trình bảo hành phù hợp cửa hàng sửa chữa.",
		meta: ["Thay thế", "Sửa chữa", "Đối soát mã"],
	},
	{
		src: "/man-hinh-iphone.png",
		alt: "Màn hình điện thoại",
		tag: "Linh kiện",
		title: "Màn hình điện thoại",
		description:
			"Màn hình thay thế phân nhóm theo chất lượng hiển thị, kèm chính sách đổi trả minh bạch cho đại lý.",
		meta: ["OLED / LCD", "B2B", "Hỗ trợ kỹ thuật"],
	},
] as const;

function FallbackProductGrid() {
	return (
		<div className="product-grid">
			{FALLBACK_PRODUCTS.map((item) => (
				<article key={item.title} className="product-card">
					<div className="thumb">
						<Image
							src={item.src}
							alt={item.alt}
							width={600}
							height={450}
						/>
					</div>
					<div className="body">
						<span className="tag">{item.tag}</span>
						<h3>{item.title}</h3>
						<p>{item.description}</p>
						<div className="product-meta">
							{item.meta.map((label) => (
								<span key={label}>{label}</span>
							))}
						</div>
					</div>
				</article>
			))}
		</div>
	);
}

function productTag(product: Product) {
	return (
		product.category?.label ||
		product.product_group?.label ||
		product.status_label ||
		"Sản phẩm"
	);
}

function productMeta(product: Product) {
	return [
		product.brand?.label,
		product.category?.label,
		product.product_group?.label,
	].filter((label, index, list): label is string => {
		return Boolean(label) && list.indexOf(label) === index;
	});
}

export default function HomepageProductGrid() {
	const { data, isLoading, isError } = useGetHomepageProducts();
	const items = (data?.data ?? []).filter((item) => item.product);

	if (isLoading) {
		return (
			<div className="product-grid">
				<p style={{ color: "var(--muted)", margin: 0 }}>
					Đang tải sản phẩm...
				</p>
			</div>
		);
	}

	if (isError || items.length === 0) {
		return <FallbackProductGrid />;
	}

	return (
		<div className="product-grid">
			{items.map((item) => {
				const product = item.product;
				const description = item.description || product.description;
				const meta = productMeta(product);

				return (
					<article key={item.id} className="product-card">
						<div className="thumb">
							<Image
								src={product.thumbnail || FALLBACK_IMAGE}
								alt={product.name}
								width={600}
								height={450}
								unoptimized={Boolean(
									product.thumbnail?.startsWith("http"),
								)}
							/>
						</div>
						<div className="body">
							<span className="tag">{productTag(product)}</span>
							<h3>{product.name}</h3>
							{description && <p>{description}</p>}
							{meta.length > 0 && (
								<div className="product-meta">
									{meta.map((label) => (
										<span key={label}>{label}</span>
									))}
								</div>
							)}
						</div>
					</article>
				);
			})}
		</div>
	);
}
