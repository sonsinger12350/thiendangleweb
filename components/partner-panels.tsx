import PartnerCta from "@/components/PartnerCta";
import { PARTNER_CONTACT_HREF, PARTNER_ZALO_HREF } from "@/lib/partner";

export function DealerPanel() {
	return (
		<div id="dai-ly">
			<section className="section">
				<div className="wrap">
					<div className="head">
						<div>
							<div className="kicker">Cam kết từ TDL</div>
							<h2>Bốn trụ cột đồng hành.</h2>
						</div>
						<p>
							Mỗi cam kết được thiết kế để đại lý kinh doanh vững
							vàng: pháp lý rõ, hậu mãi thật, dòng tiền khỏe và kỷ
							luật chung được bảo vệ.
						</p>
					</div>
					<div className="values">
						<div className="value">
							<b>An tâm pháp lý – Kinh doanh vững vàng</b>
							<span>
								Sự phát triển bền vững luôn phải được đặt trên
								nền tảng thượng tôn pháp luật. Mọi sản phẩm từ
								hệ sinh thái TDL đều đảm bảo 100% nguồn gốc xuất
								xứ, chứng nhận rõ ràng và được xuất hóa đơn điện
								tử minh bạch ngay tại thời điểm chuyển giao sản
								phẩm tới đại lý. Chúng tôi cam kết tất cả sản
								phẩm tới tay đại lý đã bao gồm 100% hóa đơn điện
								tử để bảo vệ sự an tâm pháp lý tuyệt đối cho cửa
								hàng của bạn, hướng tới sự an tâm hoàn toàn và
								thảnh thơi tập trung vào việc kinh doanh, phục
								vụ khách hàng.
							</span>
						</div>
						<div className="value">
							<b>
								Hậu mãi thực tế – Giữ trọn chữ &quot;Tín&quot;
							</b>
							<span>
								Chúng tôi hiểu đại lý là người trực tiếp đối
								diện với khách hàng. Mọi sản phẩm phát sinh lỗi
								từ nhà sản xuất đều được TDL giám định và đổi
								mới trực tiếp một cách nhanh chóng. Chúng tôi
								nhận phần rủi ro về mình, để bạn luôn là một đối
								tác uy tín, mang lại hậu mãi công bằng cho người
								tiêu dùng.
							</span>
						</div>
						<div className="value">
							<b>Xóa bỏ nỗi lo đọng vốn</b>
							<span>
								Thay vì ép đại lý ôm hàng phô trương, TDL ưu
								tiên xây dựng nền móng bền chặt cho dòng tiền
								của bạn. Những sản phẩm bán chậm sẽ được hệ
								thống hỗ trợ luân chuyển, đổi mới sang các mã
								hàng tương đương trong vòng{" "}
								<strong>60 ngày</strong>. Dòng tiền của bạn luôn
								được đảm bảo khỏe mạnh để sinh lời.
							</span>
						</div>
						<div className="value">
							<b>Giữ vững kỷ luật – Bảo vệ lợi ích chung</b>
							<span>
								Sự công bằng được bảo vệ bằng những quy tắc rõ
								ràng. TDL kiên quyết nói &quot;Không&quot; với
								hành vi bán phá giá, và tuyệt đối không để xảy
								ra tình trạng luồn hàng lấn chiếm khu vực kinh
								doanh của nhau. Mọi vi phạm đều bị xử lý có
								trách nhiệm để bảo vệ quyền lợi, uy tín và công
								sức của những đối tác kinh doanh chân chính.
							</span>
						</div>
					</div>
				</div>
			</section>

			<section className="section alt">
				<div className="wrap">
					<div className="split">
						<div>
							<div className="kicker">Không gian thăng hạng</div>
							<h2 className="statement">
								Sự gắn bó luôn được <em>ghi nhận xứng đáng</em>.
							</h2>
						</div>
						<div>
							<p>
								Mỗi bước đi vững vàng của bạn cùng TDL đều mang
								lại những giá trị tương xứng. Chúng tôi thiết kế
								những đặc quyền riêng biệt cho từng mức độ đồng
								hành: từ việc hỗ trợ toàn diện không gian trưng
								bày cao cấp (biển hiệu, tủ kệ LED) đến việc ưu
								tiên những nguồn hàng chất lượng nhất.
							</p>
							<p>
								Tại TDL, mọi chính sách chiết khấu trực tiếp và
								cơ chế hoàn thưởng đều được thiết kế với mục
								tiêu cốt lõi: tối ưu lợi nhuận cho đại lý. Tuy
								nhiên, để bảo vệ lợi thế cạnh tranh của bạn
								trước thị trường, toàn bộ đặc quyền này được bảo
								mật và cá nhân hóa.
							</p>
						</div>
					</div>
					<PartnerCta
						kicker="Kết nối đối tác"
						title="Khám phá quyền lợi riêng của bạn"
						body="Hãy mở Ứng dụng TDL hoặc kết nối trực tiếp với Quản lý khu vực để xác thực tài khoản đối tác. Cùng TDL bắt đầu chặng đường kinh doanh đề cao trách nhiệm và tận tâm phụng sự người Việt."
						actions={[
							{
								href: "",
								label: "Tải Ứng dụng TDL",
							},
							{
								href: "",
								label: "Nhắn tin Zalo Quản lý khu vực",
								variant: "ghost",
								external: true,
							},
						]}
					/>
				</div>
			</section>
		</div>
	);
}

