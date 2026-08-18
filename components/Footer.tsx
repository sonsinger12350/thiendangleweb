import Image from "next/image";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="footer">
			<div className="wrap">
				<div className="footgrid">
					<div>
						<Link className="brand" href="/#trang-chu">
							<Image
								src="/Logo_symbol.png"
								alt="Logo TDL"
								width={54}
								height={54}
							/>
							<span>
								TDL — THIÊN ĐĂNG LÊ
								<small>Kiến tạo trật tự an tâm</small>
							</span>
						</Link>
						<p>
							Hệ sinh thái công nghệ – thương mại – vận hành đa
							ngành. Giai đoạn đầu ưu tiên phụ kiện điện thoại;
							điện gia dụng đang chuẩn bị.
						</p>
					</div>
					<div>
						<h4>Khám phá</h4>
						<Link href="/#gioi-thieu">Giới thiệu</Link>
						<Link href="/san-pham">Sản phẩm</Link>
						<Link href="/tin-tuc">Tin tức</Link>
					</div>
					<div>
						<h4>Phân hệ</h4>
						<Link href="/#trang-chu">Hồng Đức</Link>
						<Link href="/#trang-chu">Hưng &amp; Thịnh</Link>
						<Link href="/#trang-chu">Tâm An Việt</Link>
						<Link href="/#trang-chu">Long Hành</Link>
						<Link href="/#trang-chu">D-Tech</Link>
						<Link href="/#trang-chu">Ánh Nhật</Link>
					</div>
					<div>
						<h4>Liên hệ</h4>
						<a href="mailto:info@thiendangle.com">
							info@thiendangle.com
						</a>
						<a href="mailto:support@thiendangle.com">
							support@thiendangle.com
						</a>
						<p>thiendangle.com</p>
						<p
							style={{
								marginTop: 10,
								fontSize: 12,
								opacity: 0.85,
							}}
						>
							Thương hiệu TDL — pháp nhân đang hoàn tất đăng ký.
						</p>
					</div>
				</div>
				<div className="copy">© 2026 TDL — Thiên Đăng Lê.</div>
			</div>
		</footer>
	);
}
