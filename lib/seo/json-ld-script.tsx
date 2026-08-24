import { buildJsonLd } from "./jsonld";
import type { SeoPayload } from "./types";

export function JsonLdScript({ seo }: { seo: SeoPayload }) {
  const jsonLd = buildJsonLd(seo);
  if (jsonLd["@graph"].length === 0) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