export function SupplierPanel() {
	return (
		<div
			className="partner-panel"
			id="cung-ung"
			data-tab="cung-ung"
			role="tabpanel"
			aria-labelledby="tab-cung-ung"
		>
			<section className="section">
				<div className="wrap">
					<div className="head">
						<div>
							<div className="kicker">Đối tác cung ứng</div>
							<h2>
								Mở rộng thị trường cùng TDL: kênh phân phối minh
								bạch và uy tín.
							</h2>
						</div>
						<p>
							TDL tìm kiếm những đối tác cùng chung tầm nhìn về sự
							tử tế và trách nhiệm trong kinh doanh. Khi đồng
							hành, đối tác tiếp cận một kênh phân phối chuyên
							nghiệp, nhanh và minh bạch từ sỉ đến lẻ.
						</p>
					</div>
					<div className="head">
						<div>
							<div className="kicker">Tiêu chuẩn nguồn hàng</div>
							<h2>
								An tâm của đại lý và người tiêu dùng bắt đầu từ
								nguồn.
							</h2>
						</div>
						<p>
							TDL ưu tiên những đối tác đáp ứng đủ ba tiêu chuẩn
							cốt lõi trước khi hàng hóa vào hệ sinh thái.
						</p>
					</div>
					<div className="values">
						<div className="value">
							<b>Pháp lý minh bạch</b>
							<span>
								100% sản phẩm phải có hóa đơn hợp lệ, nguồn gốc
								rõ ràng và tuân thủ quy định hiện hành của Nhà
								nước Việt Nam.
							</span>
						</div>
						<div className="value">
							<b>Chất lượng thực chất</b>
							<span>
								Sản phẩm phải mang lại giá trị thật tương xứng
								với giá bán, kèm cam kết bảo hành và hậu mãi rõ
								ràng từ nhà sản xuất.
							</span>
						</div>
						<div className="value">
							<b>Bảo chứng thương hiệu &amp; Cam kết dài hạn</b>
							<span>
								TDL yêu cầu chính sách bảo chứng thương hiệu rõ
								ràng để bảo vệ hệ thống đại lý và người tiêu
								dùng khỏi đứt gãy nguồn cung, bảo đảm trách
								nhiệm hai phía và thị trường bền vững.
							</span>
						</div>
					</div>
				</div>
			</section>

			<section className="section alt">
				<div className="wrap">
					<div className="head">
						<div>
							<div className="kicker">Quyền lợi đồng hành</div>
							<h2>
								Quyền lợi khi đồng hành cùng hệ sinh thái TDL.
							</h2>
						</div>
						<p>
							TDL xây dựng quan hệ cung ứng sòng phẳng: thanh toán
							uy tín, độ phủ thị trường mạnh và phản hồi từ dữ
							liệu thật.
						</p>
					</div>
					<div className="cards">
						<article className="card">
							<span className="tag">Dòng tiền</span>
							<h3>Thanh toán uy tín</h3>
							<p>
								Điều khoản thanh toán minh bạch, dứt điểm, giúp
								đối tác an tâm tái đầu tư sản xuất mà không bị
								chiếm dụng vốn.
							</p>
						</article>
						<article className="card">
							<span className="tag">Phủ thị trường</span>
							<h3>Độ phủ thị trường mạnh mẽ</h3>
							<p>
								Qua trục phân phối B2B Hưng &amp; Thịnh và mạng
								lưới bán lẻ B2C Tâm An Việt, sản phẩm đến nhanh
								hàng nghìn điểm bán và người tiêu dùng cuối.
							</p>
						</article>
						<article className="card">
							<span className="tag">Dữ liệu thật</span>
							<h3>Phản hồi từ dữ liệu thực</h3>
							<p>
								Quyết định vận hành dựa trên dữ liệu. Nhà cung
								ứng nhận báo cáo tiêu thụ thực tế để điều chỉnh
								sản xuất và chiến lược cung ứng.
							</p>
						</article>
					</div>
					<PartnerCta
						kicker="Kết nối cung ứng"
						title="Trở thành mảnh ghép của hệ sinh thái TDL"
						body="Nếu bạn tự tin vào chất lượng sản phẩm và muốn xây dựng mạng lưới bền vững, hãy kết nối với chúng tôi."
						actions={[
							{
								href: PARTNER_CONTACT_HREF,
								label: "Gửi hồ sơ năng lực",
							},
							{
								href: PARTNER_ZALO_HREF,
								label: "Nhắn tin Zalo Bộ phận Thu mua",
								variant: "ghost",
								external: true,
							},
						]}
					/>
				</div>
			</section>
		</div>
	);
}

