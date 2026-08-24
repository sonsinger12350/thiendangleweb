import type { ApiResponse } from "@/types";
import { SEO_REVALIDATE_SECONDS } from "@/lib/seo/site";

export class ServerApiError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "ServerApiError";
    this.status = status;
  }
}

function apiOrigin(): string {
  return (process.env.API_URL ?? "https://thiendangle.com/api").replace(
    /\/$/,
    "",
  );
}

export async function serverGetJson<T>(
  path: string,
  options?: { tags?: string[]; revalidate?: number | false },
): Promise<T> {
  const url = `${apiOrigin()}${path.startsWith("/") ? path : `/${path}`}`;
  const res = await fetch(url, {
    headers: { Accept: "application/json" },
    next: {
      revalidate: options?.revalidate ?? SEO_REVALIDATE_SECONDS,
      tags: options?.tags ?? ["website"],
    },
  });

  if (!res.ok) {
    throw new ServerApiError(`API ${res.status} for ${path}`, res.status);
  }

  return res.json() as Promise<T>;
}

export async function serverGetApi<T>(
  path: string,
  options?: { tags?: string[]; revalidate?: number | false },
): Promise<ApiResponse<T>> {
  return serverGetJson<ApiResponse<T>>(path, options);
}
