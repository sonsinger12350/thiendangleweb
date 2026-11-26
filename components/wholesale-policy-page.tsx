import { notFound } from "next/navigation";
import { fetchWholesalePolicy } from "@/api/services/wholesale-policies-server";
import { PageBreadcrumb } from "@/components/page-breadcrumb";
import { demoteArticleH1 } from "@/lib/news-toc";
import { JsonLdScript } from "@/lib/seo/json-ld-script";
import { resolvePolicySeo } from "@/lib/seo/resolvers";
import type { WholesalePolicyConfig } from "@/lib/wholesale-policies";

export async function WholesalePolicyPage({
  config,
}: {
  config: WholesalePolicyConfig;
}) {
  const policy = await fetchWholesalePolicy(config.id);

  if (!policy) notFound();

  const seo = resolvePolicySeo(policy.title, config.path);

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