export function WarrantyPanel() {
	return (
		<div
			className="partner-panel"
			id="bao-hanh"
			data-tab="bao-hanh"
			role="tabpanel"
			aria-labelledby="tab-bao-hanh"
		>
			<section className="section">
				<div className="wrap">
					<div className="head">
						<div>
							<div className="kicker">Bảo hành &amp; Đổi trả</div>
							<h2>Trách nhiệm đến cùng – Xử lý tinh gọn.</h2>
						</div>
						<p>
							TDL hiểu rằng uy tín của đại lý phụ thuộc trực tiếp
							vào khâu hậu mãi. Chúng tôi không sử dụng các thủ
							tục rườm rà để đùn đẩy rủi ro. Chính sách của TDL
							được thiết kế để giải quyết vấn đề nhanh chóng, bảo
							vệ dòng tiền và uy tín tuyệt đối cho đối tác trước
							người tiêu dùng.
						</p>
					</div>
					<div className="partner-policies">
						<article className="partner-policy">
							<span className="tag">01</span>
							<h3>Bảo hành cơ bản: Lỗi là đổi</h3>
							<ul>
								<li>
									<strong>Nguyên tắc xử lý:</strong> Mọi sản
									phẩm phát sinh lỗi kỹ thuật từ nhà sản xuất
									đều được TDL tiếp nhận giám định và xử lý
									đổi mới trực tiếp ngay khi tiếp nhận sản
									phẩm lỗi một cách nhanh chóng, tránh ảnh
									hưởng tới doanh thu của đối tác tại thời
									điểm.
								</li>
								<li>
									<strong>Điều kiện hợp lệ:</strong> Sản phẩm
									còn nguyên vẹn tem/nhận diện nhãn hiệu được
									phân phối từ TDL và đang trong thời hạn bảo
									hành quy định.
								</li>
								<li>
									<strong>Trường hợp từ chối:</strong> TDL
									không áp dụng bảo hành đối với các lỗi hư
									hỏng vật lý phát sinh từ phía người sử dụng
									(rơi vỡ, móp méo, đứt gãy, vào nước hoặc sử
									dụng sai quy cách). Đặc biệt, TDL từ chối
									bảo hành đối với đối tác/nhân sự quản lý
									(của đối tác) cố ý gây khó khăn trong quá
									trình tiếp nhận kiểm kê sản phẩm lỗi, hoặc
									có hành vi giúp đỡ/hợp tác với các bên cạnh
									tranh của TDL nhằm trục lợi, khai thác thông
									tin kỹ thuật (thuộc phạm vi bảo mật công
									nghệ và thông số bản quyền).
								</li>
							</ul>
						</article>
						<article className="partner-policy">
							<span className="tag">02</span>
							<h3>Chính sách đổi hàng: Giải phóng đọng vốn</h3>
							<ul>
								<li>
									Trong vòng <strong>60 ngày</strong>, nếu sản
									phẩm chậm luân chuyển và không phân phối
									được ra thị trường, quý khách có quyền đổi
									sang các mã sản phẩm khác.
								</li>
								<li>
									Giá trị quy đổi được tính tương đương và
									được đối chiếu dựa trên đơn nhập sản phẩm đó
									từ thời gian lâu nhất trên hệ thống.
								</li>
								<li>
									<strong>Lưu ý:</strong> Chính sách hỗ trợ
									đổi trả này không áp dụng đối với các sản
									phẩm khuyến mãi hoặc sản phẩm tặng kèm.
								</li>
							</ul>
						</article>
						<article className="partner-policy">
							<span className="tag">03</span>
							<h3>
								Thích ứng thị trường: Minh bạch điều chỉnh giá
							</h3>
							<ul>
								<li>
									Trong các trường hợp bất khả kháng hoặc có
									sự thay đổi từ chính sách quản lý của Nhà
									nước (biến động giá nguyên vật liệu đầu vào,
									thuế quan tăng nhanh), TDL có thể tiến hành
									điều chỉnh đơn giá sản phẩm.
								</li>
								<li>
									TDL cam kết sẽ{" "}
									<strong>
										thông báo trước ít nhất 30 ngày
									</strong>{" "}
									dựa trên tình hình thực tế của thị trường,
									đảm bảo không làm ảnh hưởng tới doanh thu và
									biên lợi nhuận của quý khách.
								</li>
							</ul>
						</article>
						<article className="partner-policy">
							<span className="tag">04</span>
							<h3>Quy trình tiếp nhận tự động</h3>
							<ul>
								<li>
									Mọi thao tác báo lỗi, yêu cầu thu đổi hàng
									tồn và theo dõi tiến độ xử lý đều được số
									hóa minh bạch. Đối tác không cần mệt mỏi chờ
									đợi thủ tục giấy tờ, mà có thể thực hiện
									ngay lập tức qua nhân viên chăm sóc tuyến
									hoặc trực tiếp trên Ứng dụng TDL.
								</li>
							</ul>
						</article>
					</div>
					<PartnerCta
						kicker="Hậu mãi số hóa"
						title="Xử lý nhanh trên Ứng dụng TDL"
						body="Báo lỗi, đổi hàng tồn và theo dõi tiến độ được thực hiện trực tiếp, không chờ giấy tờ."
						actions={[
							{
								href: PARTNER_CONTACT_HREF,
								label: "Tải App TDL",
							},
							{
								href: PARTNER_CONTACT_HREF,
								label: "Tra cứu thời hạn bảo hành",
								variant: "ghost",
							},
						]}
					/>
				</div>
			</section>
		</div>
	);
}

