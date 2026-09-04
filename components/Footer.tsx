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
								src="/logo/Logo_symbol.webp"
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
							ngành.
						</p>
						<div className="footer-legal">
							<p>
								<strong>Tên pháp nhân:</strong> CÔNG TY TNHH
								CÔNG NGHỆ & THƯƠNG MẠI THIÊN ĐĂNG LÊ
							</p>
							<p>
								<strong>Người đại diện:</strong> Lê Duy Phước
							</p>
							<p>
								<strong>Mã số thuế (MST):</strong> 6001844310
							</p>
							<p>
								<strong>Địa chỉ trụ sở:</strong> Số 107/68/41
								Nguyễn Phúc Chu, Phường Thành Nhất, Tỉnh Đắk
								Lắk, Việt Nam
							</p>
							<p>
								<strong>Hotline:</strong> 0868861369
							</p>
						</div>
					</div>
					<div>
						<h2>Khám phá</h2>
						<Link href="/#gioi-thieu">Giới thiệu</Link>
						<Link href="/san-pham">Sản phẩm</Link>
						<Link href="/tin-tuc">Tin tức</Link>
						<Link href="/dong-hanh-hung-thinh">
							Đồng hành hưng thịnh
						</Link>
					</div>
					<div>
						<h2>Phân hệ</h2>
						<Link href="/#trang-chu">Hồng Đức</Link>
						<Link href="/#trang-chu">Hưng &amp; Thịnh</Link>
						<Link href="/#trang-chu">Tâm An Việt</Link>
						<Link href="/#trang-chu">Long Hành</Link>
						<Link href="/#trang-chu">D-Tech</Link>
						<Link href="/#trang-chu">Ánh Nhật</Link>
					</div>
					<div>
						<h2>Liên hệ</h2>
						<a href="mailto:info@thiendangle.com">
							info@thiendangle.com
						</a>
						<a href="mailto:support@thiendangle.com">
							support@thiendangle.com
						</a>
						<p>thiendangle.com</p>
					</div>
				</div>
				<div className="copy">© 2026 TDL — Thiên Đăng Lê.</div>
			</div>
		</footer>
	);
}
