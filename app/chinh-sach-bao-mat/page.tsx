import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { fetchWholesalePolicy } from "@/api/services/wholesale-policies-server";
import { PageBreadcrumb } from "@/components/page-breadcrumb";
import { demoteArticleH1 } from "@/lib/news-toc";
import { JsonLdScript } from "@/lib/seo/json-ld-script";
import { seoToMetadata } from "@/lib/seo/metadata";
import { resolveNotFoundSeo, resolvePrivacySeo } from "@/lib/seo/resolvers";

const PRIVACY_POLICY_ID = 2;

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const policy = await fetchWholesalePolicy(PRIVACY_POLICY_ID);

  return seoToMetadata(
    policy ? resolvePrivacySeo(policy.title) : resolveNotFoundSeo(),
  );
}

export default async function PrivacyPolicyPage() {
  const policy = await fetchWholesalePolicy(PRIVACY_POLICY_ID);

  if (!policy) notFound();

  const seo = resolvePrivacySeo(policy.title);

  return (
    <>
      <JsonLdScript seo={seo} />
      <section className="pagehero">
        <div className="wrap">
          <PageBreadcrumb items={seo.breadcrumbs ?? []} />
          <h1>{policy.title}</h1>
        </div>
      </section>

      <section className="section policy-section">
        <div className="wrap policy-wrap">
          <article
            className="policy-content"
            dangerouslySetInnerHTML={{ __html: demoteArticleH1(policy.body) }}
          />
        </div>
      </section>
    </>
  );
}