export function PrivacyPanel() {
	return (
		<div
			className="partner-panel"
			id="bao-mat"
			data-tab="bao-mat"
			role="tabpanel"
			aria-labelledby="tab-bao-mat"
		>
			<section className="section">
				<div className="wrap">
					<div className="head">
						<div>
							<div className="kicker">Bảo mật thông tin</div>
							<h2>
								Bảo vệ dữ liệu – Tôn trọng quyền riêng tư và
								thượng tôn pháp luật.
							</h2>
						</div>
						<p>
							TDL xem dữ liệu khách hàng và dữ liệu kinh doanh là
							tài sản vô giá. Mọi hoạt động thu thập, lưu trữ và
							xử lý trong hệ sinh thái TDL tuân thủ nghiêm ngặt
							Nghị định 13/2023/NĐ-CP của Chính phủ về bảo vệ dữ
							liệu cá nhân.
						</p>
					</div>
					<div className="partner-policies">
						<article className="partner-policy">
							<span className="tag">01</span>
							<h3>Mục đích thu thập thông tin hợp pháp</h3>
							<p>
								TDL chỉ thu thập thông tin thiết yếu (họ tên,
								tên cửa hàng, điện thoại, địa chỉ, lịch sử giao
								dịch) để phục vụ lợi ích của đối tác:
							</p>
							<ul>
								<li>
									Tối ưu lịch giao hàng, xuất hóa đơn VAT và
									xử lý bảo hành.
								</li>
								<li>
									Làm cơ sở đánh giá hạng tự động, tính chiết
									khấu và chi trả hoàn thưởng chính xác.
								</li>
								<li>
									Gửi thông báo quan trọng về biến động thị
									trường, chính sách giá hoặc cập nhật hệ
									thống.
								</li>
							</ul>
						</article>
						<article className="partner-policy">
							<span className="tag">02</span>
							<h3>Cam kết đạo đức và nguyên tắc vận hành</h3>
							<p>
								Đây là ranh giới đỏ trong hoạt động kinh doanh
								của TDL:
							</p>
							<ul>
								<li>
									<strong>
										Không thương mại hóa dữ liệu:
									</strong>{" "}
									Cam kết tuyệt đối không bán, rò rỉ, trao đổi
									hay chia sẻ thông tin kinh doanh với bên thứ
									ba vì mục đích lợi nhuận.
								</li>
								<li>
									<strong>Không cạnh tranh ngược:</strong> TDL
									không bao giờ dùng dữ liệu người dùng cuối
									(do đại lý cung cấp khi bảo hành/hỗ trợ) để
									tiếp cận hoặc lấy khách hàng. Hệ sinh thái
									được thiết kế để đưa khách hàng quay lại đại
									lý.
								</li>
								<li>
									<strong>Quản trị Zero Trust:</strong> Không
									tin tưởng cảm tính. Quyền truy cập thông tin
									nhạy cảm (hạn mức tín dụng, công nợ) được
									phân quyền và mã hóa. Nhân sự nội bộ chỉ
									tiếp cận dữ liệu cần thiết cho nhiệm vụ, với
									chế tài pháp lý nghiêm.
								</li>
							</ul>
						</article>
						<article className="partner-policy">
							<span className="tag">03</span>
							<h3>Lưu trữ và an toàn hệ thống</h3>
							<p>
								Hệ thống máy chủ của TDL sử dụng các biện pháp
								bảo mật kỹ thuật tiên tiến, tường lửa và mã hóa
								để ngăn truy cập trái phép, đánh cắp hoặc phá
								hoại dữ liệu.
							</p>
						</article>
						<article className="partner-policy">
							<span className="tag">04</span>
							<h3>Quyền kiểm soát của đối tác</h3>
							<p>
								Đối tác có đầy đủ quyền theo pháp luật Việt Nam:
							</p>
							<ul>
								<li>
									Yêu cầu truy cập, trích xuất, cung cấp hoặc
									chỉnh sửa thông tin cá nhân/doanh nghiệp bất
									cứ lúc nào qua Ứng dụng TDL.
								</li>
								<li>
									Yêu cầu hạn chế xử lý hoặc xóa toàn bộ dữ
									liệu khi kết thúc hợp tác (trừ dữ liệu giao
									dịch tài chính bắt buộc lưu theo luật kế
									toán và thuế).
								</li>
							</ul>
						</article>
					</div>
					<PartnerCta
						kicker="Quyền của đối tác"
						title="Kiểm soát dữ liệu trên Ứng dụng TDL"
						body="Truy cập, chỉnh sửa thông tin hoặc xem điều khoản dịch vụ bất cứ lúc nào."
						actions={[
							{
								href: PARTNER_CONTACT_HREF,
								label: "Tải App TDL",
							},
							{
								href: PARTNER_CONTACT_HREF,
								label: "Xem Điều khoản Dịch vụ",
								variant: "ghost",
							},
						]}
					/>
				</div>
			</section>
		</div>
	);
}

