import type { Metadata } from "next";
import { fetchWholesalePolicy } from "@/api/services/wholesale-policies-server";
import { WholesalePolicyPage } from "@/components/wholesale-policy-page";
import { seoToMetadata } from "@/lib/seo/metadata";
import { resolveNotFoundSeo, resolvePolicySeo } from "@/lib/seo/resolvers";
import { WHOLESALE_POLICIES } from "@/lib/wholesale-policies";

const config = WHOLESALE_POLICIES.bilateralAgreement;
export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const policy = await fetchWholesalePolicy(config.id);
  return seoToMetadata(
    policy ? resolvePolicySeo(policy.title, config.path) : resolveNotFoundSeo(),
  );
}

export default function BilateralAgreementPage() {
  return <WholesalePolicyPage config={config} />;
}
