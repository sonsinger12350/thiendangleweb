"use client";

import { FormEvent, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";
import {
  useGetContactNeedTypes,
  useSubmitContactInquiry,
} from "@/api/queries/contact";

export default function ContactForm() {
  const searchParams = useSearchParams();
  const productIdParam = searchParams.get("product_id");
  const productId = productIdParam ? Number(productIdParam) : undefined;

  const { data: needTypesRes } = useGetContactNeedTypes();
  const submitMutation = useSubmitContactInquiry();

  const needTypes = needTypesRes?.data ?? [];
  const [needType, setNeedType] = useState("");

  useEffect(() => {
    if (needTypes.length > 0 && !needType) {
      setNeedType(needTypes[0].value);
    }
  }, [needTypes, needType]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || "").trim(),
      phone: String(formData.get("phone") || "").trim() || undefined,
      email: String(formData.get("email") || "").trim(),
      need_type: String(formData.get("need_type") || needType),
      message: String(formData.get("message") || "").trim() || undefined,
      product_id:
        productId && !Number.isNaN(productId) ? productId : undefined,
    };

    try {
      await submitMutation.mutateAsync(payload);
      toast.success("Đã gửi thông tin liên hệ. TDL sẽ phản hồi sớm nhất.");
      form.reset();
      if (needTypes.length > 0) {
        setNeedType(needTypes[0].value);
      }
    } catch (err) {
      toast.error((err as Error)?.message || "Gửi thông tin thất bại. Vui lòng thử lại.");
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      {productId && !Number.isNaN(productId) && (
        <p style={{ margin: "0 0 16px", color: "var(--muted)", fontSize: "14px" }}>
          Bạn đang liên hệ về sản phẩm #{productId}.
        </p>
      )}
      <div className="form-grid">
        <div className="field">
          <label htmlFor="name">Họ và tên</label>
          <input id="name" name="name" required placeholder="Nhập họ tên" />
        </div>
        <div className="field">
          <label htmlFor="phone">Số điện thoại</label>
          <input id="phone" name="phone" placeholder="Nhập số điện thoại" />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
          />
        </div>
        <div className="field">
          <label htmlFor="need_type">Nhu cầu kết nối</label>
          <select
            id="need_type"
            name="need_type"
            value={needType}
            onChange={(e) => setNeedType(e.target.value)}
            required
          >
            {needTypes.length > 0 ? (
              needTypes.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))
            ) : (
              <>
                <option value="business_cooperation">Hợp tác kinh doanh</option>
                <option value="product_distribution">Phân phối sản phẩm</option>
                <option value="tech_solution">Giải pháp công nghệ</option>
                <option value="logistics">Vận tải – giao nhận</option>
                <option value="other">Khác</option>
              </>
            )}
          </select>
        </div>
        <div className="field full">
          <label htmlFor="message">Nội dung trao đổi</label>
          <textarea
            id="message"
            name="message"
            placeholder="Mô tả ngắn nhu cầu của bạn"
          />
        </div>
        <div className="field full">
          <button className="btn dark" type="submit" disabled={submitMutation.isPending}>
            {submitMutation.isPending ? "Đang gửi..." : "Gửi thông tin liên hệ"}
          </button>
        </div>
      </div>
    </form>
  );
}
