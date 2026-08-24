"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useGetProductFilters, useGetProducts } from "@/api/queries/products";
import type { ApiResponse } from "@/types";
import type {
	Product,
	ProductFilters,
	WebsiteProductParams,
} from "@/types/products";
import { PRODUCT_PAGE_SIZE } from "@/lib/pagination";

const FALLBACK_IMAGE = "/tin-phu-kien.png";
const PAGE_SIZE = PRODUCT_PAGE_SIZE;

function getPageItems(
	current: number,
	last: number,
): Array<number | "ellipsis"> {
	if (last <= 7) {
		return Array.from({ length: last }, (_, i) => i + 1);
	}

	const items: Array<number | "ellipsis"> = [1];
	const start = Math.max(2, current - 1);
	const end = Math.min(last - 1, current + 1);

	if (start > 2) items.push("ellipsis");
	for (let i = start; i <= end; i++) items.push(i);
	if (end < last - 1) items.push("ellipsis");
	items.push(last);

	return items;
}

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

function formatVnd(price: string | number | null | undefined): string | null {
	const value = Number(price);
	if (!Number.isFinite(value) || value <= 0) return null;

	return new Intl.NumberFormat("vi-VN", {
		style: "currency",
		currency: "VND",
		maximumFractionDigits: 0,
	}).format(value);
}

type ProductCatalogProps = {
	initialProducts?: ApiResponse<Product[]>;
	initialFilters?: ApiResponse<ProductFilters>;
};

