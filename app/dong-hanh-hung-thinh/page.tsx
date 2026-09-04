import type { Metadata } from "next";
import { PageBreadcrumb } from "@/components/page-breadcrumb";
import PartnerTabs from "@/components/PartnerTabs";
import {
	CareerPanel,
	DealerPanel,
	PrivacyPanel,
	SupplierPanel,
	WarrantyPanel,
} from "@/components/partner-panels";
import { JsonLdScript } from "@/lib/seo/json-ld-script";
import { seoToMetadata } from "@/lib/seo/metadata";
import { resolvePartnerSeo } from "@/lib/seo/resolvers";

const seo = resolvePartnerSeo();

export const metadata: Metadata = seoToMetadata(seo);

export default function DongHanhHungThinhPage() {
	return (
		<>
			<JsonLdScript seo={seo} />
			<section className="pagehero">
				<div className="wrap partner-hero">
					<div>
						<PageBreadcrumb items={seo.breadcrumbs ?? []} />
						{/* <div className="kicker">Hưng &amp; Thịnh · B2B</div> */}
						<h1>
							Cùng nhau kinh doanh có trách nhiệm, cùng nhau phát
							triển bền vững
						</h1>
						<p>
							Kinh doanh không chỉ là câu chuyện của những con số
							hay những đợt xả hàng ồ ạt. Tại TDL, chúng tôi mong
							muốn gắn kết với những cộng sự có tâm, cùng xây dựng
							một môi trường hợp tác rõ ràng, nơi quyền lợi của
							đại lý được bảo vệ và người tiêu dùng Việt được an
							tâm tuyệt đối. Chúng ta không mua bán đứt đoạn,
							chúng ta đồng hành để mang lại giá trị thiết thực.
						</p>
					</div>
				</div>
			</section>

			<DealerPanel />

			<PartnerTabs>
				<SupplierPanel />
				<WarrantyPanel />
				<PrivacyPanel />
				<CareerPanel />
			</PartnerTabs>
		</>
	);
}
