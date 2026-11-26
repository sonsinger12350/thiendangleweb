export const WHOLESALE_POLICIES = {
  terms: {
    id: 1,
    label: "Điều khoản sử dụng",
    path: "/dieu-khoan-su-dung",
  },
  privacy: {
    id: 2,
    label: "Chính sách bảo mật",
    path: "/chinh-sach-bao-mat",
  },
  payment: {
    id: 3,
    label: "Chính sách công nợ & thanh toán",
    path: "/chinh-sach-cong-no-thanh-toan",
  },
  shipping: {
    id: 4,
    label: "Chính sách vận chuyển & giao nhận",
    path: "/chinh-sach-van-chuyen-giao-nhan",
  },
  returns: {
    id: 5,
    label: "Chính sách đổi trả & bảo hành",
    path: "/chinh-sach-doi-tra-bao-hanh",
  },
  bilateralAgreement: {
    id: 6,
    label: "Thỏa thuận hợp tác song phương",
    path: "/thoa-thuan-hop-tac-song-phuong",
  },
} as const;

export const WHOLESALE_POLICY_LIST = Object.values(WHOLESALE_POLICIES);

export type WholesalePolicyConfig = (typeof WHOLESALE_POLICY_LIST)[number];
