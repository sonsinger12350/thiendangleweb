import type { Metadata } from "next";
import Link from "next/link";
import ProductCatalog from "@/components/ProductCatalog";
import { fetchProductFilters, fetchProducts } from "@/api/services/products-server";
import { JsonLdScript } from "@/lib/seo/json-ld-script";
import { seoToMetadata } from "@/lib/seo/metadata";
import { resolveProductsSeo } from "@/lib/seo/resolvers";
import { PRODUCT_PAGE_SIZE } from "@/lib/pagination";
import { PageBreadcrumb } from "@/components/page-breadcrumb";

export const revalidate = 60;

const seo = resolveProductsSeo();

export const metadata: Metadata = seoToMetadata(seo);

export default async function SanPhamPage() {
	const [products, filters] = await Promise.all([
		fetchProducts({ page: 1, limit: PRODUCT_PAGE_SIZE }),
		fetchProductFilters(),
	]);

	return (
		<>
			<JsonLdScript seo={seo} />
			<section className="pagehero">
				<div className="wrap">
					<PageBreadcrumb items={seo.breadcrumbs ?? []} />
					<h1>
						Danh mục sản phẩm có thể lọc theo nhóm hàng và trạng
						thái vận hành.
					</h1>
					<p>
						Theo hồ sơ định hướng, TDL phát triển phụ kiện/linh kiện
						điện thoại và điện gia dụng.
					</p>
				</div>
			</section>

			<section className="section">
				<ProductCatalog
					initialProducts={products}
					initialFilters={filters}
				/>
			</section>

			<section className="section alt">
				<div className="wrap">
					<div className="head">
						<div>
							<div className="kicker">Cam kết danh mục</div>
							<h2>
								Hàng thật — giá rõ — sau bán có trách nhiệm.
							</h2>
						</div>
						<p>
							TDL không cam kết vượt quá năng lực vận hành. Mỗi
							mặt hàng đưa vào danh mục đều gắn với khả năng nhập,
							tồn và hỗ trợ thực tế.
						</p>
					</div>
					<div className="values">
						<div className="value">
							<b>Phù hợp thị trường Tây Nguyên</b>
							<span>
								Kế thừa kinh nghiệm kinh doanh sỉ và mạng lưới
								cửa hàng, đại lý đã từng tiếp cận.
							</span>
						</div>
						<div className="value">
							<b>Chính sách minh bạch</b>
							<span>
								Giá, chiết khấu, bảo hành và đổi trả được công
								khai, lưu vết và đối soát được.
							</span>
						</div>
						<div className="value">
							<b>Tồn kho có kiểm soát</b>
							<span>
								Ưu tiên mã hàng chạy tốt; hạn mức nhập theo tốc
								độ luân chuyển thực tế.
							</span>
						</div>
						<div className="value">
							<b>Hỗ trợ cửa hàng sửa chữa</b>
							<span>
								Đồng hành kỹ thuật và sau bán để đại lý yên tâm
								khi phục vụ khách cuối.
							</span>
						</div>
					</div>
					<div className="cards mt-4">
						<article className="card">
							<span className="tag">Đang vận hành</span>
							<h3>Phụ kiện &amp; linh kiện điện thoại</h3>
							<p>
								Ưu tiên hiện tại: cường lực, bộ sạc, pin, màn
								hình — mở rộng mã hàng theo tốc độ luân chuyển
								thực tế.
							</p>
						</article>
						<article className="card">
							<span className="tag">Đang chuẩn bị</span>
							<h3>Thiết bị điện gia dụng</h3>
							<p>
								Lĩnh vực nền tảng trong hồ sơ định hướng; sẽ
								triển khai khi đủ nguồn lực nhập hàng, tồn kho
								và hỗ trợ sau bán.
							</p>
						</article>
						<article className="card">
							<span className="tag">Theo điều kiện</span>
							<h3>Các nhóm mở rộng</h3>
							<p>
								Vận tải–giao nhận, phần mềm quản trị và năng
								lượng sạch chỉ kích hoạt khi đáp ứng điều kiện
								sẵn sàng.
							</p>
						</article>
					</div>
					<div className="cta">
						<div>
							<div className="kicker">Hợp tác phân phối</div>
							<h2>
								Bạn là đại lý hoặc cửa hàng cần nhập phụ kiện
								điện thoại?
							</h2>
						</div>
						<Link className="btn dark" href="/#lien-he">
							Liên hệ hợp tác
						</Link>
					</div>
				</div>
			</section>
		</>
	);
}
