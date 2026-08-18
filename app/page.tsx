import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import ContactForm from "@/components/ContactForm";
import HomepageProductGrid from "@/components/HomepageProductGrid";

export default function Home() {
	return (
		<>
			<div className="page-section" id="trang-chu">
				<section className="hero">
					<div className="wrap hero-grid">
						<div className="hero-copy">
							<div className="kicker">Hệ sinh thái đa ngành</div>
							<h1>
								Kiến tạo <span>trật tự an tâm.</span>
							</h1>
							<p className="lead">
								TDL kiến tạo một hệ sinh thái tích hợp giữa công
								nghệ, thương mại và vận hành. Mỗi quyết định
								phát triển đều được đặt trên nền tảng dữ liệu,
								hiệu quả tài chính và năng lực triển khai thực
								tế.
							</p>
							<div className="actions">
								<Link className="btn dark" href="#gioi-thieu">
									Tìm hiểu TDL
								</Link>
							</div>
							<div className="microstats">
								<div>
									<strong>06</strong>
									<span>Phân hệ chiến lược</span>
								</div>
								<div>
									<strong>1.200+</strong>
									<span>Khách hàng nền từng tiếp cận</span>
								</div>
								<div>
									<strong>B2B + B2C</strong>
									<span>Mô hình kết nối thị trường</span>
								</div>
							</div>
						</div>
						<div className="hero-art">
							<div className="vertical-word">THIÊN ĐĂNG LÊ</div>
							<div className="float-tag tag1">
								Minh bạch · Kỷ cương
							</div>
							<div className="logo-orbit">
								<Image
									src="/Logo_symbol.png"
									alt="Biểu tượng TDL"
									width={390}
									height={390}
									priority
								/>
							</div>
							<div className="float-tag tag2">
								Dữ liệu thật · Niềm tin thật
							</div>
						</div>
					</div>
				</section>

				<section className="section dark">
					<div className="wrap">
						<div className="head">
							<div>
								<div className="kicker">
									Kiến trúc hệ sinh thái
								</div>
								<h2>
									Một trung tâm điều phối. Sáu phân hệ chiến
									lược.
								</h2>
							</div>
							<p>
								Tóm tắt sáu phân hệ quanh thương hiệu mẹ TDL.
								Mỗi phân hệ giữ một vai trò chuyên biệt trong hệ
								giá trị chung.
							</p>
						</div>
						<div className="orbit">
							<div className="orbit-center">
								<Image
									src="/Logo_symbol.png"
									alt="TDL"
									width={158}
									height={158}
								/>
							</div>
							<div className="node n1">
								<Image
									className="node-logo"
									src="/hong-duc.webp"
									alt="Logo Hồng Đức"
									width={54}
									height={54}
								/>
								<b>Hồng Đức</b>
								<span>Văn hóa · kỷ cương · kiểm soát</span>
							</div>
							<div className="node n2">
								<Image
									className="node-logo"
									src="/hung-thinh.webp"
									alt="Logo Hưng & Thịnh"
									width={54}
									height={54}
								/>
								<b>Hưng &amp; Thịnh</b>
								<span>B2B · đại lý · phân phối</span>
							</div>
							<div className="node n3">
								<Image
									className="node-logo"
									src="/tam-an-viet.webp"
									alt="Logo Tâm An Việt"
									width={54}
									height={54}
								/>
								<b>Tâm An Việt</b>
								<span>B2C · bán lẻ · dịch vụ</span>
							</div>
							<div className="node n4">
								<Image
									className="node-logo"
									src="/long-hanh.webp"
									alt="Logo Long Hành"
									width={54}
									height={54}
								/>
								<b>Long Hành</b>
								<span>Vận tải · giao nhận</span>
							</div>
							<div className="node n5">
								<Image
									className="node-logo"
									src="/d-tech.webp"
									alt="Logo D-Tech"
									width={54}
									height={54}
								/>
								<b>D-Tech</b>
								<span>Phần mềm · dữ liệu · AI</span>
							</div>
							<div className="node n6">
								<Image
									className="node-logo"
									src="/anh-nhat.webp"
									alt="Logo Ánh Nhật"
									width={54}
									height={54}
								/>
								<b>Ánh Nhật</b>
								<span>Năng lượng sạch</span>
							</div>
						</div>
					</div>
				</section>

				<section className="section alt" id="san-pham-intro">
					<div className="wrap">
						<div className="head">
							<div>
								<div className="kicker">
									Ưu tiên giai đoạn 1
								</div>
								<h2>Bốn nhóm sản phẩm chủ lực.</h2>
							</div>
							<p>
								Phụ kiện &amp; linh kiện điện thoại — phù hợp
								kênh B2B và B2C. Mỗi nhóm được quản trị theo tồn
								kho, tốc độ luân chuyển và trách nhiệm bảo hành
								rõ ràng.
							</p>
						</div>
						<HomepageProductGrid />
						<div style={{ marginTop: 28, textAlign: "center" }}>
							<Link className="btn dark" href="/san-pham">
								Xem tất cả sản phẩm
							</Link>
						</div>
					</div>
				</section>
			</div>

			<div className="page-section" id="gioi-thieu">
				<section className="pagehero">
					<div className="wrap">
						<div className="crumb">TDL / Giới thiệu</div>
						<h1>
							Một doanh nghiệp thực chiến, được xây dựng cho giá
							trị dài hạn.
						</h1>
						<p>
							TDL được hình thành từ kinh nghiệm nhiều năm trong
							lĩnh vực kinh doanh sỉ tại Tây Nguyên, cùng nhu cầu
							xây dựng một mô hình vận hành minh bạch hơn, dựa
							trên dữ liệu và có khả năng tạo dựng niềm tin lâu
							dài.
						</p>
						<div className="split">
							<div>
								<div className="kicker">
									Vì sao TDL được hình thành
								</div>
								<h2 className="statement">
									Thị trường không chỉ cần thêm hàng hóa. Thị
									trường cần một{" "}
									<em>cách vận hành đáng tin</em>.
								</h2>
							</div>
							<div>
								<p>
									TDL không theo đuổi quy mô hình thức khi nền
									tảng chưa sẵn sàng. Doanh nghiệp ưu tiên xây
									dựng năng lực cốt lõi: phát triển doanh số
									bền vững, kiểm soát hàng hóa, bảo đảm thu
									hồi công nợ, chuẩn hóa dữ liệu và gìn giữ
									niềm tin của khách hàng, đối tác.
								</p>
								<p>
									TDL — Thiên Đăng Lê là thương hiệu mẹ định
									hướng hệ sinh thái. Trong giai đoạn đầu,
									doanh nghiệp vận hành theo mô hình một pháp
									nhân trung tâm (đang hoàn tất thủ tục đăng
									ký) và tổ chức các phân hệ như đơn vị chiến
									lược chuyên biệt để tối ưu nguồn lực, bảo
									đảm tính nhất quán trong quản trị.
								</p>
							</div>
						</div>
					</div>
				</section>

				<section className="section alt">
					<div className="wrap">
						<div className="head">
							<div>
								<div className="kicker">
									Tuyên ngôn định hướng
								</div>
								<h2 className="statement">
									&ldquo;Dùng ánh sáng của <em>minh bạch</em>{" "}
									để tạo trật tự. Thiết lập kỷ cương, phân
									quyền và cơ chế kiểm soát để bảo vệ niềm
									tin.&rdquo;
								</h2>
							</div>
							<p>
								TDL hướng đến sự thịnh vượng có nền tảng, được
								tạo nên từ hàng hóa thật, khách hàng thật, dữ
								liệu thật, dòng tiền thật và niềm tin thật.
							</p>
						</div>
						<div className="values">
							<div className="value">
								<b>Minh bạch</b>
								<span>
									Thông tin, giá, chính sách và trách nhiệm
									được công khai, lưu vết và có thể đối soát.
								</span>
							</div>
							<div className="value">
								<b>Kỷ cương</b>
								<span>
									Mọi bước mở rộng phải đi cùng tiêu chuẩn vận
									hành, phân quyền và cơ chế chịu trách nhiệm
									rõ ràng.
								</span>
							</div>
							<div className="value">
								<b>Zero Trust</b>
								<span>
									Các giao dịch, dữ liệu và quyền hạn trọng
									yếu được xác thực theo nguyên tắc Zero
									Trust.
								</span>
							</div>
							<div className="value">
								<b>Thực chiến</b>
								<span>
									Ưu tiên hiệu quả kinh doanh thực tế: dòng
									tiền, hàng hóa, khách hàng và chất lượng vận
									hành.
								</span>
							</div>
						</div>
					</div>
				</section>
			</div>

			<div className="page-section" id="lien-he">
				<section className="pagehero">
					<div className="wrap">
						<div className="crumb">TDL / Liên hệ</div>
						<h1>
							Khởi đầu một cuộc trao đổi minh bạch và hướng đến
							giá trị thực.
						</h1>
						<p>
							TDL trân trọng cơ hội hợp tác với khách hàng, đại
							lý, nhà cung cấp, đối tác công nghệ và các cộng sự
							cùng chia sẻ định hướng phát triển minh bạch, có
							trách nhiệm và bền vững.
						</p>
					</div>
				</section>

				<section className="section alt">
					<div className="wrap contact-grid">
						<aside className="contact-panel">
							<div className="kicker">Đầu mối liên hệ</div>
							<h2>Liên hệ và hợp tác cùng TDL.</h2>
							<p>
								Các trao đổi chính thức được thực hiện qua thư
								điện tử thuộc tên miền @thiendangle.com.{" "}
								<b>TDL</b> là thương hiệu giới thiệu;
							</p>
							<div className="contact-list">
								<div>
									<b>Kinh doanh &amp; đối tác</b>
									<br />
									<a href="mailto:info@thiendangle.com">
										info@thiendangle.com
									</a>
								</div>
								<div>
									<b>Hỗ trợ sau bán</b>
									<br />
									<a href="mailto:support@thiendangle.com">
										support@thiendangle.com
									</a>
								</div>
								<div>
									<b>Website chính thức</b>
									<br />
									thiendangle.com
								</div>
							</div>
						</aside>
						<Suspense fallback={null}>
							<ContactForm />
						</Suspense>
					</div>
				</section>
			</div>
		</>
	);
}
