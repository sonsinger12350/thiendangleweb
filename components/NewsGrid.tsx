"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const categories = [
	{ id: "all", label: "Tất cả" },
	{ id: "san-pham", label: "Sản phẩm" },
	{ id: "doanh-nghiep", label: "Doanh nghiệp" },
	{ id: "van-hanh", label: "Vận hành" },
	{ id: "lo-trinh", label: "Lộ trình" },
	{ id: "thi-truong", label: "Thị trường" },
];

const articles = [
	{
		category: "san-pham",
		featured: true,
		image: "/tin-phu-kien.png",
		imageAlt: "Danh mục phụ kiện điện thoại",
		date: "02 / 08 / 2026",
		tag: "Sản phẩm",
		title: "TDL ưu tiên giai đoạn đầu: phụ kiện điện thoại — cường lực, bộ sạc, pin và màn hình",
		excerpt:
			"Hướng đi lõi dựa trên kinh nghiệm kinh doanh sỉ tại Tây Nguyên — tập trung nhóm hàng có nhu cầu thật, tốc độ luân chuyển phù hợp và dễ đối soát tồn kho. Điện gia dụng và các lĩnh vực mở rộng đang ở trạng thái chuẩn bị.",
		link: "/san-pham",
		linkText: "Xem danh mục sản phẩm →",
	},
	{
		category: "doanh-nghiep",
		image: "/tin-he-sinh-thai.png",
		imageAlt: "Hệ sinh thái TDL",
		date: "18 / 07 / 2026",
		tag: "Doanh nghiệp",
		title: "Website giới thiệu hệ sinh thái đa ngành chính thức ra mắt",
		excerpt:
			"TDL công bố giao diện giới thiệu sáu phân hệ chiến lược và nguyên tắc phát triển theo mức độ sẵn sàng.",
		link: "/#trang-chu",
		linkText: "Đọc thêm →",
	},
	{
		category: "van-hanh",
		image: "/tin-minh-bach.png",
		imageAlt: "Chuẩn vận hành minh bạch",
		date: "05 / 07 / 2026",
		tag: "Vận hành",
		title: "Chuẩn Hồng Đức: minh bạch, kỷ cương và Zero Trust",
		excerpt:
			"Phân hệ văn hóa – kiểm soát được xác lập làm lõi chung cho toàn hệ sinh thái, bảo đảm phân quyền và dữ liệu đối soát được.",
		link: "/#trang-chu",
		linkText: "Đọc thêm →",
	},
	{
		category: "lo-trinh",
		image: "/tin-van-hanh.png",
		imageAlt: "Lộ trình vận hành",
		date: "22 / 06 / 2026",
		tag: "Lộ trình",
		title: "Mở rộng logistics và năng lượng theo điều kiện sẵn sàng",
		excerpt:
			"Long Hành và Ánh Nhật chỉ kích hoạt khi đủ pháp lý, đối tác, nguồn lực và mô hình doanh thu bền vững.",
		link: "/#trang-chu",
		linkText: "Đọc thêm →",
	},
	{
		category: "thi-truong",
		image: "/cuong-luc-iphone.png",
		imageAlt: "Cường lực điện thoại",
		date: "10 / 06 / 2026",
		tag: "Thị trường",
		title: "Tái kết nối mạng lưới đại lý phụ kiện điện thoại tại Tây Nguyên",
		excerpt:
			"Rà soát tệp khách hàng nền khoảng 1.200 điểm từng tiếp cận, ưu tiên hợp tác dài hạn trên chính sách giá rõ ràng.",
		link: "/#lien-he",
		linkText: "Liên hệ hợp tác →",
	},
	{
		category: "san-pham",
		image: "/bo-sac-iphone.png",
		imageAlt: "Chính sách bảo hành phụ kiện",
		date: "28 / 05 / 2026",
		tag: "Sản phẩm",
		title: "Chuẩn hóa chính sách bảo hành cho cường lực, bộ sạc, pin và màn hình",
		excerpt:
			"Mỗi nhóm hàng gắn điều kiện đổi trả, thời hạn hỗ trợ và quy trình đối soát mã — giúp đại lý và cửa hàng sửa chữa vận hành rõ ràng hơn.",
		link: "/san-pham",
		linkText: "Xem danh mục →",
	},
	{
		category: "van-hanh",
		image: "/tin-he-sinh-thai.png",
		imageAlt: "Dữ liệu tồn kho và công nợ",
		date: "12 / 05 / 2026",
		tag: "Vận hành",
		title: "D-Tech hỗ trợ theo dõi tồn kho và công nợ theo từng điểm bán",
		excerpt:
			"Ưu tiên số liệu thật: nhập – xuất – tồn, hạn mức tín dụng và cảnh báo chậm thu, làm nền cho mở rộng phân phối có kiểm soát.",
		link: "/#trang-chu",
		linkText: "Đọc thêm →",
	},
];

export default function NewsGrid() {
	const [activeCat, setActiveCat] = useState("all");

	const visible = articles.filter(
		(article) => activeCat === "all" || article.category === activeCat,
	);

	return (
		<>
			<div className="news-cats" role="tablist" aria-label="Danh mục bài viết">
				{categories.map((cat) => (
					<button
						key={cat.id}
						type="button"
						className={activeCat === cat.id ? "active" : ""}
						role="tab"
						aria-selected={activeCat === cat.id}
						onClick={() => setActiveCat(cat.id)}
					>
						{cat.label}
					</button>
				))}
			</div>
			<div className="news-grid">
				{articles.map((article, i) => {
					const show = activeCat === "all" || article.category === activeCat;
					return (
						<article
							key={i}
							className={`news-card${article.featured ? " news-featured" : ""}`}
							hidden={!show}
						>
							<div className="thumb">
								<Image
									src={article.image}
									alt={article.imageAlt}
									width={800}
									height={450}
									loading="lazy"
								/>
							</div>
							<div className="body">
								<div className="meta">
									<span>{article.date}</span>
									<span>·</span>
									<span>{article.tag}</span>
								</div>
								<h3>{article.title}</h3>
								<p>{article.excerpt}</p>
								<Link className="more" href={article.link}>
									{article.linkText}
								</Link>
							</div>
						</article>
					);
				})}
				<div className={`news-empty${visible.length === 0 ? " show" : ""}`}>
					Không có bài viết trong danh mục này.
				</div>
			</div>
		</>
	);
}
