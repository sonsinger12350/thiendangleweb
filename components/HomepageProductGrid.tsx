"use client";

import Image from "next/image";
import { useGetHomepageProducts } from "@/api/queries/products";
import type { Product } from "@/types/products";

const FALLBACK_IMAGE = "/tin-phu-kien.png";

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
	const items = data?.data ?? [];

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
		return null;
	}

	return (
		<div className="product-grid">
			{items.map((item) => {
				const product = item.product;
				if (!product) return null;

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
