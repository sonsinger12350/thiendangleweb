import type { WholesalePolicy } from "@/types/wholesale-policy";
import { WholesalePolicyEndpoints } from "../endpoints";
import { ServerApiError, serverGetApi } from "../server-fetch";

export async function fetchWholesalePolicy(
  id: string | number,
): Promise<WholesalePolicy | null> {
  try {
    const response = await serverGetApi<WholesalePolicy>(
      WholesalePolicyEndpoints.getById(id),
      { tags: ["wholesale-policies", `wholesale-policy:${id}`] },
    );

    if (response.success === false || !response.data) return null;

    return response.data;
  } catch (error) {
    if (error instanceof ServerApiError && error.status === 404) return null;
    console.error("fetchWholesalePolicy", error);
    return null;
  }
}
