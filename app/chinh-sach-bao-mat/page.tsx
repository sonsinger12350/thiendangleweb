import type { Metadata } from "next";
import { fetchWholesalePolicy } from "@/api/services/wholesale-policies-server";
import { WholesalePolicyPage } from "@/components/wholesale-policy-page";
import { seoToMetadata } from "@/lib/seo/metadata";
import { resolveNotFoundSeo, resolvePrivacySeo } from "@/lib/seo/resolvers";
import { WHOLESALE_POLICIES } from "@/lib/wholesale-policies";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const policy = await fetchWholesalePolicy(WHOLESALE_POLICIES.privacy.id);

  return seoToMetadata(
    policy ? resolvePrivacySeo(policy.title) : resolveNotFoundSeo(),
  );
}

export default async function PrivacyPolicyPage() {
  return <WholesalePolicyPage config={WHOLESALE_POLICIES.privacy} />;
}
