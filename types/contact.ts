export interface ContactNeedType {
  value: string;
  label: string;
}

export interface ContactInquiryPayload {
  name: string;
  phone?: string;
  email: string;
  need_type: string;
  message?: string;
  product_id?: number;
}