export default function ProductCatalog({
	initialProducts,
	initialFilters,
}: ProductCatalogProps) {
	const [searchInput, setSearchInput] = useState("");
	const [debouncedSearch, setDebouncedSearch] = useState("");
	const [categoryId, setCategoryId] = useState<number | undefined>();
	const [productGroupId, setProductGroupId] = useState<number | undefined>();
	const [page, setPage] = useState(1);
	const [filtersOpen, setFiltersOpen] = useState(false);

	useEffect(() => {
		const timer = window.setTimeout(
			() => setDebouncedSearch(searchInput.trim()),
			300,
		);
		return () => window.clearTimeout(timer);
	}, [searchInput]);

	const queryParams = useMemo<WebsiteProductParams>(() => {
		const params: WebsiteProductParams = { page, limit: PAGE_SIZE };
		if (debouncedSearch) params.search = debouncedSearch;
		if (categoryId) params.category_id = categoryId;
		if (productGroupId) params.product_group_id = productGroupId;
		return params;
	}, [debouncedSearch, categoryId, productGroupId, page]);

	const { data: filtersRes, isLoading: filtersLoading } =
		useGetProductFilters(initialFilters);
	const {
		data: productsRes,
		isLoading: productsLoading,
		isError,
	} = useGetProducts(
		queryParams,
		page === 1 &&
			!debouncedSearch &&
			!categoryId &&
			!productGroupId
			? initialProducts
			: undefined,
	);

	const categories = filtersRes?.data?.categories ?? [];
	const productGroups = filtersRes?.data?.product_groups ?? [];
	const products = productsRes?.data ?? [];
	const pagination = productsRes?.pagination ?? productsRes?.meta;
	const total = pagination?.total ?? products.length;
	const currentPage = pagination?.current_page ?? page;
	const lastPage = Math.max(1, pagination?.last_page ?? 1);
	const from =
		pagination?.from ??
		(products.length ? (currentPage - 1) * PAGE_SIZE + 1 : 0);
	const to =
		pagination?.to ??
		(products.length ? (currentPage - 1) * PAGE_SIZE + products.length : 0);
	const loading = filtersLoading || productsLoading;
	const showPagination = !isError && lastPage > 1;
	const activeFilterCount = [
		searchInput.trim(),
		categoryId,
		productGroupId,
	].filter(Boolean).length;

	function resetFilters() {
		setSearchInput("");
		setDebouncedSearch("");
		setCategoryId(undefined);
		setProductGroupId(undefined);
		setPage(1);
	}

	function goToPage(nextPage: number) {
		const clamped = Math.min(Math.max(1, nextPage), lastPage);
		if (clamped === page) return;
		setPage(clamped);
		document
			.querySelector(".catalog-main")
			?.scrollIntoView({ behavior: "smooth", block: "start" });
	}

	return (
		<div className="wrap catalog">
			<aside
				className={`filters${filtersOpen ? " is-open" : ""}`}
				aria-label="Bộ lọc sản phẩm"
			>
				<button
					type="button"
					className="filters-toggle"
					aria-expanded={filtersOpen}
					aria-controls="product-filters"
					onClick={() => setFiltersOpen((open) => !open)}
				>
					<span>
						Bộ lọc
						{activeFilterCount > 0 && (
							<small>{activeFilterCount}</small>
						)}
					</span>
					<span className="filters-chevron" aria-hidden>
						<svg
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M4 6l4 4 4-4"
								stroke="currentColor"
								strokeWidth="1.6"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</span>
				</button>
				<h3 className="filters-title">Bộ lọc</h3>

				<div className="filters-body" id="product-filters">
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
							onChange={(e) => {
								setSearchInput(e.target.value);
								setPage(1);
							}}
						/>
					</div>

					<div className="filter-group">
						<span className="filter-label">Danh mục</span>
						<div className="filter-options">
							<button
								type="button"
								className={
									categoryId === undefined ? "active" : ""
								}
								onClick={() => {
									setCategoryId(undefined);
									setPage(1);
								}}
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
									onClick={() => {
										setCategoryId(item.id);
										setPage(1);
									}}
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
								onClick={() => {
									setProductGroupId(undefined);
									setPage(1);
								}}
							>
								Tất cả
							</button>
							{productGroups.map((item) => (
								<button
									key={item.id}
									type="button"
									className={
										productGroupId === item.id
											? "active"
											: ""
									}
									onClick={() => {
										setProductGroupId(item.id);
										setPage(1);
									}}
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
				</div>
			</aside>

			<div className="catalog-main">
				<div className="list-toolbar">
					<p>
						{loading ? (
							<>Đang tải danh sách sản phẩm...</>
						) : (
							<>
								Hiển thị{" "}
								<strong>
									{from}-{to}
								</strong>{" "}
								/ <span>{total}</span> sản phẩm
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
						{products.map((product) => {
							const formattedPrice = formatVnd(product.price);

							return (
								<article
									key={product.id}
									className="product-row"
								>
									<div className="thumb">
										<Image
											src={
												product.thumbnail ||
												FALLBACK_IMAGE
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
										{/* <span className="status-pill">
										{product.status_label}
									</span> */}
										{formattedPrice ? (
											<span className="product-price">
												{formattedPrice}
											</span>
										) : (
											<Link
												className="btn dark"
												href={`/?product_id=${product.id}#lien-he`}
											>
												Liên hệ
											</Link>
										)}
									</div>
								</article>
							);
						})}
					</div>
				)}

				<div
					className={`empty-state${!loading && !isError && products.length === 0 ? " show" : ""}`}
				>
					<strong>Không có sản phẩm phù hợp</strong>
					Không tìm thấy mã hàng với bộ lọc hiện tại. Thử xóa bộ lọc
					hoặc đổi từ khóa.
				</div>

				{showPagination && (
					<nav
						className="pagination"
						aria-label="Phân trang sản phẩm"
					>
						<button
							type="button"
							className="pagination-nav"
							aria-label="Trang trước"
							disabled={currentPage <= 1 || productsLoading}
							onClick={() => goToPage(currentPage - 1)}
						>
							&lt;
						</button>
						<div className="pagination-pages">
							{getPageItems(currentPage, lastPage).map(
								(item, index) =>
									item === "ellipsis" ? (
										<span
											key={`ellipsis-${index}`}
											className="pagination-ellipsis"
										>
											…
										</span>
									) : (
										<button
											key={item}
											type="button"
											className={
												item === currentPage
													? "active"
													: ""
											}
											aria-current={
												item === currentPage
													? "page"
													: undefined
											}
											disabled={productsLoading}
											onClick={() => goToPage(item)}
										>
											{item}
										</button>
									),
							)}
						</div>
						<button
							type="button"
							className="pagination-nav"
							aria-label="Trang sau"
							disabled={
								currentPage >= lastPage || productsLoading
							}
							onClick={() => goToPage(currentPage + 1)}
						>
							&gt;
						</button>
					</nav>
				)}
			</div>
		</div>
	);
}
