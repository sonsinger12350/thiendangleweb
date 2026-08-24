import { getSiteOrigin } from "./site";

export function canonicalUrl(path: string): string {
  const origin = getSiteOrigin();
  if (!path || path === "/") return origin;

  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${origin}${normalized.replace(/\/$/, "")}`;
}

export function resolveAbsoluteUrl(value?: string | null): string | undefined {
  if (!value) return undefined;
  if (value.startsWith("data:")) return value;
  if (/^https?:\/\//i.test(value)) return value;

  const path = value.startsWith("/") ? value : `/${value}`;
  return canonicalUrl(path);
}
