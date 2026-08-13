"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useGetProductFilters, useGetProducts } from "@/api/queries/products";
import type { WebsiteProductParams } from "@/types/products";

const FALLBACK_IMAGE = "/tin-phu-kien.png";

function productTag(product: {
	status_label?: string;
	category?: { label: string } | null;
	product_group?: { label: string } | null;
}) {
	return (
		product.category?.label ||
		product.product_group?.label ||
		product.status_label ||
		"Sản phẩm"
	);
}

export default function ProductCatalog() {
	const [searchInput, setSearchInput] = useState("");
	const [debouncedSearch, setDebouncedSearch] = useState("");
	const [categoryId, setCategoryId] = useState<number | undefined>();
	const [productGroupId, setProductGroupId] = useState<number | undefined>();

	useEffect(() => {
		const timer = window.setTimeout(
			() => setDebouncedSearch(searchInput.trim()),
			300,
		);
		return () => window.clearTimeout(timer);
	}, [searchInput]);

	const queryParams = useMemo<WebsiteProductParams>(() => {
		const params: WebsiteProductParams = { limit: 50 };
		if (debouncedSearch) params.search = debouncedSearch;
		if (categoryId) params.category_id = categoryId;
		if (productGroupId) params.product_group_id = productGroupId;
		return params;
	}, [debouncedSearch, categoryId, productGroupId]);

	const { data: filtersRes, isLoading: filtersLoading } =
		useGetProductFilters();
	const {
		data: productsRes,
		isLoading: productsLoading,
		isError,
		error,
	} = useGetProducts(queryParams);

	const categories = filtersRes?.data?.categories ?? [];
	const productGroups = filtersRes?.data?.product_groups ?? [];
	const products = productsRes?.data ?? [];
	const total = productsRes?.pagination?.total ?? products.length;
	const loading = filtersLoading || productsLoading;

	function resetFilters() {
		setSearchInput("");
		setDebouncedSearch("");
		setCategoryId(undefined);
		setProductGroupId(undefined);
	}

	return (
		<div className="wrap catalog">
			<aside className="filters" aria-label="Bộ lọc sản phẩm">
				<h3>Bộ lọc</h3>

				<div className="filter-group">
					<label className="filter-label" htmlFor="product-search">
						Tìm kiếm
					</label>
					<input
						className="filter-search"
						id="product-search"
						type="search"
						placeholder="SKU, tên sản phẩm..."
						value={searchInput}
						onChange={(e) => setSearchInput(e.target.value)}
					/>
				</div>

				<div className="filter-group">
					<span className="filter-label">Danh mục</span>
					<div className="filter-options">
						<button
							type="button"
							className={categoryId === undefined ? "active" : ""}
							onClick={() => setCategoryId(undefined)}
						>
							Tất cả
						</button>
						{categories.map((item) => (
							<button
								key={item.id}
								type="button"
								className={
									categoryId === item.id ? "active" : ""
								}
								onClick={() => setCategoryId(item.id)}
							>
								{item.label}
							</button>
						))}
					</div>
				</div>

				<div className="filter-group">
					<span className="filter-label">Nhóm sản phẩm</span>
					<div className="filter-options">
						<button
							type="button"
							className={
								productGroupId === undefined ? "active" : ""
							}
							onClick={() => setProductGroupId(undefined)}
						>
							Tất cả
						</button>
						{productGroups.map((item) => (
							<button
								key={item.id}
								type="button"
								className={
									productGroupId === item.id ? "active" : ""
								}
								onClick={() => setProductGroupId(item.id)}
							>
								{item.label}
							</button>
						))}
					</div>
				</div>

				<button
					type="button"
					className="btn ghost filter-reset"
					onClick={resetFilters}
				>
					Xóa bộ lọc
				</button>
			</aside>

			<div className="catalog-main">
				<div className="list-toolbar">
					<p>
						{loading ? (
							<>Đang tải danh sách sản phẩm...</>
						) : (
							<>
								Hiển thị <strong>{products.length}</strong> /{" "}
								<span>{total}</span> sản phẩm
							</>
						)}
					</p>
				</div>

				{isError && (
					<div className="empty-state show">
						<strong>Không tải được danh sách sản phẩm</strong>
						{/* {(error as Error)?.message || "Vui lòng thử lại sau."} */}
					</div>
				)}

				{!isError && (
					<div className="product-list">
						{products.map((product) => (
							<article key={product.id} className="product-row">
								<div className="thumb">
									<Image
										src={
											product.thumbnail || FALLBACK_IMAGE
										}
										alt={product.name}
										width={400}
										height={300}
										loading="lazy"
										unoptimized={Boolean(
											product.thumbnail?.startsWith(
												"http",
											),
										)}
									/>
								</div>
								<div className="body">
									<span className="tag">
										{productTag(product)}
									</span>
									<h3>{product.name}</h3>
									{product.sku && (
										<p
											style={{
												margin: "6px 0 0",
												color: "var(--muted)",
												fontSize: "13px",
											}}
										>
											SKU: {product.sku}
										</p>
									)}
								</div>
								<div className="product-side">
									<span className="status-pill">
										{product.status_label}
									</span>
									<Link
										className="btn dark"
										href={`/?product_id=${product.id}#lien-he`}
									>
										Liên hệ
									</Link>
								</div>
							</article>
						))}
					</div>
				)}

				<div
					className={`empty-state${!loading && !isError && products.length === 0 ? " show" : ""}`}
				>
					<strong>Không có sản phẩm phù hợp</strong>
					Không tìm thấy mã hàng với bộ lọc hiện tại. Thử xóa bộ lọc
					hoặc đổi từ khóa.
				</div>
			</div>
		</div>
	);
}
