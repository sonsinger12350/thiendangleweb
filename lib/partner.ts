export const PARTNER_TABS = [
	{ id: "cung-ung", label: "Đối tác cung ứng" },
	{ id: "bao-hanh", label: "Bảo hành & Đổi trả" },
	{ id: "bao-mat", label: "Bảo mật thông tin" },
	{ id: "tuyen-dung", label: "Chiến binh đồng hành" },
] as const;

export type PartnerTabId = (typeof PARTNER_TABS)[number]["id"];

export const PARTNER_CONTACT_HREF = "/#lien-he";
export const PARTNER_ZALO_HREF = "https://zalo.me/0868861369";
