import { useMutation, useQuery } from "@tanstack/react-query";
import ContactService from "../services/contact";
import type { ContactInquiryPayload } from "@/types/contact";

export const useGetContactNeedTypes = () => {
  return useQuery({
    queryKey: ["contactNeedTypes"],
    queryFn: () => ContactService.getNeedTypes(),
  });
};

export const useSubmitContactInquiry = () => {
  return useMutation({
    mutationFn: (payload: ContactInquiryPayload) =>
      ContactService.submitInquiry(payload),
  });
};
