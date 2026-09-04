import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import ContactForm from "@/components/ContactForm";
import HomepageProductGrid from "@/components/HomepageProductGrid";
import { JsonLdScript } from "@/lib/seo/json-ld-script";
import { resolveLandingSeo } from "@/lib/seo/resolvers";

export default function Home() {
	const seo = resolveLandingSeo();

	return (
		<>
			<JsonLdScript seo={seo} />
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
								nghệ, thương mại và vận hành. Mỗi bước phát
								triển đều dựa trên sự rõ ràng và năng lực thực
								tế, với mục tiêu mang đến những sản phẩm dịch vụ
								tốt hơn để phụng sự người Việt
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
									src="/logo/Logo_symbol.webp"
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
									src="/logo/Logo_symbol.webp"
									alt="TDL"
									width={158}
									height={158}
								/>
							</div>
							<div className="node n1">
								<Image
									className="node-logo"
									src="/logo/hong-duc.jpg"
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
									src="/logo/hung-thinh.jpg"
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
									src="/logo/tam-an-viet.jpg"
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
									src="/logo/long-hanh.jpg"
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
									src="/logo/d-tech.jpg"
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
									src="/logo/anh-nhat.jpg"
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
						<h2 className="pagehero-title">
							Một doanh nghiệp thực chiến, được xây dựng cho giá
							trị dài hạn.
						</h2>
						<p style={{ textAlign: "justify" }}>
							Từ nhiều năm gắn bó với đối tác và tiếp xúc nhu cầu
							tiêu dùng của người Việt với mạng lưới kinh doanh
							tại Tây Nguyên, TDL ra đời không chỉ để bán hàng.
							Chúng tôi muốn xây dựng hệ thống kinh doanh rõ ràng
							hơn, thực tế hơn để giữ niềm tin của mọi đối tác và
							khách hàng trong chặng đường dài.
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
								<p style={{ textAlign: "justify" }}>
									Thay vì vội vã mở rộng phô trương, TDL chọn
									đi từng bước thật vững vàng. Chúng tôi ưu
									tiên xây dựng nền móng bền chặt: giữ nguồn
									hàng chất lượng, nguồn gốc rõ ràng, giá
									thành đúng với giá trị mang lại nhằm đảm bảo
									lợi ích, uy tín, hậu mãi công bằng cho đại
									lý, và giao dịch minh bạch để bảo vệ quyền
									lợi, niềm tin người tiêu dùng. TDL hoạt động
									như một hệ sinh thái thống nhất. Mỗi bộ phận
									bên trong dù đảm nhận vai trò khác nhau,
									nhưng đều hướng về một nguyên tắc: rõ ràng
									mọi thông tin và tận tâm phụng sự người
									Việt.
								</p>
								<p style={{ textAlign: "justify" }}>
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
								<h2
									className="statement"
									style={{ textAlign: "justify" }}
								>
									&ldquo;Dùng ánh sáng của <em>minh bạch</em>{" "}
									để tạo trật tự. Dùng công nghệ để kết nối
									thị trường. Dùng kỷ cương để giữ niềm tin.
									Dùng sản phẩm và dịch vụ tốt hơn để phụng sự
									người Việt.&rdquo;
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
								<b>Minh bạch thông tin</b>
								<span>
									Mọi chính sách, giá cả và nguồn gốc hàng hóa
									đều được công khai rõ ràng, bảo vệ quyền lợi
									tối đa cho đại lý và người tiêu dùng.
								</span>
							</div>
							<div className="value">
								<b>Giữ vững kỷ cương</b>
								<span>
									Làm đúng cam kết, chịu trách nhiệm đến cùng.
									Mở rộng đến đâu, chất lượng phục vụ và sự an
									tâm phải được đảm bảo đến đó.
								</span>
							</div>
							<div className="value">
								<b>Niềm tin kiểm chứng</b>
								<span>
									Chúng tôi không hoạt động dựa trên lời hứa
									suông. Mọi giao dịch, thông tin đều được dựa
									trên dữ liệu thực tế và có kiểm chứng rõ
									ràng.
								</span>
							</div>
							<div className="value">
								<b>Giá trị thực chiến</b>
								<span>
									Tập trung vào hiệu quả thực tế: mang lại
									dòng tiền ổn định cho đối tác, và cung cấp
									sản phẩm có giá trị thật cho người dùng
									cuối.
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
						<h2 className="pagehero-title">
							Bắt đầu mọi sự kết nối bằng sự rõ ràng và giá trị
							thực.
						</h2>
						<p>
							TDL luôn trân trọng mọi cơ hội đồng hành cùng các
							đại lý, nhà cung cấp và khách hàng. Chúng tôi tìm
							kiếm những cộng sự đề cao trách nhiệm trong kinh
							doanh cùng nhau lấy chữ &quot;Tâm&quot; làm gốc để
							trao gửi những giá trị thiết thực đến người tiêu
							dùng Việt.
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
								<b>TDL</b> là thương hiệu giới thiệu.
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