export function CareerPanel() {
	return (
		<div
			className="partner-panel"
			id="tuyen-dung"
			data-tab="tuyen-dung"
			role="tabpanel"
			aria-labelledby="tab-tuyen-dung"
		>
			<section className="section">
				<div className="wrap">
					<div className="head">
						<div>
							<div className="kicker">Chiến binh đồng hành</div>
							<h2>Tìm chiến binh đồng hành &amp; phát triển.</h2>
						</div>
						<p>
							TDL đang mở rộng hệ sinh thái vào 6 mảng chiến lược.
							Chúng tôi không tìm &quot;nhân viên&quot; theo nghĩa
							thông thường, mà tìm những chiến binh thực chiến —
							người nghĩ lớn, chủ động và muốn chứng minh năng lực
							bằng giá trị thật mang lại cho tập thể.
						</p>
					</div>
					<div className="head">
						<div>
							<div className="kicker">Văn hóa làm việc</div>
							<h2>Sòng phẳng. Minh bạch. Kỷ luật thép.</h2>
						</div>
						<p>
							Môi trường TDL đo bằng hiệu quả thực thi, số liệu
							thị trường và trách nhiệm đến cùng.
						</p>
					</div>
					<div className="values">
						<div className="value">
							<b>Hiệu quả thực thi</b>
							<span>
								Ưu tiên dữ liệu thị trường thật. Kế hoạch được
								rà soát tính khả thi. Đề xuất đã duyệt kèm cam
								kết trách nhiệm của người đề xuất. Đóng góp thực
								tế là thước đo duy nhất của năng lực và thu
								nhập.
							</span>
						</div>
						<div className="value">
							<b>Môi trường tích cực</b>
							<span>
								Không bè phái, không chia rẽ. Vấn đề được giải
								quyết trực tiếp và mang tính xây dựng.
							</span>
						</div>
						<div className="value">
							<b>Tôn trọng sự đổi mới</b>
							<span>
								Ban lãnh đạo lắng nghe và bảo vệ ý kiến phản
								biện mang tính xây dựng. Sai sót kỹ thuật khách
								quan được chấp nhận để khuyến khích đổi mới,
								nhưng cấm sự hời hợt, lười biếng và vô trách
								nhiệm.
							</span>
						</div>
						<div className="value">
							<b>Quản trị bằng số liệu</b>
							<span>
								Triết lý Zero Trust: tin dữ liệu hơn cảm tính.
								Số liệu thị trường được đối soát liên tục để
								loại bỏ yếu tố chủ quan không có căn cứ.
							</span>
						</div>
					</div>
				</div>
			</section>

			<section className="section alt">
				<div className="wrap">
					<div className="head">
						<div>
							<div className="kicker">Đãi ngộ &amp; cơ hội</div>
							<h2>
								Đãi ngộ bứt phá – Thăng tiến không giới hạn.
							</h2>
						</div>
						<p>
							Thu nhập sòng phẳng theo luật lao động, cộng cơ chế
							bứt phá theo hiệu quả. Gắn bó dài hạn được ghi nhận
							bằng đãi ngộ thâm niên độc quyền.
						</p>
					</div>
					<div className="cards">
						<article className="card">
							<span className="tag">Thu nhập</span>
							<h3>Thu nhập sòng phẳng</h3>
							<p>
								Tuân thủ đầy đủ luật lao động (bảo hiểm, thuế),
								cộng cơ chế bứt phá. Hiệu suất cao dẫn đến thu
								nhập cao. Hoa hồng lũy tiến khi vượt chỉ tiêu —
								thu nhập không trần, đo bằng năng lực thật.
							</p>
						</article>
						<article className="card">
							<span className="tag">Thâm niên</span>
							<h3>Đãi ngộ thâm niên độc quyền</h3>
							<p>
								Gắn bó dài hạn được ghi nhận. Tùy vị trí và hiệu
								quả, có thể nhận các đãi ngộ hiếm: gói bảo hiểm
								nhân thọ, hoặc quà tặng xe máy, ô tô, hay quỹ
								đất giá trị cao.
							</p>
						</article>
						<article className="card">
							<span className="tag">6 mảng</span>
							<h3>Đa dạng cơ hội trong hệ sinh thái</h3>
							<p>
								Hệ sinh thái đang mở rộng mở ra lộ trình thăng
								tiến cho nhiều vai trò: chuyên viên kinh doanh,
								quản lý kho – vận tải, hoặc quản lý khu vực.
							</p>
						</article>
					</div>
					<PartnerCta
						kicker="Gia nhập TDL"
						title="Sẵn sàng rời vùng an toàn?"
						body="Nếu bạn muốn gia nhập một tập thể đề cao thực chiến, hãy kết nối ngay."
						actions={[
							{
								href: PARTNER_CONTACT_HREF,
								label: "Ứng tuyển ngay",
							},
							{
								href: PARTNER_ZALO_HREF,
								label: "Nhắn tin Zalo Bộ phận Nhân sự",
								variant: "ghost",
								external: true,
							},
						]}
					/>
				</div>
			</section>
		</div>
	);
}
