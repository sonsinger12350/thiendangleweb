import { ApiResponse } from "@/types";
import { ContactInquiryPayload, ContactNeedType } from "@/types/contact";
import axiosClient from "../axiosClient";
import { WebsiteContactEndpoints } from "../endpoints";

export default class ContactService {
  static async getNeedTypes(): Promise<ApiResponse<ContactNeedType[]>> {
    const { data: res } = await axiosClient.get<ApiResponse<ContactNeedType[]>>(
      WebsiteContactEndpoints.needTypes()
    );
    return res;
  }

  static async submitInquiry(
    payload: ContactInquiryPayload
  ): Promise<ApiResponse<unknown>> {
    const { data: res } = await axiosClient.post<ApiResponse<unknown>>(
      WebsiteContactEndpoints.submit(),
      payload
    );
    return res;
  }
}
